// PROMESAS
import {getHeroeById} from './bases/08-imp-exp';

/*
// PROMESA 1
const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //console.log('2 segundos despues...');
        //resolve();

        //Tarea importar
        const p1 = getHeroeById(2);
        //console.log(heroe);
        resolve(p1);
        //reject('No se pudo encontrar el héroe');
    }, 2000);
});

promesa.then((heroe)=>{
    console.log(heroe);
})
.catch(err => console.warn(err));
*/

//PROMESA 2

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //Tarea validar si existe
            const p1 = getHeroeById(id);
            if(p1 !== undefined){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
};

getHeroeByIdAsync(1)
    //.then((heroe)=>console.log('Heroe: ', heroe))
    .then(console.log)
    //.catch(err => console.warn(err));
    .catch(console.warn);