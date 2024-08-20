const getPosts = async () =>{

    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        
        if(!respuesta.ok){
            throw new Error(`Error de solicitud:`+ respuesta.status)
        }
        const post = await respuesta.json(); 
        const publicar = document.querySelector(`#post-data`)
        console.log(publicar);
        publicar.innerHTML = ``; 
        const lista = document.createElement(`ul`); 
        post.forEach(post => {
            const filas = document.createElement("li");
            filas.innerHTML = `<strong>${post.title}:</strong> <br>  ${post.body} <hr> ` 
            lista.appendChild(filas); 
            
        
        });
        publicar.appendChild(lista); 
       
        
        
    } catch (error) {
        console.log(`Error al obtener datos `, error); 
    }
}



