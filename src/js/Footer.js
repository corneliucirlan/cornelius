import React from 'react'

import Button from './Button'

const Footer = props => {

	return (
		<footer className='footer' style={{ height: props.footerHeight }}>
			<Button href='mailto:corneliu@corneliucirlan.com' title='Send a message' value="Let's work together" />
		</footer>
	)
}

export default Footer
