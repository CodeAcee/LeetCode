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

function inorderTraversal(root: TreeNode) {
  const res = [];
  helper(root, res);
  return res;
}

const helper = function (root, res) {
  if (root !== null) {
    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);
  }
};

const test = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3),
  new TreeNode(null),
  new TreeNode(5)
);

console.log(inorderTraversal(test));
