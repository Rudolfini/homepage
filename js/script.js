console.log("Aloha!");

let buttonElement = document.querySelector(".js-button");
let photoElement = document.querySelector(".js-photo");

buttonElement.addEventListener("click", () => {
    photoElement.classList.toggle("photo__hide");
    buttonElement.innerText = photoElement.classList.contains("photo__hide")
        ? "Jednak zdjęcie było OK"
        : "Nie podoba mi się zdjęcie";
});