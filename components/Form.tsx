interface Props {
	name: string;
}

const Form = ({ name }: Props) => {
	return (
		<form
			name='contact'
			// method='POST'
			// data-netlify='true'
			className='flex flex-col w-full mb-5 px-9'
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
			>
				Send
			</button>
		</form>
	);
};

export default Form;
