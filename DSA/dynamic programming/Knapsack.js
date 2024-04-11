
class Solution {
  SolveKnapsack(profits, weights, capacity) {
    let maxProfit = 0;
    let n = profits.length;
    if (capacity <= 0 || n == 0 || weights.length !== n) {
      return 0
    }

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((weights[i] + weights[j]) > capacity) {
          continue;
        }
        let sum = profits[i] + profits[j];
        if (sum > maxProfit) {
          maxProfit = sum;
        }
      }
    }
    return maxProfit;
  }
}

b = new Solution();
let profits = [4, 5, 3, 7];
let weights = [2, 3, 1, 4];
let capacity = 5;
console.log(b.SolveKnapsack(profits, weights, capacity));
