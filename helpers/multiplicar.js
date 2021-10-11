const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = (base, listar, hasta) => {
    // Se puede hacer igual con el async (return y throw error)
    return new Promise((resolve, reject) => {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            //salida += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            //Limpia la consola en ejecucción
            console.log('=================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('=================='.green);

            console.log(salida);
        }

        // Forma Asíncrona
        // fs.writeFile(`tabla${ base }.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla${ base }.txt creado`);
        // });

        // Forma Síncrona => hay que atrapar el error con un try catch
        try {
            fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
            resolve(`tabla${base}.txt`);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    crearArchivoTabla
}