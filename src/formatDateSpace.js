import moment from 'moment';

/**
 * 时间区间格式化
 * @param {number} date - 时间戳（毫秒级）
 * @returns {object}
 *  start 日起开始时间: YYYY-MM-DD 00:00:00
 *  end 日起结束时间: YYYY-MM-DD 23:59:59
 * 
 * @example
 * formatDateSpace(1554790648037) 
 * ==> 
 * {
 *  start: '2019-04-09 00:00:00',
 *  start: '2019-04-09 23:59:59' 
 * }
 */
export default function formatDateSpace(date) {
  if (date && !isNaN(date)) {
    return {
      start: `${moment(date).format('YYYY-MM-DD')} 00:00:00`,
      end: `${moment(date).format('YYYY-MM-DD')} 23:59:59`
    }
  }
  return {}
}

