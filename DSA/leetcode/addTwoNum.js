/**
 * 
 * 
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example 1:


    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
    Example 2:

    Input: l1 = [0], l2 = [0]
    Output: [0]
    Example 3:

    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
 */

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getListNodes(arr) {
  let list = new ListNode(arr[0]);
  let current = list;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return list;
}

let l1Nodes = getListNodes(l1);
let l2Nodes = getListNodes(l2);

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let sum = 0;
  let result = [];

  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    sum = val1 + val2 + carry;

    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }

    result.push(sum);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  console.log("## result: ", result);
};

addTwoNumbers(l1Nodes, l2Nodes);
