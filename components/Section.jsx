const Section = ({
	children,
	title,
	color = 'text-ted',
	withBorder = false,
	biggerMargin = false,
}) => {
	return (
		<section>
			<h2
				className={`text-3xl lg:text-4xl font-bold font-roboto ${
					withBorder ? 'border-l-8 rounded border-red-500 pl-4' : ''
				} ${biggerMargin ? 'mb-8' : 'mb-4'} ${color} dark:text-red-500`}
			>
				{title}
			</h2>
			{children}
		</section>
	);
};

export default Section;
