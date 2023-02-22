console.log('Hola mundo');
const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    direccion : {
        ciudad : 'New York',
        zip : 55321456,
        lat : 14.32,
        lng : 34.9
    }
};
// console.log({persona});
// console.table(persona);

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);

/*
lo que no debe hacerce al momento de clonar un objeto

const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);

*/
