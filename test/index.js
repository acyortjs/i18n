const lans = require('../lib/languages')
const tr = require('../lib/translate')
const { join } = require('path')

const ls = lans(join(__dirname, 'locales'))

// console.log(JSON.stringify(ls , null, 2))

console.log(tr('_', ls[0].data, 'three', 'aksd'))
console.log(tr('_', ls[0].data, 'a.b.c', 'aksd', 'asass'))
console.log(tr('n', ls[0].data, 'num', 1))
