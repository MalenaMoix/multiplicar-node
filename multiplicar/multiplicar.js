//requireds
const fs = require("fs");
const colors = require("colors");

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = "";

        if (!Number(base)) {
            reject("Debe ingresar un numero");
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base * i}`);
    }
};

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla,
};