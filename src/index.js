
exports.min = function min(array) {
  if (!array || array.length == 0) {
    return 0
  } else {
    let i = array[0]
    array.forEach(x => {
      if (x < i) {
        i = x
      }
    });
    return i;
  }
}

exports.max = function max (array) {
 if (!array || array.length == 0) {
    return 0
  } else {
    let i = array[0]
    array.forEach(x => {
      if (x > i) {
        i = x
      }
    });
    return i;
  }
}

exports.avg = function avg (array) {
if (!array || array.length == 0 ) {
    return 0
  } else {
  let i = 0
    array.forEach(x => {
      i += x
    });
    return i / array.length;
  }
}