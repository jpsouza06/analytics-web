import React from 'react'
import { useRouter } from 'next/navigation'
import { MapContainer, TileLayer, Polygon, } from 'react-leaflet'

import {statesData} from  '../../brasil'

import {LatLngExpression} from 'leaflet/index'

export default function Map() {
	const router = useRouter()

	const center: LatLngExpression = [-15.7801, -47.9292]

	const handleClickInsidePolygon = (state: string) => {
		console.log(state)
		router.push('/state/PA')   
	}

	return (
		<MapContainer
			center={center}
			zoom={4}
			style={
				{ 
					width: '90%', 
					maxHeight: '600px', 
					height:'90%', 
					margin: '20px auto',
					filter: 'drop-shadow(15px 15px 4px rgba(0, 0, 0, 0.5))'
				}}
			scrollWheelZoom={false}
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
							key={state.properties.id}
							pathOptions={{
								fillColor: '#FD8D3C',
								fillOpacity: 1,
								weight: 2,
								opacity: 1,
								dashArray: '3',
								color: 'white'
							}}
							positions={[coordinates]}
							eventHandlers={{
								mouseover: (e) => {
									const layer = e.target
									layer.setStyle({
										dashArray: '',
										fillColor: '#BD0026',
										fillOpacity: 0.7,
										weight: 2,
										opacity: 1,
										color: 'white',
									})
								},
								mouseout: (e) => {
									const layer = e.target
									layer.setStyle({
										fillOpacity: 1,
										weight: 2,
										dashArray: '3',
										color: 'white',
										fillColor: '#FD8D3C'
									})
								},
								click: () => handleClickInsidePolygon(state.properties.sigla)
							}}
						/>)
				})
			}
		</MapContainer>

	)
}