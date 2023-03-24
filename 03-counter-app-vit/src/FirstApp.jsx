import PropsTypes from 'prop-types'; // PropTypes => definimos el tipo a las props

// const newMessage = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newMessage = {
    message: 'Hola mundo',
    title: 'Jhon Jairo'
};

const newNombre = () => {
    return 'Jhon Jairo';
}

export const FirstApp = ( { title, subTitle, name } ) => {
    //console.log(props);
    return (

        //fragmento
        <>
            <h1>{title}</h1>
            <h1>Hola mundo {newNombre()}</h1>
            {/* <code> { JSON.stringify(newMessage) }</code> */}
            <p>soy un parrafo {subTitle}</p>
            <p>{name}</p>
        </>
    );
}
// rafc => atajo crear component fuction

FirstApp.propTypes = {
    title: PropsTypes.string.isRequired,
    subTitle: PropsTypes.string
}

// Default props entran antes que propTypes
FirstApp.defaultProps = {
    title:'No hay titulo',
    subTitle:'No hay subtitulo',
    name:'Jhon Jairo'
}