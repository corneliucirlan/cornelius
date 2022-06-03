import React from 'react'

import HomeServices from './HomeServices'
import homepage from './../data/homepage'

const Main = () => {
	return (
		<main className='main'>
			<section className='section'>
				<h1 className='home-h1'>{homepage.title}</h1>
				<p className='intro'>{homepage.text}</p>
			</section>

			{/* <HomeServices /> */}

		</main>
	)
}

export default Main
