/**
 * 解构赋值可以快速从数组或者对象中提取变量
 */
//解构数组
let foo = ['1', '2', '3']
let [one, two, three] = foo
console.log(`${one},${two},${three}`)

//解构对象
let lifekokool = { name: 'lifekokool', age: 20 }
let { name, age } = lifekokool
console.log(`${name},${age}`)
