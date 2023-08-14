"use server"

import sendgrid from "@sendgrid/mail"
import { validationSchema } from "../../utils/input-validate"

export default async (formData: any) => {
	const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } =
		process.env

	// Check if all required environment variables are defined
	if (!SENDGRID_API_KEY || !SENDGRID_TO_EMAIL || !SENDGRID_FROM_EMAIL) {
		return {
			status: 500,
			statusText: "Required environment variables are not set."
		}
	}

	// Set SendGrid API Key
	sendgrid.setApiKey(SENDGRID_API_KEY)

	// Get all values
	const { name, email, service, budget, message } = formData

	const isValid = await validationSchema.isValid({
		name,
		email,
		service,
		budget,
		message
	})

	// If form is valid
	if (isValid) {
		try {
			await sendgrid.send({
				to: SENDGRID_TO_EMAIL, // Your email where you'll receive emails
				from: SENDGRID_FROM_EMAIL, // your website email address here
				replyTo: email,
				subject: `${name}: ${service.label}`,
				text: `You've got mail`,
				html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
							<html lang="en">
							<head>
								<meta charset="utf-8">
								<title>New Potential Lead</title>
								<meta name="description" content="New lead from corneliucirlan.com">
								<meta name="author" content="Corneliu Cîrlan">
								<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
							</head>
							<body>
								<div class="container" style="margin-left: 20px; margin-right: 20px">
									<h3>New email from ${name}</h3>
									<div style="font-size: 16px">
										<p>E-mail address: ${email}</p>
										<p>Service: ${service.label}</p>
										<p>Budget: ${budget.label}</p>
										<p>Message: ${message}</p>
										</div>
										</body>
										</html>`
			})

			// Message was sent
			return { status: 200, statuText: "Message sent." }
		} catch (error) {
			console.error("Server error: ", error)
			return error
		}
	} else return isValid
}
