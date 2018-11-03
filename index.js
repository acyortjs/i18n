const getLocale = require('./lib/locale')
const parser = require('./lib/parser')

module.exports = class {
  constructor(dir, locale) {
    this.dir = dir
    this.localeData = locale ? getLocale(dir, locale) : {}
    this.currentLocale = locale
  }

  set locale(locale) {
    this.localeData = getLocale(this.dir, locale)
    this.currentLocale = locale
  }

  get locale() {
    return this.currentLocale
  }

  __(...args) {
    return parser('_', this.localeData, ...args)
  }

  _n(...args) {
    return parser('n', this.localeData, ...args)
  }
}
