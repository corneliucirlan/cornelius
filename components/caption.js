import Title from './title'

export default ({ kicker, heading, caption }) =>
	<>
		<Title
			kicker={kicker}
			heading={heading}
		/>
		<p className='fade-in fade-in-delay-1'>{caption}</p>
	</>
