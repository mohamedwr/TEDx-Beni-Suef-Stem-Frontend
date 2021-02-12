import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
	const [dark, setDark, remove] = useLocalStorage('dark-mode');
	const toggleDark = () => {
		if (dark) remove();
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
