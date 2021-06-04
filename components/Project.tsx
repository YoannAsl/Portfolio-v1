interface Props {
	title: string;
	description: string;
	tags: string[];
}

const Project = ({ title, description, tags }: Props) => {
	return (
		<li>
			<h1 className='font-bold'>
				<a href='#'>{title}</a>
			</h1>
			<p className='text-sm'>{description}</p>
			<ul className='flex flex-wrap'>
				{tags.map((tag) => (
					<li className='py-[2px] px-1 mr-1 mb-1 border rounded-sm text-primaryblue border-primaryblue text-xs font-medium'>
						{tag}
					</li>
				))}
			</ul>
		</li>
	);
};

export default Project;
