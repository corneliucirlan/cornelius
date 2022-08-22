import { useEffect, useState } from 'react'
import { useSpring, easings } from 'react-spring'

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

// export const setTransition = (ref, position = 'bottom') => {
export const setTransition = (ref, x = 0, y = 20, duration = 1000) => {
	const dataRef = useIntersectionObserver(ref)

	return useSpring({
		config: {
			duration: duration,
			easing: easings.easeInOutBack
		},
		from: {
			x: x,
			y: y,
			opacity: 0
		},
		to: {
			x: dataRef?.isIntersecting ? 0 : x,
			y: dataRef?.isIntersecting ? 0 : y,
			opacity: dataRef?.isIntersecting ? 1 : 0
		}
	})
}
