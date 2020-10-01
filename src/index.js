
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let dir = 'f';
  let arr = []
  if (matrix === undefined) return [];
  if (matrix.length === 0) return [];
  matrix.forEach(element => {
    if (dir === 'f') {
      arr = arr.concat(element);
    } else {
      arr = arr.concat(element.reverse());
    }
    
    if (dir === 'f') {
      dir = 'b'
    } else {
      dir = 'f'
    }
  });
  return arr;
}
/*
module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  if (Array.isArray(matrix)) {
    return matrix.reduce( (accum, element) => {
      return accum.concat(towelSort(element));
    }, [])
  } else {
    return matrix;
  }
}*/