class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const removeElements = function(head, val) {
    let list = new ListNode()
    let newHead = list
    while (head !== null) {
        if (head.val !== val) {
            list.next = new ListNode(head.val)
            list = list.next
        }
        head = head.next
    }
    
    return newHead.next
};

const linkedList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 6,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: {
                            val: 6,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

console.log(removeElements(linkedList, 6))