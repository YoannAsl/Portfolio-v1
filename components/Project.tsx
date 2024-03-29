interface Props {
    title: string;
    description: string;
    tags: string[];
    url: string;
}

const Project = ({ title, description, tags, url }: Props) => {
    return (
        <li className='mb-10'>
            <a
                href={url}
                className='mb-2 flex font-bold group w-min whitespace-nowrap'
                target='_blank'
                rel='noreferrer noopener'
            >
                <h1 className='mr-2 transition-all duration-200 ease-out group-hover:mr-5'>
                    {title}
                </h1>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='self-center w-5 h-5 text-primaryblue'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                </svg>
            </a>
            <p className='mb-4 text-sm'>{description}</p>
            <ul className='flex flex-wrap'>
                {tags.map((tag, index) => (
                    <li
                        key={index}
                        className='py-[2px] px-1 mr-1 mb-1 border rounded-sm text-primaryblue border-primaryblue text-xs font-bold font-mono'
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default Project;
