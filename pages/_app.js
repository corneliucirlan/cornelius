import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { loaderConfig, circleConfig } from '../utils/transitions'

// Global SASS
import '../sass/styles.sass'

const Loading = () => {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)

	const loaderSpring = useSpring(loaderConfig)	
	const circleSpring = useSpring(circleConfig)

	useEffect(() => {
		const handleStart = url => (url !== router.asPath) && setIsLoading(true)
		const handleComplete = url => (url === router.asPath) && setIsLoading(false)

		// Enable / Disable body scrolling
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
	
	return isLoading && (
		<animated.div style={loaderSpring}>
			<animated.div style={circleSpring}></animated.div>
		</animated.div>
	)
}

export default ({ Component, pageProps }) => {

	// First time page load
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const loader = document.getElementById('globalLoader')

			if (loader) {
				loader.classList.add('d-none')
				document.body.classList.remove('active-loader')
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
