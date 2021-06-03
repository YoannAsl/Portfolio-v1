import { Listbox } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LanguageSelector = () => {
	const router = useRouter();
	// const [language, setLanguage] = useState(router.locale);

	function handleChange(value: string) {
		// setLanguage(value);
		router.push('/', '/', { locale: value });
	}

	return (
		<div className='w-28'>
			<Listbox value={router.locale} onChange={handleChange}>
				<Listbox.Button className='w-full px-3 py-1 mb-1 border border-gray-300 rounded-md cursor-pointer'>
					{router.locale === 'fr' ? 'Français' : 'English'}
				</Listbox.Button>
				<Listbox.Options className='w-full border border-gray-300 rounded-md cursor-pointer'>
					<Listbox.Option
						value='en'
						className={({ active }) =>
							`${active ? 'bg-blue-50' : 'text-gray-900'}
                              select-none pl-7 py-1`
						}
					>
						English
					</Listbox.Option>
					<Listbox.Option
						value='fr'
						className={({ active }) =>
							`${
								active
									? 'text-blue bg-blue-100'
									: 'text-gray-900'
							}
                          select-none`
						}
					>
						Français
					</Listbox.Option>
				</Listbox.Options>
			</Listbox>
		</div>
	);
};

export default LanguageSelector;
