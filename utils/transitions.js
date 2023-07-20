import { useEffect, useState } from "react"

export const useIsInViewport = (element, rootMargin = "-50px") => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(entry.isIntersecting)
					observer.unobserve(element.current)
				}
			},
			{ rootMargin }
		)

		element.current && observer.observe(element.current)

		return () => element.current && observer.unobserve(element.current)
	}, [element.current])

	return isVisible
}
