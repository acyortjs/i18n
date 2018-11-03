/* eslint no-underscore-dangle: 0 */
/* global describe it */

const { join } = require('path')
const assert = require('power-assert')
const I18n = require('../')

describe('i18n', () => {
  it('tests', () => {
    let i18n = new I18n(join(__dirname, 'locales'))

    assert(i18n.__('three', 'aaaa') === '')
    assert(i18n.__('a.b.c', 'aaaa', 'bbbb') === '')
    assert(i18n._n('num', 0) === '')

    i18n.locale = 'default'

    assert(i18n.__('three', 'aaaa') === 'Hello aaaa')
    assert(i18n.__('a.b.c', 'aaaa', 'bbbb') === 'sbbbb a aaaa')
    assert(i18n._n('num', 0) === 'not cats')
    assert(i18n._n('num', 1) === 'only one cats')
    assert(i18n._n('num', 1000) === 'is 1000 cats')

    i18n.locale = 'en'

    assert(i18n.locale === 'en')
    assert(i18n.__('three', 'aaaa') === '')
    assert(i18n.__('a.b.c', 'aaaa', 'bbbb') === '')
    assert(i18n._n('num', 0) === '')

    i18n = new I18n(join(__dirname, 'locales'), 'default')

    assert(i18n.locale === 'default')
    assert(i18n.__('three', 'aaaa') === 'Hello aaaa')
    assert(i18n.__('a.b.c', 'aaaa', 'bbbb') === 'sbbbb a aaaa')
    assert(i18n._n('num', 0) === 'not cats')

    i18n = new I18n(join(__dirname, 'locale'), 'default')

    assert(i18n.__('three', 'aaaa') === '')
    assert(i18n.__('a.b.c', 'aaaa', 'bbbb') === '')
    assert(i18n._n('num', 0) === '')
  })
})
