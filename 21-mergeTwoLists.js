const list1 = [1,2,4]
const list2 = [1,3,4]

const mergeTwoLists = (list1, list2) => {
    const arr3 = list1.concat(list2)
    return arr3
}

console.log(mergeTwoLists(list1, list2))