export const getLastDelegation = (delegations) => {
  let delegationInfo = [];
  for (const delegation of delegations) {
    const [name, distanceToTarget, velocity] = delegation.split(" ");
    delegationInfo.push({
      name: name,
      timeTakenToTarget: parseInt(distanceToTarget) / parseInt(velocity),
    });
  }
  delegationInfo.sort(
    (a, b) => a["timeTakenToTarget"] - b["timeTakenToTarget"]
  );
  return delegationInfo[delegationInfo.length - 1]["name"];
};
