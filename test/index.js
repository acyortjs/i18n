const { join } = require('path')
const I18n = require('../')

const i18n = new I18n(join(__dirname, 'locales'), 'en')

i18n.locale = 'default'

console.log(i18n.locale)
console.log(i18n.__('three', 'aaaa'))
console.log(i18n.__('a.b.c', 'aaaa', 'bbbb'))
console.log(i18n._n('num', 0))
