export function allEqualValues(strs: string[]): boolean {
  return strs.every((element) => element === strs[0]);
}

export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  } else if (strs.length === 1) {
    return strs[0];
  } else if (allEqualValues(strs)) {
    return strs[0];
  }

  let resultIndex = 0;
  let stop = false;

  while (!stop) {
    for (let index = 0; index < strs.length; index++) {
      const element = strs[index][resultIndex];
      const compareElement = strs[0][resultIndex];

      if (element !== compareElement) {
        stop = true;
        break;
      }
    }

    if (!stop) {
      resultIndex += 1;
    }
  }

  return resultIndex !== 0 ? strs[0].substring(0, resultIndex) : "";
}

// Minify
// export function longestCommonPrefix(strs) {
//   if (strs.length === 0) return "";  // If array is empty, return an empty string
//   if (strs.length === 1) return strs[0];  // If array has only one element, return that element

//   let resultIndex = 0;  // Initialize the index for the result

//   // Continue looping until all elements have a common character at the current index
//   while (strs.every(element => element[resultIndex] === strs[0][resultIndex])) {
//     resultIndex++;  // Increment the index for the result
//   }

//   // If the result index is non-zero, return the substring of the first element up to that index
//   return resultIndex !== 0 ? strs[0].substring(0, resultIndex) : "";
// }
