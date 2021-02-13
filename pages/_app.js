import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

// Global Styles
import '../styles/globals.css';

// Slider Styles
import '../components/TeamSlider.css';

// Contexts
import { LayoutProvider } from '../context/LayoutContext';

function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();

	useEffect(() => {
		window.history.scrollRestoration = 'manual';
	}, [pathname]);

	return (
		<>
			<motion.div
				className='fixed bg-black z-60 h-full'
				initial={{ width: '100%' }}
				animate={{ width: '0%' }}
				transition={{ duration: 1.6, ease: 'easeInOut' }}
			></motion.div>
			<motion.div
				className='fixed bg-red-500 z-50 h-full'
				initial={{ width: '100%' }}
				animate={{ width: '0%' }}
				transition={{ duration: 1.6, delay: 0.5, ease: 'easeInOut' }}
			></motion.div>
			<LayoutProvider>
				<Component {...pageProps} />
			</LayoutProvider>
		</>
	);
}

export default MyApp;
