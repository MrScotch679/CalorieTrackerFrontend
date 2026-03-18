import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { namespaces } from './namespaces'
import { routing } from './routing'

export default getRequestConfig(async params => {
	const { requestLocale } = params

	const resolvedRequestLocale = await requestLocale

	const locale = hasLocale(routing.locales, resolvedRequestLocale)
		? resolvedRequestLocale
		: routing.defaultLocale

	const messages: Record<string, Record<string, string>> = {}

	await Promise.all(
		namespaces.map(async (ns): Promise<void> => {
			try {
				const localeMessages = await import(
					`../../../../messages/${locale}/${ns}.json`
				)

				Object.assign(messages, localeMessages.default)
			} catch (error) {
				console.error(`Error loading messages for ${locale} ${ns}:`, error)
			}
		})
	)

	return {
		locale,
		messages,
	}
})
