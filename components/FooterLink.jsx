import { useRouter } from 'next/router';

const FooterLink = ({ name, path }) => {
	const router = useRouter();

	return (
		<li
			className={`capitalize ${
				router.pathname.endsWith(path) ? 'text-red-500' : 'text-gray-100'
			} duration-150 cursor-pointer font-bold hover:text-red-500`}
			onClick={() => router.push(path)}
		>
			{name}
		</li>
	);
};
export default FooterLink;
