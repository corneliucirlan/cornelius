import NavMenu from "./header/nav-menu"
import Button from "./button"
import { footerMenu } from "@/global/data/menus"
import SocialLinks from "./social-links"

export default () => (
	<div className="container">
		<footer className="row text-center text-md-start">
			<section className="col-12 col-md-3">
				<h2>Site links</h2>
				<NavMenu menu={footerMenu} />
			</section>

			<section className="col-12 col-md-4 offset-md-1">
				<h2>Contact information</h2>
				<p>
					Have a project in mind? Drop me a line. It doesn't matter
					how big or small it is. Or maybe just say Hi.
				</p>
				<Button
					href="mailto:corneliu@corneliucirlan.com"
					className={[
						"btn",
						"btn-footer",
						"btn-email-me",
						"justify-content-center",
						"justify-content-md-start"
					]}
					hasIcon={true}
					text="corneliu@corneliucirlan.com"
				/>
			</section>

			<section className="col-12 col-md-3 offset-md-1">
				<h2>Connect with me</h2>
				<SocialLinks />
			</section>
		</footer>
	</div>
)
