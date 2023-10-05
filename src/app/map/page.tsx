'use client'
import React from 'react'
import 'leaflet/dist/leaflet.css'
import BrasilMap from '@/components/Mapa/brasilMap'

export default function Map() {
	return (
		<>	
			<div style={{width: '90%', height: '90%'}} className='m-auto pt-10 pb-10'>
				<BrasilMap center={[-14.7801, -52.9292]} zoom={4} mapInteraction={true}/>
			</div>
		</>
	)
}