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
import { PostsProvider } from '../context/PostsContext';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		window.history.scrollRestoration = 'manual';
	}, []);

	return (
		<LayoutProvider>
			<PostsProvider>
				<NextNProgress
					color='#f34423'
					height='6'
					startPosition={0.3}
					stopDelayMs={200}
					options={{ showSpinner: true }}
				/>
				<SideLoader />
				<MessengerCustomerChat
					pageId='100148515225265'
					appId='884572085427135'
				/>
				<Component {...pageProps} />
			</PostsProvider>
		</LayoutProvider>
	);
}

export default MyApp;
