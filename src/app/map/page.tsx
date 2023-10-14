import React from 'react'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import { ISystemStartedCountByStateResponse } from '@/interface/system-started'

const BrasilMap = dynamic(() => import('@/components/Map'), {
	ssr: false 
})

export default async function Map() {
	const {data} = await POST()
	return (
		<>	
			<div style={{width: '90%', height: '90%'}} className='m-auto pt-10 pb-10'>
				<BrasilMap center={[-14.7801, -52.9292]} zoom={4} mapInteraction={true} data={data}/>
			</div>
		</>
	)
}

async function POST() {
	const response = 
	await fetch(`${process.env.API_BASE_URL}/system-started/query/count`, 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
				{ 
					dataInicio: '01-01-2000',
				}),
			next: {revalidate: 30}
		})

	const data: ISystemStartedCountByStateResponse = await response.json()

	return {
		data
	}
}
