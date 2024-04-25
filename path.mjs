import path from 'path';

/** 1.1 path.join  将多个路径拼接成一个相对路径 (或绝对路径，取决于第一个路径是否为根路径)。*/

console.log(path.join('a', 'b', 'c')) // a/b/c
console.log(path.join(process.cwd(), '/hello', 'world'))

/** 1.2 path.resolve 将多个路径拼接成一个绝对路径，返回一个解析后的绝对路径。 */
/**即如果传入相对路径，会以当前工作目录为基准，计算出绝对路径，如果传入了绝对路径，则以传入的绝对路径为基准。 */
console.log('=== path.resolve ===')
console.log(path.resolve('a', 'b', 'c'))
console.log(path.resolve('/hello', 'world', './a', 'b'))

/** 1.3 path.dirname 返回路径中的目录名。*/
console.log('=== path.dirname ===')
console.log(path.dirname(process.cwd()))
console.log(path.dirname('/a/b/c'))

/** 1.4 path.basename 返回路径中的文件名，并可选地去除给定的文件扩展名。 */
console.log('=== path.basename ===')
console.log(path.basename('a/b/c.js'))
console.log(path.basename('a/b/c.js', '.js'))
console.log(path.basename('a/b/c.js', 'js'))
console.log(path.basename('a/b/c.js', 's'))

/** 1.5 path.extname 获取路径中的文件扩展名。*/
console.log('=== path.extname ===')
console.log(path.extname('a/b/c.js'))
console.log(path.extname('a/b/c'))
console.log(path.extname('a/b/c.d.ts'))
console.log(path.extname('a/b/.npmrc'))

/** 1.6 path.normalize 
 * 主要用于规范化路径，将路径中的不规范部分调整为标准格式，可以用于处理以下问题：
    路径中的斜杠数量过多的情况。
    路径中存在的 ./ 或 ../，即相对路径的情况。
*/
console.log('=== path.normalize ===')
console.log(path.normalize('a//b//c/d/e/..'))

/** 1.7 path.parse  用于解析文件路径，将其拆分为一个对象。*/
console.log('=== path.parse ===')
console.log(path.parse('/home/user/dir/file.txt'))

/** 1.8 path.sep 返回当前系统文件路径使用的分隔符。 */
/** 例如在 Windows 操作系统上，path.sep 的值为反斜杠 \，而在 Unix 操作系统上则为正斜杠 /。 */
console.log('=== path.sep ===',)
console.log('foo/bar/baz'.split(path.sep)) //[ 'foo/bar/baz' ]
const dir = 'users'
const file = 'index.html'
console.log(dir + path.sep + file) // users\index.html

// 避免因为不同操作系统使用不同的文件路径分隔符而导致的错误。更推荐使用 path.join 方法来拼接文件路径：
// 在 Unix 操作系统上输出：users/index.html
// 在 Windows 操作系统上输出：users\index.html
console.log(path.join(dir, file));