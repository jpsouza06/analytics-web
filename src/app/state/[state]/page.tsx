import { POST } from '@/app/api/route'
import Grid from '@/components/grid'

import React from 'react'

export default async function State({params}: {params : {state: string}}) {
	const page = 1
	
	const {data} = await POST(params.state, page)

	return (
		<>
			<div className="bg-red-700  mx-auto mt-15 w-full">
				<Grid systemStarted={data.systemStarted}/>
			</div>		
		</>
	)
}