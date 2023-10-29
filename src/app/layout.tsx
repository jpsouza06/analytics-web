import './globals.css'
import type { Metadata } from 'next'
import React, {Suspense} from 'react'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Loading from './loading'
import Header from '@/components/Header'
import { Context } from './context'
import { env } from '@/env'
import Header2 from '@/components/Header2'

export const metadata: Metadata = {
	title: env.NEXT_PUBLIC_SITE_NAME,
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
		<html lang="pt">
			<body className={`${inter.className}`}>
				<Context>				

					<Header2 />
					<Suspense fallback={<Loading />}>								
						<div className="bg-red-700 mx-auto mt-15 h-full">
	
							{children}
						</div>
					</Suspense>
				</Context>
			</body>
		</html>
	)
}



