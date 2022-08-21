import Button from './button'

export default ({ kicker, heading, isButton = false, button = null }) => {
	return (
		<header>
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
