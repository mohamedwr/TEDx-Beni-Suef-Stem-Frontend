import { useRouter } from "next/router";

const FooterLink = ({ name, path }) => {
	const router = useRouter();

	return (
		<li
			className={`uppercase ${
				router.pathname.endsWith(path) ? "text-ted" : "text-gray-100"
			} duration-150 cursor-pointer font-bold hover:text-ted`}
			onClick={() => router.push(path)}
		>
			{name}
		</li>
	);
};
export default FooterLink;
