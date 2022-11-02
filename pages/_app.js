import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'

import Header from '../components/header'

// Global SASS
import '../sass/styles.sass'

const Loading = () => {
	const router = useRouter()

	const [isLoading, setIsLoading] = useState(false)
	const [loaderClass, setLoaderClass] = useState('')

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
		<div className={`loader-container ${loaderClass}`}>
			<div className='loader-circle'></div>
		</div>
	)
}

export default ({ Component, pageProps }) => {

	// First time page load
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const loaderContainer = document.getElementById('loaderContainer')
			const loaderCircle = document.getElementById('loaderCircle')

			// document.getElementById('__next').style.display = 'none'

			setTimeout(() => {
				if (loaderContainer) {
	
					// Hide loading circle
					loaderCircle.classList.add('d-none')
	
					// Animate out loader
					loaderContainer.classList.add('animate-out')

					// Make page scrollable
					document.body.classList.remove('active-loader')
				}
			}, 0)
		}
	}, [])

	return (
		<div className='container'>
			<Loading />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	)
}
