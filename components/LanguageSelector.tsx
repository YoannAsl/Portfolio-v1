import { Listbox } from '@headlessui/react';
import { useRouter } from 'next/router';

const LanguageSelector = () => {
    const router = useRouter();

    function handleChange(value: string) {
        router.push('/', '/', { locale: value });
    }

    return (
        <div className='absolute w-28 top-3 right-5 sm:top-7 sm:right-8'>
            <Listbox value={router.locale} onChange={handleChange}>
                <Listbox.Button className='w-full px-3 py-1 mb-1 border border-gray-300 rounded-md cursor-pointer'>
                    {router.locale === 'fr' ? 'Français' : 'English'}
                </Listbox.Button>
                <Listbox.Options className='w-full py-1 border border-gray-300 rounded-md cursor-pointer'>
                    <Listbox.Option
                        value='en'
                        className={({ active, selected }) =>
                            `${
                                active
                                    ? 'bg-blue-50 text-primaryblue'
                                    : 'text-gray-900'
                            } ${selected ? 'font-bold' : 'font-normal'}
                              select-none text-center py-1`
                        }
                    >
                        English
                    </Listbox.Option>
                    <Listbox.Option
                        value='fr'
                        className={({ active, selected }) =>
                            `${
                                active
                                    ? 'bg-blue-50 text-primaryblue'
                                    : 'text-gray-900'
                            } ${selected ? 'font-bold' : 'font-normal'}
                          select-none text-center py-1`
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
