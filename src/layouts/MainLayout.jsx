import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900">
			<Navbar />
			<main className="max-w-6xl mx-auto px-4 py-6">
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
