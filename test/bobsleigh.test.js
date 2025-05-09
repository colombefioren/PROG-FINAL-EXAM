import { expect } from "chai";
import { describe, it } from "mocha";
import { countMaxBobsleigh } from "../src/countMaxBobsleigh.js";

describe("Count the max number of bobsleigh", () => {
  it("should return 3 for the input N = 5 and the map ['....X','X....','.....','..X..',X...X']", () => {
    expect(
      countMaxBobsleigh(5, ["....X", "X....", ".....", "..X..", "X...X"])
    ).to.eq(3);
  });
  it("should return 0 for N = 4 and the map ['.X.X','..XX','XXX.'...X']", () => {
    expect(countMaxBobsleigh(4, [".X.X", "..XX", "XXX.", "...X"])).to.eq(0);
  });
  it("should return 2 for N = 4 and the map ['....','..XX','XXX.'....']", () => {
    expect(countMaxBobsleigh(4, ["....", "..XX", "XXX.", "...."])).to.eq(2);
  });
  it("should return 5 for N = 10 and map ['...X..X.X.','....X..X..,'.....X..X.','...XXX....','....XXXXXX','.X.X....XX','XXXXXXXXXX','XXXXXXXXXX','XX.X.XX...','..X...X.X.']", () => {
    expect(
      countMaxBobsleigh(10, [
        "...X..X.X.",
        "....X..X..",
        ".....X..X.",
        "...XXX....",
        "....XXXXXX",
        ".X.X....XX",
        "XXXXXXXXXX",
        "XXXXXXXXXX",
        "XX.X.XX...",
        "..X...X.X.",
      ])
    ).to.eq(5);
  });
  it("should return 0 if N < 4", () => {
    expect(countMaxBobsleigh(3, ["...", "...", "..."])).to.eq(0);
  });
});
