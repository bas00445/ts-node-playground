export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const containerArrays: any[] = [];
  for (let index = 0; index < numRows; index++) {
    containerArrays.push([]);
  }

  let pointerIndex = 0;
  let increaseIndex = 0;

  // Loop through all index of string
  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    // Add to containerArrays
    containerArrays[pointerIndex].push(element);

    // If peek
    if (pointerIndex === numRows - 1) {
      increaseIndex = -1;
    }
    // If min
    else if (pointerIndex === 0) {
      increaseIndex = 1;
    }

    pointerIndex += increaseIndex;
  }

  return containerArrays.flat(1).join("");
}
