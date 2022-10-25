/**
 * Babel干嘛的？
 * 利用一系列插件管理编译规则，通过这些不同的插件可以
 * 编译ES6代码
 * 编译JSX脚手架等等
 */

/**
 * 在VSCode到对应的文件夹下的终端，命令行输入
 * npm install bebel-cli -g
 * 
 *  新建文件.babelrc，内容如下：
 *  {
	"presets": ["es2015"],
	"plugins": []
    }
    
    运行以下命令，安装可以把ES6代码编译成ES5代码的预设模块
    npm install --save-dev babel-preset-es2015

    最后运行命令编译以下代码进行转换，新建出compiled.js文件
    babel es6.js -o compiled.js
 */
//写一个ES6的代码通过babel转成ES5
let numbers = [1, 2, 3]
let doubleNumbers = numbers.map((numbers) => numbers * 2)
console.log(doubleNumbers)

/**
 * 用babel的单独插件实现对ES7的对象展开操作符进行转换
 * 
 * 输入如下命令，安装object-rest-spread插件：
 * npm install babel-plugin-transform-object-rest-spread --save-dev
 * 
 * 文件.babelrc，内容如下：
 * {
	"presets": ["es2015"],
	"plugins": ["transform-object-rest-spread"]
    }

    运行命令babel es6.js -o compiled.js

    看到另一个编译好的文件，其实就是让插件添加另一个_extends方法实现该功能
*/
let lifekokool = { name: 'lifekokool', age: 18 }
lifekokool = { ...lifekokool, sex: 'male' }
console.log(lifekokool)
