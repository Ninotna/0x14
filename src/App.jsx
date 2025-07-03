import React from 'react';
import AddEmployee from './pages/AddEmployee';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">HRnet</h1>
        <nav className="mt-2">
          <Link to="/employees" className="text-blue-600 underline">
            Voir la liste des employés
          </Link>
        </nav>
      </header>
      <AddEmployee />
    </div>
  );
};

export default App;
