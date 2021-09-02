const isValid = s => {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let last = null;

  for (var i = 0; i < s.length; i++) {
    if (s[i] in map) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      last = stack.pop();
      if (map[last] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
