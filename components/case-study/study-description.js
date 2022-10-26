import { useRef } from "react"

import { useIsInViewport } from "../../utils/transitions"

export default ({ paragraph, index, className }) => {

	const descriptionRef = useRef()

	return (
		<p
			className={`opacity-0 ${className} fade-in-delay-${index + 1} ${useIsInViewport(descriptionRef) ? 'fade-in' : ''}`}
			ref={descriptionRef}
		>
			{paragraph}
		</p>
	);
};
