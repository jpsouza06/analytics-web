import React from 'react'
import { useRouter } from 'next/navigation'
import { MapContainer, TileLayer, Polygon, Tooltip, } from 'react-leaflet'

import {statesData} from  '../../../brasil'

import {LatLngExpression} from 'leaflet/index'

import './map.css'

export default function BrasilMap({center, zoom, mapInteraction}: {center: LatLngExpression, zoom: number, mapInteraction: boolean}) {
	const router = useRouter()

	const handleClickInsidePolygon = (state: string) => {
		router.push(`/state/${state}`)   
	}

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
					const coordinates: LatLngExpression[] = state.geometry.coordinates[0][0].map((item) => [item[1], item[0]])
   
					return (
						<Polygon
							className="no-focus"
							key={state.properties.id}
							pathOptions={{
								fillColor: '#FD8D3C',
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