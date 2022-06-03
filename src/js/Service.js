import React from 'react'

import Icon from './icons/Icon'

const Service = props => {
	return (
		<article className='col-12 col-md-6 col-xl-4 article home-service'>
			<h3 className='service-title'>
				<Icon name={props.icon} class='icon-service' /> &nbsp;&nbsp;
				{props.title}
			</h3>
			<p className='service-text'>{props.text}</p>
		</article>
	)
}

export default Service
