import sendgrid from '@sendgrid/mail'
// Validation
import { validateName, validateEmail, validateService, validateBudget } from '../../utils/input-validate'

const {
	SENDGRID_API_KEY,
	SENDGRID_TO_EMAIL,
	SENDGRID_FROM_EMAIL
} = process.env

// Set SendGrid API Key
sendgrid.setApiKey(SENDGRID_API_KEY)

// Send mail
async function sendEmail(req, res) {

	// Create validity array
	let isValid = {}

	// Validate all inputs
	isValid['name'] = await validateName(req.body.name)
	isValid['email'] = await validateEmail(req.body.email)
	isValid['service'] = await validateService(req.body.service)
	isValid['budget'] = await validateBudget(req.body.budget)
	isValid['message'] = await validateName(req.body.message)

	if (isValid['name'] && isValid['email'] && isValid['service'] && isValid['message'] && isValid['message'])

			try {
				await sendgrid.send({
					to: SENDGRID_TO_EMAIL, // Your email where you'll receive emails
					from: SENDGRID_FROM_EMAIL, // your website email address here
					replyTo: req.body.email,
					subject: `${req.body.name}: ${req.body.service.label}`,
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
								<h3>New email from ${req.body.name}</h3>
								<div style="font-size: 16px">
									<p>E-mail address: ${req.body.email}</p>
									<p>Service: ${req.body.service.label}</p>
									<p>Budget: ${req.body.budget.label}</p>
									<p>Message: ${req.body.message}</p>
								</div>
						</body>
					</html>`,
				})
			} catch (error) {
				// console.log('Error code: ', error.code)
				// console.log('Error message: ', error.message)
				return res.status(error.code).json({code: error.code, responseMessage: error.message})
			}
		else
			return res.status(400).json(isValid)

	// Message was sent
	return res.status(200).json({ code: 200, responseMessage: 'Message sent.' })
}

export default sendEmail
