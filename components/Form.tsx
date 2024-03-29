import React, { LegacyRef, useState } from 'react';

interface Props {
    name: string;
    submitButtonContent: string;
    formRef: LegacyRef<HTMLFormElement>;
}

const Form = ({ name, submitButtonContent, formRef }: Props) => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleOnChange = (
        e:
            | React.FormEvent<HTMLInputElement>
            | React.FormEvent<HTMLTextAreaElement>
    ) => {
        setInputs({ ...inputs, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            await fetch('https://formspree.io/f/mnqlbvpo', {
                method: 'post',
                body: JSON.stringify(inputs),
            });
        } catch (error) {
            console.error(error);
        }
        setInputs({ name: '', email: '', message: '' });
    };

    return (
        <form
            name='contact-form'
            className='flex flex-col w-full mb-40 px-9 max-w-[600px] mx-auto'
            onSubmit={handleSubmit}
            ref={formRef}
        >
            <label htmlFor='name'>{name}</label>
            <input
                type='text'
                name='name'
                className='form-input'
                onChange={handleOnChange}
                value={inputs.name}
            />

            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                className='form-input'
                onChange={handleOnChange}
                value={inputs.email}
            />

            <label htmlFor='message'>Message</label>
            <textarea
                name='message'
                className='form-input-area'
                onChange={handleOnChange}
                value={inputs.message}
            />

            <button
                type='submit'
                className='self-center px-5 py-1 text-xl text-white rounded-md bg-primaryblue'
            >
                {submitButtonContent}
            </button>
        </form>
    );
};

export default Form;
