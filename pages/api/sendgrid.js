import sendgrid from '@sendgrid/mail'

const {
	SENDGRID_API_KEY,
	SENDGRID_TO_EMAIL,
	SENDGRID_FROM_EMAIL
} = process.env

// Set SendGrid API Key
sendgrid.setApiKey(SENDGRID_API_KEY)

// Send mail
async function sendEmail(req, res) {

	try {
		await sendgrid.send({
			to: SENDGRID_TO_EMAIL, // Your email where you'll receive emails
			from: SENDGRID_FROM_EMAIL, // your website email address here
			replyTo: req.body.email,
			subject: `${req.body.name}: ${req.body.service}`,
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
							<p>Service: ${req.body.service}</p>
							<p>Budget: ${req.body.budget}</p>
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

	// Message was sent
	return res.status(200).json({ code: 200, responseMessage: 'Message sent.' })
}

export default sendEmail
