import { useState } from 'react'

function Sidebar() {
  const [active, setActive] = useState('today')

  const menu = [
    { id: 'today', label: 'My Day', icon: '☀️' },
    { id: 'upcoming', label: 'Upcoming', icon: '📅' },
    { id: 'calendar', label: 'Calendar', icon: '🗓️' },
    { id: 'ai', label: 'AI Assistant', icon: '🤖' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="w-64 min-h-screen bg-[#111113] border-r border-[#1e1e22] p-6 hidden md:flex flex-col">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white"
          style={{ fontFamily: 'Syne, sans-serif' }}>
          PlannerAI
        </h1>
        <p className="text-xs text-gray-600 mt-1">Personal Schedule Assistant</p>
      </div>

      {/* Menu */}
      <nav className="flex-1">
        {menu.map(item => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-sm font-medium transition-all duration-200 ${
              active === item.id
                ? 'bg-white text-gray-900'
                : 'text-gray-500 hover:text-white hover:bg-[#1a1a1e]'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* User */}
      <div className="border-t border-[#1e1e22] pt-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-[#222228] flex items-center justify-center text-sm">
            👤
          </div>
          <div>
            <p className="text-sm text-white font-medium">My Account</p>
            <p className="text-xs text-gray-600">Free Plan</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar