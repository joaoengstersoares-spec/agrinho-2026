const imagens = document.querySelectorAll(".card img");

imagens.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("animar");

    });

});
