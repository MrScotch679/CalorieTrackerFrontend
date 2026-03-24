import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

// TODO: Add metadata
export const metadata: Metadata = {}

export default function RootLayout(props: Props) {
	const { children } = props

	return children
}
