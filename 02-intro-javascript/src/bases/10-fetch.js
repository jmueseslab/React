const apiKey = 'w74bidccVbNAkLG9jJkzwrAqXW9BSvYR';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//Promesas en cadena
peticion
    .then(resp => resp.json())
    .then(({data}) => {
        // console.log(data.images.original.url);
        const { url } =  data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);
    //{
    // resp.json().then(data =>{
    //     console.log(data);
    // });})
