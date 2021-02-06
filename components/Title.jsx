import Head from 'next/head';

const Title = ({ children = '' }) => (
	<Head>
		<title>TEDx BeniSuefStem | {children}</title>
	</Head>
);
export default Title;
