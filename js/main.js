const $html = document.querySelector("#html");
const $claro = document.querySelector("#claro");
const $escuro = document.querySelector("#escuro");

$escuro.addEventListener("click", function() {
    $html.classList.add("dark-mode")
})

$claro.addEventListener("click", function() {
    $html.classList.remove("dark-mode")
})