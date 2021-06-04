const Form = ({ name }: { name: string }) => {
	return (
		<form
			name='contact'
			method='POST'
			data-netlify='true'
			className='flex flex-col'
		>
			<label htmlFor='name'>{name}</label>
			<input type='text' name='name' className='border' />

			<label htmlFor='email'>Email</label>
			<input type='email' name='email' className='border' />

			<label htmlFor='message'>Message</label>
			<textarea name='message' className='border'></textarea>

			<button type='submit'>Send</button>
		</form>
	);
};

export default Form;
