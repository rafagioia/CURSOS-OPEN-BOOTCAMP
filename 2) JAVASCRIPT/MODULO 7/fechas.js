// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const date = new Date()
console.log(date)

// - La fecha de tu nacimiento
const fnac = new Date(1987, 04, 12)
console.log(fnac)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(date > fnac)

// - Una variable que contenga el día de tu nacimiento

const dianac = fnac.getDate()
console.log(dianac)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const mesnac = fnac.getMonth()
console.log(mesnac +1)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const anyonac = fnac.getFullYear()
console.log(anyonac)