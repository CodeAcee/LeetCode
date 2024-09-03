

class TreeNodee {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let res: number[] = [];

  res.push(root.val);

  if (root?.left !== null && root?.left !== undefined) {
    res = res.concat(preorderTraversal(root?.left));
    res = res.concat(preorderTraversal(root?.right));
  }

  return res;
}

const test1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, new TreeNode(undefined)))
);

preorderTraversal(test1);
