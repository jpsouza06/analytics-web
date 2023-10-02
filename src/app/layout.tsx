import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

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
			<body>{children}</body>
		</html>
	)
}
