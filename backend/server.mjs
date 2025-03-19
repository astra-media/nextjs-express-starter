import express from 'express'
import next from 'next'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'
import features from './data/features.mjs'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Middleware
  server.use(express.json())
  server.use(cors())
  server.use(bodyParser.json())
  server.use(morgan('dev'))

  // Example API route in Express
  server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello Z!' })
  })

  // Custom route handling
  server.get('/custom/:id', (req, res) => {
    return app.render(req, res, '/custom', { id: req.params.id })
  })

  // Serve static files using __dirname
  server.use('/static', express.static(path.join(__dirname, 'public')))

  server.get('/api/features', (req, res) => {
    res.send(features)
  })

  // Default Next.js request handler
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
})
