const { readdirSync, existsSync, readFileSync } = require('fs')
const { join } = require('path')
const yaml = require('js-yaml')
const Logger = require('@acyort/logger')

const logger = new Logger()

module.exports = (directory) => {
  if (!existsSync(directory)) {
    return []
  }

  return readdirSync(directory)
    .filter(name => name.indexOf('.yml') > -1)
    .map((name) => {
      const file = readFileSync(join(directory, name), 'utf8')

      try {
        const data = yaml.safeLoad(file)
        return {
          name: name.split('.')[0],
          data,
        }
      } catch (e) {
        logger.warn(`Cannot load \`${name}\``)
        return null
      }
    })
    .filter(data => data)
}
