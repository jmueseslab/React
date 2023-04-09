import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id); 
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    }); 

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id); 
        expect(hero).toBeFalsy();
    }); 

    //Tarea
    //Debe de retornar un arreglo con los heroes de DC.
    //Length === 3
    //toEqual al arreglo filtrado

    test('getHeroeByOwner debe retornar un arreglo de heroes por DC', () => {

        const owner = 'DC';
        const heroOwner = getHeroesByOwner(owner); 
        //console.log(heroOwner);
        expect(heroOwner.length).toBe(3);
        expect(heroOwner).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );
        expect(heroOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });

    //Debe de retornar un arreglo con los heroes de Marvel.
    //Length === 2

    test('getHeroeByOwner debe retornar un arreglo de heroes por MARVEL', () => {

        const owner = 'Marvel';
        const heroOwner = getHeroesByOwner(owner); 
        expect(heroOwner.length).toBe(2);
        expect(heroOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    });
});