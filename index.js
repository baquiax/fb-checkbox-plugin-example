const http = require('http')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 8080
const appId = process.env.APP_ID
const pageId = process.env.PAGE_ID
const origin = process.env.ORIGIN

fs.readFile('./index.html', (error, content) => {
  const html = String(content)
  http.createServer((request, response) => {
    response.writeHead(200, {
      'Content-type': 'text/html',
    })
    const uid = `ref_${new Date().getTime()}`
    const replaced = html
      .replace(/\{uid\}/g, uid)
      .replace(/\{appId\}/g, appId)
      .replace(/\{pageId\}/g, pageId)
      .replace(/\{origin\}/g, origin)

    response.end(replaced, 'utf-8')
    console.log(`page served for: uid=${uid}, appId=${appId}, pageId=${pageId}, origin=${origin}`)
  }).listen(port)
})
