// https://leetcode.com/problems/symmetric-tree/

class TreeNodee {
  val: number;
  left: TreeNodee | null;
  right: TreeNodee | null;
  constructor(val?: number, left?: TreeNodee | null, right?: TreeNodee | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root: TreeNodee | null): boolean {
  if (root === null) {
    return true;
  }

  return isSymmetricHelper(root.left, root.right);
}

function isSymmetricHelper(left: TreeNodee | null, right: TreeNodee | null): boolean {
  if (left === null && right === null) {
    return true;
  }

  if (left === null || right === null || left.val !== right.val) {
    return false;
  }

  return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}

const test = new TreeNodee(
  1,
  new TreeNodee(2),
  new TreeNodee(2),
  new TreeNodee(3),
  new TreeNodee(4),
  new TreeNodee(4),
  new TreeNodee(3)
);

console.log(isSymmetric(test)); // true
