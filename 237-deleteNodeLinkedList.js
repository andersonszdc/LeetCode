const deleteNode = function (node) {
    [node.val, node.next] = [node.next.val, node.next.next];
};
