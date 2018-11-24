const { readFileSync } = require('fs')
const { join } = require('path')
const yaml = require('js-yaml')
const logger = require('@acyort/logger')()

module.exports = (dir, locale) => {
  const path = join(dir, `${locale}.yml`)

  try {
    return yaml.safeLoad(readFileSync(path, 'utf8'))
  } catch (e) {
    logger.warn(`cannot load locale \`${locale}\``)
    return {}
  }
}
