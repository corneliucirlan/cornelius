import React from 'react'

const backdropSVG = props => (
	<svg viewBox='0 0 1725 250' width={props.width} height={props.height} className={props.className} style={props.topPosition}>
		<polygon points='0,0 1725,0 1725,250' />
	</svg>
)

export default backdropSVG
