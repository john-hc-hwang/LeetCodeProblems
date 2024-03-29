// To solve this problem, remember stacks and queues data structure
// FILO, first in last out

const isValid = s => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (s[i] === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
        stack.pop();
      } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
