const imagens = document.querySelectorAll(".card img");

imagens.forEach(img => {

img.addEventListener("mousemove", (e)=>{

const x = (e.offsetX/img.clientWidth -0.5)*20;
const y = (e.offsetY/img.clientHeight -0.5)*20;

img.style.transform = `
perspective(600px)
rotateY(${x}deg)
rotateX(${-y}deg)
scale(1.12)
`;

});

img.addEventListener("mouseleave", ()=>{

img.style.transform="perspective(600px) rotateX(0) rotateY(0) scale(1)";

});

});
