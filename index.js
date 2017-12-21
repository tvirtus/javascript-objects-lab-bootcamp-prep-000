var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  // obj[key] = val;
  return Object.assign({}, obj, {[key]: val});
}