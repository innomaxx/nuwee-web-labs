
class Human {
    constructor () {
        this.legs = 2
        this.hands = 2
        this.hasHead = true
    }
    voice() {
        return "hello world"
    }
}

const human = new Human()
console.log("legs" in human, human.legs)
console.log(typeof human.hands == "undefined", human.hands)
console.log(human.hasOwnProperty("hasHead"), human.hasHead)
// методи не відображаються, викликати можна
console.log(human.hasOwnProperty("voice"), human.voice())