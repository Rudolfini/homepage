{
    const welcome = () => {
        console.log("Aloha! Ten kod jest już w repozytorium Git.");
    };

    {
        const buttonElement = document.querySelector(".js-button");

        const togglePhoto = () => {
            const photoElement = document.querySelector(".js-photo");
            photoElement.classList.toggle("photo__hide");
            buttonElement.innerText = photoElement.classList.contains("photo__hide")
                ? "Jednak zdjęcie było OK"
                : "Nie podoba mi się zdjęcie";
        };

        const init = () => {
            buttonElement.addEventListener("click", togglePhoto);

            welcome();
        };

        init();
    };
}