export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  const nodes = [];

  while (head) {
    nodes.push(head.val);
    head = head.next;
  }

  nodes.sort((a, b) => a - b);

  let sortedList;

  nodes.forEach((val) => {
    sortedList = new ListNode(val, sortedList);
  });

  return sortedList;
}
