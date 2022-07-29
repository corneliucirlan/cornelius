import NavMenu from "./NavMenu"
import { footerMenu, socialSites } from "./data/menus"

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
				<a className='btn btn-primary btn-footer' href='mailto:corneliu@corneliucirlan.com' target='_blank'>corneliu@corneliucirlan.com</a>
			</section>
		
			<section className='col-12 col-md-3 offset-md-1'>
				<h2>Connect with me on socials</h2>
				<NavMenu menu={socialSites} />
			</section>
		</footer>
	)
}
