import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import { TextAlign } from '../../types/Text/TextAlign'
import { TextColor } from '../../types/Text/TextColor'
import { TextSize } from '../../types/Text/TextSize'
import { TextWeight } from '../../types/Text/TextWeight'
import styles from './Text.module.scss'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
	size?: TextSize
	children: ReactNode
	weight?: TextWeight
	color?: TextColor
	asChild?: boolean
	align?: TextAlign
	className?: string
}

export const Text = (props: TextProps) => {
	const {
		size = 'md',
		weight = 'regular',
		color = 'primary',
		align = 'left',
		children,
		asChild,
		className,
		...rest
	} = props

	const Component = asChild ? Slot : 'p'

	const classNames = clsx(
		styles.root,
		styles[`size-${size}`],
		styles[`weight-${weight}`],
		styles[`align-${align}`],
		styles[`color-${color}`],
		className
	)

	return (
		<Component className={classNames} {...rest}>
			{children}
		</Component>
	)
}

Text.displayName = 'SText'
