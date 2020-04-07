import { clearObject } from '../src'

const params1 = {
  age: 10,
  name: '张三',
  desc: '',
  type: null,
  num: NaN,
  user: undefined
}

const result1 = {
  age: 10,
  name: '张三'
}

describe('清理对象参数值，过滤不合法参数',() => {
  test('清理对象参数值', () => {
    expect(clearObject(params1)).toEqual(result1)
    expect(clearObject(params1, [])).toEqual(params1)
    expect(clearObject(params1, ['张三'])).toEqual(
      {
        age: 10,
        desc: '',
        type: null,
        num: NaN,
        user: undefined
      }
    )
    expect(clearObject(null)).toBeNull()
    expect(clearObject(undefined)).toBeUndefined()
    expect(clearObject(NaN)).toBe(NaN)
    expect(clearObject('')).toBe('')
  })
})

