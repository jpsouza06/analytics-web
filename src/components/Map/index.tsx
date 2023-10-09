'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { MapContainer, TileLayer, Polygon, Tooltip, } from 'react-leaflet'

import {statesData} from  '../../../brasil'

import {LatLngExpression} from 'leaflet/index'

import './style.css'
import { ISystemStartedCountByStateResponse } from '@/interface/system-started'

function BigNumber(data: [{_count: number, estado: string}]) {
	let bigNumber = 0
	data.forEach((item) => {
		if (item._count > bigNumber) {
			bigNumber = item._count
		}
	})

	return bigNumber
}

export default function BrasilMap(
	{center, zoom, mapInteraction, data} : 
	{center: LatLngExpression, zoom: number, mapInteraction: boolean, data: ISystemStartedCountByStateResponse}
) {
	const router = useRouter()

	const handleClickInsidePolygon = (state: string) => {
		router.push(`/report/${state}`)   
	}

	const bigNumber = BigNumber(data.score.count)

	return (
		<MapContainer
			center={center}
			zoom={zoom}
			style={
				{ 
					width: '100%', 
					height:'100%',
					border: '1px solid #00000010 '
				}}
			scrollWheelZoom={mapInteraction}
			zoomControl={mapInteraction}
			boxZoom={mapInteraction}
			touchZoom={mapInteraction}
			dragging={mapInteraction}
			doubleClickZoom={mapInteraction}
			keyboard={mapInteraction}
		>
			<TileLayer
				url="https://api.maptiler.com/maps/basic-v2-light/256/{z}/{x}/{y}.png?key=ZJDCwfo7bqyrgt3IlPMK"
				attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
			/>
			{
				statesData.features.map((state) => {
					let fillColor = '#6dc7ea'
					const coordinates: LatLngExpression[] = state.geometry.coordinates[0][0].map((item) => [item[1], item[0]])

					data.score.count.forEach((item) => {
						if (item.estado === state.properties.sigla) {
							if (item._count / bigNumber < 0.3) {
								fillColor = '#4894C7'
							} else if (item._count / bigNumber < 0.7)  {
								fillColor = '#486bb1'
							} else {
								fillColor = '#5C44BD'
							}
						}
					})
					
					return (
						<Polygon
							className="no-focus"
							key={state.properties.id}
							pathOptions={{
								fillColor: fillColor,
								fillOpacity: 1,
								weight: 2,
								opacity: 1,
								dashArray: '3',
								color: 'white',
							}}
							positions={[coordinates]}
							eventHandlers={{
								click: () => handleClickInsidePolygon(state.properties.sigla)
							}}
						>
							<Tooltip sticky>{state.properties.name}</Tooltip> 
						</Polygon>
					)
				})
			}
		</MapContainer>
	)
}

