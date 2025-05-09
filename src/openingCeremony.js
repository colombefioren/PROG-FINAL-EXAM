const getLastDelegation = (delegations) => {
  let delegationFullInfo = [];

  for (const delegation of delegations) {
    const [name, completeDistance, velocity] = delegation.split(" ");
    delegationFullInfo.push({
      name: name,
      timeTakenToTarget: parseInt(completeDistance) / parseInt(velocity),
    });
  }

  delegationFullInfo.sort(
    (a, b) => a["timeTakenToTarget"] - b["timeTakenToTarget"]
  );

  return delegationFullInfo[delegationFullInfo.length - 1]["name"];
};

console.log(
  getLastDelegation([
    "Chilli 101 2",
    "Estonia 58 1",
    "Romania 102 3",
    "Ecuador 103 4",
    "Madagascar 104 5",
    "Oman 50 1",
    "Nicaragua 51 3",
    "Yemen 53 4",
  ])
);
