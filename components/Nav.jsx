import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Custom Hooks
import { useHeight } from '../hooks/useHeight';

// Context(s)
import { LayoutContext } from '../context/LayoutContext';

// Components
import NavLink from './NavLink';

// SVG(s)
import OpenIcon from '../public/icons/menu.svg';
import CloseIcon from '../public/icons/close.svg';
import MoonIcon from '../public/icons/moon.svg';
import SunIcon from '../public/icons/sun.svg';

// Props:
// fixed => position fixed or sticky
// autoTransparent => for controlling in transparent

const Nav = ({ fixed = false, autoTransparent = false }) => {
	// const { y } = useWindowScroll();
	const router = useRouter();
	const [menu, setMenu] = useState(false);
	const { dark, toggleDark } = useContext(LayoutContext);

	let LayoutIcon = dark ? MoonIcon : SunIcon;

	let MenuIcon = menu ? CloseIcon : OpenIcon;

	const { divRef, underNavHeight } = useHeight();

	return (
		<div
			className={`${
				fixed ? 'fixed inset-x-0' : 'sticky inset-0'
			} z-40 select-none`}
			ref={divRef}
		>
			<header
				className={`${
					fixed && underNavHeight
						? 'py-5 xl:px-12 px-6'
						: 'py-6 xl:py-10 xl:px-28 px-10'
				}
				${autoTransparent ? (underNavHeight ? 'bg-black' : '') : 'bg-black'}
				${menu ? 'bg-black' : ''}
				duration-500 ease-in flex flex-wrap justify-between items-center`}
			>
				{/* Logo */}
				<div
					className='flex items-center justify-between flex-1'
					onClick={() => router.push('/')}
				>
					<img
						src='/logoWhite.png'
						alt='logo'
						className='h-12 cursor-pointer'
					/>
				</div>

				<LayoutIcon
					className='block w-6 h-6 mr-4 text-white fill-current md:hidden'
					onClick={() => toggleDark()}
				/>

				<MenuIcon
					className='block w-6 h-6 text-white fill-current pointer-cursor lg:hidden'
					onClick={() =>
						setMenu((prev) => {
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
						<ul className='flex flex-col items-center justify-between space-x-0 space-y-4 text-white lg:flex-row lg:space-x-4 lg:space-y-0'>
							<NavLink link='home' path='/' />
							<NavLink link='news' path='/news' />
							<NavLink link='about us' path='/about' />
							<NavLink link='our team' path='/team' />
							<NavLink link='contact us' path='/contact' />
							<NavLink link='events news' soon />
						</ul>
					</nav>
				</div>
				<LayoutIcon
					className='hidden w-6 h-6 ml-4 text-white fill-current md:block'
					onClick={() => toggleDark()}
				/>
			</header>
		</div>
	);
};

export default Nav;
