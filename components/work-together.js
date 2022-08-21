import { useRef } from 'react'
import { animated } from 'react-spring'

import { setTransition } from '../utils/transitions'
import Title from './title'

export default () => {

	const workTogetherRef = useRef()

	return (
		<animated.section className='row text-center' style={setTransition(workTogetherRef)} ref={workTogetherRef}>
			<Title
				kicker='Have a project in mind?'
				isButton={true}
				button={{
					href: '/contact',
					className: ['btn', 'btn-h1', 'text-center'],
					text: "Let's work together"
				}}
			/>
		</animated.section>
	)
}
