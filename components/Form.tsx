import React, { useState } from 'react';
import axios from 'axios';

interface Props {
    name: string;
    submitButtonContent: string;
    formRef: HTMLFormElement;
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
        setInputs((prev) => ({
            ...prev,
            [e.currentTarget.name]: e.currentTarget.value,
        }));
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            await axios.post('https://formspree.io/f/mnqlbvpo', inputs);
            setInputs({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
            name='contact-form'
            className='flex flex-col w-full mb-72 px-9 max-w-[600px] mx-auto'
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
