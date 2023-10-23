import Grid from '@/components/Grid'
import { IGridResponse } from '@/interface/grid'

import React from 'react'

export default async function Report({
	params,
	searchParams,
}: {
	params: {type: string}
   searchParams: { [key: string]: string};
 }) {
	const pageNumber= searchParams['page'] ?? '1' // default value is "1"
	const estado = searchParams['estado']
	const modulo = searchParams['modulo']
	const dataInicio = searchParams['dataInicio']
	const dataFim = searchParams['dataFim']
	const {data} = await POST(
		params.type,
		estado, 
		modulo,
		dataInicio, 
		dataFim,
		Number(pageNumber), 
	)

	return (
		<>
			<div className="bg-red-700 mx-auto mt-15 w-full ">
				<Grid 
					data={data}
					reportType={`${params.type}`}
				/>
			</div>		
		</>
	)
}
 
async function POST(
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
	console.log(urlRoute)
	const response = 
		await fetch(`${process.env.API_BASE_URL}/${urlRoute}/query/${page}`, 
			{
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

	return {
		data
	}
}