import Header from "@/global/components/header"
import Footer from "@/global/components/footer"
import SideContact from "@/global/components/side-contact"
import ScrollTop from "@/global//components/scroll-top"

import "@/sass/styles.sass"

// Import local fonts
import localFonts from "next/font/local"

// Helvetica Now display
const helveticaNowDisplay = localFonts({
	src: "../assets/fonts/HelveticaNowDisplay/HelveticaNowDisplay-Black.ttf",
	weight: "900",
	style: "normal",
	display: "swap",
	variable: "--cc-heading-font-family"
})

// Roboto
const roboto = localFonts({
	src: [
		{
			path: "../assets/fonts/Roboto/Roboto-Light.ttf",
			weight: "300",
			style: "normal"
		},
		{
			path: "../assets/fonts/Roboto/Roboto-Regular.ttf",
			weight: "400",
			style: "normal"
		},
		{
			path: "../assets/fonts/Roboto/Roboto-Black.ttf",
			weight: "900",
			style: "normal"
		}
	],
	display: "swap",
	variable: "--cc-font-sans-serif"
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			className={`${roboto.variable} ${helveticaNowDisplay.variable}`}
			lang="en"
		>
			<head />

			<body>
				<ScrollTop />
				<div className="container">{children}</div>
				<SideContact />
				<Footer />
			</body>
		</html>
	)
}
