import { useEffect, useState, RefObject } from "react"

export const useIsInViewport = (
	element: RefObject<Element | null>,
	rootMargin = "-50px"
) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(entry.isIntersecting)
					if (element.current) {
						observer.unobserve(element.current)
					}
				}
			},
			{ rootMargin }
		)

		if (element.current) {
			observer.observe(element.current)
		}

		return () => {
			element.current && observer.unobserve(element.current)
		}
	}, [element.current, rootMargin])

	return isVisible
}
