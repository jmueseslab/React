//await => podemos trabajar todo el codigo como si fuera sincrono
//async => transformar a que su funcion retorne una promesa

const getImage = async() => {

    try {
        const apiKey = 'w74bidccVbNAkLG9jJkzwrAqXW9BSvYR';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    } catch (error){
        //manejo del error
        console.error(error);
    }

}

//console.log(getImage());
//getImage().then(console.log);

getImage();