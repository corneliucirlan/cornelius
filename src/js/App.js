import React, { useState, useEffect } from 'react'
import { isMobile, isMobileOnly } from 'react-device-detect'
import useDimensions from 'react-use-dimensions'

import TagManager from 'react-gtm-module'
import Metadata from './Metadata'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import BackdropSVG from './backdropSVG'

import './../css/App.sass'

const App = () => {
	
	// Fire ReactGA only once
	useEffect(() => {

		// Configure GTM
		const tagManagerArgs = {
			gtmId: 'GTM-THXDKJ3'
		}

		// Initialize GTM
		TagManager.initialize(tagManagerArgs)

	}, [])

	// dividerTop
	const dividerTop = 6.9

	// Base width
	const baseWidth = 1725

	// FHD width
	const widthFHD = 1920
    
	// SVG width
	let [svgWidth, setSVGWidth] = useState(baseWidth)
    
	// SVG height
	let [svgHeight, setSVGHeight] = useState(baseWidth / dividerTop)
    
	// Set footer as reference and get height    
	const [ref, { height }] = useDimensions()

	// Footer SVG Top position
	const footerSVGTop = isMobileOnly ? {top: `${height - svgHeight}px`} : {top: 'inherit'}

	// Footer height
	const footerHeight = screen.width < 576 ? `${svgHeight + 60}px` : `${svgHeight}px`

	// Listen for events
	useEffect(() => {

		// Resize function
		const handleResize = () => {

			// Get refreshed screen width
			let newWidth = (isMobile) ? screen.width : window.innerWidth

			// SVG should be full width
			if (newWidth <= baseWidth) {
					setSVGWidth(newWidth)
					setSVGHeight(newWidth / dividerTop)
				}

				// SVG should be smaller in width
				else {
					let tempWidth = baseWidth + ((newWidth - widthFHD) / 2)
					setSVGWidth(tempWidth)
					setSVGHeight(tempWidth / dividerTop)
				}
		}

		// Resize on first load if needed
		if (window.innerWidth !== widthFHD || isMobile)
			handleResize()

		// Add resize event listener        
		window.addEventListener('resize', handleResize)

		// Cleanup - remove event listener
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	return (
		<div className='app-container'>

			<Metadata />

			<div className='container-fluid' ref={ref}>
				<Header width={svgWidth} height={svgHeight} />
				<Main />
				<Footer footerHeight={footerHeight} />
			</div>

			<BackdropSVG width={svgWidth} height={svgHeight} className='footer-svg' topPosition={footerSVGTop} />

		</div>
	)
}

export default App
