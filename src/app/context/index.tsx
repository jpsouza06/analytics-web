'use client'
import React, { ReactNode, createContext, useState } from 'react'

interface AppContextProps {
   open: boolean
   setOpen: React.Dispatch<React.SetStateAction<boolean>>
 }

 interface ComponentProps {
   children: ReactNode;
 }
 
export const SideBarContext = createContext<AppContextProps>({
	open: true,
	setOpen: () => {}
})

export const Context: React.FC<ComponentProps> = ({children}) => {
	const [open, setOpen] = useState(true)

	return (
		<SideBarContext.Provider value={{open, setOpen}}>
			{children}
		</SideBarContext.Provider>
	)
}