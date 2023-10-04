'use client'
import React from 'react'
import 'leaflet/dist/leaflet.css'
import BrasilMap from '@/components/Mapa/brasilMap'

export default function Map() {
	return (
		<>	
			<BrasilMap center={[-15.7801, -47.9292]} zoom={4} mapInteraction={true}/>
		</>
	)
}