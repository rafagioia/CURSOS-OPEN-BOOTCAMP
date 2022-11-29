const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    alert("Click en el boton")
})

$("#btn").click(() => {
    console.log("Hola, estoy utilizando JQuery")
})