// MENSAGEM FINAL
function mensagem(){
document.getElementById("msg").innerHTML =
"🌱 O Agro é essencial para o mundo. Produzir com sustentabilidade é garantir o futuro.";
}

// BOTÃO VOLTAR AO TOPO
const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {
if(window.scrollY > 300){
topo.style.display = "block";
}else{
topo.style.display = "none";
}
});

topo.addEventListener("click", () => {
window.scrollTo({top:0, behavior:"smooth"});
});

// CLIQUE NAS IMAGENS
document.querySelectorAll("img").forEach(img => {
img.addEventListener("click", () => {
img.style.transform = "scale(1.2)";
setTimeout(() => {
img.style.transform = "scale(1)";
}, 400);
});
});
