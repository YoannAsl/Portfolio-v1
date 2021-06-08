interface Props {
	title: string;
	description: string;
	tags: string[];
}

const Project = ({ title, description, tags }: Props) => {
	return (
		<li className='mb-3'>
			<h1 className='font-bold'>
				<a href='#'>{title}</a>
			</h1>
			<p className='mb-1 text-sm'>{description}</p>
			<ul className='flex flex-wrap'>
				{tags.map((tag, index) => (
					<li
						key={index}
						className='py-[2px] px-1 mr-1 mb-1 border rounded-sm text-primaryblue border-primaryblue text-xs font-medium'
					>
						{tag}
					</li>
				))}
			</ul>
		</li>
	);
};

export default Project;
