var romanToInt = function (s) {
  let acc = 0;
  let temp = null;
  let index = null;

  // need variable index rather than i since i is being updated and other if statements are affected by it

  for (let i = 0; i < s.length; i++) {
    index = i;

    if (s[index] === 'V') {
      temp = 5;
    }

    if (s[index] === 'L') {
      temp = 50;
    }

    if (s[index] === 'D') {
      temp = 500;
    }

    if (s[index] === 'I') {
      temp = 1;
      if (s[index + 1] === 'V') {
        temp = 4;
        i += 1;
      }
      if (s[index + 1] === 'X') {
        temp = 9;
        i += 1;
      }
      if (s[index + 1] === 'I') {
        temp = 2;
        i += 1;
        if (s[index + 2] === 'I') {
          temp = 3;
          i += 1;
        }
      }
    }

    if (s[index] === 'X') {
      temp = 10;
      if (s[index + 1] === 'L') {
        temp = 40;
        i += 1;
      }
      if (s[index + 1] === 'C') {
        temp = 90;
        i += 1;
      }
      if (s[index + 1] === 'X') {
        temp = 20;
        i += 1;
        if (s[index + 2] === 'X') {
          temp = 30;
          i += 1;
        }
      }
    }

    if (s[index] === 'C') {
      temp = 100;
      if (s[index + 1] === 'D') {
        temp = 400;
        i += 1;
      }
      if (s[index + 1] === 'M') {
        temp = 900;
        i += 1;
      }
      if (s[index + 1] === 'C') {
        temp = 200;
        i += 1;
        if (s[index + 2] === 'C') {
          temp = 300;
          i += 1;
        }
      }
    }

    if (s[index] === 'M') {
      temp = 1000;
      if (s[index + 1] === 'M') {
        temp = 2000;
        i += 1;
        if (s[index + 2] === 'M') {
          temp = 3000;
          i += 1;
        }
      }
    }

    acc += temp;
  }

  return acc;
};
