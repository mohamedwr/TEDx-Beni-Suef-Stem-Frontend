import { LayoutProvider } from '../context/LayoutContext';
import '../styles/globals.css';
import '../components/TeamSlider.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();

	useEffect(() => {
		window.history.scrollRestoration = 'manual';
	}, [pathname]);

	return (
		<LayoutProvider>
			<Component {...pageProps} />
		</LayoutProvider>
	);
}

export default MyApp;
