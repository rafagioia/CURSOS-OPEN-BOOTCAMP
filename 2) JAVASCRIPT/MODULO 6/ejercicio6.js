

// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompras = ["Mate", "Cafe", "Harina", "Palmitos", "Yerba", "Mermelada", "Cacao"]

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.unshift("Aceite de Girasol")

console.log(listaCompras)


// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.shift()
console.log(listaCompras)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const pelisFav = [
    {titulo: "Spider-man: No Way Home", director: "Jon Watts", fecha: 2021 },
    {titulo: "Avengers: Infinity War", director: "Anthony Russo & Joe Russo", fecha: 2018 },
    {titulo: "Iron Man: el hombre de hierro", director: "Jon Favreau", fecha: 2008 }
]
console.log(pelisFav)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelisNuevas = pelisFav.filter(obj => obj.fecha >= 2010)
console.log(pelisNuevas)


// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const pelisDirec = pelisFav.map((valor) => (`${valor.director}`))
console.log(pelisDirec)


// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const pelisTitulo = pelisFav.map((valor) => (`${valor.titulo}`))
console.log(pelisTitulo)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const DirecTitus = pelisDirec.concat(pelisTitulo)
console.log(DirecTitus)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const DirecTitusP = [...pelisDirec, ...pelisTitulo]
console.log(DirecTitusP)
