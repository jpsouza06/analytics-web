'use client'
import React, { useState } from 'react'

import AnalyticsIcon from '@mui/icons-material/Analytics'

import Link from 'next/link'
import Image from 'next/image'

import arrow from '../../../public/images/arrow.png'

export default function Header2() {
	const [open, setOpen] = useState(false)

	return (
		<div className='flex justify-center bg-red-700 w-full text-white p-8'>
			<div className="flex items-end max-w-[1400px] w-4/5 space-x-16">
				<Link href="/">
					<div className="flex items-center space-x-1">
						<AnalyticsIcon fontSize='large'/>
						<h1 className={'text-4xl'}>Analytics</h1>
					</div>
				</Link>

				<nav>
					<ul className="flex text-xl space-x-16">

						<Link href="/" className="h-[32px]">
							<li className='rounded-sm hover:bg-gray-100'>
								Início
							</li>
						</Link>


						<li className='rounded-sm'>
							<div className=" pl-1 mb-1 ">

								<div className='flex items-center hover:bg-gray-100 cursor-pointer' onClick={() => setOpen(!open)}>						
									Relatórios
									<Image
										src={arrow}
										alt=''
										width={14}
										height={14}   
										className={`
											ml-2
											duration-300 
											transition-transform 
											${open ? 'rotate-90': 'rotate-0'}`
										}
									/>
								</div>
							
								<ul className={`absolute bg-red-700 border border-gray-300 ${!open && 'scale-0'} p-2 origin-top duration-300`}>
									<Link href="/report/page-view" >
										<li>
											<div className="flex hover:bg-gray-100">
												<span
													className={'ml-2'}
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
													className={'ml-2'}
												>
													Acessos por módulo						
												</span>
											</div>
										</li>
									</Link>
									<Link href="/report/error">
										<li className="flex hover:bg-gray-100">
											<div >
												<span
													className={'ml-2'}
												>
													Erros por rotina						
												</span>
											</div>
										</li>
									</Link>
								</ul>
								
							</div>
						</li>
	

						<Link href="/map">
							<li className='rounded-sm hover:bg-gray-100'>
								<div className="flex items-center pl-1 mb-1 space-x-2  ">
									Mapa
								</div>
							</li>
						</Link>

					</ul>
				</nav>
			</div>
		</div>
	)
} 
