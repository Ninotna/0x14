import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
	const employees = useSelector((state) => state.employees.list);
	const [search, setSearch] = useState('');
	const [departmentFilter, setDepartmentFilter] = useState('');
	const [regionFilter, setRegionFilter] = useState('');

	const resetFilters = () => {
		setSearch('');
		setDepartmentFilter('');
		setRegionFilter('');
	};

	const filteredEmployees = employees.filter((emp) => {
		const fullText = `${emp.firstName} ${emp.lastName} ${emp.department} ${emp.city} ${emp.region}`.toLowerCase();
		const matchSearch = fullText.includes(search.toLowerCase());
		const matchDept = departmentFilter ? emp.department === departmentFilter : true;
		const matchRegion = regionFilter ? emp.region === regionFilter : true;
		return matchSearch && matchDept && matchRegion;
	});

	const departments = [...new Set(employees.map((e) => e.department))];
	const regions = [...new Set(employees.map((e) => e.region))];

	const columns = [
		{ name: 'Prénom', selector: (row) => row.firstName, sortable: true },
		{ name: 'Nom', selector: (row) => row.lastName, sortable: true },
		{ name: 'Date de naissance', selector: (row) => new Date(row.dateOfBirth).toLocaleDateString(), sortable: true },
		{ name: "Date d'embauche", selector: (row) => new Date(row.startDate).toLocaleDateString(), sortable: true },
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
					className="p-2 border rounded w-full md:w-1/3"
				/>

				{/* <select
					value={departmentFilter}
					onChange={(e) => setDepartmentFilter(e.target.value)}
					className="p-2 border rounded w-full md:w-1/3"
				>
					<option value="">Tous les départements</option>
					{departments.map((d, i) => (
						<option key={`${d}-${i}`} value={d}>{d}</option>
					))}
				</select>

				<select
					value={regionFilter}
					onChange={(e) => setRegionFilter(e.target.value)}
					className="p-2 border rounded w-full md:w-1/3"
				>
					<option value="">Toutes les régions</option>
					{regions.map((r, i) => (
						<option key={`${r}-${i}`} value={r}>{r}</option>
					))}
				</select> */}
			</div>

			<div className="mb-4 text-right">
				<button
					onClick={resetFilters}
					className="p-2 bg-gray-300 hover:bg-gray-400 text-sm rounded"
				>
					Réinitialiser les filtres
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
