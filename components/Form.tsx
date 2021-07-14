import { useForm, ValidationError } from '@formspree/react';

interface Props {
	name: string;
	submitButtonContent: string;
}

const Form = ({ name, submitButtonContent }: Props) => {
	const [state, handleSubmit] = useForm('contact');

	if (state.succeeded) return <p>Thank you for your message !</p>;

	return (
		<form
			name='contact-form'
			action='https://formspree.io/f/mnqlbvpo'
			method='POST'
			className='flex flex-col w-full mb-40 px-9 max-w-[600px] mx-auto'
			onSubmit={handleSubmit}
		>
			<label htmlFor='name'>{name}</label>
			<input type='text' name='name' className='form-input' />

			<label htmlFor='email'>Email</label>
			<input type='email' name='email' className='form-input' />

			<label htmlFor='message'>Message</label>
			<textarea name='message' className='form-input'></textarea>

			<button
				type='submit'
				className='self-center px-5 py-1 text-xl text-white rounded-md bg-primaryblue'
				disabled={state.submitting}
			>
				{submitButtonContent}
			</button>
		</form>
	);
};

export default Form;
