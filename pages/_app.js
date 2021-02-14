import { useEffect } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

// Components
import SideLoader from '../components/SideLoader';

// Global Styles
import '../styles/globals.css';

// Slider Styles
import '../components/TeamSlider.css';

// Contexts
import { LayoutProvider } from '../context/LayoutContext';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.history.scrollRestoration = 'manual';
	}, []);

	return (
		<LayoutProvider>
			<SideLoader />
			<MessengerCustomerChat pageId='100148515225265' appId='884572085427135' />
			<Component {...pageProps} />
		</LayoutProvider>
	);
}

export default MyApp;
