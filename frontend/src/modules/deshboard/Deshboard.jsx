import { Link } from 'react-router-dom'
import TopNav from '../../components/TopNav'
 

const modules = [
  { title: 'Accounting', to: '#' },
  { title: 'Project', to: '/projects' },
  { title: 'Manufacturing', to: '/manufacturing' },
  { title: 'Inventory', to: '/inventory' },
  { title: 'Sales', to: '#' },
  { title: 'Helpdesk', to: '#' },
  { title: 'CRM', to: '/crm' },
  { title: 'Admin', to: '/admin' },
  { title: 'Website', to: '#' },
  { title: 'Social Marketing', to: '#' },
  { title: 'Chat', to: '#' },
  { title: 'Email Marketing', to: '#' },
]

function Tile({ title, to }) {
  const content = (
    <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform">
      <div className="text-sm font-medium text-gray-800 text-center">{title}</div>
    </div>
  )
  return to && to !== '#' ? <Link to={to}>{content}</Link> : content
}

export default function Deshboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <TopNav />
      <section className="relative mt-6 sm:mt-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-[42px] md:text-[60px] font-bold leading-tight" style={{ fontFamily: 'Segoe Script, cursive' }}>
              All businesses in <span className="relative inline-block">
                <span className="relative z-10">one place</span>
                <span className="absolute -inset-x-1 -bottom-1 h-4 bg-amber-300/70 rounded-md -rotate-1" />
              </span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg">Easy to use, meets your needs, and at an affordable price!</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/crm" className="px-5 py-3 rounded-full bg-purple-700 text-white hover:bg-purple-800 transition">Get started now — it's free!</Link>
              <button className="px-5 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-50 transition">Meet with the consultant</button>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-amber-50 text-amber-800 rounded-lg border border-amber-200">US$ 13.50 per user</div>
          </div>
        </div>
      </section>

      <section id="apps" className="relative mt-10">
        <div className="absolute inset-x-0 -top-10 h-56 bg-gray-50 rounded-[40px]" />
        <div className="relative grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-5">
          {modules.map((m) => (
            <Tile key={m.title} title={m.title} to={m.to} />
          ))}
        </div>
      </section>
    </div>
  )
}
