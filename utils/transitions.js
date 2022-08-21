import { useEffect, useState } from 'react'
import { useSpring, easings } from 'react-spring'

const useIntersectionObserver = elementRef => {
	const threshold = 0
	const root = null
	const rootMargin = '0%'
	const freezeOnceVisible = false

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

export const setTransition = ref => {
	const dataRef = useIntersectionObserver(ref)

	return useSpring({
		config: {
			duration: 1000,
			easing: easings.easeInOutBack
		},
		from: {
			y: 100,
			opacity: 0
		},
		to: {
			y: dataRef?.isIntersecting ? 0 : 100,
			opacity: dataRef?.isIntersecting ? 1 : 0
		}
	})
}
