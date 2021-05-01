import Head from 'next/head';
import { useRouter } from 'next/router';

// Utils
import { mdToText } from '../utils/mdToText';

const Title = ({
	children = '',
	description = 'TEDxYouth@BeniSuefSTEM aims to spot the light on the idea and the concept of overcoming the tough times and convert them into a huge success. In addition, spread and discuss the ideas of our local STEM community, which includes hundreds of students with bright minds. We plan to spread practical steps for success, to rise with our people, community, and our lovely country, Egypt.',
	title = 'TEDx Youth@BeniSuefSTEM Website',
	image = 'https://tedxyouthbstem.com/tedLogoWhite.png',
	keywords = [],
}) => {
	const router = useRouter();
	let EditedDescription = mdToText(description);
	EditedDescription =
		EditedDescription.length <= 750
			? EditedDescription
			: EditedDescription.slice(0, 750);

	let EditedTitle = `${children} | TEDx BeniSuefStem`;
	let EditedKeywords = ['tedx', 'benisuef', 'stem', 'youth', ...keywords];
	return (
		<Head>
			{/* Viewport Meta Tag */}
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />

			{/* Keywords Meta Tag */}
			<meta name='keywords' content={EditedKeywords} />

			{/* Open Graph Meta Tags */}
			<meta property='og:image' content={image} />
			<meta property='og:title' content={EditedTitle} />
			<meta property='og:description' content={EditedDescription} />
			<meta
				property='og:url'
				content={`http://tedxyouthbstem.com/${router.asPath}`}
			/>

			{/* Twitter Meta Tags */}
			<meta name='twitter:image' content={image} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={EditedTitle} />
			<meta name='twitter:description' content={EditedDescription} />
			<meta
				name='twitter:site'
				content={`http://tedxyouthbstem.com/${router.asPath}`}
			/>

			<meta name='description' content={EditedDescription} />

			<title>{EditedTitle}</title>
		</Head>
	);
};
export default Title;
