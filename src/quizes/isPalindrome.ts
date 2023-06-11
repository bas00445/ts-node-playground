export function isPalindrome(str: number) {
  for (let i = 0; i < str.length / 2; i++) {
    const first = str[i];
    const last = str[str.length - i];

    if (first !== last) {
      return false;
    }
  }

  return true;
}
