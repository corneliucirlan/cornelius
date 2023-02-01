import Footer from "../components/footer"
import Header from "../components/header"
import SideContact from "../components/side-contact"

import "../sass/styles.sass"

export default function RootLayout({ children }) {
	return (
		<html>
			<head />

			<body>
				<Header />
				<div className="container">{children}</div>
				<SideContact />
				<Footer />
			</body>
		</html>
	)
}
