export const getLastDelegation = (delegations) => {
  const duration = delegations.map((el, i) => Number(el.split(" ")[1]) / Number(el.split(" ")[2]));
  return delegations.map((el, i) => el.split(" "))[duration.indexOf(Math.max(...duration))][0];
};
export default getLastDelegation;
