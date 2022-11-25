import { suma, multiplica } from './modulos/controller.js'
import chalk from "chalk"

let sum1= suma(1,2)

let sum2= suma(4,5)

let multi = multiplica(sum1,sum2)

console.log(chalk.green(multi));