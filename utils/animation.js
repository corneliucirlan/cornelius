export const animation = {
		hidden: {
			opacity: 0,
			y: "2.5rem"
		},
		show: {
			opacity: 1,
			y: 0,
		},
		transition: {
			duration: 0.5,
			ease: "linear",
		}
	}

export const animationStagger = {...animation, show: {
	...animation.show,
	transition: {
		staggerChildren: .2
	}
}}
