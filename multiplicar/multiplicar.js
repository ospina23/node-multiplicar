
const fs = require('fs');
const colors = require('colors');


crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base ingresada no es un número');
            return;
        }
        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += `${base} X ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-de-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`Tabla-${base}.txt`);
        });
    });
}
listarjlo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base ingresada no es un número');
            return;
        }
        if (!Number(limite)) {
            reject('El límite ingresado no es un número');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            console.log(`${base} X ${i} = ${base*i} `.green);
        }
        
        
    });
}
module.exports = {
    crearArchivo, listarjlo
}