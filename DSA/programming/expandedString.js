let str = "a3[b2[cd]]ef";

function printString(str = "") {
  let s = "";
  let i = 0;
  while (i < str.length) {
    if (!isNaN(parseInt(str[i]))) {
      let counter = 0;
      while (!isNaN(parseInt(str[i]))) {
        counter = counter * 10 + parseInt(str[i]);
        i++;
      }

      let bracketScopeStart = i;
      let bracketScopeEnd = findClosingBracket(str, bracketScopeStart);
      let substr = str.substring(bracketScopeStart + 1, bracketScopeEnd);
      let res = printString(substr);

      while (counter > 0) {
        s += res;
        counter--;
      }

      i = bracketScopeEnd + 1;
    } else {
      s += str[i];
      i++;
    }
  }

  return s;
}

function findClosingBracket(str, start) {
  let stack = [];

  for (let i = start; i < str.length; i++) {
    if (str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === "]") {
      stack.pop();
    }

    if (stack.length === 0) {
      return i;
    }
  }
  return -1;
}

console.log("## input: ", str);
let val = printString(str);
console.log("## output: ", val);
