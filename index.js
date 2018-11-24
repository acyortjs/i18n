const parser = require('./lib/parser')
const getLocale = require('./lib/locale')

module.exports = class {
  constructor(dir, locale) {
    this.dir = dir
    this.currentLocale = locale
  }

  set locale(locale) {
    this.currentLocale = locale
  }

  get locale() {
    return this.currentLocale
  }

  parser(type, ...args) {
    const localeData = getLocale(this.dir, this.currentLocale)
    return parser(type, localeData, ...args)
  }

  __(...args) {
    return this.parser('_', ...args)
  }

  _n(...args) {
    return this.parser('n', ...args)
  }
}
