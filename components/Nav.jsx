import { useState } from 'react';
import NavLink from './NavLink';
import MenuIcon from '../public/menu.svg';
import { useRouter } from 'next/router';

const Nav = ({ fixed = false }) => {
	const router = useRouter();
	const [menu, setMenu] = useState(false);
	return (
		<div className={`${fixed ? 'fixed' : 'sticky'} inset-0 z-50 select-none`}>
			<header className='lg:px-16 px-6 bg-black flex flex-wrap justify-between items-center py-5'>
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
