// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function sinPar() {
    if (true) {
        console.log(true)
    } else {
        console.log(true)
    }
}
sinPar()

/// con funcion flecha
const sinPar2 = (() => console.log(true))
sinPar2()

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const miPromesa = new Promise((res,rej) => {
    setTimeout(() => {
        if(true) {
            res()
        } else {
            rej()
        }
    }, 5000); 
})

miPromesa
    .finally(()=> console.log("Hola soy una promesa"))

// // - Una función generadora de índices pares automáticos

function* generaId() {
    let id = 0;
    while (true) {
        id = id + 2
        yield id
    }
    if (id === 14) {
        return
    }
}

const gen = generaId()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())