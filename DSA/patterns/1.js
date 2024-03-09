// Pattern to print

/*


  *       // n=1
    *     // n=2
      *   // n=3
    *     // n=4
  *       // n=5
    *     // n=6
      *   // n=7
    *     // n=8


*/

function print(num) {

  let flag = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log('  *')
    } else {
      if (flag) {
        console.log('    *');
        flag = 0;
        continue;
      }
      console.log('*');
      flag = 1;
    }
  }
}

print(6);