console.log('Hola mundo');

//Funciones en JS

// function saludar(nombre){
//     return `hola ${nombre}`;
// }

// const saludar = function(nombre){
//     return `hola ${nombre}`;
// }

// FUNCIONES FLECHA
const saludar2 = (nombre) => {
    return `hola ${nombre}`;
}

const saludar3 = (nombre) => `hola ${nombre}`;
const saludar4 = () => `hola mundo 2`;

const getUser = () => ({
    uid: 'ABC1234',
    username: 'jjmuesesq'
});

const user = getUser();

// saludar = 30;

// console.log(saludar('Goku'));
console.log(saludar2('Vegueta'));
console.log(saludar3('Goku'));
console.log(saludar4());
console.log(user);

//Tarea
//1. Transformen a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

function getUsuarioActivo (nombre) {
    return {
        uid: 'ABC765',
        username: nombre
    }
}
const usuarioActivo = getUsuarioActivo('Jhon Jairo')
console.log(usuarioActivo);

//solution

const getUsuarioActivo2 =  (nombre) => ({
    uid: 'ABC765',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Jhon Jairo 2')
console.log(usuarioActivo2);


