import React, { useState, useRef, useEffect } from 'react';
import { FaChessKing } from 'react-icons/fa';
import { useShow } from './context';

const Submenu = () => {
	const {
		isModalOpen,
		location,
		page: { page, links },
	} = useShow();
	const container = useRef(null);

	const [columns, setColumns] = useState('col-2');

	useEffect(() => {
		setColumns('col-2');
		const submenu = container.current;
		const { middle, bottom } = location;
		submenu.style.top = `${bottom}px`;
		submenu.style.left = `${middle}px`;

		if (links.length === 3) {
			setColumns('col-3');
		}

		if (links.length > 3) {
			setColumns('col-4');
		}
	}, [location, links]);

	return (
		<aside
			ref={container}
			className={`${isModalOpen ? 'submenu show' : 'submenu'}`}>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					return (
						<a key={index} href={link.url}>
							{link.icon}
							{link.label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;
