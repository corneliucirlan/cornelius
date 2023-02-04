"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default () => {
	// Current path
	const pathname = usePathname()
	const router = useRouter()

	// Previous path
	const [oldPathName, setOldPathName] = useState()

	useEffect(() => {
		// Scroll to top if current path not as previous path
		if (oldPathName !== pathname) {
			console.log("OLD PATH: ", oldPathName)
			console.log("CURRENT PATH: ", pathname)
			setOldPathName(pathname)
			router.push(pathname)
			window.scrollTo(0, 0)
		}
	})

	return null
}
