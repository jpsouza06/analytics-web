import './globals.css'
import type { Metadata } from 'next'
import React, {Suspense} from 'react'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Loading from './loading'
import Header from '@/components/Header'
import { Context } from './context'

export const metadata: Metadata = {
	title: process.env.SITE_NAME,
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})
  
export default async function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex`}>
				<Context>				
					<Sidebar />			
					
					<Suspense fallback={<Loading />}>								
						<div className="bg-red-700 mx-auto mt-15 w-full">
							<Header />
							{children}
						</div>
					</Suspense>
				</Context>
			</body>
		</html>
	)
}



