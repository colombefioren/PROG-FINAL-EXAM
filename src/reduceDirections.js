
export function removeContrary(directions) {
  let temp = directions.map((e) => e);
  let n =
    directions.length % 2 === 0 ? directions.length : directions.length - 1;
  for (let i = 0; i < n; i++) {
    if (checkIfContrary(directions[i], directions[i + 1])) {
      temp[i] = 0;
      temp[i + 1] = 0;
      i++;
    }
  }
  return temp;
}

export function checkSameArray(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

export function newArray(array) {
  let ourArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      ourArray.push(array[i]);
    }
  }
  return ourArray;
}

export function checkIfContrary(dir1, dir2) {
  if (dir1 === "NORD") {
    if (dir2 === "SUD") {
      return true;
    } else {
      false;
    }
  }
  if (dir1 === "SUD") {
    if (dir2 === "NORD") {
      return true;
    } else {
      false;
    }
  }
  if (dir1 === "OUEST") {
    if (dir2 === "EST") {
      return true;
    } else {
      false;
    }
  }
  if (dir1 === "EST") {
    if (dir2 === "OUEST") {
      return true;
    } else {
      false;
    }
  }
}

export function reduceDirections(card) {
  let remove = removeContrary(card);
  let result = newArray(remove);
  let loop = true;
  let before;
  while (loop) {
    before = result.map((e) => e);
    remove = removeContrary(result);
    result = newArray(remove);
    if (checkSameArray(before, result)) {
      loop = false;
    }
  }
  return result;
}

