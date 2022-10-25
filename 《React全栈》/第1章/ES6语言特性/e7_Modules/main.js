//使用对象解构赋值加载3个变量
/**
 * 注意要使用命令：
 * Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
 *
 */
// import { Name, say, Person } from './test.js'
// console.log(Name)
import * as Util from './test.js'
console.log(Util.Name)

import hello from './hello.js'
hello()
