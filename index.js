import chalk from 'chalk';
import fs from 'fs';

function manejarError(error){
    console.log(error)
    throw new Error(chalk.red(error))
}

async function cargarArchivo(rutaArchivo) {
    try{
        const encoding = "utf-8"
        const texto = await fs.promises.readFile(rutaArchivo, encoding)
        console.log(chalk.green(texto))
    }catch(error){
        manejarError(error)
    }
}


cargarArchivo("./archivos/texto.md") 