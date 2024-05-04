import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 3000
import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import chokidar from 'chokidar'

// Watch "listaData.json" for changes
const watcher = chokidar.watch('listaData.json', { persistent: true })

watcher.on('change', (path) => {
  console.log(`File ${path} has been changed. Reloading database.`)
  db.read() // Reload the database
})

const db = new LowSync(new JSONFileSync('listaData.json'), {
  names: [],
})
// Set defaults
db.read()
db.data = db.data || { names: [] }
db.write()

app.use(cors())
app.use(express.json())

app.post('/addName', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).send({ error: 'Name is required' })
  }
  console.log('Adding name:', name)
  console.log('Data:', db.data.names)
  console.log('Names:', db.data.names)
  db.data.names.push({ name, completed: false })
  db.write()
  res.status(201).send({ message: 'Name added' })
})

app.patch('/toggleName', (req, res) => {
  const { name } = req.body
  const nameEntry = db.data.names.find((entry) => entry.name === name)
  if (!nameEntry) {
    return res.status(404).send({ error: 'Name not found' })
  }
  nameEntry.completed = !nameEntry.completed
  db.write()
  res.send({ message: 'Name toggled' })
})

app.get('/names', (req, res) => {
  res.send(db.data.names)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
