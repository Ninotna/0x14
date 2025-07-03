import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
	const employees = useSelector((state) => state.employees.list);
	const [search, setSearch] = useState('');

	const filteredEmployees = employees.filter((emp) => {
		const fullText = `${emp.firstName} ${emp.lastName} ${emp.department} ${emp.city} ${emp.state}`.toLowerCase();
		return fullText.includes(search.toLowerCase());
	});

	const columns = [
		{ name: 'Prénom', selector: (row) => row.firstName, sortable: true },
		{ name: 'Nom', selector: (row) => row.lastName, sortable: true },
		{ name: 'Département', selector: (row) => row.department, sortable: true },
		{ name: 'Date de début', selector: (row) => row.startDate, sortable: true },
		{ name: 'Date de naissance', selector: (row) => row.dateOfBirth, sortable: true },
		{ name: 'Ville', selector: (row) => row.city, sortable: true },
		{ name: 'État', selector: (row) => row.state, sortable: true },
	];

	return (
		<div className="p-6">
			<h1 className="text-xl font-bold mb-4">Liste des employés</h1>

			<input
				type="text"
				placeholder="Rechercher un employé..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="mb-4 p-2 border rounded w-full"
			/>

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
