function mostrarMensagem(){

document.getElementById("mensagem").innerHTML=

"🌱 O Agro é Forte! Produzir com responsabilidade é construir um futuro sustentável para todos.";

}

const imagens=document.querySelectorAll(".card img,.drone");

imagens.forEach((img)=>{

img.addEventListener("click",()=>{

img.style.transform="scale(1.2) rotate(2deg)";

setTimeout(()=>{

img.style.transform="scale(1)";

},500);

});

});
