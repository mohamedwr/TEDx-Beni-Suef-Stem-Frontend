import { Fragment } from 'react';

const Section = ({
	children,
	title,
	color = 'text-ted',
	withBorder = false,
	biggerMargin = false,
	className,
}) => {
	return (
		<section>
			<h2
				className={`text-3xl lg:text-4xl font-bold font-roboto ${
					withBorder ? 'border-l-8 rounded border-red-500 pl-4' : ''
				} ${biggerMargin ? 'mb-8' : 'mb-4'} ${color}`}
			>
				{title}
			</h2>
			<div className={className}>{children}</div>
		</section>
	);
};

export default Section;
