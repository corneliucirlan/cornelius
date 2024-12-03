// /.netlify/functions/ig-token

import fetch from "node-fetch"

// Instagram access token
const IG_TOKEN = process.env.INSTAGRAM_TOKEN

export const handler = async () => {
	try {
		const response = await fetch(
			`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${IG_TOKEN}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}
		)

		if (!response.ok) {
			throw new Error(`Failed to refresh token: ${await response.text()}`)
		}

		const data: any = await response.json()

		return {
			statusCode: 200,
			body: JSON.stringify({
				accessToken: data.access_token,
				expiresIn: data.expires_in
			})
		}
	} catch (error) {
		console.error(error)
		return {
			statusCode: 500,
			body: JSON.stringify({ message: "Failed to refresh token" })
		}
	}
}
