// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston


const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

const errorFunc = val => {
    if (val < 120) {
        return val} 
    throw new Error("La edad es incorrecta, es mayor 119 años")
   } 

const edad = 350;

// - Registra el error en un archivo a través de un try...catch

try {  
        const edad2 = errorFunc(edad)
           console.log(`La edad es ${edad}`)
    } catch(e) {  
        console.log(`el error es: ${e}`) 
    }
