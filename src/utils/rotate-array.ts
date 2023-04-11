export const rotateArray = <T>(array: T[], times = 1): T[] => {
  const index = times % array.length;
  const firstPart = array.slice(0, index);
  const secondPart = array.slice(index);

  return secondPart.concat(firstPart);
};

export const rotateArrayTo = <T>(array: T[], item: T): T[] => {
  return rotateArray(array, array.indexOf(item));
};
