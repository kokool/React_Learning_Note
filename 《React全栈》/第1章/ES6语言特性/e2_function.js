/**
 * 箭头函数：
 * 一种更简单的函数声明方式，语法糖，匿名的
 */
let add1 = (a, b) => {
	return a + b
}
console.log(add1(1, 2))
//当后面是表达式(expression)的时候，可以简写成
let add2 = (a, b) => a + b
console.log(add2(1, 2))
//等同于
let add3 = function (a, b) {
	return a + b
}
console.log(add3(1, 2))
//在回调函数中应用
let numbers = [1, 2, 3]
let doubleNumbers = numbers.map((numbers) => numbers * 2)
console.log(doubleNumbers)

/**
 * this在箭头函数的指向问题
 */
let age = 2
let lifekokool = {
	age: 1,
	grow: function () {
		setTimeout(function () {
			// console.log(this.age) 会返回Nan，
			// this指向window对象找不到age属性
			console.log(++age)
		}, 1000)
	},
}

lifekokool.grow() //3

/**
 * 解决this指向全局对象的问题
 */
//采用hack解决的第1种写法
let life = {
	age: 19,
	grow: function () {
		const self = this
		setTimeout(function () {
			console.log(++self.age)
		}, 1000)
	},
}
life.grow() //20，说明this就指向life对象了

//第2种写法，bind
let life2 = {
	age: 10,
	grow: function () {
		setTimeout(
			function () {
				console.log(++this.age)
			}.bind(this),
			1000
		)
	},
}
life2.grow()

//第3种使用箭头函数的写法
let life3 = {
	age: 7,
	grow: function () {
		setTimeout(() => {
			console.log(++this.age)
		}, 1000)
	},
}
life3.grow()

/**
 * 函数的参数：
 * ES6以前就对着参数写上值或者就为空处理
 */
function show(name = 'Power', age = 18) {
	return name + ' is ' + age + ' years old'
}
console.log(show())

/**
 * Rest 参数，就是加入 ... 的前缀写法
 */
function test(...args) {
	console.log(args)
}
test(1, 2, 3, 4)

function test2(name, ...args) {
	let na = name
	console.log(na, args)
}
test2('life', 1, 2, 3)
