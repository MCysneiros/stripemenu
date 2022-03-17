import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: '', links: [] });

	const openSidebar = () => setIsSidebarOpen(true);
	const closeSidebar = () => setIsSidebarOpen(false);
	const openModal = (text, coordinates) => {
		const page = sublinks.find(item => item.page === text);
		setPage(page);
		setLocation(coordinates);
		setIsModalOpen(true);
	};
	const closeModal = () => setIsModalOpen(false);

	return (
		<AppContext.Provider
			value={{
				openSidebar,
				closeSidebar,
				openModal,
				closeModal,
				isModalOpen,
				isSidebarOpen,
				location,
				page,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useShow = () => {
	return useContext(AppContext);
};
