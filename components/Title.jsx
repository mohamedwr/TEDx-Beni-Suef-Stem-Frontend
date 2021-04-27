import Head from 'next/head';

const Title = ({
	children = '',
	description = 'TEDxYouth@BeniSuefSTEM aims to spot the light on the idea and the concept of overcoming the tough times and convert them into a huge success. In addition, spread and discuss the ideas of our local STEM community, which includes hundreds of students with bright minds. We plan to spread practical steps for success, to rise with our people, community, and our lovely country, Egypt.',
	title = 'TEDx Youth@BeniSuefSTEM Website',
	image = 'https://tedxyouthbstem.com/tedLogoWhite.png',
}) => (
	<Head>
		<meta property='og:title' content={title} />
		<meta
			property='og:description'
			content={
				description.length <= 950 ? description : description.slice(0, 950)
			}
		/>
		<meta name='keywords' content='TEDx, benisuef, stem, youth' />

		<meta property='og:image' content={image} />
		<meta name='twitter:title' content={title} />
		<meta
			name='twitter:description'
			content={
				description.length <= 950 ? description : description.slice(0, 950)
			}
		/>
		<meta name='twitter:image' content={image} />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:image' content={image} />

		<meta
			name='description'
			content={
				description.length <= 950 ? description : description.slice(0, 950)
			}
		/>

		<title>{children} | TEDx BeniSuefStem</title>
	</Head>
);
export default Title;
