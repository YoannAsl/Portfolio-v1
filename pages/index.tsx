import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';

import skills from '../public/data/skills';
import projects from '../public/data/projects';
import LanguageSelector from '../components/LanguageSelector';
import Form from '../components/Form';
import Project from '../components/Project';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

export default function Home({ _nextI18Next }: any) {
	const locale = _nextI18Next.initialLocale;
	const { t } = useTranslation('common');
	// const name = 'Yoann';

	return (
		<div className='text-gray-700'>
			<Head>
				{locale == 'en' ? (
					<title>Yoann Agésilas | Front-End Developer</title>
				) : (
					<title>Yoann Agésilas | Développeur Front-End</title>
				)}
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<LanguageSelector />

			<header className='flex flex-col justify-around max-w-[1440px] h-screen py-20 font-light px-11 sm:py-32 sm:px-24 mx-auto'>
				<h1 className='mb-20 text-3xl lg:text-4xl'>
					{t('hero-title')} 👋
				</h1>
				<h2 className='max-w-2xl mb-16 text-3xl leading-snug lg:text-4xl lg:leading-normal'>
					{t('hero-content')}
				</h2>
				<button className='px-3 py-2 text-xl text-white bg-blue-500 rounded-md max-w-min whitespace-nowrap'>
					{t('hero-button')}
				</button>
			</header>

			<section className='section'>
				<h1 className='section-title'>{t('skills-title')}</h1>
				<div className='section-content'>
					<ul className='col-span-2 text-[.9rem] skills-list'>
						{skills.map((skill, index) => (
							<li key={index}>{skill}</li>
						))}
					</ul>
				</div>
			</section>

			<section className='section'>
				<h1 className='section-title'>{t('featured-projects')}</h1>
				<div className='section-content'>
					<ul>
						<li>
							<a href='#'>Kasa</a>
							<p className='text-sm'>
								A web appliation built with React for my web
								development course. Kasa is an apartment
							</p>
							<Image
								src='/images/kasa.png'
								alt='Kasa homepage'
								height={400}
								width={400}
								className='object-cover'
							/>
						</li>
					</ul>
				</div>
			</section>

			<section className='section'>
				<h1 className='section-title'>Projects</h1>
				<div className='section-content'>
					<ul>
						{projects.map((project, index) =>
							locale == 'en' ? (
								<Project
									key={index}
									title={project.title}
									description={project.description.en}
									tags={project.tags}
								/>
							) : (
								<Project
									key={index}
									title={project.title}
									description={project.description.fr}
									tags={project.tags}
								/>
							)
						)}
					</ul>
				</div>
			</section>

			<Form name={t('form-name')} />
		</div>
	);
}
