interface Props {
	name: string;
	sendButtonContent: string;
}

const Form = ({ name, sendButtonContent }: Props) => {
	return (
		<form
			name='contact'
			// method='POST'
			// data-netlify='true'
			className='flex flex-col w-full mb-40 px-9 max-w-[500px] mx-auto'
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
				{sendButtonContent}
			</button>
		</form>
	);
};

export default Form;
