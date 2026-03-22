import { CheckIcon } from '@radix-ui/react-icons'
import { Checkbox as RadixCheckboxPrimitive } from 'radix-ui'
import styles from './Checkbox.module.scss'

interface CheckboxProps extends RadixCheckboxPrimitive.CheckboxProps {
	label?: string
}

const Checkbox = (props: CheckboxProps) => {
	const { label, id, ...rest } = props

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<RadixCheckboxPrimitive.Root className={styles.Root} id={id} {...rest}>
				<RadixCheckboxPrimitive.Indicator className={styles.Indicator}>
					<CheckIcon />
				</RadixCheckboxPrimitive.Indicator>
			</RadixCheckboxPrimitive.Root>

			<label className={styles.Label} htmlFor={id}>
				{label}
			</label>
		</div>
	)
}

Checkbox.displayName = 'Checkbox'
