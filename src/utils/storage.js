// 为了方便项目中使用本地函数，简化操作 封装、获取、设置、删除、全部删除工具函数

/**
 * 获取
 * @param {*} key
 * @returns
 */
export function getItem (key) {
  const res = window.localStorage.getItem(key)
  try {
    return JSON.parse(res)
  } catch (err) {
    return res
  }
}

/**
 * 设置
 * @param {*} key
 * @param {*} value
 */
export function setItem (key, value) {
  if (typeof value === 'object') { // 复合数据类型
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

/**
 * 根据key删除本地储存中其中的一个
 * @param {*} key
 */
export function removeItem (key) {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有本地储存
 * @param {*} key
 */
export function clearItem () {
  window.localStorage.clearItem()
}
