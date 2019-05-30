
const path = "https://test.io/wp-content/uploads/2019/02/testIO-logo-rgb-2.png"

let lastDotIndex
function searchDot(position = 0) {
    if (path[position] == ".") {
        lastDotIndex = position
    }
    return path[position] === undefined ? lastDotIndex : searchDot(++position)
}
console.log("\nРозширення :", path.slice(searchDot() + 1))