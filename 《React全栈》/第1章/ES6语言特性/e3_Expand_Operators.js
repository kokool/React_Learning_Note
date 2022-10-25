/**
 * 展开运算符应用的情况
 */
// 在用于函数调用的情况下，可以把一个数组作为参数依次调用
function example1(x, y, z) {
	console.log(x, y, z)
}
var args1 = [1, 2, 3]
example1.apply(null, args1)

// ES6的展开运算符
function example2(x, y, z) {
	console.log(x, y, z)
}
let args2 = [0, 1, 2, 3]
example2(...args2)

/**
 * 用于数组的字面量，比如合并数组
 */
//ES6以前用concat、splice、push等方法实现
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = arr1.concat(arr2)
console.log(arr3)

//ES6使用展开运算符
var arr3 = [...arr1, ...arr2]
console.log(arr3)
//[1,2,3,4,5,6]

/**
 * 对象的展开,ES7
 */
let lifekokool = { name: 'lifekokool', age: 50 }
lifekokool = { ...lifekokool, sex: 'male' }
console.log(lifekokool)
