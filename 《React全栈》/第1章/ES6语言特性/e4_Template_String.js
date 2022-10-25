/**
 * 模板字符串
 */
//以前把字符合起来
var name = 'lifekokool'
var n1 = 'My name is ' + name + '!'
console.log(n1)

//多行字符串合起来
var longLife = 'This is my LIFE,' + 'This is A Boring,' + 'This is Never.'
console.log(longLife)

//用模板字符串实现
let n2 = `My is ${name}`
console.log(n2)

var longLife2 = `This is 1
This is 2
This is 3`
console.log(longLife2)
