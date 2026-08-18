import fs from 'fs'
import path from 'path'

const routes = [
  'om',
  'projekt',
  'erfarenhet',
  'kontakt',
]

const dist = path.resolve('dist')
const index = path.join(dist, 'index.html')

for (const route of routes) {
  const directory = path.join(dist, route)

  fs.mkdirSync(directory, { recursive: true })
  fs.copyFileSync(index, path.join(directory, 'index.html'))

  console.log(`Created /${route}/index.html`)
}