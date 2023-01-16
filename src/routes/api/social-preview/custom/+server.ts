import type {RequestHandler} from './$types'
import {PUBLIC_API_BASE_URL} from '$env/static/public'
import {API_KEY} from '$env/static/private'
export const GET: RequestHandler = ({fetch}) => {
	return new Response(String('Hello World!'))
}
