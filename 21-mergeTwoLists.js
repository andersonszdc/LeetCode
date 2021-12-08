function ListNode(val) {
    this.val = val;
    this.next = null;
}

const L1 = new ListNode(2)
const L2 = new ListNode(5)
const mergeTwoLists = (l1, l2) => {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {

        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        list = list.next
    }

    if (l1 !== null)
        list.next = l1
    if (l2 !== null)
        list.next = l2
    
    return head.next
}

console.log(mergeTwoLists(L1, L2))