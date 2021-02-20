import { useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

// Components
import SideLoader from '../components/SideLoader';

// Styles
import '../styles/globals.css';
import '../components/TeamSlider.css';

// Contexts
import { LayoutProvider } from '../context/LayoutContext';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.history.scrollRestoration = 'manual';
	}, []);

	return (
		<LayoutProvider>
			<NextNProgress
				color='#f34423'
				height='6'
				startPosition={0.3}
				stopDelayMs={200}
				options={{ showSpinner: true }}
			/>
			<SideLoader />
			<MessengerCustomerChat pageId='100148515225265' appId='884572085427135' />
			<Component {...pageProps} />
		</LayoutProvider>
	);
}

export default MyApp;
