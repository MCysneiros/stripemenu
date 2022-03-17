import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useShow } from './context';

const Navbar = () => {
	const { openSidebar, closeModal, openModal } = useShow();

	const displaySubMenu = e => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const middle = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		openModal(page, { middle, bottom });
	};

	const handleMouseOver = e => {
		if (!e.target.classList.contains('link-btn')) {
			closeModal();
		}
	};
	return (
		<nav className='nav' onMouseOver={handleMouseOver}>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='stripe logo' className='nav-logo' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button onMouseOver={displaySubMenu} className='link-btn'>
							products
						</button>
					</li>
					<li>
						<button onMouseOver={displaySubMenu} className='link-btn'>
							developers
						</button>
					</li>
					<li>
						<button onMouseOver={displaySubMenu} className='link-btn'>
							company
						</button>
					</li>
				</ul>
				<button className='btn signin-btn'>Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
