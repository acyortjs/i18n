const { readdirSync, existsSync, readFileSync } = require('fs')
const { join } = require('path')
const yaml = require('js-yaml')
const Logger = require('@acyort/logger')

const logger = new Logger()

module.exports = (directory) => {
  const languages = {}

  if (!existsSync(directory)) {
    return languages
  }

  readdirSync(directory)
    .filter(name => name.indexOf('.yml') > -1)
    .forEach((name) => {
      const key = name.split('.')[0]
      const file = readFileSync(join(directory, name), 'utf8')

      try {
        languages[key] = yaml.safeLoad(file)
      } catch (e) {
        logger.warn(`Cannot load \`${name}\``)
      }
    })

  return languages
}
