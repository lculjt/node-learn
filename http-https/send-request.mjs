// import http from 'http'
import https from 'https'

/** 
 * 1.1 http.get
 */
// https.get(
//     'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
//     (res) => {
//       // 响应内容拼接
//       let content = ''
//       res.on('data', (chunk) => {
//         console.log('-----------------------------------', chunk);
//         content += chunk
//       })
  
//       // 读完对外暴露内容和状态码
//       res.on('end', () => {
//         console.log(JSON.parse(content))
//       })
  
//       res.on('error', (err) => {
//         console.log(err)
//       })
//     }
// )

/** 当然也支持传递额外的参数 (下面介绍另一种写法)。 */
const req = https.get(
    'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
)
  
req.on('response', (res) => {
    // 响应内容拼接
    let content = ''
    res.on('data', (chunk) => {
        // console.log('-----------------------------------', chunk);
        content += chunk
    })
  
    // 读完对外暴露内容和状态码
    res.on('end', () => {
    //   console.log(JSON.parse(content))
    })
  
    res.on('error', (err) => {
    //   console.log(err)
    })
})

/**
 * 1.2 http.request
 */
const url = new URL(
    'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
)

// console.log(url)
// const getReq = https.request(
//     {
//       // 设置请求方法
//       method: 'GET',
//       // http 80 https 443
//       port: 443,
//       hostname: url.hostname,
//       path: url.pathname + url.search
//     },
//     (res) => {
//       let content = ''
//       res.on('data', (chunk) => {
//         content += chunk
//       })
//       res.on('end', () => {
//         console.log('statusCode', res.statusCode)
//         // console.log(content)
//       })
//     }
// )
// 发送请求
// getReq.end()

const postUrl = new URL(
    'https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=3&from=1&aid=2608&uuid=7145810834685003271&spider=0'
)
  
// POST
const postReq = https.request(
    {
      // 设置请求方法
      method: 'POST',
      // http 80 https 443
      port: 443,
      hostname: postUrl.hostname,
      path: postUrl.pathname + postUrl.search,
      headers: {
        'Content-Type': 'application/json'
      }
    },
    (res) => {
      let content = ''
      res.on('data', (chunk) => {
        content += chunk
      })
      res.on('end', () => {
        console.log('statusCode', res.statusCode)
        // console.log(content)
      })
    }
)
// req.write('请求实体')
postReq.write(JSON.stringify({ name: 'xm' }))
postReq.end()


