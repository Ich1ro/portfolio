'use client'
import { useEffect } from 'react';
import { TextInput, TextArea } from '../Primitives/Inputs';
import { Button } from '../Primitives/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInput } from '@/app/interfaces';
import emailjs from '@emailjs/browser';
import './Form.modules.scss'

const Form = () => {

	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { errors }
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = data => {
		emailjs
			.send(
				process.env.NEXT_PUBLIC_SERVICE_ID!,
				process.env.NEXT_PUBLIC_TEMPLATE_ID!,
				{ ...data },
				process.env.NEXT_PUBLIC_PUBLICK_KEY!
			)
			.then(response => {
				console.log('Email sent successfully!', response.text);
			})
			.catch(error => {
				console.log('Failed to send email:', error.text);
			});
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ name: '', email: '', message: '' });
		}
	}, [formState, reset]);

	return (
		<div className="form_container">
			<h2>Contact me</h2>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<TextInput type="text" placeholder="Name" {...register('name', { required: true })} />
				{errors.name && <span className="error">This field is required</span>}
				<TextInput type="email" placeholder="Email" {...register('email', { required: true })} />
				{errors.email && <span className="error">This field is required</span>}
				<TextArea placeholder="Message" {...register('message', { required: true })} />
				{errors.message && <span className="error">This field is required</span>}
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
};

export default Form;
