import { useRouter } from 'next/router';

const NavLink = ({ link, soon, path = false }) => {
	const router = useRouter();
	return (
		<li
			className={`flex justify-center items-center cursor-pointer duration-200 transition-colors uppercase font-roboto
		${
			soon
				? 'soon cursor-not-allowed text-gray-500 py-1'
				: 'cursor-pointer underline py-3 px-3'
		} ${router.pathname.includes(path) ? 'active font-bold text-ted' : ''}`}
			onClick={() => {
				if (path != '') {
					router.push(path);
				}
			}}
		>
			{link}
		</li>
	);
};

export default NavLink;
