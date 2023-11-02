import React from 'react'
import 'leaflet/dist/leaflet.css'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import { ISystemStartedCountByStateResponse } from '@/interface/system-started'

import { api } from '@/data/api'

import Chart from '@/components/BarChart'
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

export default async function HomePage() {
	const data = await getSystemStartedCount()

	return (
		<>	
			<div className="grid grid-cols-2 gap-6 max-w-5xl h-[25rem] m-auto my-10">
				<div className=
					'bg-[#D9DADD] rounded-md flex flex-col items-center relative border-[1px] border-[#00000030]'
				>

					<h1 className='text-lg font-normal'>Clientes por estado</h1>
					<Link href="/map"><OpenInNewIcon fontSize='small' className='absolute top-1 right-2 font-normal'/></Link>

					<div className='h-[1px] border-t-0 bg-[#7e7e7e] opacity-30 w-full absolute top-8'></div>

					<div style={{width: '100%', height: '100%'}} className='p-3'>
						<BrasilMap center={[-15.7801, -53.9292]} zoom={3} mapInteraction={false} data={data}/>
					</div>

				</div>
				
				<div className=
					'bg-white rounded-md flex flex-col items-center relative border-[1px] border-[#000000]'>

					<h1 className='text-lg font-normal'>Rotinas mais acessadas</h1>

					<div className='h-[1px] border-t-0 bg-[#7e7e7e] opacity-30 w-full absolute top-8 '></div>

					<div style={{width: '100%', height: '100%'}} className='p-3'>
						<Chart />
					</div>
				</div>

				{/* <div style={{width: '400px', height: '400px'}} className='m-auto'>
					
				</div> */}
			</div>
		</>
	)
}
