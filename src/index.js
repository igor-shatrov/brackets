module.exports = function check(str, bracketsConfig) {
    const arr = str.split('')
    let startBrackets = []
    bracketsConfig.forEach(elem => {
        startBrackets.push(elem[0])
    })
    let finishBrackets = []
    bracketsConfig.forEach(elem => {
        finishBrackets.push(elem[1])
    })
    let indexes = []
    for (let indexArr = 0; indexArr < arr.length; indexArr++) {
        if (arr[indexArr] === indexes[indexes.length - 1] && finishBrackets.includes(arr[indexArr])) {
            indexes.splice(-1, 1)
        } else if (startBrackets.includes(arr[indexArr])) {
            startBrackets.forEach((elemStart, indexStart) => {
                if (elemStart === arr[indexArr]) {
                    indexes.push(finishBrackets[indexStart])
                }
            })
        } else {
            return false
        }
    }
    console.log(indexes);
    if (indexes.length === 0) {
        return true
    } else {
        return false
    }
}