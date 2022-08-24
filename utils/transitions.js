import { useEffect, useState } from 'react'
import { useSpring, easings } from 'react-spring'

// Detect when element entering viewport
const useIntersectionObserver = elementRef => {
	const threshold = 0
	const root = null
	const rootMargin = '0%'
	const freezeOnceVisible = true

	const [entry, setEntry] = useState()

	const frozen = entry?.isIntersecting && freezeOnceVisible

	const updateEntry = ([ entry ]) => setEntry(entry)

	useEffect(() => {
		const node = elementRef?.current
		const hasIOSupport = !!window.IntersectionObserver

		if (!hasIOSupport || frozen || !node) return

		const observerParams = { threshold, root, rootMargin }
		const observer = new IntersectionObserver(updateEntry, observerParams)

		observer.observe(node)

		return () => observer.disconnect()
	}, [elementRef, threshold, root, rootMargin, frozen]);

	return entry
}

// Set elements transition when entering viewport
export const setTransition = (ref, config) => {
	const dataRef = useIntersectionObserver(ref)

	let defaultConfig = {
		x: 0,
		y: 20,
		duration: 1000
	}
	let springConfig = {...defaultConfig, ...config}

	return useSpring({
		config: {
			duration: springConfig.duration,
			// easing: easings.easeInOutBack
			easing: easings.easeInOutCirc
		},
		from: {
			x: springConfig.x,
			y: springConfig.y,
			opacity: 0
		},
		to: {
			x: dataRef?.isIntersecting ? 0 : springConfig.x,
			y: dataRef?.isIntersecting ? 0 : springConfig.y,
			opacity: dataRef?.isIntersecting ? 1 : 0
		}
	})
}

// Page to page transition loader container config
const loaderDuration = 300
export const loaderConfig = {
	from: {
		position: 'absolute',
		left: 0,
		top: 0,
		opacity: 0,
		backgroundColor: 'white',
		width: '100vw',
		height: '100vh',
		zIndex: 1000,
	},
	to: {	
		opacity: 1,
	},
	config: {
		duration: loaderDuration,
		easing: easings.easeInOutCirc
	}
}
	
// Page to page transition loader config
export const circleConfig = {
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
		opacity: 0,
		transform: 'translate(-50%, -50%) scale(1)'
	},
	delay: loaderDuration + 200,
	config: {
		duration: 1000
	},
	loop: true
}
