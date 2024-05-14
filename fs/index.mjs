import fs from 'fs'

// 同步读取
// const syncData = fs.readFileSync('./test.txt', 'utf-8')
// console.log('====sync read====')
// console.log(syncData)

// 回调形式 异步读取
// fs.readFile('./test.txt', 'utf-8', (err, callbackData) => {
//   if (!err) {
//     console.log('====callback read====')
//     console.log(callbackData)
//   }
// })

// promise形式 异步读取
// fs.promises.readFile('./test.txt', 'utf-8').then((promiseData) => {
//   console.log('====promise read====')
//   console.log(promiseData)
// })

// promise 形式还可以是如下写法（常用）
// import fs from 'fs/promises'
// fs.readFile('./test.txt', 'utf-8').then((promiseData) => {
//   console.log('====promise read====')
//   console.log(promiseData)
// })





/** 
 * 1.1 读取文件 
 * fs.readFileSync 基础用法如下：
 *  参数 1：设置要读取的文件路径 (相对或者绝对)；
 *  参数 2：设置读取的编码格式。
 */
const txtContent = fs.readFileSync('./test.txt', 'utf-8')
console.log(txtContent);
// 以二进制形式读取，操作。
const buf = fs.readFileSync('./test.txt');
// 打印Buffer大小
console.log(buf.length)
// 修改前2个字符
buf.write('gg')
// 输出修改后的内容
console.log(buf.toString())

/** 
 * 1.2 写入文件
 * 
 * 基础用法如下 fs.writeFileSync：
 *
 *  参数 1：输出文件路径；
 *  参数 2：输出内容；
 *  参数 3 (可选)：编码格式
 */
// fs.writeFileSync('./newTest.txt', 'hello world')
// 写入二进制文件 (读取一个图片，然后输出到一个新的位置)。
const img = fs.readFileSync('./1.jpg');
console.log(img, Buffer.isBuffer(img), img.length); // <Buffer ff d8 ff e0 00 10 4a 46 12 c0 ... 1790720 more bytes> true 1790770
// fs.writeFileSync('./2.jpg', img, 'binary');

/** 
 * 1.3 获取文件信息
 * 通过 fs.statSync 获取文件或者目录的基本信息。
 */
console.log(fs.statSync('./test.txt'))
//返回的对象上还包含可直接调用的方案，用于判断文件类型。

const fileInfo = fs.statSync('./test.txt')
// 判断是文件还是目录
console.log(fileInfo.isFile(), fileInfo.isDirectory())

const dirInfo = fs.statSync('./test-dir')
// 判断是文件还是目录
console.log(dirInfo.isFile(), dirInfo.isDirectory())

try {
  // 查询一个不存在的文件/目录信息（会抛出异常，需要自行捕获）
  fs.statSync('not_exist.txt')
} catch (e) {
  console.log('文件不存在')
}


// 常用字段意义如下
// dev --	设备 ID，表示该文件所在的设备。
// mode --	文件权限，包括读、写、执行等权限。
// nlink --	硬链接数。
// uid --	用户 ID，表示该文件所属的用户。
// gid --	组 ID，表示该文件所属的组。
// rdev --	设备类型，表示该文件所属设备的类型。
// blksize --	块大小，表示该文件所属设备的块大小。
// ino --	inode 号，表示该文件的 inode 编号。
// size --	该文件的大小，以字节为单位。
// blocks --	该文件占用的总块数。
// atimeMs --	最后访问时间，以毫秒为单位。
// mtimeMs --	最后修改时间，以毫秒为单位。
// ctimeMs --	最后状态改变时间，以毫秒为单位。
// birthtimeMs --	创建时间，以毫秒为单位。
// atime --	最后访问时间的格式化字符串，通常为 “YYYY-MM-DDTHH:MM:SS.mmmzz” 的形式。
// mtime --	最后修改时间的格式化字符串，通常为 “YYYY-MM-DDTHH:MM:SS.mmmzz” 的形式。
// ctime --	最后状态改变时间的格式化字符串，通常为 “YYYY-MM-DDTHH:MM:SS.mmmzz” 的形式。
// birthtime --	创建时间的格式化字符串，通常为 “YYYY-MM-DDTHH:MM:SS.mmmzz” 的形式。


/**
 * 1.4 追加输出
 * 使用 fs.appendFileSync 向文件末尾追加写入内容。
 *  参数1：指定文件路径
 *  参数2：要追加的内容
 */
fs.appendFileSync('./test.txt', 'append')

/**
 * 1.5 移动/重命名文件
 * fs.renameSync 方法用于文件移动，当然也可以是重命名文件。
 */
try {
    fs.renameSync('newTest.txt', 'test2.txt') // 重命名
} catch {}
try {
    fs.renameSync('test2.txt', 'test-dir/test2.txt') // 移动文件
} catch {}

/** 
 * 1.6 删除文件
 * fs.unlinkSync 和 fs.rmSync 都可用于单文件删除。
 */
// fs.unlinkSync('test-dir/test2.txt')
// fs.rmSync('test-dir/test2.txt')

// rmSync还支持删除目录，递归删除子文件/目录等。
// fs.rmSync('test-dir', { recursive: true })

/** 
 * 1.7 读取大文件
 * fs.createReadStream
 */
// const readStream = fs.createReadStream('./index.txt',{
//   encoding:"utf8"
// })

// readStream.on('data',(chunk)=>{
//   console.log(chunk)
// })

// readStream.on('end',()=>{
//   console.log('close')
// })

/**
 * 2.1读取目录所有文件
 * 通过 fs.readdirSync 获取目录下的文件信息
 */
console.log(fs.readdirSync('test-dir')); // [ 'test-dir2', 'test.txt', 'test1.txt' ] 默认情况下只会返回名称。
//可通过指定第二个参数 withFileTypes:true 使返回结果包含类型
const files2 = fs.readdirSync('test-dir', { withFileTypes: true });
console.log(files2.map((f) => ({ name: f.name, isDirectory: f.isDirectory() })))

/**
 * 2.2 创建目录
 * 使用 fs.mkdirSync 创建目录，可通过设置 recursive:true 来递归创建多级目录。
 */
fs.mkdirSync('test-dir/a/b/c/d', { recursive: true })

/**
 * 2.3 删除目录
 * 可以使用 fs.rmdirSync 删除目标目录，recursive: true 表明删除包含其子目录。
 */
fs.rmdirSync('test-dir/a', { recursive: true })

/**
 * 2.4 监听目录变更
 * 利用 fs.watch 即可实现。
 */
// 监听当前目录下所有的文件和子目录中的文件
// fs.watch('./', { recursive: true }, (eventType, filename) => {
//   console.log(`File '${filename}' has changed: ${eventType}`)
// })

/**
 * fs.linkSync('./index.txt', './index2.txt') //硬链接
 * fs.symlinkSync('./index.txt', './index3.txt' ,"file") //软连接
 */

//硬链接的作用和用途如下：

// 1.文件共享：硬链接允许多个文件名指向同一个文件，这样可以在不同的位置使用不同的文件名引用相同的内容。这样的共享文件可以节省存储空间，并且在多个位置对文件的修改会反映在所有引用文件上。
// 2.文件备份：通过创建硬链接，可以在不复制文件的情况下创建文件的备份。如果原始文件发生更改，备份文件也会自动更新。这样可以节省磁盘空间，并确保备份文件与原始文件保持同步。
// 3.文件重命名：通过创建硬链接，可以为文件创建一个新的文件名，而无需复制或移动文件。这对于需要更改文件名但保持相同内容和属性的场景非常有用。

// 软链接的一些特点和用途如下：

// 1.软链接可以创建指向文件或目录的引用。这使得你可以在不复制或移动文件的情况下引用它们，并在不同位置使用不同的文件名访问相同的内容。
// 2.软链接可以用于创建快捷方式或别名，使得你可以通过一个简短或易记的路径来访问复杂或深层次的目录结构。
// 3.软链接可以用于解决文件或目录的位置变化问题。如果目标文件或目录被移动或重命名，只需更新软链接的目标路径即可，而不需要修改引用该文件或目录的其他代码。


