/**
 * 匹配枚举字段值
 * @param {number} key -  某状态/类型对应的type值
 * @param {array} source  -  所有状态/类型
 * @param {string} keyName -  匹配key字段名，默认是'label'
 * @param {string} valueName  -  匹配value字段名，默认是'value'
 * @return {string}  -  该key值对应的状态/类型，匹配失败'-'
 *
 * @example
 * const source = [
 *  {
 *    label: 1
 *    value:'例子1'
 *  },{
 *    label: 2
 *    value:'例子2'
 *  },
 * ]
 * matchRelevantValue(1, source) === '例子1'
 */
export default function formatMatchValue(key, source = [], keyName = 'label', valueName = 'value') {
  const item = source.find(item => item[`${keyName}`] === key)
  if (item) {
    return item[`${valueName}`] || '-'
  } else {
    return '-'
  }
}

