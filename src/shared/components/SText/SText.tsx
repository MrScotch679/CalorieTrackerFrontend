import { STextAlign } from '@/shared/types/SText/STextAlign'
import { STextColor } from '@/shared/types/SText/STextColor'
import { STextSize } from '@/shared/types/SText/STextSize'
import { STextWeight } from '@/shared/types/SText/STextWeight'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import styles from './SText.module.scss'

interface STextProps extends HTMLAttributes<HTMLParagraphElement> {
	size?: STextSize
	children: ReactNode
	weight?: STextWeight
	color?: STextColor
	asChild?: boolean
	align?: STextAlign
	className?: string
}

export const SText = forwardRef<HTMLParagraphElement, STextProps>(
	(props, ref) => {
		const {
			size = 'md',
			weight = 'regular',
			color = 'primary',
			children,
			asChild,
			align,
			className,
			...rest
		} = props

		const Component = asChild ? Slot : 'p'

		const classNames = clsx(
			styles.root,
			styles[`size-${size}`],
			styles[`weight-${weight}`],
			align && styles[`align-${align}`],
			styles[`color-${color}`],
			className,
		)

		return (
			<Component ref={ref} className={classNames} {...rest}>
				{children}
			</Component>
		)
	},
)
SText.displayName = 'SText'
