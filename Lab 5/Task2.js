
//const notHoistedFN = console.log.bind(console, "Hello world 1")

notHoistedFN()
hoistedFN()

const notHoistedFN = console.log.bind(console, "Hello world 1")

function hoistedFN() {
    console.log("Hello world 2")
}