const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Routes (we will add these next)
// app.use('/api/tasks', taskRoutes)
// app.use('/api/calendar', calendarRoutes)
// app.use('/api/ai', aiRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})