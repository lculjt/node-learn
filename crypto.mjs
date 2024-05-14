import crypto from 'crypto'

/**
 * 1.1crypto.createHash(algorithm)
 * 创建一个新的哈希算法实例，其中 algorithm 是一个支持的哈希算法名称，例如 sha256 和 md5 等
 */
// hash.update(data[, inputEncoding])：更新哈希运算所使用的数据
// hash.digest([encoding])：计算并返回哈希值。如果提供了 encoding 参数，则返回字符串形式的哈希值；否则返回一个 Buffer 对象

const testStr = 'hello world'
const sha256 = crypto.createHash('sha256').update(testStr).digest('hex')
console.log(sha256) // b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
const md5 = crypto.createHash('md5').update(testStr).digest('hex')
console.log(md5) // 5eb63bbbe01eeed093cb22bb8f5acdc3
const sha512 = crypto.createHash('sha512').update(testStr).digest('hex') // 309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f
console.log(sha512)

/**
 * 1.2 crypto.createCipheriv
 * 方法用于创建一个使用指定算法和密钥进行加密的 Cipher 对象，并指定初始化向量 iv。
 */
// 定义加密算法和密钥，生成随机密码和向量
const algorithm = 'aes-256-cbc'
const password = crypto.randomBytes(32) // 生成随机 32 字节的密码
const iv = crypto.randomBytes(16) // 生成随机 16 字节的向量

// 待加密的数据
const data = 'Hello, World!'
console.log('Original data:', data)

// 创建加密算法实例
const cipher = crypto.createCipheriv(algorithm, password, iv)

// 使用 update 方法对数据进行加密
let encrypted = cipher.update(data, 'utf8', 'hex')
console.log(encrypted);
// 加密后的数据以十六进制形式(即字符串)返回
encrypted += cipher.final('hex')

console.log('Encrypted data:', encrypted)

// 创建解密算法实例
const decipher = crypto.createDecipheriv(algorithm, password, iv)

// 使用 update 方法对数据进行解密
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
// 返回解密后的字符串 utf8编码
decrypted += decipher.final('utf8')

console.log('Decrypted data:', decrypted)
/**
 * 1.3 crypto.generateKeyPairSync 非对称加密
 */
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
})

// 要加密的数据
const text = 'data';

// 使用公钥进行加密
const encryptedPair = crypto.publicEncrypt(publicKey, Buffer.from(text, 'utf-8'));

// 使用私钥进行解密
const decryptedPair = crypto.privateDecrypt(privateKey, encryptedPair);

console.log(decryptedPair.toString());



/**
 * 1.4 crypto.randomBytes(size[, callback])：生成具有给定大小的随机数据 (Buffer 类型)。
 */

console.log(crypto.randomBytes(32).toString('hex'))
console.log(crypto.randomBytes(8).toString('hex'))