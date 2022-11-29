const nombre = "Rafa"
const apellido = "Gioia"
const persona = {
    Nombre: nombre,
    Apellido: apellido
}
console.log(persona)
localStorage.setItem("Nombre",
JSON.stringify(persona) )
sessionStorage.setItem("Nombre",
JSON.stringify(persona) )
const now = new Date()
document.cookie = `Nombres=${JSON.stringify(persona)};expires=${new Date(now.getTime() + 22 * 60000)}`
