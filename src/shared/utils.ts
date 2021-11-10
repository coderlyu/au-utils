/**
 *
 * @param val 需要获取类型的值
 * @returns 返回 类型 后缀
 */
export function getType(val: unknown) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

export function isObject(val: unknown) {
  return getType(val) === 'object';
}

export function isArray(val: unknown) {
  return getType(val) === 'array';
}

export function isNumber(val: unknown) {
  return getType(val) === 'number';
}

export function isString(val: unknown) {
  return getType(val) === 'string';
}

export function isError(val: unknown) {
  return getType(val) === 'error';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPromsie(p: any) {
  return isFunction(p) && isFunction(p.then) && isFunction(p.catch);
}
/**
 * 判断变量是否为空
 * @param  val
 * @returns 是否为空
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isEmpty(val: any) {
  return (
    val === undefined ||
    val === null ||
    val === '' ||
    (isArray(val) && val.length === 0) ||
    (isObject(val) && Object.keys(val) === 0)
  );
}

export function isFunction(val: unknown) {
  return typeof val === 'function';
}
/**
 * 
 * @returns [p, resolve, reject] 返回一个 Promise 
 */
export function genPromise() {
  let p, resolve, reject;
  p = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return [p, resolve, reject];
}
