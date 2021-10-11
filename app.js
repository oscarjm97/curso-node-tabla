const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// Recibir información desde línea de comando (no muy útil)
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

// Mucho mejor recibir argumentos con yargs
//console.log('Base: yargs', argv.b);

// Imprimir la tabla de multiplicar de cualquier número (base)
//const base = 5;

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
    .catch((err) => console.log(err));
