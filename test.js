import test from 'ava'
import suffix from './'

test('relative path', t => {
  const path = 'a.js'
  t.is(suffix(path, '.min'), 'a.min.js')
})

test('absolute path', t => {
  const path = '/User/rem/a'
  t.is(suffix(path, '.min.js'), '/User/rem/a.min.js')
})

test('no suffix', t => {
  const path = 'a.js'
  t.is(suffix(path), 'a.js')
})
