import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import { Modal } from '@antonin/react-smart-modal';
import '@antonin/react-smart-modal/style.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { states } from '../data/states';
import { departments } from '../data/departments';

const AddEmployee = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [modalOpen, setModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: null,
		startDate: null,
		street: '',
		city: '',
		state: '',
		zipCode: '',
		department: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

const handleSubmit = (e) => {
	e.preventDefault();
	const formattedData = {
		...formData,
		dateOfBirth: formData.dateOfBirth?.toLocaleDateString(),
		startDate: formData.startDate?.toLocaleDateString()
	};
	dispatch(addEmployee(formattedData));
	setModalOpen(true);
	setTimeout(() => navigate('/employees'), 500);
};


	return (
		<div className="p-6">
			<h1 className="text-xl font-semibold mb-4">Ajouter un employé</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Prénom" className="border p-2 w-full" required />
				<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Nom" className="border p-2 w-full" required />
				<DatePicker selected={formData.dateOfBirth} onChange={(date) => setFormData((prev) => ({ ...prev, dateOfBirth: date }))} className="border p-2 w-full" placeholderText="Date de naissance" required />
				<DatePicker selected={formData.startDate} onChange={(date) => setFormData((prev) => ({ ...prev, startDate: date }))} className="border p-2 w-full" placeholderText="Date d'embauche" required />
				<input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Adresse" className="border p-2 w-full" required />
				<input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Ville" className="border p-2 w-full" required />
				<select name="state" value={formData.state} onChange={handleChange} className="border p-2 w-full" required>
					<option value="">-- État --</option>
					{states.map(({ name, abbreviation }) => (
						<option key={abbreviation} value={abbreviation}>{name}</option>
					))}
				</select>
				<input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Code postal" className="border p-2 w-full" required />
				<select name="department" value={formData.department} onChange={handleChange} className="border p-2 w-full" required>
					<option value="">-- Département --</option>
					{departments.map((dept) => (
						<option key={dept} value={dept}>{dept}</option>
					))}
				</select>
				<button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Enregistrer</button>
			</form>

			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Employé ajouté" description="Le dossier a bien été enregistré." size="sm" position="center">
				<button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setModalOpen(false)}>Fermer</button>
			</Modal>
		</div>
	);
};

export default AddEmployee;
