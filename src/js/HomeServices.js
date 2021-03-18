import React from 'react'

import Service from './Service'
import homeServices from './../data/services'

const HomeServices = () => {

	return (
		<section className='section'>
			<h2 className='home-h2'>How I can help you</h2>

			<div className='row'>
				{homeServices.map(service => <Service key={service.icon} icon={service.icon} title={service.title} text={service.text} />)}
			</div>
		</section>
	)
}

export default HomeServices
