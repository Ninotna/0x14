import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Modal } from '@dev87/react-smart-modal';
import '@dev87/react-smart-modal/style.css';
import { addEmployee } from '../redux/employeesSlice';
import regions from '../data/regions-fr.json';
import departments from '../data/departments-fr.json';
import SelectMenu from '../components/SelectMenu';

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
	<main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
		<div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-8">
			<h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
				Ajouter un employé
			</h1>

			<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					placeholder="Prénom"
					className="input"
					required
				/>
				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Nom"
					className="input"
					required
				/>

				<DatePicker
					selected={formData.dateOfBirth}
					onChange={(date) =>
						setFormData((prev) => ({ ...prev, dateOfBirth: date }))
					}
					className="input"
					placeholderText="Date de naissance"
					required
				/>
				<DatePicker
					selected={formData.startDate}
					onChange={(date) =>
						setFormData((prev) => ({ ...prev, startDate: date }))
					}
					className="input"
					placeholderText="Date d'embauche"
					required
				/>

				<input
					type="text"
					name="street"
					value={formData.street}
					onChange={handleChange}
					placeholder="Adresse"
					className="input col-span-2"
					required
				/>
				<input
					type="text"
					name="city"
					value={formData.city}
					onChange={handleChange}
					placeholder="Ville"
					className="input"
					required
				/>
				<input
					type="text"
					name="zipCode"
					value={formData.zipCode}
					onChange={handleChange}
					placeholder="Code postal"
					className="input"
					required
				/>

				<SelectMenu
					label="Région"
					value={formData.region}
					onChange={(value) =>
						setFormData((prev) => ({ ...prev, region: value }))
					}
					options={regions.map((r) => ({ label: r.name, value: r.name }))}
				/>

				<SelectMenu
					label="Département"
					value={formData.department}
					onChange={(value) =>
						setFormData((prev) => ({ ...prev, department: value }))
					}
					options={departments.map((d) => ({ label: d.name, value: d.name }))}
				/>

				<div className="col-span-2 text-center mt-4">
					<button
						type="submit"
						className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded transition duration-200"
					>
						Enregistrer
					</button>
				</div>
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
					className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
					onClick={() => setModalOpen(false)}
				>
					Fermer
				</button>
			</Modal>
		</div>
	</main>
);

};

export default AddEmployee;
