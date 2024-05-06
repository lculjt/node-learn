import http from 'http'

const server = http.createServer((req, res) => {
  /** 4.1 设置响应状态码  ① 正常情况下，默认 200 ② 资源不存在 404 ③ 运行发现错误 500 */
  res.statusCode = 200
  /** 4.2 设置响应头 */
  res.setHeader('Content-Type', 'text/html')
  /** 4.3 设置响应的内容  可以通过 res.write 和 res.end 设置，*/
  res.end('<h1>Hello, World!</h1>')
})
server.listen(4275, () => {
  console.log('Server running at http://127.0.0.1:4275/')
})