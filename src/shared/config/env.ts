import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// https://env.t3.gg/docs/nextjs
export const env = createEnv({
	server: {
		BASE_API_URL: z.url(),
		APP_ENV: z.enum(['dev', 'prod']),
	},
	client: {
		NEXT_PUBLIC_BASE_API_URL: z.url(),
	},
	// https://env.t3.gg/docs/nextjs#create-your-schema
	runtimeEnv: {
		BASE_API_URL: process.env.BASE_API_URL,
		NEXT_PUBLIC_BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
		APP_ENV: process.env.APP_ENV,
	},
})
