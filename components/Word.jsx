const Word = ({ children, link = '' }) => {
	const isLink = link != '';
	const Tag = isLink ? 'a' : 'span';
	return (
		<Tag
			className={`text-red-500 font-bold ${
				isLink ? 'border-b-2 border-red-500' : ''
			}`}
			href={isLink ? link : undefined}
			target={isLink ? '_blank' : undefined}
		>
			{children}
		</Tag>
	);
};

export default Word;
