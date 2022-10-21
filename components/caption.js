import Title from './title'

export default ({ kicker, heading, caption }) =>
	<>
		<Title
			kicker={kicker}
			heading={heading}
		/>
		<p className='opacity-0 fade-in fade-in-delay-1'>{caption}</p>
	</>
