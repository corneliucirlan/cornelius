import Title from './title'

export default () => {

	return (
		<section className='row text-center'>
			<Title
				kicker='Have a project in mind?'
				isButton={true}
				button={{
					href: '/contact',
					className: ['btn', 'btn-h1', 'text-center'],
					text: "Let's work together"
				}}
			/>
		</section>
	)
}
