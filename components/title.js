import { setTransition } from '../utils/transitions'
import { animated } from 'react-spring'
import Button from './button'
import { useRef } from 'react'

export default ({ kicker, heading, isButton = false, button = null }) => {

	const headerRef = useRef()

	return (
		<animated.header style={setTransition(headerRef)} ref={headerRef}>
			<h4 className='text-uppercase'>{kicker}</h4>
			{!isButton && heading && <h1>{heading}</h1>}
			{isButton &&
			<Button
				href={button.href}
				className={button.className}
				text={button.text}
			/>}
		</animated.header>
	)
}
