
console.log("Поточна дата :", getTime())

function getTime() {
    const ts = new Date()
    const rx = {
        date: ts.getDate(),
        month: ts.getMonth() + 1,
        year: ts.getFullYear(),
        hours: ts.getHours(),
        minutes: ts.getMinutes(),
        seconds: ts.getSeconds(),
        milliseconds: ts.getMilliseconds()
    }
    Object.keys(rx)
        .filter(key => rx[key] < 10)
        .forEach(key => rx[key] = `0${rx[key]}`)
    if (rx.milliseconds < 100) rx.milliseconds = `0${rx.milliseconds}`

    return `${rx.date}.${rx.month}.${rx.year} ${rx.hours}:${rx.minutes}:${rx.seconds}.${rx.milliseconds}`
}