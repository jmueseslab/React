console.log('Hola mundo');

// Desestructuración de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = ()=>{
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamara setNombre

const usoEstado = (valor) =>{
    return [valor, ()=>{console.log('Hola mundo 2')}]
}

const [nombre, setNombre] = usoEstado('Goku');
console.log(nombre);
setNombre();