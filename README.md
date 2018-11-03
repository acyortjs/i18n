# i18n

Node i18n

## Install

```bash
$ npm i @acyort/i18n -S
```

## Usage

```
const i18n = new I18n(dir, [locale])  // initial
i18n.locale = 'en'  // set locale
const locale = i18n.locale  // get current locale
```

```yml
# language
three: Hello %s
num:
  zero: not cats
  one: only one cats
  other: is %d cats
a:
  b:
    c: s%2$s a %1$s
```

```js
const I18n = require('@acyort/i18n')
const { join } = require('path')

let i18n = new I18n(join(__dirname, 'locales'))

i18n.locale = 'default'

i18n.__('three', 'aaaa')  // 'Hello aaaa'
i18n.__('a.b.c', 'aaaa', 'bbbb')  // 'sbbbb a aaaa'
i18n._n('num', 0) // 'not cats'
i18n._n('num', 1) // 'only one cats'
i18n._n('num', 1000)  // 'is 1000 cats'

i18n = new I18n(join(__dirname, 'locales'), 'default')

console.log(i18n.locale)  // 'default'
i18n._n('num', 1000)  // 'is 1000 cats'
```
