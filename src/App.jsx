import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import EmployeeList from './pages/EmployeeList';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<AddEmployee />} />
				<Route path="/employees" element={<EmployeeList />} />
			</Routes>
		</Router>
	);
};

export default App;
