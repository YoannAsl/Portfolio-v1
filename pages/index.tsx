import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSelector from '../components/LanguageSelector';
import { Trans, useTranslation } from 'next-i18next';
import skills from '../public/data/skills';
import Form from '../components/Form';

export default function Home() {
	const { t } = useTranslation('common');
	// const name = 'Yoann';

	return (
		<div className='flex flex-col items-center min-h-screen text-gray-700'>
			<Head>
				<title>Yoann Agésilas</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<LanguageSelector />

			<header className='h-screen mt-20 px-11 sm:mt-52'>
				<h1 className='mb-20 text-3xl leading-snug xl:text-4xl'>
					{t('hero-title')}
				</h1>
				<p className='mb-16 text-3xl leading-snug xl:text-4xl'>
					{t('hero-content')}
				</p>
				<button className='px-3 py-2 text-xl text-white bg-blue-500 rounded-md'>
					{t('hero-button')}
				</button>
			</header>
			<section className='section'>
				<h1 className='section-title'>{t('skills-title')}</h1>
				<ul className='col-span-2 skills-list'>
					{skills.map((skill, index) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</section>
			<section className='section'>
				<h1 className='section-title'>{t('featured-projects')}</h1>
			</section>
			<Form name={t('form-name')} />
		</div>
	);
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});
