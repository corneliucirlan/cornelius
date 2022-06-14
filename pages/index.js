import Head from 'next/head'

export default (dribbbleShots) => {

	console.log(dribbbleShots)

	return (
		<div className='container'>
			<Head>
				<title>Corneliu Cîrlan</title>
			</Head>

			<a className='btn-link'>Index</a>
		</div>
	)
}

export async function getStaticProps() {

	// Get latest shots from Dribbble
	let response = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_TOKEN}&per_page=3`)
	let posts = await response.json()

	// Return latest shots
	return {props: {posts: posts}}
}
