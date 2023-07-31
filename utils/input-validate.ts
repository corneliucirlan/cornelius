import { contactCopy } from "../components/data/site-copy"
import * as Yup from "yup"

export const getValidSelectValues = () => {
	let serviceValues: Array<string> = []
	let serviceLabels: Array<string> = []
	contactCopy.form.service.options.map(item => {
		serviceValues.push(item.value)
		serviceLabels.push(item.label)
	})
	let budgetValues: Array<string> = []
	let budgetLabels: Array<string> = []
	contactCopy.form.budget.options.map(item => {
		budgetValues.push(item.value)
		budgetLabels.push(item.label)
	})

	return {
		service: {
			values: serviceValues,
			labels: serviceLabels
		},
		budget: {
			values: budgetValues,
			labels: budgetLabels
		}
	}
}

const validValues = getValidSelectValues()
export const validationSchema = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string().required().email(),
	service: Yup.object({
		value: Yup.string().required().oneOf(validValues.service.values),
		label: Yup.string().required().oneOf(validValues.service.labels)
	}).required(),
	budget: Yup.object({
		value: Yup.string().required().oneOf(validValues.budget.values),
		label: Yup.string().required().oneOf(validValues.budget.labels)
	}).required(),
	message: Yup.string().required()
})
