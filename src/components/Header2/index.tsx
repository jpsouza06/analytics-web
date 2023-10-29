'use client'
import React, { useContext } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { SideBarContext } from '@/app/context'

export default function Header2() {
	const {open, setOpen} = useContext(SideBarContext)
	return (
		<div className='flex items-center p-3 pl-5 bg-white w-full'>
			{/* <MenuIcon 
				className={
					` ${!open ? 'left-[4rem]' : 'left-[15rem]'} top-5 cursor-pointer text-white hover:bg-gray-100 duration-300 `
				} 
				onClick={() => setOpen(!open)}
			/> */}
		</div>
	)
} 
