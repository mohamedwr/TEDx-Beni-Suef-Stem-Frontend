import { useEffect } from 'react';

// Global Styles
import '../styles/globals.css';

// Slider Styles
import '../components/TeamSlider.css';

// Contexts
import { LayoutProvider } from '../context/LayoutContext';
import SideLoader from '../components/SideLoader';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.history.scrollRestoration = 'manual';
	}, []);

	return (
		<LayoutProvider>
			<SideLoader />
			<Component {...pageProps} />
		</LayoutProvider>
	);
}

export default MyApp;
