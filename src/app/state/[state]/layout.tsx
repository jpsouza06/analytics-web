import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({ 
	weight: '400',
	subsets: ['latin'] 
})

export const metadata: Metadata = {
	title: process.env.SITE_NAME,
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
