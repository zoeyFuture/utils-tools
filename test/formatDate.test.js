import { formatDate } from '../src';

test('格式化时间戳区段 formatDate:', () => {
  expect(formatDate(1586231922000)).toBe('2020-04-07 11:58')
  expect(formatDate(1586231922000, '')).toBe('2020-04-07 11:58')
  expect(formatDate(1586231922000, null)).toBe('2020-04-07 11:58')
  expect(formatDate(1586231922000, undefined)).toBe('2020-04-07 11:58')
  expect(formatDate(1586231922000, NaN)).toBe('2020-04-07 11:58')
  expect(formatDate(1586231922000, 0)).toBe('2020-04-07 11:58')
  expect(formatDate(1586231922000, '', 'YYYY-MM-DD')).toBe('2020-04-07')
  expect(formatDate(1586231922000, '', 'YYYY-MM-DD', '/')).toBe('2020-04-07')
  expect(formatDate(1586231922000, '', 'YYYY-MM-DD HH:mm:ss')).toBe('2020-04-07 11:58:42')
  expect(formatDate(1586231922000, '', 'YYYY-MM-DD HH:mm:ss', '/')).toBe('2020-04-07 11:58:42')

  expect(formatDate('', 1586231989000)).toBe('2020-04-07 11:59')
  expect(formatDate(null, 1586231989000)).toBe('2020-04-07 11:59')
  expect(formatDate(undefined, 1586231989000)).toBe('2020-04-07 11:59')
  expect(formatDate(NaN, 1586231989000)).toBe('2020-04-07 11:59')
  expect(formatDate(0, 1586231989000)).toBe('2020-04-07 11:59')
  expect(formatDate('', 1586231989000)).toBe('2020-04-07 11:59')
  expect(formatDate('', 1586231989000, 'YYYY-MM-DD')).toBe('2020-04-07')
  expect(formatDate('', 1586231989000, 'YYYY-MM-DD', '/')).toBe('2020-04-07')
  expect(formatDate('', 1586231989000, 'YYYY-MM-DD HH:mm:ss')).toBe('2020-04-07 11:59:49')
  expect(formatDate('', 1586231989000, 'YYYY-MM-DD HH:mm:ss', '/')).toBe('2020-04-07 11:59:49')

  expect(formatDate(1586231922000, 1586231989000)).toBe('2020-04-07 11:58 - 2020-04-07 11:59')
  expect(formatDate(1586231922000, 1586231989000, 'YYYY-MM-DD')).toBe('2020-04-07 - 2020-04-07')
  expect(formatDate(1586231922000, 1586231989000, 'YYYY-MM-DD', '/')).toBe('2020-04-07 / 2020-04-07')
  expect(formatDate(1586231922000, 1586231989000, 'YYYY-MM-DD HH:mm:ss')).toBe('2020-04-07 11:58:42 - 2020-04-07 11:59:49')
  expect(formatDate(1586231922000, 1586231989000, 'YYYY-MM-DD HH:mm:ss', '/')).toBe('2020-04-07 11:58:42 / 2020-04-07 11:59:49')

  expect(formatDate('')).toBe('')
  expect(formatDate(null)).toBe('')
  expect(formatDate(undefined)).toBe('')
  expect(formatDate(NaN)).toBe('')
});
