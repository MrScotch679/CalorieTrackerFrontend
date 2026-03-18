'use client'

import { configure } from 'mobx'
import type { ReactNode } from 'react'

configure({
	enforceActions: 'never',
	isolateGlobalState: true,
	...(process.env.NODE_ENV === 'development' && {
		reactionRequiresObservable: true,
		observableRequiresReaction: true,
	}),
	reactionScheduler: f => setTimeout(f),
})

interface Props {
	children: ReactNode
}

export const MobxProvider = (props: Props) => {
	const { children } = props

	return <>{children}</>
}

MobxProvider.displayName = 'MobxProvider'
