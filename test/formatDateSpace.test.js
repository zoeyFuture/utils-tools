import { formatDateSpace } from '../src';

test('时间区间格式化 一天开始时间/结束时间', () => {
  expect(formatDateSpace(1586227638000)).toEqual(
    {
      start: '2020-04-07 00:00:00',
      end: '2020-04-07 23:59:59'
    }
  )
  expect(formatDateSpace(1586227638)).toEqual(
    {
      start: '1970-01-19 00:00:00',
      end: '1970-01-19 23:59:59'
    }
  )
  expect(formatDateSpace(null)).toEqual({})
  expect(formatDateSpace(undefined)).toEqual({})
})
