import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import { Modal } from '@antonin/react-smart-modal';
import '@antonin/react-smart-modal/style.css';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [modalOpen, setModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		// Autres champs si besoin
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const employeeData = {
			...formData,
			id: Date.now(), // Exemple de génération d'ID
		};

		dispatch(addEmployee(employeeData));
		setModalOpen(true);

		setTimeout(() => {
			navigate('/employees');
		}, 500);
	};

	return (
		<div className="p-6">
			<h1 className="text-xl font-semibold mb-4">Ajouter un employé</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					placeholder="Prénom"
					className="border p-2 w-full"
					required
				/>
				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Nom"
					className="border p-2 w-full"
					required
				/>
				<button
					type="submit"
					className="bg-green-600 text-white px-4 py-2 rounded"
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
					className="bg-blue-600 text-white px-4 py-2 rounded"
					onClick={() => setModalOpen(false)}
				>
					Fermer
				</button>
			</Modal>
		</div>
	);
};

export default AddEmployee;
