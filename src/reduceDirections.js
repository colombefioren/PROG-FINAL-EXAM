export const reduceDirections = (directions = []) => {
  let clonedDirections = directions.map((e) => e);
  for (let i = 0; i < clonedDirections.length - 1; i++) {
    if (
      (clonedDirections[i] === "NORTH" && clonedDirections[i + 1] === "SOUTH") ||
      (clonedDirections[i] === "SOUTH" && clonedDirections[i + 1] === "NORTH")
    ) {
      clonedDirections.splice(i, 2);
      i = i - 2;
    }
    if (
      (clonedDirections[i] === "EAST" && clonedDirections[i + 1] === "WEST") ||
      (clonedDirections[i] === "WEST" && clonedDirections[i + 1] === "EAST")
    ) {
      clonedDirections.splice(i, 2);
      i = i - 2;
    }
  }
  return clonedDirections;
};

console.log(
  reduceDirections([
        "NORD",
        "NORD",
        "SUD",
        "OUEST",
        "EST",
        "EST",
        "SUD",
        "NORD",
        "SUD",
        "OUEST",
        "NORD",
        "SUD",
        "OUEST",
      ])
);
