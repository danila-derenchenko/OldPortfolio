const myPochta = "danila.derenchenko@yandex.ru"
const myPhone = "+79297066917"

const copyEmail = document.querySelector(".boxPochta")
const copyPhone = document.querySelector(".phoneBox")

copyEmail.addEventListener("click", () => {
    navigator.clipboard.writeText(myPochta)
    .then (() => {
        alert("Email скопирован в буфер обмена")
    })
    .catch (() => {
        console.error("Ошибка копирования в буфер обмена")
    })
})

copyPhone.addEventListener("click", () => {
    navigator.clipboard.writeText(myPhone)
    .then (() => {
        alert("Номер телефона скопирован в буфер обмена")
    })
    .catch (() => {
        console.error("Ошибка копирования в буфер обмена")
    })
})