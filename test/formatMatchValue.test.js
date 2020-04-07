import { formatMatchValue } from '../src'

const arr1 = [
  {
    label: 1,
    value: '一',
  }, {
    label: 2,
    value: '二',
  }, {
    label: 3,
    value: '三',
  }, {
    label: 4,
    value: '四',
  }, {
    label: 5,
    value: '五',
  }, {
    label: 6,
    value: '六',
  },
]

const arr2 = [
  {
    type: 1,
    name: '一',
  }, {
    type: 2,
    name: '二',
  }, {
    type: 3,
    name: '三',
  }, {
    type: 4,
    name: '四',
  }, {
    type: 5,
    name: '五',
  }, {
    type: 6,
    name: '六',
  },
]

describe('验证获取匹配值',() => {
  test('验证获取匹配值', () => {
    expect(formatMatchValue(1, arr1)).toBe('一')
    expect(formatMatchValue(0, arr1)).toBe('-')
    expect(formatMatchValue(-1)).toBe('-')
    expect(formatMatchValue(3, arr2, 'type', 'name')).toBe('三')
    expect(formatMatchValue(3, arr2, 'type', 'value')).toBe('-')
    expect(formatMatchValue(3, arr2, 'label', 'name')).toBe('-')
    expect(formatMatchValue(3, arr2, 'label', 'value')).toBe('-')
    expect(formatMatchValue(8, arr2, 'type', 'name')).toBe('-')
    expect(formatMatchValue(3)).toBe('-')
    expect(formatMatchValue([])).toBe('-')
    expect(formatMatchValue({})).toBe('-')
    expect(formatMatchValue(null)).toBe('-')
    expect(formatMatchValue(undefined)).toBe('-')
  })
})