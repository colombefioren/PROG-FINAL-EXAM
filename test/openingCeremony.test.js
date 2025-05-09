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
  it("should return Greece", () => {
    expect(
      getLastDelegation([
        "Uruguay 80 4",
        "USA 100 8",
        "Greece 200 2",
        "Tanzania 70 5",
      ])
    ).to.eq("Greece");
  });
  it("should return Zambia", () => {
    expect(
      getLastDelegation([
        "Russia 103 5",
        "Moldavia 39 9",
        "Austria 420 69",
        "Zambia 80 2",
      ])
    ).to.eq("Zambia");
  });
});
