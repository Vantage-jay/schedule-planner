import { useState } from 'react'

function TaskInput({ onAdd }) {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const [priority, setPriority] = useState('medium')

  const handleAdd = () => {
    if (!text.trim()) return
    onAdd({
      text: text.trim(),
      time: time || null,
      priority,
      createdAt: new Date().toISOString(),
    })
    setText('')
    setTime('')
    setPriority('medium')
  }

  return (
    <div className="bg-[#16161a] border border-[#222228] rounded-2xl p-5 mb-6">

      {/* Text Input */}
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        placeholder="What do you need to do today?"
        className="w-full bg-transparent text-white placeholder-gray-600 text-sm outline-none mb-4"
      />

      {/* Bottom Row */}
      <div className="flex items-center gap-3 flex-wrap">

        {/* Time */}
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          className="bg-[#1e1e24] border border-[#2a2a30] text-gray-400 text-xs rounded-lg px-3 py-2 outline-none colorscheme-dark"
        />

        {/* Priority */}
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="bg-[#1e1e24] border border-[#2a2a30] text-gray-400 text-xs rounded-lg px-3 py-2 outline-none"
        >
          <option value="low">🟢 Low</option>
          <option value="medium">🟡 Medium</option>
          <option value="high">🔴 High</option>
        </select>

        {/* Add Button */}
        <button
          onClick={handleAdd}
          className="ml-auto bg-white text-gray-900 font-semibold text-sm px-5 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
        >
          + Add Task
        </button>

      </div>
    </div>
  )
}

export default TaskInput