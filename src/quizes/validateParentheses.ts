import { Stack } from "typescript-collections";

export const validateParentheses = (str: string) => {
  const stack = new Stack();

  const pair = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    if (stack.peek() === element) {
      stack.pop();
    } else {
      if (pair[element]) {
        stack.push(pair[element]);
      }
    }
  }

  return stack.isEmpty() ? true : false;

  // const stack = [];

  // const pair: Record<string, string> = {
  //   "{": "}",
  //   "(": ")",
  //   "[": "]",
  // };

  // for (let i = 0; i < str.length; i++) {
  //   const element = str[i];

  //   if (stack[stack.length - 1] === element) {
  //     stack.pop();
  //   } else {
  //     if (pair[element]) {
  //       stack.push(pair[element]);
  //     }
  //   }
  // }

  // return stack.length === 0 ? true : false;
};
