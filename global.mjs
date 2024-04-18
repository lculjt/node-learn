import { fileURLToPath } from 'url'
import { dirname } from 'path'

/** ESmodules 获取 __filename __dirname */
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log(import.meta);
console.log('__filename', __filename)
console.log('__dirname', __dirname)

/** 观察全局对象 */
// console.log(Object.getOwnPropertyNames(global))

/** process.argv 返回一个数组，包含启动 Node.js 进程时传递的命令行参数。*/
console.log(process.argv);
// [
//     'D:\\nvm\\nodejs\\node.exe',  node在机器上的位置
//     'D:\\learn-doc\\learn-doc\\node-learn\\global.mjs' 执行文件的绝对路径
//     'woshicanshu'   用户传递的自定义参数
// ]

/** 获取当前工作目录的绝对路径。 */
console.log(process.cwd()) // D:\learn-doc\learn-doc\node-learn

/** 获取当前执行环境的环境变量 (对象形式)。 */
process.env.NODE_ENV = 'production';
console.log(process.env)

/** 获取当前 Node 版本。 */
console.log(process.version)

/** 终止 Node.js 进程，如果指定了 code 参数，则使用该参数作为退出状态码。 */
console.log('hello')
// process.exit()
// 下面这行代码不会执行
// console.log('world')

console.log(process.pid);  //返回进程的 PID (进程 ID)；
console.log(process.platform);  //返回运行 Node.js 的操作系统平台；
console.log(process.arch);//获取 CPU 架构信息。

/** 标准输出流，常用 process.stdout.write 进行数据写入。 */

process.stdout.write('hello')
process.stdout.write(' ')
process.stdout.write('world')
process.stdout.write('\n')

/** process.stdin：用于从标准输入流 (stdin) 读取数据。 */

// 监听用户输入数据
// process.stdin.on('data', (data) => {
//     if(data == 0) {
//         console.log('exit---');
//         process.exit(0);
//     }
//     console.log(`User input: ${data}`);
// });

/** Buffer 用于处理二进制数据。类似于数组，并提供了一些方便的方法来操作二进制数据。 */
/** 1.创建 Buffer 对象 */
const buf = Buffer.alloc(10); // 创建一个大小为 10 的 Buffer 对象，默认会用 0 填充
const buf2 = Buffer.from('Hello, world!'); // 创建一个包含字符串 'Hello, world!' 的 Buffer 对象
const buf3 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]); // 内容为hello构成的16进制数组 Buffer 对象 
console.log(buf, buf2, buf3);

/** 2.转换内容格式 */
console.log(buf2.toString()); // 输出 'Hello, world!'
// 转为16进制字符串输出
console.log(buf2.toString('hex')); // 输出 '48656c6c6f2c20776f726c6421'（对应的是 'Hello, world!' 的 ASCII 码）
// 转为base64格式输出
console.log(buf2.toString('base64')); // 输出 'SGVsbG8sIHdvcmxkIQ=='
// 转为数组输出
console.log(Array.from(buf2)); // 输出 [
//    72, 101, 108, 108, 111,
//    44,  32, 119, 111, 114,
//   108, 100,  33
// ]

/** 3.写入内容 */
// 创建一个长度为 10 的 Buffer 实例并将它填充为 0
const buf4 = Buffer.alloc(10);
console.log(buf4); // <Buffer 00 00 00 00 00 00 00 00 00 00>
// 将字符串 'Hello' 写入 Buffer 实例的前 5 个字节
buf4.write('Hello');
console.log(buf4, buf4.toString()); //<Buffer 48 65 6c 6c 6f 00 00 00 00 00> Hello

// 将字符串 'world' 写入 Buffer 实例的第 6 个字节开始的位置，由于 'world' 的长度为 5，所以不会覆盖掉之前写入的 'Hello'
buf4.write('world', 5); 
console.log(buf4, buf4.toString()); //<Buffer 48 65 6c 6c 6f 77 6f 72 6c 64> Helloworld

buf4.write('exit');
console.log(buf4, buf4.toString()); // <Buffer 65 78 69 74 6f 77 6f 72 6c 64> exitoworld

/** 4.合并多个 Buffer 对象 */

const buf5 = Buffer.concat([buf2, buf3]);
console.log(buf5.toString()); // Hello, world!hello

/** 5.截取 Buffer 对象 */
const buf6 = buf2.slice(0, 5);
console.log(buf6.toString()); // 输出 'Hello'