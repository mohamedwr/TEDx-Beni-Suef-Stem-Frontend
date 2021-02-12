import { createRef, useContext, useEffect, useState } from 'react';
import NavLink from './NavLink';
import MenuIcon from '../public/menu.svg';
import { useRouter } from 'next/router';
import { useWindowScroll } from 'react-use';

import SunIcon from '../public/icons/sun.svg';
import LampIcon from '../public/icons/lamp.svg';
import { LayoutContext } from '../context/LayoutContext';

// autoTransparent => for controlling in transparent
// NavHeight => navbar height
// fixed => position fixed or sticky

const Nav = ({ fixed = false, autoTransparent = false }) => {
	const { y } = useWindowScroll();
	const router = useRouter();
	const [menu, setMenu] = useState(false);
	const { dark, toggleDark } = useContext(LayoutContext);

	let DarkIcon = dark ? LampIcon : SunIcon;

	const [underNavHeight, setUnderNavHeight] = useState(false);
	// to get Nav Height
	const divRef = createRef();

	// get Nav Height When the Page is fully loaded
	useEffect(() => {
		if (divRef.current.clientHeight < y) setUnderNavHeight(true);
		else setUnderNavHeight(false);
	}, [y]);

	return (
		<div
			className={`${
				fixed ? 'fixed inset-x-0' : 'sticky inset-0'
			} z-50 select-none`}
			ref={divRef}
		>
			<header
				className={`${
					fixed && underNavHeight
						? 'py-5 lg:px-12 px-6'
						: 'py-6 lg:py-10 lg:px-28 px-10'
				}
				${autoTransparent ? (underNavHeight ? 'bg-black' : '') : 'bg-black'}
				${menu ? 'bg-black' : ''}
				duration-500 ease-in flex flex-wrap justify-between items-center`}
			>
				{/* Logo */}
				<div
					className='flex-1 flex justify-between items-center'
					onClick={() => router.push('/')}
				>
					<img src='logoWhite.png' alt='logo' className='h-12 cursor-pointer' />
				</div>

				<MenuIcon
					className='pointer-cursor lg:hidden block fill-current text-white h-6 w-6'
					onClick={() =>
						setMenu((prev) => {
							console.log(menu);
							return !prev;
						})
					}
				/>

				{/* Nav */}
				<div
					className={`${
						menu ? 'block' : 'hidden'
					} lg:flex lg:items-center lg:w-auto w-full`}
					id='menu'
				>
					<nav className='py-6 lg:py-0'>
						<ul className='flex flex-col lg:flex-row items-center justify-between text-white space-x-0 space-y-4 lg:space-x-4 lg:space-y-0'>
							<NavLink link='home' path='/' />
							<NavLink link='about us' path='about' />
							<NavLink link='our team' path='team' />
							<NavLink link='contact us' path='contact' />
							<NavLink link='events news' soon />
							<NavLink link='get certified' soon />
						</ul>
					</nav>
				</div>
				<DarkIcon
					className='fill-current text-white w-6 h-6 ml-4'
					onClick={() => {
						toggleDark();
					}}
				/>
			</header>
		</div>
	);
};

export default Nav;
