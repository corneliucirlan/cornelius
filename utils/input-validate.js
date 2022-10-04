import { object, string } from 'yup'
import { contactCopy } from '../components/data/site-copy'

let serviceValues = []
let serviceLabels = []
contactCopy.form.service.options.map(item => {
	serviceValues.push(item.value)
	serviceLabels.push(item.label)
})

let budgetValues = []
let budgetLabels = []
contactCopy.form.budget.options.map(item => {
	budgetValues.push(item.value)
	budgetLabels.push(item.label)
})

// Validate name
export const validateName = async name => {

	// Define Name schema
	let nameShema = string().required()

	// Return validity
	return await nameShema.isValid(name)
}

// Validate email address
export const validateEmail = async email => {

	// Define Name schema
	let nameShema = string().required().email()
	
	// Return validity
	return await nameShema.isValid(email)
}

// Validate service
export const validateService = async service => {

	// Define Service schema
	let serviceSchema = object({
		value: string().required().oneOf(serviceValues),
		label: string().required().oneOf(serviceLabels)
	}).required()

	// Return validity
	return serviceSchema.isValid(service)
}

// Validate budget
export const validateBudget = async budget => {
	
	// Define Budget schema
	let budgetSchema = object({
		value: string().required().oneOf(budgetValues),
		label: string().required().oneOf(budgetLabels)
	}).required()
	
	// Return validity
	return budgetSchema.isValid(budget)
}

// Validate all inputs
export const validateInputs = async (name, email, service, budget, message) => {

	// Create validity array
	let isValid = {}

	// Validate all inputs
	isValid['name'] = await validateName(name)
	isValid['email'] = await validateEmail(email)
	isValid['service'] = await validateService(service)
	isValid['budget'] = await validateBudget(budget)
	isValid['message'] = await validateName(message)

	// Return validity array
	return isValid
}
