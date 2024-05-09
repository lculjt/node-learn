import url from 'url';

/** 
 * 1. url.parse
 */
// url.parse 解析 URL 字符串，返回一个解析后的对象。

const testUrl = 'https://www.baidu.com?search=juejin'
console.log(url.parse(testUrl))

/**
 * 2.URL
 */
// url.URL 和全局的 URL 一样，创建一个 URL 实例，提供许多开箱即用的操作。
console.log('url.URL === URL', url.URL === URL)
console.log(new URL(testUrl), new URL(testUrl).searchParams.get('search'))