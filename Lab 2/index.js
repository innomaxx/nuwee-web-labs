
let name = "Vasya"

varTypes("спочатку", name, window.years || "*немає змінної*")

greeting()

varTypes("після використання", name, window.years || "*немає змінної*")

function greeting() {
    let years = 20
    varTypes("перед використанням", name, years)
    return `Привет ${name}, ${years} років`
}

function varTypes (cnd, v1, v2) {
    console.log(
`Значення змінних ${ cnd } :
    ${ typeof v1 } ${ v1 }
    ${ typeof v2 } ${ v2 }`
    )
}