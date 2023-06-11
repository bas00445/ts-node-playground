// Start coding here

export const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left !== right) {
    const hLeft = height[left];
    const hRight = height[right];

    const minHeight = Math.min(hLeft, hRight);
    const area = minHeight * (right - left);

    if (area > max) {
      max = area;
    }

    if (hLeft < hRight) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return max;
};

// const r1 = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// const r2 = maxArea([4, 3, 2, 1, 4]);
