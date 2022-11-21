// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let altura_ent = parseInt("168cm")
// - Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = parseFloat("1.68cm")
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso= parseFloat("80.4kg")
// - Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_ar = Math.ceil(altura_m)
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_ab = Math.floor(peso)
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor = Number.MAX_VALUE + 1 === Number.MAX_VALUE