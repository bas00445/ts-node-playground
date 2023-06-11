export const traverseAllNestedObject = (obj: Record<any, any>) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (Object.keys(value).length > 0) {
        traverseAllNestedObject(value);
      } else {
        console.log({ [key]: obj[key] });
      }
    }
  }
};
