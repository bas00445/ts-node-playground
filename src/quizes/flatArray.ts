export function flatArray(array: any[]) {
  let results: any[] = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      results = results.concat(flatArray(element)); // array.concat return new value, so need to re-assign
    } else {
      results.push(element);
    }
  }

  return results;
}
