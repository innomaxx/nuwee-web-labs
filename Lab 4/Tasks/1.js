
process.title = "Lab 4.1"

let value = tryParse(process.argv[2] || 1e3),
    result = "Значення "

if (value.constructor === Number) {
    if (value === Infinity) {
        result += "нескінченне"
    } else if (value > 0) {
        result += "більше нуля"
    } else {
        result += "менше нуля"
    }
} else {
    result += "не є числом"
}

console.log(result)

function tryParse (val) {
    const parsed = parseFloat(val)
    return Number.isNaN(parsed) ? val : parsed
}