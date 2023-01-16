import type {RequestHandler} from './$types'
import {PUBLIC_API_BASE_URL} from '$env/static/public'
import {API_KEY} from '$env/static/private'
import {error} from '@sveltejs/kit'
export const GET: RequestHandler = async ({fetch, url}) => {
	const urlToHit = url.searchParams.get('url')

	if (!urlToHit || !urlToHit.startsWith('http')) {
		throw error(400, 'Missing valid `url` to screenshot')
	}

	const response = await fetch(`${PUBLIC_API_BASE_URL}/?url=${urlToHit}`, {
		headers: {
			'X-API-Key': API_KEY,
		},
	})

	if (!response.body || !response.ok) {
		throw error(500)
	}

	return new Response(response.body, {
		headers: new Headers({
			'Content-Type': 'image/png',
		}),
	})
}
