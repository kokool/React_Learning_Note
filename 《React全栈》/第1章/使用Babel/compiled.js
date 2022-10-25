'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
var numbers = [1, 2, 3];
var doubleNumbers = numbers.map(function (numbers) {
    return numbers * 2;
});
console.log(doubleNumbers);

/**
 * 用_extend这个babel的单独插件实现对ES7的对象展开操作符进行转换
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
*/
var lifekokool = { name: 'lifekokool', age: 18 };
lifekokool = _extends({}, lifekokool, { sex: 'male' });
console.log(lifekokool);
