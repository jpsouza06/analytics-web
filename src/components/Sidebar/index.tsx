'use client'
import React, {useState} from 'react'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import HomeIcon from '@mui/icons-material/Home'
import TimelineIcon from '@mui/icons-material/Timeline'
import MapIcon from '@mui/icons-material/Map'
import MenuIcon from '@mui/icons-material/Menu'

export default function Sidebar() {
	const [open, setOpen] = useState(true)
	return (
		<div className={`flex flex-col p-3 h-screen bg-white ${open ? 
			'w-64' : 'w-14'} duration-300 relative`}>
			<MenuIcon 
				className={
					`absolute ${open ? 'right-2.5': 'right-3.5'} top-5 cursor-pointer hover:bg-gray-100`
				} 
				onClick={() => setOpen(!open)}
			/>
			<div className="space-y-3"> 
				<div className="flex items-center space-x-2">
					<AnalyticsIcon 
						fontSize='large' 
						className={`text-red-700 ${!open && 'scale-0'}`}
					/>
					<h1 className={`my-auto text-3xl font-inter duration-300 
						${!open && 'scale-0'}`}>Analytics</h1>
				</div>



				<div className='flex-1'>
					<ul className="pt-2 space-y-1 text sm">
						<li className='rounded-sm hover:bg-gray-100'>
							<div className="flex items-center space-x-1">
								<div className='flex items-center pl-1 space-x-2 rounded-md'>

								</div>
							</div>
						</li>

						<li className='rounded-sm hover:bg-gray-100'>
							<div className="flex items-center space-x-1">
								<a href="/" className='flex items-center pl-1 space-x-2 rounded-md'>
									<HomeIcon fontSize='medium'/>
									<span
										className={`font-inter duration-300 ${!open && 'scale-0'}`}
									>
										Início
									</span>
								</a>
							</div>
						</li>

						<li className='rounded-sm hover:bg-gray-100'>
							<div className="flex space-x-1">
								<a href="/state/PA" className='flex items-center pl-1 space-x-2 rounded-md'>
									<TimelineIcon fontSize='medium'/>
									<span
										className={`font-inter duration-300 ${!open && 'scale-0'}`}
									>
										Relatórios
									</span>
								</a>
							</div>
						</li>

						<li className='rounded-sm hover:bg-gray-100'>
							<div className="flex space-x-1">
								<a href="/map" className='flex items-center pl-1 space-x-2 rounded-md'>
									<MapIcon fontSize='medium'/>
									<span
										className={`font-inter duration-300 ${!open && 'scale-0'}`}
									>
										Mapa
									</span>
								</a>
							</div>
						</li>

					</ul>
				</div>
			</div>		
		</div>
	)
}