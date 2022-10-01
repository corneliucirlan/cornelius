import { useEffect, useState } from 'react'

export const useIsInViewport = ref => {

	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting), {
				root: null,
				rootMargin: "0px",
				threshold: 0.1
			}
		)

		observer.observe(ref.current);

		return () => observer.disconnect()
		
	}, [ref])

	return isVisible
}

// Page to page transition loader container config
// const loaderDuration = 300
// export const loaderConfig = {
// 	from: {
// 		position: 'absolute',
// 		left: 0,
// 		top: 0,
// 		opacity: 0,
// 		backgroundColor: 'white',
// 		width: '100vw',
// 		height: '100vh',
// 		zIndex: 1000,
// 	},
// 	to: {	
// 		opacity: 1,
// 	},
// 	config: {
// 		duration: loaderDuration,
// 		easing: easings.easeInOutCirc
// 	}
// }
	
// // Page to page transition loader config
// export const circleConfig = {
// 	from: {
// 		position: 'absolute',
// 		width: '100px',
// 		height: '100px',
// 		backgroundColor: 'rgb(15, 15, 15)',
// 		borderRadius: '50%',
// 		top: '50%',
// 		left: '50%',
// 		opacity: 1,
// 		transform: 'translate(-50%, -50%) scale(0)'
// 	},
// 	to: {
// 		opacity: 0,
// 		transform: 'translate(-50%, -50%) scale(1)'
// 	},
// 	delay: loaderDuration + 200,
// 	config: {
// 		duration: 1000
// 	},
// 	loop: true
// }
