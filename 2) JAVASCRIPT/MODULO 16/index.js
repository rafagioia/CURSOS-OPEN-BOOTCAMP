// asignamos todos los parrafos a la variable "parrafos"
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

//Presionar y soltar click en el parrafo
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => { //se activa cuando apretas el boton del mouse
        parrafo.classList.add("dragging") // agrega la clase dragging para luego darle estilo con css
        event.dataTransfer.setData("id", parrafo.id) // guardamos en "Id" y la data que se encuentra en parrafo.id
        
        const elemento_fantasma = document.querySelector(".imagen-fantasma") //obtenemos la clase imagen-fantama
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    parrafo.addEventListener("dragend", () => { //se activa al soltar
        parrafo.classList.remove("dragging") //remueve el dragging
    })
})

//Sostener y soltar el click
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => { //se activa mientras se sostiene el click
        event.preventDefault() //hay que detenerlo por preventdefault para que funcione el drop
    })
    seccion.addEventListener("drop", event => { //se activa al soltar
        const id_parrafo = event.dataTransfer.getData("id")// obtenemos la data que guardamos en "Id" y la guardamos en id_parrafo        
        const parrafo = document.getElementById(id_parrafo) //obtenemos el elemento al que pertenece ese ID
        seccion.appendChild(parrafo) //en la seccion ponemos como elemento hijo ese parrafo        
  })

})


//Removemos el elemento
const remueve = document.querySelectorAll(".remove")
remueve.forEach(papelera => {
    papelera.addEventListener("dragover", event => { //se activa mientras se sostiene el click
        event.preventDefault() //hay que detenerlo por preventdefault para que funcione el drop
    })
    papelera.addEventListener("drop", event => { //se activa al soltar
        const id_parrafo = event.dataTransfer.getData("id")// obtenemos la data que guardamos en "Id" y la guardamos en id_parrafo        
        const parrafo = document.getElementById(id_parrafo) //obtenemos el elemento al que pertenece ese ID
        parrafo.remove() //removemos el parrafo al soltarlo en la papelera        
  })
})