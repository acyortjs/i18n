const { existsSync, readFileSync } = require('fs')
const { join } = require('path')
const yaml = require('js-yaml')
const Logger = require('@acyort/logger')

const logger = new Logger()

module.exports = (dir, locale) => {
  const path = join(dir, `${locale}.yml`)

  if (!existsSync(path)) {
    logger.warn(`Cannot load locale \`${locale}\``)
    return {}
  }

  try {
    return yaml.safeLoad(readFileSync(path, 'utf8'))
  } catch (e) {
    logger.warn(`Cannot load locale \`${locale}\``)
    return {}
  }
}
