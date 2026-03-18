import { SText } from '@/shared/components/SText/SText'
import SCheckbox from '@/shared/ui/Checkbox'
import SSelect from '@/shared/ui/Select'
import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
	const t = await getTranslations('common')

	return (
		<div>
			{t('title')}
			<SText size='sm' color='primary' weight='bold'>
				{'собака'}
			</SText>
			<SSelect />
			<SCheckbox />
			<SCheckbox />
			<SCheckbox />
			<SCheckbox />
		</div>
	)
}
