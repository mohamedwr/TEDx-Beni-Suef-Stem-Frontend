import { createRef, useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

export const useHeight = () => {
	const { y } = useWindowScroll();

	const [underNavHeight, setUnderNavHeight] = useState(false);

	// to get Nav Height
	const divRef = createRef();

	// get Nav Height When the Page is fully loaded
	useEffect(() => {
		if (divRef.current.clientHeight < y) setUnderNavHeight(true);
		else setUnderNavHeight(false);
	}, [y]);

	return { divRef, underNavHeight };
};
