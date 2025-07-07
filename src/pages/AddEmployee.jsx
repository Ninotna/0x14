import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Modal } from '@dev87/react-smart-modal'
import 'react-datepicker/dist/react-datepicker.css'
import '@dev87/react-smart-modal/style.css'
import { addEmployee } from '../redux/employeesSlice'
import regions from '../data/regions-fr.json'
import departments from '../data/departments-fr.json'
import SelectMenu from '../components/SelectMenu'
import DateFieldRow from '../components/DateFieldRow'
import validators from '../services/validators'
import FieldError from '../components/FieldError'
import TailwindCheck from '../components/TailWindCheck'

const services = [
  { label: 'RH', value: 'RH' },
  { label: 'Finance', value: 'Finance' },
  { label: 'IT', value: 'IT' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Direction', value: 'Direction' },
]

const AddEmployee = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    zipCode: '',
    department: '',
    region: '',
    service: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    const error = validators[name] ? validators[name](value) : ''
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const closeAndRedirect = () => {
    setModalOpen(false)
    navigate('/employees')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    Object.entries(formData).forEach(([name, value]) => {
      if (validators[name]) {
        const error = validators[name](value)
        if (error) {
          newErrors[name] = error
        }
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const formattedData = {
      ...formData,
      dateOfBirth: formData.dateOfBirth?.toLocaleDateString(),
      startDate: formData.startDate?.toLocaleDateString(),
    }

    dispatch(addEmployee(formattedData))
    setModalOpen(true)
    // setTimeout(() => navigate('/employees'), 3000)
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-8 relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Ajouter un employé
        </h1>
        {/* <TailwindCheck /> */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Prénom"
              className="input"
              required
            />
            <FieldError message={errors.firstName} />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nom"
              className="input"
              required
            />
            <FieldError message={errors.lastName} />
          </div>

          <DateFieldRow
            label1="Date de naissance"
            label2="Date d'embauche"
            value1={formData.dateOfBirth}
            value2={formData.startDate}
            onChange1={(d) =>
              setFormData((prev) => ({ ...prev, dateOfBirth: d }))
            }
            onChange2={(d) =>
              setFormData((prev) => ({ ...prev, startDate: d }))
            }
          />

          <div className="col-span-2">
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Adresse"
              className="input w-full"
              required
            />
            <FieldError message={errors.street} />
          </div>
          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Ville"
              className="input"
              required
            />
            <FieldError message={errors.city} />
          </div>
          <div>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Code postal"
              className="input"
              required
            />
            <FieldError message={errors.zipCode} />
          </div>

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

          <SelectMenu
            label="Service"
            value={formData.service}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, service: value }))
            }
            options={services}
          />
          <FieldError message={errors.service} />

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
          onClose={closeAndRedirect}
          title="Employé ajouté"
          description="Le dossier a bien été enregistré."
          size="xl"
          position="center"
        >
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded"
            onClick={closeAndRedirect}
          >
            Fermer
          </button>
        </Modal>
      </div>
    </main>
  )
}

export default AddEmployee
