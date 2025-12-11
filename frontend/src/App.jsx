import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { UserGroupIcon, Cog8ToothIcon, CubeIcon, ArchiveBoxIcon, ClipboardDocumentListIcon, HomeIcon } from '@heroicons/react/24/outline'
import CRM from './modules/crm/CRM'
import Admin from './modules/admin/Admin'
import Manufacturing from './modules/manufacturing/Manufacturing'
import Inventory from './modules/inventory/Inventory'
import ProjectManagement from './modules/projects/ProjectManagement'
import Deshboard from './modules/deshboard/Deshboard'
import Logo from './components/Logo'
import './App.css'

function Layout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-[220px_1fr]">
      <aside className="bg-gray-100 border-r p-4">
        <div className="mb-4">
          <Logo size={36} />
        </div>
        <nav className="flex flex-col gap-2">
          <NavLink to="/deshboard" className={({ isActive }) => `px-3 py-2 rounded flex items-center gap-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}><HomeIcon className="w-5 h-5"/> Deshboard</NavLink>
          <NavLink to="/crm" className={({ isActive }) => `px-3 py-2 rounded flex items-center gap-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}><UserGroupIcon className="w-5 h-5"/> CRM</NavLink>
          <NavLink to="/admin" className={({ isActive }) => `px-3 py-2 rounded flex items-center gap-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}><Cog8ToothIcon className="w-5 h-5"/> Admin</NavLink>
          <NavLink to="/manufacturing" className={({ isActive }) => `px-3 py-2 rounded flex items-center gap-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}><CubeIcon className="w-5 h-5"/> Manufacturing</NavLink>
          <NavLink to="/inventory" className={({ isActive }) => `px-3 py-2 rounded flex items-center gap-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}><ArchiveBoxIcon className="w-5 h-5"/> Inventory</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `px-3 py-2 rounded flex items-center gap-2 ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-50'}`}><ClipboardDocumentListIcon className="w-5 h-5"/> Project Management</NavLink>
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
          <Route path="/deshboard" element={<Deshboard />} />
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
