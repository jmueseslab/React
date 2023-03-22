// const newMessage = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newMessage = {
    message: 'Hola mundo',
    title: 'Jhon Jairo'
};

const newNombre = () => {
    return 'Jhon Jairo';
}

export const FirstApp = () => {

    return (

        //fragmento
        <>
            <h1>Hola mundo {newNombre()}</h1>
            {/* <code> { JSON.stringify(newMessage) }</code> */}
            <p>soy un parrafo</p>
        </>
    );
}
// rafc => atajo crear component fuction
