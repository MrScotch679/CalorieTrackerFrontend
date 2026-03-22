import { Text } from '@/shared/components/Text/Text'
import { getTranslations } from 'next-intl/server'

export default async function HomePage() {
	const t = await getTranslations('common')

	return (
		<div>
			<Text weight='bold'>{t('title')}</Text>
		</div>
	)
}
