const myPochta = "danila.derenchenko@yandex.ru";
const copyButton = document.querySelector(".boxPochta");
copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(myPochta)
    .then (() => {
        alert("Email скопирован в буфер обмена")
    })
    .catch (() => {
        console.error("Ошибка копирования в буфер обмена")
    })
})