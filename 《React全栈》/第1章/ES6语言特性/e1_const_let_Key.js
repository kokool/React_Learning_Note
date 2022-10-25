/**
 * let：
 * 在JS中，var变量默认为全局性的，只存在函数级作用域，
 * 因此ES6以前要通过声明函数来创建作用域，
 * ES6之后提出的let关键字解决了这个问题。
 */
// if (true) {
// 	let a = 'name'
// }
// console.log(a)
//ReferenceError: a is not defined

/**
 * const定义常量，一旦定义以后不可修改，可改引用类型的属性
 */
// const myName = 'lifekokool'
// myName = 'kokool'
// TypeError: Assignment to constant variable.

// const referName = { name: 'lifekokool' }
// referName.name = 'kokool'
// 正常运行
