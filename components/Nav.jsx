import { createRef, useEffect, useState } from 'react';
import NavLink from './NavLink';
import MenuIcon from '../public/menu.svg';
import { useRouter } from 'next/router';
import { useWindowScroll } from 'react-use';

// autoTransparent => for controlling in transparent
// NavHeight => navbar height
// fixed => position fixed or sticky

const Nav = ({ fixed = false, autoTransparent = false }) => {
	const { y } = useWindowScroll();
	const router = useRouter();
	const [menu, setMenu] = useState(false);

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
					fixed
						? underNavHeight
							? 'py-5 lg:px-16 px-6'
							: 'py-10 lg:px-28 px-10'
						: 'py-5 lg:px-16 px-6'
				}
				${autoTransparent ? (underNavHeight ? 'bg-black' : '') : 'bg-black'}
				${menu ? 'md:bg-black' : ''}
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
							<NavLink link='contact us' path='contact' />
							<NavLink link='about' path='about' />
							<NavLink link='team' path='team' />
							<NavLink link='events news' soon path='events' />
							<NavLink link='get certified' soon path='certified' />
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Nav;
