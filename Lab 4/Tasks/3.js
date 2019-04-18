
process.title = "Lab 4.3"

const value = process.argv ? process.argv[1] : 123

console.log(`Тип змінної :`, getType(value))

function getType (value) {
    let result
    switch (typeof value) {
        case "string":
            result = "стрічка"
        break
        case "number":
            result = "число"
        break
        case "object":
            result = `${typeof value} ${value === null ? "null" : value.constructor.name}`
            // result = value === null
            //     ? "null"
            //     : value.constructor.name
        break
        default:
            result = "невизначений тип"
    }

    return result
}