const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command(
        'listar', 'Imprime en consola tabla de multiplicar', opts)
    .command(
        'crear', 'crea tabla de multiplicar', opts)
    .help()
    .argv;

    module.exports ={
        argv
    };