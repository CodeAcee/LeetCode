class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head;

  while (node !== null) {
    if (node.next !== null) {
      if (node.val === node.next.val) {
        node.next = node.next.next;
        continue;
      }
    }

    node = node.next;
  }

  return head;
}

console.log(
  deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))
);
