// https://leetcode.com/problems/same-tree/description/ 

class TreeNodeSame {
  val: number;
  left: TreeNodeSame | null;
  right: TreeNodeSame | null;
  constructor(
    val?: number,
    left?: TreeNodeSame | null,
    right?: TreeNodeSame | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSameTree(p: TreeNodeSame | null, q: TreeNodeSame | null): boolean {
  return helperTree(p, q);
}

function helperTree(p: TreeNodeSame | null, q: TreeNodeSame | null): boolean {
  if (p === null && q === null) {
      return true;
  }
  if (p === null || q === null) {
      return false;
  }
  if (p.val !== q.val) {
      return false;
  }
  
  return helperTree(p.left, q.left) && helperTree(p.right, q.right);
}

const p = new TreeNodeSame(1, new TreeNodeSame(2), new TreeNodeSame(3));
const q = new TreeNodeSame(1, new TreeNodeSame(2), new TreeNodeSame(3));

console.log(isSameTree(p, q)); // Output: true