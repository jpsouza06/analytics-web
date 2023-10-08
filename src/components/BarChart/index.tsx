'use client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
const data = [
	{name: 'Relatório A', uv: 200, pv: 2400, amt: 2400},
	{name: 'Relatório B', uv: 300, pv: 2400, amt: 2400},
	{name: 'Relatório C', uv: 400, pv: 2400, amt: 2400},
	{name: 'Relatório D', uv: 100, pv: 2400, amt: 2400},
]

import React from 'react'

export default function Chart () { 
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart data={data} style={{backgroundColor: '#ffffff', fontSize: '12px'}}>
				<XAxis dataKey='name'/>
				<YAxis />
				<Tooltip wrapperStyle={{ width: 100, backgroundColor: '#black' }} />
				<Bar dataKey='uv' fill='#4894C7' barSize={30} />
			</BarChart>
		</ResponsiveContainer>
	)
}