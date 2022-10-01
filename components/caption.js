import Title from './title'

export default ({ kicker, heading, caption }) =>
	<>
		<Title
			kicker={kicker}
			heading={heading}
		/>
		<p>{caption}</p>
	</>
