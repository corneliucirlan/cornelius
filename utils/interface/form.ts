export interface FormDataSelect {
	label: string
	value: string
}

export interface FormData {
	name: string
	email: string
	service: FormDataSelect | null
	budget: FormDataSelect | null
	message: string
}
