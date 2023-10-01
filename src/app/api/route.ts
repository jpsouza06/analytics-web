
import { SystemStartedResponse } from '@/interface/system-started'
import dayjs from 'dayjs'

export async function POST(state: string, page: number) {
	const res = 
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
				next: { revalidate: 5 },
			})
	
	const data: SystemStartedResponse = await res.json()
	data.systemStarted.forEach(item => 
		item.createdAt = dayjs(item.createdAt).format('DD/MM/YYYY')	
	)

	return data
}

