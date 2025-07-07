import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddEmployee from './pages/AddEmployee'
import EmployeeList from './pages/EmployeeList'
import MainLayout from './layouts/MainLayout'
import TailwindCheck from './components/TailWindCheck'

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<AddEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/test/tailwind" element={<TailwindCheck />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
