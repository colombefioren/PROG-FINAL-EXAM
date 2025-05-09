const map = [
  "....X....",
  "X.........",
  "XXX...XXX.",
  ".......X..",
  "X...XXXXX.",
  "....X....",
  "X.........",
  "XXX...XXX.",
  ".......X..",
  "X...XXXXX.",
];

export const countMaxBobsleigh = (N, map) => {
  let nbrBobsleigh = 0;
  let cpt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === ".") {
        cpt++;
      }
      if (cpt === 4) {
        nbrBobsleigh++;
        cpt = 0;
      }
      if (map[i][j] === "X") {
        cpt = 0;
      }
    }
    cpt = 0;
  }
  return nbrBobsleigh;
};

console.log(countMaxBobsleigh(10, map));
