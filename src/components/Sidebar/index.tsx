import React from 'react'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import HomeIcon from '@mui/icons-material/Home'
import TimelineIcon from '@mui/icons-material/Timeline'

export default function Sidebar() {
	return (
		<div className="flex flex-col h-screen p-3 bg-gray-100 shadow w-60">

			<div className="space-y-3">
				<div className="flex items-center space-x-2">
					<AnalyticsIcon fontSize='large' className='text-red-700'/>
					<h1 className="my-auto text-3xl font-roboto ">Analytics</h1>
				</div>

				<div className='flex-1'>
					<ul className="pt-2 pb-4 space-y-1 text sm">
						<li className='rounded-sm'>
							<div className="flex space-x-2">
								<a href="/" className='flex items-center p-2 space-x-3 rounded-md'>
									<HomeIcon fontSize='small'/>
									<p className="font-roboto">Início</p>
								</a>
							</div>
						</li>
						<li className='rounded-sm'>
							<div className="flex space-x-2">
								<a href="/state/PA" className='flex items-center p-2 space-x-3 rounded-md'>
									<TimelineIcon fontSize='small'/>
									<span className="font-roboto">Relatórios</span>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>

			
		</div>
	)
}