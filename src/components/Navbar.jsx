import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg hover:underline">
        HRNet
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Accueil
        </Link>
        <Link to="/employees" className="hover:underline">
          Liste des employés
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
