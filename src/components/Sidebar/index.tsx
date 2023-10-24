'use client'
import React, {useContext, useEffect, useState} from 'react'

import AnalyticsIcon from '@mui/icons-material/Analytics'
import HomeIcon from '@mui/icons-material/Home'
import TimelineIcon from '@mui/icons-material/Timeline'
import MapIcon from '@mui/icons-material/Map'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import Link from 'next/link'
import { SideBarContext } from '@/app/context'

export default function Sidebar() {
	const {open} = useContext(SideBarContext)

	const [hoverOpen, setHoverOpen] = useState(false)
	const [reportOpen, setReportOpen] = useState(false)

	useEffect(() => {
		if(!open && !hoverOpen ) {
			setReportOpen(false)
		}
	}, [open, hoverOpen])
	return (

		<div className={
			`flex 
				flex-col 
				p-3 
				h-screen 
				bg-white 
				${(!open && !hoverOpen) ? 'w-14' : 'w-64'} 
				duration-300 
				sticky 
				top-0
				`	
		}
		onMouseEnter={() => {
			if (!open) {
				setHoverOpen(!hoverOpen)				
			}
		}}
		onMouseLeave={() => {
			if (!open) {
				setHoverOpen(!hoverOpen)
			}
		}}
		>
			<div className="space-y-3"> 
				<Link href="/">
					<div className="flex items-center space-x-1">
						<AnalyticsIcon 
							fontSize='large' 
							className={'text-red-700'}
						/>
						<h1 className={`my-auto text-3xl font-inter duration-300 
						${(!open && !hoverOpen) && 'scale-0'}`}>Analytics</h1>
					</div>
				</Link>

				<div className='flex-1'>
					<ul className="pt-2">

						<Link href="/" className="">
							<li className='rounded-sm hover:bg-gray-100'>
								<div className="flex items-center pl-1 mb-1 space-x-2 rounded-md">
									<HomeIcon fontSize='medium'/>
									<span
										className={`font-inter duration-300 mt-0 ${(!open && !hoverOpen) && 'scale-0'}`}
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
										className={`font-inter duration-300 ml-2 ${(!open && !hoverOpen) && 'scale-0'}`}
									>
										Relatórios							
									</span>
									<KeyboardArrowRightIcon  
										onClick={() => setReportOpen(!reportOpen)} 
										className={`
											font-inter 
											duration-300 
											transition-transform 
											${(!open && !hoverOpen) && 'scale-0'} 
											${reportOpen ? 'rotate-90': 'rotate-0'}`
										}
									/> 
								</div>

								{
									reportOpen && 
									<ul className={`ml-6 ${(!open && !hoverOpen) && 'scale-0'}`}>
										<Link href="/report/page-view" >
											<li>
												<div className="flex hover:bg-gray-100">
													<span
														className={`font-inter duration-300 ml-2 ${(!open && !hoverOpen) && 'scale-0'}`}
													>
													Acessos por rotina							
													</span>
												</div>
											</li>
										</Link>
										<Link href="/report/system-started">
											<li>
												<div className="flex hover:bg-gray-100">
													<span
														className={`font-inter duration-300 ml-2 ${(!open && !hoverOpen) && 'scale-0'}`}
													>
													Acessos por módulo						
													</span>
												</div>
											</li>
										</Link>
										<Link href="/report/error">
											<li>
												<div className="flex hover:bg-gray-100">
													<span
														className={`font-inter duration-300 ml-2 ${(!open && !hoverOpen) && 'scale-0'}`}
													>
													Erros por rotina						
													</span>
												</div>
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
										className={`font-inter duration-300 ${(!open && !hoverOpen) && 'scale-0'}`}
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