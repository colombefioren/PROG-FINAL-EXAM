import { expect } from "chai";
import { describe } from "mocha";
import { reduceDirections } from "../src/reduceDirections.js";

describe("Reduce to the shortest possible way", () => {
  it("should return ['OUEST']", () => {
    expect(
      reduceDirections(["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST"])
    ).to.deep.eq(["OUEST"]);
  });
  it("should return []", () => {
    expect(reduceDirections(["NORD", "SUD", "EST", "OUEST"])).to.deep.eq([]);
  });
  it("should return ['NORD','EST','SUD','OUEST']", () => {
    expect(reduceDirections(["NORD", "EST", "SUD", "OUEST"])).to.deep.eq([
      "NORD",
      "EST",
      "SUD",
      "OUEST",
    ]);
  });
  it("should return ['NORD','OUEST','OUEST']", () => {
    expect(
      reduceDirections(["NORD", "EST", "OUEST", "OUEST", "OUEST"])
    ).to.deep.eq(["NORD", "OUEST", "OUEST"]);
  });
  it("should return ['NORD', 'EST', 'SUD', 'OUEST', 'OUEST']", () => {
    expect(
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
    ).to.deep.eq(["NORD", "EST", "SUD", "OUEST", "OUEST"]);
  });
  it("should return []", () => {
    expect(reduceDirections([])).to.deep.eq([]);
  })
  it("should return []");
});
