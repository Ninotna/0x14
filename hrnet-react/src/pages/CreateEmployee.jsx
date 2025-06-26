import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';

function CreateEmployee()
{
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthDate, setBirthDate] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [department, setDepartment] = useState(null);
	const [state, setState] = useState(null);

	const departments = [
		{ value: 'Sales', label: 'Sales' },
		{ value: 'Marketing', label: 'Marketing' },
		{ value: 'Engineering', label: 'Engineering' },
		{ value: 'Human Resources', label: 'Human Resources' },
		{ value: 'Legal', label: 'Legal' }
	];

	const states = [
		{ value: 'CA', label: 'California' },
		{ value: 'TX', label: 'Texas' },
		{ value: 'NY', label: 'New York' }
	];

	function handleSubmit(e)
	{
		e.preventDefault();
		console.log({
			firstName, lastName, birthDate, startDate, department, state
		});
		// Enregistrer les données plus tard ici
	}

	return (
		<main>
			<h1>Créer un employé</h1>
			<form onSubmit={handleSubmit}>
				<label>Prénom</label>
				<input value={firstName} onChange={(e) => setFirstName(e.target.value)} />

				<label>Nom</label>
				<input value={lastName} onChange={(e) => setLastName(e.target.value)} />

				<label>Date de naissance</label>
				<DatePicker
					selected={birthDate}
					onChange={(date) => setBirthDate(date)}
					dateFormat="dd/MM/yyyy"
				/>

				<label>Date d'embauche</label>
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					dateFormat="dd/MM/yyyy"
				/>

				<label>Département</label>
				<Select options={departments} onChange={setDepartment} />

				<label>État</label>
				<Select options={states} onChange={setState} />

				<button type="submit">Enregistrer</button>
			</form>
		</main>
	);
}

export default CreateEmployee;
