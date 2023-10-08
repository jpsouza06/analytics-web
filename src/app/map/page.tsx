import React from 'react'
import { POST } from '../api/route'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

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
