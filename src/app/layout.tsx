import './globals.css'
import type { Metadata } from 'next'
import React, {Suspense} from 'react'
import Sidebar from '@/components/Sidebar'
import Loading from './loading'

export const metadata: Metadata = {
	title: process.env.SITE_NAME,
}

export default async function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='flex'>
				<Sidebar />	
				<Suspense fallback={<Loading />}>								
					<div className="bg-red-700 mx-auto mt-15 w-full">
						{children}
					</div>
				</Suspense>
			</body>
		</html>
	)
}



