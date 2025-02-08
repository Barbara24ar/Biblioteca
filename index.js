//import chalk from 'chalk';
import chalk from 'chalk';
import fs from 'fs';

function manejarError(error){
    console.log(error)
    throw new Error(chalk.red(error))
}

//camino PATH
function cargarArchivo(rutaArchivo){
    const encoding = 'utf-8'
    fs.readFile(rutaArchivo, encoding, (error, texto) => {
        //stacktrace
        if(error){
            manejarError(error)
        }
        console.log(chalk.green(texto))
    })
}

cargarArchivo("./archivos/texto.md") 