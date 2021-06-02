import { Listbox } from '@headlessui/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useState } from 'react';

const languages = [
	{ short: 'en', full: 'English' },
	{ short: 'fr', full: 'Français' },
];

type Language = {
	short: string;
	full: string;
};

export default function Home() {
	const [language, setLanguage] = useState(languages[0]);
	const router = useRouter();

	const handleLanguageChange = (value: Language) => {
		setLanguage(value);
		router.push('/', '/', { locale: value.short });
	};

	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Yoann Agésilas</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Listbox value={language} onChange={handleLanguageChange}>
				<Listbox.Button>{language.full}</Listbox.Button>
				<Listbox.Options>
					{languages.map((l, index) => (
						<Listbox.Option
							key={index}
							value={l}
							className={({ active, selected }) =>
								`${active ? 'hidden' : 'list-item'} ${
									selected ? 'hidden' : 'list-item'
								}`
							}
						>
							{l.full}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>

			<main className='flex flex-col items-center justify-center flex-1 w-full px-20 text-center'>
				werahesrhesh
				<p className='text-red-400'>wgreesgr</p>
			</main>
		</div>
	);
}
