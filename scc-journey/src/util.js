const compareArray = (array1, array2) => {
  var equalSize = array1.length === array2.length;
  var testAll = array1.every((v, i) => v === array2[i]);

  return equalSize && testAll;
}

const shallowCompareObject = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

export {
  compareArray,
  shallowCompareObject,
}
