const sharp = require('sharp')
const plane = Buffer.from(require('./plane.json').data)

module.exports = async (req, res) => {
  const { rot = 0, alt = 3000, hex, fmt } = req.query

  res.setHeader('content-type', `image/${fmt || 'png'}`)
  // TODO: actually figure these out based on data
  const img = await sharp(plane)
    .resize(16 * (alt / 3000) | 0)
    .rotate(rot | 0, { background: "transparent" })
    .toBuffer()
  res.send(img)
}