import moment from 'moment'

/**
 * 时间格式化
 * @params {number} start - 开始时间戳，毫秒级
 * @params {number} end - 结束时间戳，毫秒级
 * @params {object} config - 格式化配置项
 *  @param {string} format - 转换格式，默认格式是YYYY-MM-DD HH:mm
 *  @param {string} separator - 分割字符串，默认是'-'
 * @returns {string}
 *
 * @example
 * fixDateRequestParams(1554790648037) ==> 2019-04-09 00:00
 *
 * @example
 * fixDateRequestParams(1554790648037, 1554790648037) ==> 2019-04-09 00:00 - 2019-04-09 00:00
 *
 * @example
 * fixDateRequestParams(1554790648037, 1554790648037, format = 'YYYY-MM-DD') ==> 2019-04 - 09-2019-04-09
 *
 * @example
 * fixDateRequestParams(1554790648037, 1554790648037,  format = 'YYYY-MM-DD', separator = '/' )  ==> 2019-0409/2019-04-09
 */
export default function formatDate (
  start,
  end,
  format = 'YYYY-MM-DD HH:mm',
  separator  = '-'
) {
  if ((start && !isNaN(start)) && (end && !isNaN(end))) {
    const startTime = moment(start).format(format)
    const endTime = moment(end).format(format)
    return `${startTime} ${separator} ${endTime}`
  }

  if (start && !isNaN(start)) {
    return moment(start).format(format)
  }

  if (end && !isNaN(end)) {
    return moment(end).format(format)
  }

  return ''
}
