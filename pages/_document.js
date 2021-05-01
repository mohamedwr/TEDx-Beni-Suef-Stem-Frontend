import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charset='utf-8' />
					<meta name='language' content='english' />
					<meta http-equiv='content-type' content='text/html' />
					<meta name='robots' content='index,follow' />
					<meta name='revisit-after' content='7 days' />
					<meta name='distribution' content='web' />
					<meta name='robots' content='noodp' />
					<meta name='rating' content='general' />

					{/* CopyRight Meta */}
					<meta name='copyright' content='Copyright 2022' />

					{/* Location Meta */}
					<meta name='city' content='Beni Suef' />
					<meta name='country' content='Egypt' />

					<meta name='rating' content='safe for kids' />

					{/* Open Graph Meta Tags */}
					<meta property='og:type' content='website' />
					<meta property='og:site_name' content='TEDx Youth@BeniSuef STEM' />

					{/* Author, Design, Publisher */}
					<link type='text/plain' rel='author' href='/humans.txt' />

					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body className='duration-300 ease-in-out bg-fixed bg-no-repeat bg-cover debug-screens dark:bg-gray-800 '>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
