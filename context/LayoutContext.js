import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
	const [dark, setDark, remove] = useLocalStorage('dark-mode', false);
	const toggleDark = () => {
		if (dark) setDark(false);
		else setDark(true);
	};

	useEffect(() => {
		let Html = document.querySelector('html');
		if (dark) {
			Html.classList.add('dark');
		} else {
			Html.classList.remove('dark');
		}
	}, [dark]);
	return (
		<LayoutContext.Provider
			value={{
				dark,
				toggleDark,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};

export { LayoutProvider, LayoutContext };
