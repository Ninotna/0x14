
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
	const employees = useSelector((state) => state.employees.list);
	const [search, setSearch] = useState('');
	const [departmentFilter, setDepartmentFilter] = useState('');
	const [stateFilter, setStateFilter] = useState('');

	const resetFilters = () => {
		setSearch('');
		setDepartmentFilter('');
		setStateFilter('');
	};

	const filteredEmployees = employees.filter((emp) => {
    const fullText = `${emp.firstName} ${emp.lastName} ${emp.department} ${emp.city} ${emp.state}`.toLowerCase();
	const matchSearch = fullText.includes(search.toLowerCase());
	const matchDept = departmentFilter ? emp.department === departmentFilter : true;
	const matchState = stateFilter ? emp.state === stateFilter : true;
	return matchSearch && matchDept && matchState;
	});

	const departments = [...new Set(employees.map((e) => e.department))];
	const states = [...new Set(employees.map((e) => e.state))];

const columns = [
	{ name: 'Prénom', selector: (row) => row.firstName, sortable: true },
	{ name: 'Nom', selector: (row) => row.lastName, sortable: true },
	{ name: 'Date de naissance', selector: (row) => new Date(row.dateOfBirth).toLocaleDateString(), sortable: true },
	{ name: 'Date d\'embauche', selector: (row) => new Date(row.startDate).toLocaleDateString(), sortable: true },
	{ name: 'Adresse', selector: (row) => row.street, sortable: true },
	{ name: 'Ville', selector: (row) => row.city, sortable: true },
	{ name: 'Code postal', selector: (row) => row.zipCode, sortable: true },
	{ name: 'Région', selector: (row) => row.region, sortable: true },
	{ name: 'Département', selector: (row) => row.department, sortable: true },
];


	return (
		<div className="p-6">
			<h1 className="text-xl font-bold mb-4">Liste des employés</h1>

			<div className="flex flex-col md:flex-row gap-4 mb-4">
				<input
					type="text"
					placeholder="Rechercher un employé..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="p-2 border rounded w-full md:w-1/4"
				/>

				<select
					value={departmentFilter}
					onChange={(e) => setDepartmentFilter(e.target.value)}
					className="p-2 border rounded w-full md:w-1/4"
				>
					<option value="">Tous les départements</option>
					{departments.map((d) => (
						<option key={d} value={d}>{d}</option>
					))}
				</select>

				<select
					value={stateFilter}
					onChange={(e) => setStateFilter(e.target.value)}
					className="p-2 border rounded w-full md:w-1/4"
				>
					<option value="">Tous les états</option>
					{states.map((s) => (
						<option key={s} value={s}>{s}</option>
					))}
				</select>

				<button
					onClick={resetFilters}
					className="p-2 bg-gray-300 rounded w-full md:w-1/4"
				>
					Réinitialiser
				</button>
			</div>

			<DataTable
				columns={columns}
				data={filteredEmployees}
				pagination
				highlightOnHover
				dense
			/>
		</div>
	);
};

export default EmployeeList;
