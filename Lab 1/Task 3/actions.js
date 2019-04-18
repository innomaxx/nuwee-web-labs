
let counter = 1
const verify_reg = /^\d+/

function submitInput() {
    let input = document.getElementById("userinput")
    if (!verify_reg.test(input.value)) return alert("Неправильний ввід")

    createListItem(input.value)
    ++counter
    document.getElementById("month").innerHTML = counter
}

function createListItem (val) {
    const parent = document.getElementById("salaries")
    const list_item = document.createElement("li")

    // list_item.setAttribute("class", "salary-item")
    list_item.innerHTML = `За ${counter} місяць : <span class="salary-value">${val}</span>`
    parent.appendChild(list_item)
}

function calcAverage() {
    const values = document.getElementsByClassName("salary-value")
    if (!values.length) return alert("Немає вхідних данних")

    let sum = 0
    for (const salary_value of Array.from(values)) {
        sum += Number(salary_value.innerHTML)
    }

    const result = document.getElementById("salaries-result")
    result.innerHTML = (sum / values.length).toFixed(2)
}