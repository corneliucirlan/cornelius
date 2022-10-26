import { useRef } from "react"
import Image from "next/image"

import { useIsInViewport } from "../../utils/transitions"

export default ({ image, containerClasses }) => {

	const photoRef = useRef()

	return (
		<div className={`opacity-0 ${containerClasses} ${useIsInViewport(photoRef) ? 'fade-in' : ''}`} ref={photoRef}>
			<Image
				src={image.src}
				width={image.width}
				height={image.height}
				placeholder="blur"
				blurDataURL={image.base64}
			/>
		</div>
	);
}
