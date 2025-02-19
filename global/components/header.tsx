"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { Logo } from "@/global/data/svg-icons"

import NavMenu from "@/global/components/header/nav-menu"
import { headerMenu } from "@/global/data/menus"

export default () => {
	const [mobileMenu, setMobileMenu] = useState(false)

	useEffect(() => {
		// Disable scrolling when mobile menu is active
		mobileMenu && document.body.classList.add("active-menu")

		// Enable scrolling
		return () => document.body.classList.remove("active-menu")
	})

	return (
		<nav
			className={`navbar navbar-expand-md${
				mobileMenu ? " menu-active" : ""
			}`}
		>
			<div className={`container`}>
				<Link
					href="/"
					className="navbar-brand d-flex align-items-center"
				>
					<Logo />
					<span className="navbar-brand-text text-capitalize">
						Corneliu Cîrlan
					</span>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					aria-label="Mobile menu"
					onClick={() =>
						mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
					}
				>
					<span className="hamburger"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-md-end"
					id="navbarSupportedContent"
				>
					<NavMenu menu={headerMenu} />
				</div>
			</div>
		</nav>
	)
}
