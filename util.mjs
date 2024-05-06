import util from 'util';

/** 1.1 对象转字符串
 *  util.inspect(object, [options])，常与 console.log 搭配使用，可以友好的将对象转为字符串，打印更加友好。
 */
// 复杂对象
const testObj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4, 5],
      e: () => {
        console.log(6)
      }
    },
    f: '7',
    g: [{ 8: [{ 9: 10 }] }],
    h() {
      console.log(11)
    }
}

console.log(typeof testObj)
console.log(JSON.stringify(testObj, null, 2))
console.log(typeof util.inspect(testObj, { depth: Math.Infinity }))

/** 1.2 格式化字符串
 *  util.format(format[, ...args]) 类似于 C 语言中的使用 printf 方法的传参，
 *  该方法支持占位符 (%s、%d、%j 等) 来表示不同类型的变量，支持传入多个参数。
 */
console.log(util.format('%s:%s', 'foo', 'bar')) // 'foo:bar'
console.log(util.format('%d + %d = %d', 1, 2, 3)) // '1 + 2 = 3'

console.log(
  util.format('My name is %j', { firstName: 'John', lastName: 'Doe' })
)
// 'My name is {"firstName":"John","lastName":"Doe"}'

/**
 * 1.3 promise 转回调
 * util.callbackify 可以将一个返回 promise 的函数转为回调形式的函数。
 */
function foo() {
  return Promise.resolve('hello world')
}

function bar() {
  return Promise.reject(new Error('error reject'))
}

const callbackFoo = util.callbackify(foo)
const callbackBar = util.callbackify(bar)

callbackFoo((err, ret) => {
  if (err) {
    console.log('err', err)
    return
  }
  console.log(ret)
})

callbackBar((err, ret) => {
  if (err) {
    console.log('err', err)
    return
  }
  console.log(ret)
})

import fs from 'fs'
/**
 * 1.4 回调转 promise
 * util.promisify(original) 用于将常规带有回调函数的方法转为返回 Promise 对象的方法。
 */
// 将 fs.readFile 方法转换为返回 Promise 的函数
const fsRead = util.promisify(fs.readFile)
// 使用 Promise 的方式读取文件内容并输出
fsRead('./fs/test.txt').then((data) => {
  console.log(data.toString())
})

/**
 * 1.5 判断数据类型
 */
// 判断数据类型
console.log(util.isArray([])) // true
console.log(util.isRegExp(/some regexp/)) // true
console.log(util.isDate(new Date())) // true
console.log(util.isPrimitive(null)) // true
console.log(util.isPrimitive(1)) // true
