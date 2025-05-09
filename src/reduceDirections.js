const card = ["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST"];
const reduceDirection = (directions) => {
  //   let k = 0;
  let temp = directions.map((e) => e);
  let n =
    directions.length % 2 === 0 ? directions.length : directions.length - 1;
  // for (let i = 0; i < n; i += 2) {
  //     restTemp.push([]);
  //     restTemp[k].push(directions[i], directions[i + 1]);
  //     k++;
  //   }
  //   if ((n = directions.length - 1)) {
  //     restTemp.push(directions[directions.length - 1]);
  //   }
  //   return restTemp;

  for (let i = 0; i < n; i++) {
    if (checkIfContrary(directions[i], directions[i + 1])) {
      temp[i] = 0;
      temp[i + 1] = 0;
    }
  }
  return temp;
};

function removeContrary(card) {
  let temp = directions.map((e) => e);
  let n =
    directions.length % 2 === 0 ? directions.length : directions.length - 1;
  // for (let i = 0; i < n; i += 2) {
  //     restTemp.push([]);
  //     restTemp[k].push(directions[i], directions[i + 1]);
  //     k++;
  //   }
  //   if ((n = directions.length - 1)) {
  //     restTemp.push(directions[directions.length - 1]);
  //   }
  //   return restTemp;

  for (let i = 0; i < n; i++) {
    if (checkIfContrary(directions[i], directions[i + 1])) {
      temp[i] = 0;
      temp[i + 1] = 0;
    }
  }
  return temp;
}

function newArray(array) {
  let array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
      array.push(array[i]);
    }
  }
  return array;
}

const direction = (restTemp) => {
  for (let i = 0; i < restTemp.length; i++) {
    if (checkIfContrary(restTemp[i][0], restTemp[i][1])) {
      restTemp.shift();
    }
  }
};

function check(directions) {
  let restTemp = [];
  let temp1 = directions.map((e) => e);
  let temp = directions.map((e) => e);
  for (let i = 0; i < directions.length; i++) {
    if (checkIfContrary(directions[i], directions[i + 1])) {
      restTemp.push(temp.slice(i + 2));
      temp = directions.map((e) => e);
    }
  }

  return [restTemp[0][0], ...restTemp[restTemp.length - 1]];
}

console.log(reduceDirection(card));

function checkIfContrary(dir1, dir2) {
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
