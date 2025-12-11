import Logo from './Logo'

export default function TopNav() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Logo size={32} />
          <nav className="hidden md:flex items-center gap-6 text-gray-700">
            <a href="#" className="hover:text-gray-900">app</a>
            <a href="#" className="hover:text-gray-900">industry</a>
            <a href="#" className="hover:text-gray-900">community</a>
            <a href="#" className="hover:text-gray-900">price</a>
            <a href="#" className="hover:text-gray-900">help</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-3 py-2 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50">Log in</button>
          <button className="px-4 py-2 rounded-md bg-purple-700 text-white hover:bg-purple-800">Try it for free</button>
        </div>
      </div>
    </header>
  )
}
