import { useRef } from 'react'
import { useIsInViewport } from '../utils/transitions'
import Button from './button'

export default () => {

	const workRef = useRef()

	return (
		<section className={`row text-center opacity-0 ${useIsInViewport(workRef) ? 'fade-in' : ''}`} ref={workRef}>
			<h4 className="text-uppercase">Have a project in mind?</h4>
			<Button
				href="/contact"
				className={["btn", "btn-h1", "btn-work-together", "text-center"]}
				text="Let's work together"
			/>
		</section>
	)
}
