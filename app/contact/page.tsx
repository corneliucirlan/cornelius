"use client"

import { useState, useRef, RefObject } from "react"
import parse from "html-react-parser"
import Select, { ActionMeta, MultiValue, SingleValue } from "react-select"
import Header from "../../components/header"
import Button from "../../components/button"
import { useIsInViewport } from "../../utils/transitions"
import { contactCopy } from "../../components/data/site-copy"
import { selectStyles } from "../../utils/select-styles"
import {
	buttonIsSending,
	buttonSuccess,
	buttonError,
	buttonDefault
} from "../../utils/button-states"
import { useFormik } from "formik"
import { validationSchema } from "../../utils/input-validate"

import { FormData, FormDataSelect } from "../../utils/interface/form"
import SubmitState from "../../utils/interface/submit-state"

import styles from "../../sass/modules/contact.module.sass"

export default () => {
	const contactRef: RefObject<HTMLElement> = useRef(null)
	const contactFormRef: RefObject<HTMLElement> = useRef(null)

	// Submit form button state
	const [submitButton, setSubmitButton] = useState({
		text: buttonDefault.text,
		classes: buttonDefault.classes.join(" "),
		disabled: buttonDefault.disabled
	})

	// Update button state
	const updateSubmitButton = (button: SubmitState) => {
		button.classes.push("btn-animate")
		setSubmitButton({
			text: button.text,
			classes: button.classes.join(" "),
			disabled: button.disabled
		})

		// Reset animation
		setTimeout(() => {
			button.classes.pop()
			setSubmitButton({
				text: button.text,
				classes: button.classes.join(" "),
				disabled: button.disabled
			})
		}, 200)
	}

	const initialValues = {
		name: "",
		email: "",
		service: null,
		budget: null,
		message: ""
	}

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values: FormData) => {
			// Form is valid
			if (formik.isValid) {
				// Button sending state
				updateSubmitButton(buttonIsSending)

				// Send message to server
				fetch("/api/sendgrid", {
					body: JSON.stringify({
						email: values.email,
						name: values.name,
						service: values.service,
						budget: values.budget,
						message: values.message
					}),
					headers: {
						"Content-Type": "application/json"
					},
					method: "POST"
				})
					.then(response => {
						// Message was sent
						if (response.status === 200) {
							// Reset form
							formik.resetForm()

							// Button success state
							updateSubmitButton(buttonSuccess)
						}

						// Button error state
						else updateSubmitButton(buttonError)
					})
					.finally(() => {
						// Reset button to default
						setTimeout(() => {
							updateSubmitButton(buttonDefault)
						}, 3000)
					})
			}
		}
	})

	const handleChangeSelect = (
		newValue: SingleValue<FormDataSelect> | MultiValue<FormDataSelect>,
		actionMeta: ActionMeta<FormDataSelect>
	) =>
		actionMeta.name !== undefined &&
		formik.setFieldValue(actionMeta.name, newValue)

	return (
		<>
			<Header />
			<main className={`row align-items-center ${styles.contact}`}>
				<section
					className={`col-12 col-md-5 opacity-0 ${
						useIsInViewport(contactRef)
							? "fade-in fade-in-delay-1"
							: null
					}`}
					ref={contactRef}
				>
					<h4 className="text-uppercase">{contactCopy.kicker}</h4>
					<h1>{parse(contactCopy.title)}</h1>
					<p className={styles.caption}>{contactCopy.caption}</p>

					<Button
						href={contactCopy.mail.href}
						className={["btn", "btn-footer", "btn-email-me"]}
						hasIcon={true}
						text={contactCopy.mail.text}
					/>
				</section>

				<section
					className={`col-12 col-md-6 offset-md-1 opacity-0 ${
						useIsInViewport(contactFormRef)
							? "fade-in fade-in-delay-1"
							: null
					}`}
					ref={contactFormRef}
				>
					<form className="row" onSubmit={formik.handleSubmit}>
						{/* Name */}
						<div className="col-12 col-md-6">
							<label htmlFor="Name" className="form-label">
								{contactCopy.form.name.label}
							</label>
							<input
								type="text"
								name="name"
								value={formik.values.name}
								className={`form-control ${
									formik.touched.name && formik.errors.name
										? "is-invalid"
										: ""
								}`}
								placeholder={contactCopy.form.name.placeholder}
								onChange={formik.handleChange}
							/>
						</div>

						{/* E-mail address */}
						<div className="col-12 col-md-6">
							<label
								htmlFor="E-mail address"
								className="form-label"
							>
								{contactCopy.form.email.label}
							</label>
							<input
								type="email"
								name="email"
								value={formik.values.email}
								className={`form-control ${
									formik.touched.email && formik.errors.email
										? "is-invalid"
										: ""
								}`}
								placeholder={contactCopy.form.email.placeholder}
								onChange={formik.handleChange}
							/>
						</div>

						{/* Service */}
						{selectStyles && (
							<div className="col-12 col-md-6">
								<label htmlFor="Service" className="form-label">
									{contactCopy.form.service.label}
								</label>
								<Select
									name="service"
									placeholder={
										contactCopy.form.service.placeholder
									}
									className={`form-control form-control-select ${
										formik.touched.service &&
										formik.errors.service
											? "is-invalid"
											: ""
									}`}
									classNamePrefix="select"
									styles={selectStyles}
									value={formik.values.service}
									id={"select-service"}
									instanceId={"select-service"}
									options={contactCopy.form.service.options}
									onChange={handleChangeSelect}
								/>
							</div>
						)}

						{/* Budget */}
						{selectStyles && (
							<div className="col-12 col-md-6">
								<label htmlFor="budget" className="form-label">
									{contactCopy.form.budget.label}
								</label>
								<Select
									name="budget"
									placeholder={
										contactCopy.form.budget.placeholder
									}
									className={`form-control form-control-select ${
										formik.touched.budget &&
										formik.errors.budget
											? "is-invalid"
											: ""
									}`}
									classNamePrefix="select"
									styles={selectStyles}
									value={formik.values.budget}
									id={"select-budget"}
									instanceId={"select-budget"}
									options={contactCopy.form.budget.options}
									onChange={handleChangeSelect}
								/>
							</div>
						)}

						{/* Message */}
						<div className="col-12">
							<label htmlFor="message" className="form-label">
								{contactCopy.form.message.label}
							</label>
							<textarea
								rows={1}
								name="message"
								value={formik.values.message}
								className={`form-control ${
									formik.touched.message &&
									formik.errors.message
										? "is-invalid"
										: ""
								}`}
								placeholder={
									contactCopy.form.message.placeholder
								}
								onChange={formik.handleChange}
							/>
						</div>

						{/* Submit button */}
						<div className="col-12">
							<button
								type="submit"
								className={submitButton.classes}
								disabled={submitButton.disabled}
							>
								{parse(submitButton.text)}
							</button>
						</div>
					</form>
				</section>
			</main>
		</>
	)
}
