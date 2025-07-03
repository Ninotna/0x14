import { Routes, Route, Link } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import EmployeeList from './pages/EmployeeList';

function App()
{
	return (
		<div className="p-4">
			<nav className="mb-4 space-x-4">
				<Link to="/" className="text-blue-600">Ajouter un employé</Link>
				<Link to="/employees" className="text-blue-600">Liste des employés</Link>
			</nav>
			<Routes>
				<Route path="/" element={<AddEmployee />} />
				<Route path="/employees" element={<EmployeeList />} />
			</Routes>
		</div>
	);
}

export default App;
