import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
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
			<body className={`${inter.className} bg-white`}>
				<Context>									
								
					<div className="mx-auto grid min-h-screen w-full grid-rows-[min-content_max-content] gap-16 bg-gray-100">
						<Header2 />
						<div className="max-w-7xl bg-white mx-auto w-4/5 p-10 mb-16">
							{children}
						</div>
					</div>
				
				</Context>
			</body>
		</html>
	)
}



