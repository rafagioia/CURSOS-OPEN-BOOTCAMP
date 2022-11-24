// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
    nombre: "Rafael",
    apellido: "Gioia",
    edad: 35,
    altura: 1.68,
    eresDesarrollador: true
}
// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = "edad"
console.log(datosPersonales[edad])

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const datosPersonalesA1 = {
    nombre: "Carla",
    apellido: "Fernandez",
    edad: 30,
    altura: 1.50,
    eresDesarrollador: false
}

const datosPersonalesA2 = {
    nombre: "Yamila",
    apellido: "Caiña",
    edad: 33,
    altura: 1.70,
    eresDesarrollador: false
}

const lista1 = [datosPersonales, datosPersonalesA1, datosPersonalesA2]
console.log(lista1)


// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const arrayord = lista1.sort((a, b) => b.edad - a.edad)
console.log(arrayord) 