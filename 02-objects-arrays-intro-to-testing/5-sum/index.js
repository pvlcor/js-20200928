/**
 * Sum - returns sum of arguments if they can be converted to a number
 * @param {number} n value
 * @returns {number | function}
 */
export function sum (n = 0) {
  const fn = (x = 0) => sum(n + x);
  fn.toString = () => n;
  return fn;
}
