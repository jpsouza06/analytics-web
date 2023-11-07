import React from 'react'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import { ISystemStartedCountByStateResponse } from '@/interface/system-started'
import { api } from '@/data/api'

const BrasilMap = dynamic(() => import('@/components/Map'), {
	ssr: false 
})

async function getSystemStartedCount() {
	const response = await api('/system-started/query/count', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
		next: {revalidate: 30}
	})

	const data: ISystemStartedCountByStateResponse = await response.json()

	return data
}

export default async function Map() {
	const data = await getSystemStartedCount()
	return (
		<>	
			<div className='max-w-5xl w-full h-[700px] m-auto z-0'>
				<BrasilMap center={[-14.7801, -52.9292]} zoom={4} mapInteraction={true} data={data}/>
			</div>
		</>
	)
}


