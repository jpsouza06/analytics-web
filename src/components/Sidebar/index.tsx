'use client'
import React, {useState} from 'react'

import AnalyticsIcon from '@mui/icons-material/Analytics'
import HomeIcon from '@mui/icons-material/Home'
import TimelineIcon from '@mui/icons-material/Timeline'
import MapIcon from '@mui/icons-material/Map'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import Link from 'next/link'

export default function Sidebar() {
	const [open, setOpen] = useState(true)
	const [reportOpen, setReportOpen] = useState(false)
	return (
		<div className={`flex flex-col p-3 h-screen bg-white ${open ? 
			'min-w-64 w-64' : ' min-h-14 w-14'} duration-300 relative`}>
			<MenuIcon 
				className={
					`absolute ${!open ? 'right-[1rem]' : 'right-2.5'} top-5 cursor-pointer hover:bg-gray-100`
				} 
				onClick={() => setOpen(!open)}
			/>
			<div className="space-y-3"> 
				<Link href="/">
					<div className="flex items-center space-x-1">
						<AnalyticsIcon 
							fontSize='large' 
							className={`text-red-700 ${!open && 'scale-0'}`}
						/>
						<h1 className={`my-auto text-3xl font-inter duration-300 
						${!open && 'scale-0'}`}>Analytics</h1>
					</div>
				</Link>

				<div className='flex-1'>
					<ul className="pt-2">

						<Link href="/" className="">
							<li className='rounded-sm hover:bg-gray-100'>
								<div className="flex items-center pl-1 mb-1 space-x-2 rounded-md">
									<HomeIcon fontSize='medium'/>
									<span
										className={`font-inter duration-300 mt-0 ${!open && 'scale-0'}`}
									>
										Início
									</span>
								</div>
							</li>
						</Link>


						<li className='rounded-sm'>
							<div className=" pl-1 mb-1 rounded-md">
		
								<div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => setReportOpen(!reportOpen)}>
									<TimelineIcon fontSize='medium'/>
									<span
										className={`font-inter duration-300 ml-2 ${!open && 'scale-0'}`}
									>
										Relatórios							
									</span>
									<KeyboardArrowRightIcon  
										onClick={() => setReportOpen(!reportOpen)} 
										className={`
											font-inter 
											duration-300 
											transition-transform 
											${!open && 'scale-0'} 
											${reportOpen ? 'rotate-90': 'rotate-0'}`
										}
									/> 
								</div>

								{
									reportOpen && 
									<ul className='ml-6'>
										<Link href="/report/page-view" >
											<li className="hover:bg-gray-100">
												<span
													className={`font-inter duration-300 ml-2 ${!open && 'scale-0'}`}
												>
													Acessos por rotina							
												</span>
											</li>
										</Link>
										<Link href="/report/system-started">
											<li className="hover:bg-gray-100">
												<span
													className={`font-inter duration-300 ml-2 ${!open && 'scale-0'}`}
												>
													Acessos por módulo						
												</span>
											</li>
										</Link>
										<Link href="/report/error">
											<li className="hover:bg-gray-100">
												<span
													className={`font-inter duration-300 ml-2 ${!open && 'scale-0'}`}
												>
													Erros por rotina						
												</span>
											</li>
										</Link>
												
									</ul>
										
								}
							</div>
						</li>
						

						<Link href="/map">
							<li className='rounded-sm hover:bg-gray-100'>
								<div className="flex items-center pl-1 mb-1 space-x-2  rounded-md">
									<MapIcon fontSize='medium'/>
									<span
										className={`font-inter duration-300 ${!open && 'scale-0'}`}
									>
										Mapa
									</span>
								</div>
							</li>
						</Link>

					</ul>
				</div>
			</div>		
		</div>
	)
}