import '../styles/globals.css';
import { useLocalStorage } from 'react-use';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
