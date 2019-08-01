const { crearArchivo, listarjlo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarjlo(argv.base, argv.limite);
        break;
    case 'crear':

        crearArchivo(argv.base)
            .then((archivo) => {
                console.log(`Archivo creado:`, colors.green(archivo));
            }).catch((e) => {
                console.log(e);
            });
        break;
    default:
        console.log('Comando no reconocido');

}

