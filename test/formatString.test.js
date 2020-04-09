import { formatString } from '../src'

describe('指定格式化字符串，数据为空时显示特定文案',() => {
  test('清理对象参数值', () => {
    expect(formatString('这是字符串')).toBe('这是字符串')
    expect(formatString('')).toBe('-')
    expect(formatString('', '/')).toBe('/')
    expect(formatString(10)).toBe(10)
    expect(formatString(0)).toBe('-')
    expect(formatString({})).toEqual({})
    expect(formatString([])).toEqual([])
    expect(formatString(null)).toBe('-')
    expect(formatString(undefined)).toBe('-')
  })
})
