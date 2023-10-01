import { POST } from '@/app/api/route'
import Grid from '@/components/grid'

import React from 'react'

export default async function State({params}: {params : {state: string}}) {
	const page = 1
	const data = POST(params.state, page)
	return (
		<>
			<Grid systemStarted={(await data).systemStarted}/>
			{/* <button 
				onClick={() => {
					if (page != 1) {
						page - 1
					}
				}}
			>
				Anterior
			</button>
			<button 
				onClick={() => setPage(page + 1)}
			>
				Proximo
			</button> */}
		</>
	)
}