console.log('Hola mundo');

// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

// const {edad, clave, nombre} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usarContexto = ({edad, clave, nombre, rango = 'Capitan'}) => {
    //console.log(edad, clave, nombre, rango);
    return {
        nombreClave : clave,
        anios : edad,
        latlng : {
            lat : 14.32,
            lng : 16.78
        }
    }
};

const {nombreClave, anios, latlng:{lat, lng}} = usarContexto(persona);
console.log(nombreClave, anios);
console.log(lat, lng);