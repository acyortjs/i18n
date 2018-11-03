const getLanguages = require('./lib/languages')
const parser = require('./lib/parser')

module.exports = class {
  constructor(directory, locale = 'default') {
    this.directory = directory
    this.languages = {}
    this.language = locale
  }

  set locale(language) {
    this.languages = getLanguages(this.directory)
    this.language = language
  }

  get locale() {
    return this.language
  }

  getLocale() {
    const locale = this.languages[this.language]
    if (!locale) {
      return {}
    }
    return locale
  }

  __(vars, ...params) {
    return parser('_', this.getLocale(), vars, ...params)
  }

  _n(vars, ...params) {
    return parser('n', this.getLocale(), vars, ...params)
  }
}
