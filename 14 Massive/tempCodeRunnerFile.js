let array = [1, 15, 4],
    a = array.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(array);