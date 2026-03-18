import { CheckIcon } from '@radix-ui/react-icons'
import { Checkbox } from 'radix-ui'
import { forwardRef } from 'react'
import styles from './styles.module.scss'

interface SCheckboxProps extends Checkbox.CheckboxProps {
	label?: string
}

const SCheckbox = forwardRef<HTMLButtonElement, SCheckboxProps>(
	({ label, id, ...props }, forwardedRef) => (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Checkbox.Root
				className={styles.Root}
				id={id}
				ref={forwardedRef}
				{...props}
			>
				<Checkbox.Indicator className={styles.Indicator}>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className={styles.Label} htmlFor={id}>
				{label}
			</label>
		</div>
	),
)
SCheckbox.displayName = 'SCheckbox'

export default SCheckbox
