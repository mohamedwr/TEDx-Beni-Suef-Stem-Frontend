import Head from 'next/head';

const Title = ({
	children = '',
	description = 'TEDxYouth@BeniSuefSTEM aims to spot the light on the idea and the concept of overcoming the tough times and convert them into a huge success. In addition, spread and discuss the ideas of our local STEM community, which includes hundreds of students with bright minds. We plan to spread practical steps for success, to rise with our people, community, and our lovely country, Egypt.',
	title = 'TEDx Youth@BeniSuefSTEM Website',
	image = 'http://tedxyouthbstem.com/tedLogoWhite.png',
}) => (
	<Head>
		<meta charset='utf-8' />
		<meta name='language' content='english' />
		<meta name='keywords' content='TEDx, benisuef, stem, youth' />

		<meta http-equiv='content-type' content='text/html' />
		<meta name='robots' content='index,follow' />
		<meta name='revisit-after' content='7 days' />
		<meta name='distribution' content='web' />
		<meta http-equiv='refresh' content='30' />
		<meta name='robots' content='noodp' />
		<meta name='rating' content='general' />
		<meta name='copyright' content='Copyright 2022' />
		<meta name='city' content='Beni Suef' />
		<meta name='country' content='Egypt' />
		<meta name='viewport' content='width=device-width, initial-scale=1.0' />

		<meta name='rating' content='safe for kids' />

		<meta property='og:title' content={title} />
		<meta
			property='og:description'
			content={
				description.length <= 950 ? description : description.slice(0, 950)
			}
		/>

		<meta property='og:url' content='http://tedxyouthbstem.com' />

		<meta property='og:site_name' content='TEDx Youth@BeniSuef STEM' />

		<meta property='og:image' content={image} />
		<meta property='og:url' content='http://tedxyouthbstem.com' />
		<meta name='twitter:title' content={title} />
		<meta
			name='twitter:description'
			content={
				description.length <= 950 ? description : description.slice(0, 950)
			}
		/>
		<meta name='twitter:image' content={image} />
		<meta name='twitter:card' content='summary_large_image' />
		<meta name='twitter:image' content='LINK TO IMAGE' />

		<meta name='twitter:site' content='http://tedxyouthbstem.com' />

		<meta
			name='description'
			content={
				description.length <= 950 ? description : description.slice(0, 950)
			}
		/>
		<meta name='author' content='Devien George' />
		<meta name='designer' content='Devien George' />
		<meta name='publisher' content='Devien George' />

		<title>{children} | TEDx BeniSuefStem</title>
	</Head>
);
export default Title;
