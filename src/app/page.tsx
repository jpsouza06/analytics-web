'use client'
import React from 'react'
import 'leaflet/dist/leaflet.css'
import Map from '@/components/map'
import Sidebar from '@/components/Sidebar'

export default function HomePage() {
	return (
		<>
			<div className='flex'>		
				<Sidebar />
				<div className="bg-red-700  mx-auto mt-15 w-full">
					<Map  />
				</div>
			</div>
			


		</>
	)
}