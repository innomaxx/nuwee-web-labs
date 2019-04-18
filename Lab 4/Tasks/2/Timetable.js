
module.exports = class Timetable {
    constructor (subjects) {
        this.subjects = subjects || []
    }

    add (start, end, subject) {
        this.subjects.push({ start, end, subject })
        return this
    }

    check (time) {
        let result = { ok: false }
        const search = this.subjects.find(
            s => s.start <= time && time <= s.end
        )
        if (search) result = { ok: true, ...search }
        return result
    }
}