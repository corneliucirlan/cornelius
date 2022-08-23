// Global stylesheet
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { animated, useSpring, useTransition, easings } from 'react-spring'

import '../sass/styles.sass'

const Loading = () => {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	// const [isLoading, setIsLoading] = useState(true)
	
	const loaderDuration = 300
	const transition = useTransition(isLoading, {
		from: {
			position: 'absolute',
			left: 0,
			top: 0,
			opacity: 0,
			// backgroundColor: 'rgba(15, 15, 15, 1)',
			backgroundColor: 'white',
			width: '100vw',
			height: '100vh',
			zIndex: 1000,
			// top: '10rem'
		},
		enter: {	
			opacity: 1,
			// top: '0'
		},
		leave: {
			opacity: 0,
			// top: '-10rem'
		},
		config: {
			duration: loaderDuration,
			easing: easings.easeInOutCirc
		}
	})

	const circleConfig = useSpring({
		delay: loaderDuration + 100,
		config: {
			duration: 1000
		},
		from: {
			position: 'absolute',
			width: '100px',
			height: '100px',
			backgroundColor: 'rgb(15, 15, 15)',
			borderRadius: '50%',
			top: '50%',
			left: '50%',
			opacity: 1,
			transform: 'translate(-50%, -50%) scale(0)'
		},
		to: {
			position: 'absolute',
			width: '100px',
			height: '100px',
			backgroundColor: 'white',
			borderRadius: '50%',
			top: '50%',
			left: '50%',
			opacity: 0,
			transform: 'translate(-50%, -50%) scale(1)'
		},
		loop: true
	})

	useEffect(() => {
		const handleStart = url => (url !== router.asPath) && setIsLoading(true)
		const handleComplete = url => (url === router.asPath) && setIsLoading(false)
		
		// const handleComplete = url => setTimeout(() => { (url === router.asPath) && setIsLoading(false) }, 3000)

		isLoading ?
			document.body.classList.add('active-loding') :
			document.body.classList.remove('active-loding')

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete',	 handleComplete)
		router.events.on('routeChangeError', handleComplete)
		
		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	})
	
	// return (
	return isLoading && (
		<div>
			{transition((style, item) =>
				item &&
				<animated.div style={style}>
					<animated.div style={circleConfig}></animated.div>
				</animated.div>

			)}
		</div>
	)
}

export default ({ Component, pageProps }) => {

	// First time page load
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('globalLoader')

			if (loader) {
				loader.style.display = 'none'
				document.body.style.overflow = 'auto'
				document.body.style.width = 'inherit'
				document.body.style.height = 'inherit'
			}
		}
	}, [])

	return (
		<>
			<Loading />
			<Component {...pageProps} />
		</>
	)
}
