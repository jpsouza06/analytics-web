'use client'
import React from 'react'
import 'leaflet/dist/leaflet.css'
import BrasilMap from '@/components/Mapa/brasilMap'

export default function HomePage() {
	return (
		<>	
			<div style={{width: '400px', height: '400px'}}>
				<BrasilMap center={[-15.7801, -52.9292]} zoom={3} mapInteraction={false}/>
			</div>
		</>
	)
}