import Grid from '@/components/Grid'
import { ISystemStartedResponse } from '@/interface/system-started'
import dayjs from 'dayjs'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'


import React, { useContext } from 'react'

export default async function State({params}: {params : {state: string}}) {
	const [page, setPage] = useContext(1)
	
	const {data} = await POST(params.state, page)

	return (
		<>
			<div className="bg-red-700 mx-auto mt-15 w-full ">
				<Grid systemStarted={data}/>
				<div className='bg-white w-[90%] h-10 m-auto max-w-[780px]'>
					<div className='w-40 h-10'>
						<div className='flex justify-center h-full items-center'>
							<KeyboardArrowLeftIcon fontSize='small' className='text-[#8a8a8a]'/>
							<KeyboardArrowRightIcon fontSize='small' className='text-[#8a8a8a]'/>
							<h1 className='text-center text-sm text-[#8a8a8a]'>
								{((page - 1) * 20) + 1} - {page * 20 < data.total ? page * 20 : data.total} de {data.total}
							</h1>
					
						</div>
					</div>
				</div>
			</div>		
		</>
	)
}
 
async function POST(state: string, page: number) {
	const response = 
		await fetch(`${process.env.API_BASE_URL}/system-started/query/${page}`, 
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(
					{ 
						estado: state,
						dataInicio: '01-01-2000',
						// orderBy: {
						// 	createdAt: 'desc'
						// }
					}),
				next: { revalidate: 60 },
			})

	if (response.status !== 200) {
		const data = {
			systemStarted: [],
			total: 0
		}

		return {
			data
		}
	}

	const data: ISystemStartedResponse = await response.json()

	data.systemStarted.forEach(item => 
		item.createdAt = dayjs(item.createdAt).format('DD/MM/YYYY')	
	)

	return {
		data
	}
}