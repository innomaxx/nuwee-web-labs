
process.title = "Lab 4.2"
const Timetable = require("./Timetable")
const { createInterface } = require("readline")

const tt = new Timetable([
    { start: 8, end: 9.2, subject: "Методи обчислень" },
    { start: 9.4, end: 11, subject: "Комп'ютерні мережі, інтерфейси та протоколи передачі данних" },
    { start: 11.15, end: 12.35, subject: "Комп'ютерні мережі, інтерфейси та протоколи передачі данних" },
    { start: 14.35, end: 15.55, subject: "Фізичне виховання" }
])

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("\nВведіть поточний час : ", time => {
    // TODO: time verification
    const { ok, start, end, subject } = tt.check(parseFloat(time.replace(":", ".")))
    console.log(
        `У ${toTime(time)} користувач ${
            ok ? `знаходиться на парі "${subject}", яка триває з ${toTime(start)} до ${toTime(end)}` : "гуляє"
        }`
    )
    rl.close()
})

function toTime (val) {
    if (typeof val != "number") 
        val = parseFloat(val.replace(":", "."))
    return val.toFixed(2).replace(".", ":")
}