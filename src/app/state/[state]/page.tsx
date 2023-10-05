import Grid from '@/components/grid'
import { ISystemStartedResponse } from '@/interface/system-started'
import dayjs from 'dayjs'

import React from 'react'

export default async function State({params}: {params : {state: string}}) {
	const page = 1
	
	const {data} = await POST(params.state, page)

	return (
		<>
			<div className="bg-red-700  mx-auto mt-15 w-full">
				<Grid systemStarted={data.systemStarted}/>
			</div>		
		</>
	)
}

async function POST(state: string, page: number) {
	const response = 
		await fetch(`${process.env.API_BASE_URL}/system-started/query/${page}`, 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(
					{ 
						estado: state,
						dataInicio: '01-01-2000',
						// orderBy: {
						// 	createdAt: 'desc'
						// }
					}),
				next: { revalidate: 60 },
			})

	if (response.status !== 200) {
		const data = {
			systemStarted: []
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