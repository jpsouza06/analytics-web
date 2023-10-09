import { ISystemStartedCountByStateResponse } from '@/interface/system-started'

export async function POST() {
	const response = 
	await fetch(`${process.env.API_BASE_URL}/system-started/query/count`, 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
				{ 
					dataInicio: '01-01-2000',
				}),
			next: { revalidate: 600 },
		})

	const data: ISystemStartedCountByStateResponse = await response.json()

	return {
		data
	}
}