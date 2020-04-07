/**
 * 清理对象参数值，过滤不合法参数
 * @params {object} params - 待清理的对象
 * @params {array} filters - 清理的值信息，默认当值为[null, undefined, NaN, '']中的任意值时，该字段被清理掉
 * @returns {object} 清理之后的独显
 *
 * @example
 *
 * const params = {
 *  name: '',
 *  age: 10,
 *  desc: null
 * }
 *
 * clearObject(params) ==> { age: 10 }
 */
export default function clearObject(
  params,
  filters = [null, undefined, NaN, '']
) {
  if (params instanceof Object) {
    const newParams = {}
    Object.keys(params).forEach(key => {
      if (!filters.includes(params[key])) {
        newParams[key] = params[key]
      }
    })
    return newParams
  }
  return params
}
