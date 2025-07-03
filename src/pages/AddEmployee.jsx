
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import { Modal } from '@antonin/react-smart-modal';
import '@antonin/react-smart-modal/style.css';

const AddEmployee = () => {
	const dispatch = useDispatch();
	const [modalOpen, setModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		// Ajoute d'autres champs ici si nécessaire
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addEmployee(formData));
		setModalOpen(true);
		setFormData({ firstName: '', lastName: '' });
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
