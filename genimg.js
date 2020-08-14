const { readFile, writeFile } = require('fs').promises

const run = async () => {
  const data = await readFile(`${__dirname}/plane.png`)
  writeFile(`${__dirname}/api/plane.json`, JSON.stringify(data))
}

run()