import { createContext, useEffect, useState } from 'react';

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
	const [dark, setDark] = useState(true);
	const [firstLoad, setFirstLoad] = useState(false);

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
				firstLoad,
				setFirstLoad,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};

export { LayoutProvider, LayoutContext };
