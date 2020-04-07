import NP from 'number-precision'
import formatThousandsSeparator from './formatThousandsSeparator'
/**
 * 金额格式化转换
 *  元转分
 *  分转元（默认千分位格式化，并保留2位小数）
 * @param {number} money - 金额(元/分)
 * @param {string} mode - 模式：'toYuan'（分->元）'toCent'（元->分），默认是 'toYuan'
 * @params {object} config 转换配置项
 *    @param {boolean} thousandsSeparator -  是否需要格式化成千分位,默认为true
 *    @param {number} fractionDigits  - 保留小数位数,默认为2
 *    @param {string} illegalCharacter  - 非法数据是展示的字符
 *
 * @returns {*} 转换之后的金额
 *
 * @example
 * formatCentToYuan(100000) === 1,000.00
 */
export default function formatMoney(money, mode = 'toYuan', config = {}) {
  const { thousandsSeparator = true, fractionDigits = 2, illegalCharacter = '-'} = config

  if (!money || isNaN(money)) {
    return illegalCharacter
  }

  switch (mode) {
    case 'toYuan': {
      const yuan = NP.round(NP.divide(money, 100), fractionDigits)
      if (!thousandsSeparator) {
        return yuan
      }
      return formatThousandsSeparator(yuan, fractionDigits)
    }
    case 'toCent': {
      return NP.round(NP.times(money, 100), 0)
    }
    default:
      return illegalCharacter
  }
}
