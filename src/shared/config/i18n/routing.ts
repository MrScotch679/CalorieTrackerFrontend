import { defineRouting } from 'next-intl/routing'

// https://next-intl.dev/docs/routing
export const routing = defineRouting({
	locales: ['en', 'ru'] as const,
	localeDetection: true,
	localePrefix: 'as-needed',
	localeCookie: true,
	defaultLocale: 'en',
})
