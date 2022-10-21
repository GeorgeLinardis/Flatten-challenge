/**
 * Flattens an array recursively
 *
 * @param {Array} items - The array of items we want to flatten
 * @return {Array} - The flattened array
 */
const flatten = (items) => {
  if (!Array.isArray(items)) {
    return [];
  }

  let flattened = [];

  items.forEach(item => {
    if (Array.isArray(item)) {
      const itemFlattened = flatten(item)
      flattened = [...flattened, ...itemFlattened]
    } else {
      flattened = [...flattened, item];
    }
  })
  return flattened;
}

module.exports = flatten;
