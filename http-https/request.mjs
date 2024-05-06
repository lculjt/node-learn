import http from 'http'

const server = http.createServer((req, res) => {
    // 获取请求的路径和方法
    /** 3.1 请求路径和方法 */
    const { url, method } = req
    /** 3.2 query 参数解析 */
    const query = Object.fromEntries(
        new URL(url, 'http://localhost').searchParams
    )
    /** 3.3 body 参数解析 */
    let body = []
    req
    .on('data', (chunk) => {
        body.push(chunk)
    })
    .on('end', () => {
        body = Buffer.concat(body).toString()
        body = JSON.parse(body)
        console.log('body', body)
    })
    console.log(method, url, query) //GET /hello
    /** 3.4 headers 参数 */
    console.log('headers', req.headers)
    // 省略其它代码...
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
})
server.listen(4275, () => {
  console.log('Server running at http://127.0.0.1:4275/')
})

fetch('http://127.0.0.1:4275?hello=world', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'mx',
    age: 18,
  })
})