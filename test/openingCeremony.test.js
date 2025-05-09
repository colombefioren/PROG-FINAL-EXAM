import { expect } from "chai";
import { describe, it } from "mocha";
import { getLastDelegation } from "../src/openingCeremony.js";

describe("Get the last delegation", () => {
  it("should return Estonia", () => {
    expect(
      getLastDelegation(["Chilli 101 2", "Estonia 58 1", "Madagascar 104 5"])
    ).to.eq("Estonia");
  });
  it("should return France", () => {
    expect(
      getLastDelegation([
        "France 120 1",
        "Madagascar 10 1",
        "Yemen 90 2",
        "Mauritius 80 1",
      ])
    ).to.eq("France");
  });
  it("should return Egypt", () => {
    expect(
      getLastDelegation([
        "Spain 50 2",
        "South-Korea 25 5",
        "Egypt 100 1",
        "Oman 80 1",
      ])
    ).to.eq("Egypt");
  });
});
