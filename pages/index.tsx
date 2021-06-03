import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSelector from '../components/LanguageSelector';
import { useTranslation } from 'next-i18next';

export default function Home() {
	const { t } = useTranslation('common');

	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Yoann Agésilas</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<LanguageSelector />
			<main className='flex flex-col items-center justify-center flex-1 w-full px-20 text-center'>
				<p className='text-blue-300'>{t('test')}</p>
			</main>
		</div>
	);
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});
