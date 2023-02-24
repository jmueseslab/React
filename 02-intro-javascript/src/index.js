import {heroes} from './data/heroes';

const getHeroeById = (id)=>{
    return heroes.find((heroe) => heroe.id ===id);
}

console.log(getHeroeById(2));

//find() solo es para el primer elemento de la propiedad
//filter() validar
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner ===owner);
console.log(getHeroesByOwner('DC'));