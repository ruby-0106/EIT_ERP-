import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import CRM from './modules/crm/CRM'
import Admin from './modules/admin/Admin'
import Manufacturing from './modules/manufacturing/Manufacturing'
import Inventory from './modules/inventory/Inventory'
import ProjectManagement from './modules/projects/ProjectManagement'
import './App.css'

function Layout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-[220px_1fr]">
      <aside className="bg-gray-100 border-r p-4">
        <h2 className="text-lg font-semibold mb-4">EIT ERP</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/crm" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}>CRM</NavLink>
          <NavLink to="/admin" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}>Admin</NavLink>
          <NavLink to="/manufacturing" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}>Manufacturing</NavLink>
          <NavLink to="/inventory" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}>Inventory</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}>Project Management</NavLink>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CRM />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/projects" element={<ProjectManagement />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
