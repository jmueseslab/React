console.log('Hola mundo');

const nombre = 'Jhon';
const apellido = 'Mueses';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;
console.log(nombreCompleto);

function getSaludo (nombre){
    return 'Hola ' + nombre;
}

console.log(`Saludo: ${getSaludo(nombreCompleto)}`);