import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import { Modal } from '@dev87/react-smart-modal';
import '@dev87/react-smart-modal';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import regions from '../data/regions-fr.json';
import departments from '../data/departments-fr.json';
import SelectMenu from '../components/SelectMenu';
@import "tailwindcss";

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
		zipCode: '',
		department: '',
		region: ''
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
	<div className="max-w-3xl mx-auto mt-10 px-6 py-8 bg-white rounded-xl shadow-md">
		<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
			Ajouter un employé
		</h1>

		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					placeholder="Prénom"
					className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Nom"
					className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
				<DatePicker
					selected={formData.dateOfBirth}
					onChange={(date) =>
						setFormData((prev) => ({ ...prev, dateOfBirth: date }))
					}
					className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholderText="Date de naissance"
					required
				/>
				<DatePicker
					selected={formData.startDate}
					onChange={(date) =>
						setFormData((prev) => ({ ...prev, startDate: date }))
					}
					className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
					placeholderText="Date d'embauche"
					required
				/>
				<input
					type="text"
					name="street"
					value={formData.street}
					onChange={handleChange}
					placeholder="Adresse"
					className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-full"
					required
				/>
				<input
					type="text"
					name="city"
					value={formData.city}
					onChange={handleChange}
					placeholder="Ville"
					className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
				<input
					type="text"
					name="zipCode"
					value={formData.zipCode}
					onChange={handleChange}
					placeholder="Code postal"
					className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>

				<div className="md:col-span-2">
					<SelectMenu
						label="-- Région française --"
						value={formData.region}
						onChange={(value) =>
							setFormData((prev) => ({ ...prev, region: value }))
						}
						options={regions.map((r) => ({
							label: r.name,
							value: r.name
						}))}
					/>
				</div>

				<div className="md:col-span-2">
					<SelectMenu
						label="-- Département français --"
						value={formData.department}
						onChange={(value) =>
							setFormData((prev) => ({ ...prev, department: value }))
						}
						options={departments.map((d) => ({
							label: d.name,
							value: d.name
						}))}
					/>
				</div>
			</div>

			<button
				type="submit"
				className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition"
			>
				Enregistrer
			</button>
		</form>

		<Modal
			isOpen={modalOpen}
			onClose={() => setModalOpen(false)}
			title="Employé ajouté"
			description="Le dossier a bien été enregistré."
			size="sm"
			position="center"
		>
			<button
				className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
				onClick={() => setModalOpen(false)}
			>
				Fermer
			</button>
		</Modal>
	</div>
);

};

export default AddEmployee;
