import chalk from 'chalk';
import fs from 'fs';

function manejarError(error){
    console.log(error)
    throw new Error(chalk.red(error))
}

function cargarArchivo(rutaArchivo){
    const enconding = "utf-8"
    fs.promises.readFile(rutaArchivo, enconding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((error) => manejarError(error))
}


cargarArchivo("./archivos/texto.md") 