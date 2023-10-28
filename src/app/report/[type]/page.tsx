import Grid from '@/components/Grid'
import { api } from '@/data/api'
import { IGridResponse } from '@/interface/grid'

import React from 'react'

export default async function Report({
	params,
	searchParams,
}: {
	params: {type: string}
   searchParams: { [key: string]: string};
 }) {

	const {
		page = '1',
		estado = '',
		modulo = '',
		dataInicio = '',
		dataFim = '',
	} = searchParams

	const data = await getReportDataByQuery(
		params.type,
		estado, 
		modulo,
		dataInicio, 
		dataFim,
		Number(page), 
	)

	return (
		<div className="bg-red-700 mx-auto mt-15 w-full ">
			<Grid 
				data={data}
				reportType={`${params.type}`}
			/>
		</div>		
	)
}
 
async function getReportDataByQuery(
	urlRoute: string, 
	estado: string, 
	modulo: string,
	dataInicio: string, 
	dataFim: string,
	page: number, 
) {
	const requestBody: {
		estado?: string, modulo?: string, dataInicio?: string, dataFim?: string
	} = {}
	//Validações para não enviar campos vazios para a query
	if (estado !== undefined && estado !== '') {
		requestBody.estado = estado
	}

	if (modulo !== undefined && modulo !== '') {
		requestBody.modulo = modulo
	}

	if (dataInicio !== undefined && dataInicio !== '') {
		requestBody.dataInicio = dataInicio
	}

	if (dataFim !== undefined && dataFim !== '') {
		requestBody.dataFim = dataFim
	}

	const response = await api(`/${urlRoute}/query/${page}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(
			requestBody
		),
		cache: 'no-cache'
	})
	
	const data: IGridResponse = await response.json()

	return data
	
}