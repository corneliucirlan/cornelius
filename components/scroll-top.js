"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default () => {
	// Current path
	const pathname = usePathname()
	const router = useRouter()

	// Previous path
	const [oldPathName, setOldPathName] = useState(pathname)

	useEffect(() => {
		// Scroll to top if current path is different from previous path
		if (oldPathName !== pathname) {
			// Update old path
			setOldPathName(pathname)

			// Push new path
			router.push(pathname)

			// Scroll to top
			window.scrollTo(0, 0)
		}
	}, [pathname])

	return null
}
