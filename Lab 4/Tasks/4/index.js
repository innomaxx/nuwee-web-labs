
const day = require("./schedule").response.schedule[0].days[2]

console.log(
`\n${day.dayname} ${day.day} :
  -> ${
    day.subjects
        .map(s => `[${s.time.split("-").join(" -> ")}] : ${s.subject} (${s.type}, ${s.classroom})` )
        .join("\n  -> ")
    }`
)