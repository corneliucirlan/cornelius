import { useRef } from 'react'
import { useIsInViewport } from '../utils/transitions'
import Button from './button'

export const SubTitle = ({ element, title, className }) => {
	return (
		<div className={className}>
			<h4 className='text-uppercase'>{title}</h4>
			{Array.isArray(element) &&
			<ul style={{ listStyle: 'none', paddingLeft: 0 }}>
				{element.map((role, key) =>
					<li key={key} className='h4' style={{ fontFamily: 'Helvetica Now Display', fontWeight: 900, color: 'rgb(15, 15, 15)' }}>{role}</li>
				)}
			</ul>}

			{!Array.isArray(element) &&
			<h4 style={{ fontFamily: 'Helvetica Now Display', fontWeight: 900, color: 'rgb(15, 15, 15)' }}>{element}</h4>}
		</div>
	)
}

export default ({ kicker, heading, isButton = false, button = null }) => {

	const headerRef = useRef()

	return (
		<header className={`opacity-0 ${useIsInViewport(headerRef) ? 'fade-in' : null}`} ref={headerRef}>
			<h4 className='text-uppercase'>{kicker}</h4>
			{!isButton && heading && <h1>{heading}</h1>}
			{isButton &&
			<Button
				href={button.href}
				className={button.className}
				text={button.text}
			/>}
		</header>
	)
}
