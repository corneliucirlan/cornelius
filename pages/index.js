import Head from 'next/head'

import Header from '../components/header'
import Card from '../components/card'
import Footer from '../components/footer'
import Button from '../components/button'
import Title from '../components/title'
import LetsWorkTogether from '../components/work-together'

import styles from '../sass/modules/Index.module.sass'

export default ({ dribbblePosts, igPosts }) => {

	return (
		<div className='container'>
			<Head>
				<title>Corneliu Cîrlan</title>
			</Head>

			<Header />

			{/* Hero section mouse scroller */}
			<div className={`d-none d-md-block ${styles.scrolldown}`}>
				<div className={styles.mousey}>
					<div className={styles.scroller}></div>
				</div>
			</div>

			{/* Side contact me button */}
			<Button
				href='/contact'
				className={['side-contact', 'd-none', 'd-md-block']}
				hasIcon={true}
				text='Contact me'
			/>
	
			<main>
				<span className={`text-center ${styles.background}`}>designer</span>

				{/* Hero Section */}
				<section className={`row ${styles.hero}`}>
					<div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
						<Title
							kicker='Corneliu Cîrlan'
							heading='Website and user experience designer'
						/>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus ipsum, malesuada sed volutpat id, dignissim vitae quam. Maecenas nibh leo, laoreet eget nisi ac, sagittis imperdiet libero. Integer a mollis augue. Curabitur tristique felis in massa ultrices interdum. Integer tristique ac metus nec molestie. Donec sed bibendum elit, vitae condimentum metus. Suspendisse consequat magna nec ullamcorper iaculis. Fusce magna velit, tempus ultricies finibus a, facilisis vel nisi. Fusce quis ultricies nibh.</p>
						
						<div className={`${styles.cta} d-flex justify-content-start align-items-center`}>
							<Button className={['btn']} href='/contact' text="Let's work together" />
							<span className='btn-divider'>or</span>
							<Button className={['btn']} href='/about' text='Read about me' />
						</div>
					</div>
				</section>

				{/* Curated Projects Section */}
				{/* <section className='row'>
					<Title
						kicker='Curated Projects'
						heading='Case studies'
					/>
					{dribbblePosts.map((shot, index) =>
						<Card data={shot} source='dribbble' key={index} />
						)}
					</section> */}

				{/* Personal Projects Section */}
				{/* <section className='row'>
					<Title
						kicker='Side Hussles'
						heading='Personal Projects'
					/>
					{dribbblePosts.map((shot, index) =>
						<Card data={shot} source='dribbble' key={index} />
						)}
					</section> */}

				{/* Latest on Dribbble Section */}
				<section className='row'>
					<Title
						kicker="What's New"
						heading='Latest on Dribbble'
					/>
					{dribbblePosts.map((shot, index) =>
						<Card data={shot} grid='6' source='dribbble' width='1600' height='1200' key={index} />
						)}
				</section>

				{/* Latest on Instagram Section */}
				<section className='row'>
					<Title
						kicker='On Socials'
						heading='Latest on Instagram'
					/>
					{igPosts.data.map((shot, index) =>
						<Card data={shot} grid='4' source='instagram' width='1080' height='1080' classes=' d-flex justify-content-center align-items-center flex-column' key={index} />
					)}
				</section>

				{/* Let's work together */}
				<LetsWorkTogether />

			</main>

			<Footer />
		</div>
	)
}

export async function getStaticProps() {

	const POSTS_DRIBBBLE = 2
	const POSTS_INSTAGRAM = 3

	// Get latest shots from Dribbble
	let response = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_TOKEN}&per_page=${POSTS_DRIBBBLE}`)
	let dribbblePosts = await response.json()

	// Get latest IG posts
	response = await fetch(`https://graph.instagram.com/v14.0/me/media?fields=id,caption,media_url,permalink&limit=${POSTS_INSTAGRAM}&access_token=${process.env.INSTAGRAM_TOKEN}`)
	let igPosts = await response.json()

	// Return latest shots
	return {props: {dribbblePosts: dribbblePosts, igPosts: igPosts}}
}
