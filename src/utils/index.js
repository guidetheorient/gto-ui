const toString = Object.prototype.toString

export const isUndefined = (v) => toString.call(v) === '[object Undefined]'
export const isNil = (v) => v === null || isUndefined(v)
export const isNumber = (v) => toString.call(v) === '[object Number]'
export const isString = (v) => toString.call(v) === '[object String]'
export const isArray = (v) => toString.call(v) === '[object Array]'
export const isPlainObject = (v) => toString.call(v) === '[object Object]'

// dom
export const insertAsFirstChildOfBody = (el) => {
  document.body.insertBefore(el, document.body.firstChild)
}

export function addClass(el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}

export function removeClass(el, className) {
  el.classList.remove(className)
}
