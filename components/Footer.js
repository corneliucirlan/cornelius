import NavMenu from './nav-menu'
import Button from './button'
import { footerMenu, socialSites } from './data/menus'

export default () => {
	return (
		<footer className='row'>

			<section className='col-12 col-md-3'>
				<h2>Site links</h2>
				<NavMenu menu={footerMenu} />
			</section>

			<section className='col-12 col-md-4 offset-md-1'>
				<h2>Contact information</h2>
				<p>Feel free to contact me for any project you have in mind, or just to say hello.</p>
				<Button classes=' btn-footer btn-email-me' href='mailto:corneliu@corneliucirlan.com' text='corneliu@corneliucirlan.com' icon={true} />
			</section>

			<section className='col-12 col-md-3 offset-md-1'>
				<h2>Connect with me on socials</h2>
				<NavMenu menu={socialSites} />
			</section>
		</footer>
	)
}
