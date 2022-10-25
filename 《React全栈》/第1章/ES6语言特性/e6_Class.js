/**
 * js的类是原型链方式的一种语法糖
 */
class Person {
	//构造函数
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	say() {
		return `My Name is ${this.name},age is ${this.age}`
	}
	//静态方法
	static foo() {
		return 'Static method.'
	}
}

const lifekokool = new Person('lifekokool', 18)
console.log(lifekokool.say())
console.log(Person.foo())
// My Name is lifekokool,age is 18
// Static method.

/**
 * 继承
 */
class Mine extends Person {
	constructor(name, age = 20, color = 'yellow') {
		//调用super继承
		super(name, age)
		this.color = color
	}

	say() {
		//非构造函数就不可以使用super方法
		//但可以用super(). + 方法名字调用父类的方法
		return super.say() + `, color is ${this.color}.`
	}
}

const mine = new Mine('life')
console.log(mine.say())
//My Name is life,age is 20, color is yellow.
