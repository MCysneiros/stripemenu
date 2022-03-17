import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useShow } from './context';

import sublinks from './data';

const Sidebar = () => {
	const { closeSidebar, isSidebarOpen } = useShow();

	return (
		<aside className={`sidebar-wrapper ${isSidebarOpen ? 'show' : null}`}>
			<div className='sidebar'>
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
				<div className='sidebar-links'>
					{sublinks.map((sublink, index) => {
						const { links, page } = sublink;
						return (
							<article key={index}>
								<h3>{page}</h3>
								<div className='sidebar-sublinks'>
									{links.map((link, index) => {
										const { url, icon, label } = link;
										return (
											<a key={index} href={url}>
												{icon}
												{label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
