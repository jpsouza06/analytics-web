import Grid from '@/components/Grid'
import { ISystemStartedResponse } from '@/interface/system-started'
import dayjs from 'dayjs'


import React from 'react'

export default async function State({
	searchParams,
}: {
   searchParams: { [key: string]: string};
 }) {
	const pageNumber= searchParams['page'] ?? '1' // default value is "1"
	const estado = searchParams['estado']
	const dataInicio = searchParams['dataInicio']
	const dataFim = searchParams['dataFim']
	const {data} = await POST(estado, Number(pageNumber), dataInicio, dataFim)

	return (
		<>
			<div className="bg-red-700 mx-auto mt-15 w-full ">
				<Grid 
					systemStarted={data} 
				/>
			</div>		
		</>
	)
}
 
async function POST(estado: string, page: number, dataInicio: string, dataFim: string) {
	const response = 
		await fetch(`${process.env.API_BASE_URL}/system-started/query/${page}`, 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(
					{ 
						estado,
						dataInicio,
						dataFim,
						orderBy: {
							createdAt: 'desc'
						}
					}
				),
				cache: 'no-cache'
			})

	if (response.status !== 200) {
		const data = {
			systemStarted: [],
			total: 0
		}

		return {
			data
		}
	}

	const data: ISystemStartedResponse = await response.json()

	data.systemStarted.forEach(item => 
		item.createdAt = dayjs(item.createdAt).format('DD/MM/YYYY')	
	)

	return {
		data
	}
}