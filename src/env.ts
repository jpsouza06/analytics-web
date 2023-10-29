import { z } from 'zod'

const envSchema = z.object({
	API_BASE_URL: z.string().url(),
	NEXT_PUBLIC_SITE_NAME: z.string()
})

const parsedEnv = envSchema.safeParse(process.env)

if(!parsedEnv.success) {
	console.error(
		'Invalid environment variables', 
		parsedEnv.error
	)

	throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data