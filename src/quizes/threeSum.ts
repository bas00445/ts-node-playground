const isMatchedArray = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

export const threeSum = (items: number[]) => {
  const outputs: any[] = [];

  const sortedItems = items.sort((a, b) => a - b);

  for (let i = 0; i < sortedItems.length; i++) {
    for (let j = i + 1; j < sortedItems.length; j++) {
      for (let k = j + 1; k < sortedItems.length; k++) {
        const toPush = [sortedItems[i], sortedItems[j], sortedItems[k]];
        if (outputs.some((item) => isMatchedArray(item, toPush))) continue;

        if (
          i !== j &&
          i !== k &&
          j !== k &&
          sortedItems[i] + sortedItems[j] + sortedItems[k] === 0
        ) {
          outputs.push(toPush);
        }
      }
    }
  }

  return outputs;
};
