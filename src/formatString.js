/**
 * 格式化字符串类型
 * @param {string} str 待格式化的字符串，为空时显示 joiner
 * @param {string} joiner 字符串为控制显示的字符，默认为-
 * @return {string}
 * @example
 * formatString('example') === 'example'
 * @example
 * formatString('') === '-
 * @example
 * formatString('', '*') === '*'
*/
export default function formatString(str, joiner = '-') {
  if (!str) {
    return joiner
  }
  return str
}
