document.getElementById("calcBtn").addEventListener("click", function () {
    let a = Number(prompt("Введіть перше число:"))
    let b = Number(prompt("Введіть друге число:"))

    let sum = a + b
    let diff = a - b
    let mult = a * b
    let div = a / b

    // вывод прямо на страницу (вместо document.write)
    let res = document.getElementById("result")
    res.innerHTML = `
    <p>Сума: <strong>${sum}</strong></p>
    <p>Різниця: <strong>${diff}</strong></p>
  `

    alert("Множення: " + mult)
    alert("Ділення: " + div)
})
