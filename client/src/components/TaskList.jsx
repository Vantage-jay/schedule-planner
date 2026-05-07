const PRIORITY_COLORS = {
  low: '#6BCB77',
  medium: '#FFD93D',
  high: '#FF6B6B',
}

function TaskList({ tasks, onToggle, onDelete }) {
  const pending = tasks.filter(t => !t.done)
  const done = tasks.filter(t => t.done)

  if (tasks.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-4xl mb-4">✦</p>
        <p className="text-gray-600 text-sm">No tasks yet. Add something above.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Pending Tasks */}
      {pending.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}

      {/* Done Tasks */}
      {done.length > 0 && (
        <div className="mt-8">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">
            Completed
          </p>
          {done.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              faded
            />
          ))}
        </div>
      )}
    </div>
  )
}

function TaskCard({ task, onToggle, onDelete, faded }) {
  const formatTime = (time) => {
    if (!time) return null
    const [h, m] = time.split(':').map(Number)
    const suffix = h >= 12 ? 'PM' : 'AM'
    const hour = h % 12 || 12
    return `${hour}:${m.toString().padStart(2, '0')} ${suffix}`
  }

  return (
    <div
      className="flex items-start gap-4 p-4 rounded-xl border mb-3 transition-all duration-200"
      style={{
        background: faded ? '#111113' : '#16161a',
        borderColor: faded ? '#1a1a1e' : '#222228',
        borderLeft: `3px solid ${faded ? '#2a2a30' : PRIORITY_COLORS[task.priority]}`,
        opacity: faded ? 0.5 : 1,
      }}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(task.id)}
        className="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200"
        style={{
          borderColor: task.done ? PRIORITY_COLORS[task.priority] : '#333',
          background: task.done ? PRIORITY_COLORS[task.priority] : 'transparent',
          color: '#0f0f11',
          fontSize: 11,
        }}
      >
        {task.done ? '✓' : ''}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className="text-sm text-white"
          style={{ textDecoration: task.done ? 'line-through' : 'none', color: task.done ? '#444' : '#ddd' }}
        >
          {task.text}
        </p>
        {task.time && (
          <p className="text-xs mt-1" style={{ color: PRIORITY_COLORS[task.priority] }}>
            ⏱ {formatTime(task.time)}
          </p>
        )}
      </div>

      {/* Delete */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-700 hover:text-red-500 transition-colors duration-200 text-lg leading-none"
      >
        ×
      </button>
    </div>
  )
}

export default TaskList