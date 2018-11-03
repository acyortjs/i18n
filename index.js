const getLanguages = require('./lib/languages')

module.exports = class {
  constructor(directory) {
    this.directory = directory
    this.languages = getLanguages(directory)
    this.language = 'default'
  }

  set locale(language) {
    this.languages = getLanguages(this.directory)
    this.language = language
  }

  get locale() {
    return this.language
  }
}
