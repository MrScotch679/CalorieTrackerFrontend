import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	images: {
		dangerouslyAllowSVG: true,
		deviceSizes: [1440, 800, 390],
		localPatterns: [{ pathname: '**/*' }],
	},
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
}

const withNextIntl = createNextIntlPlugin('./src/shared/config/i18n/request.ts')
export default withNextIntl(nextConfig)
