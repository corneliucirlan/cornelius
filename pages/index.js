import Head from 'next/head'

import Header from '../components/Header'

export default (dribbbleShots) => {

	console.log(dribbbleShots)

	return (
		<div className='container'>
			<Head>
				<title>Corneliu Cîrlan</title>
			</Head>

			<Header />

			<main>
				<h4 className='text-uppercase'>Corneliu Cîrlan</h4>
				<h1>Website and user experience designer</h1>
				
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero. Integer a mollis augue. Curabitur tristique felis in massa ultrices interdum. Integer tristique ac metus nec molestie. Donec sed bibendum elit, vitae condimentum metus. Suspendisse consequat magna nec ullamcorper iaculis. Fusce magna velit, tempus ultricies finibus a, facilisis vel nisi. Fusce quis ultricies nibh. Nam et mauris ac massa ultricies malesuada. Aliquam congue in mauris eu lobortis.
				</p>
			</main>
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
