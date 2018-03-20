import { promisify } from 'util'
import { readFile } from 'fs'

const readFilePromise = promisify(readFile)

;(async () => {
  const source = await readFilePromise(__filename, 'utf-8')
  console.log('Successfully read source file using async/await:')
  console.log(source)
})()
