// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function inorderTraversal(root) {
  const res = [];
  helper(root, res);
  return res;
}

var helper = function (root, res) {
  if (root !== null) {
    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);
  }
};

inorderTraversal([1, 2, null, 4, 5]);
