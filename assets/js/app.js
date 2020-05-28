
// Variables

     // esta variable se igual al div de la lista tweet
     const listaNotas_div = document.getElementById('listaNotas_div_id_enhtml');

     



// Event Listeners

eventListeners();


function eventListeners() {

          //Cuando se envia el formulario
          // selecciona form y escucha el evento submit del form hasta que pulsas el boton
          // cuando lo haces ejecuta la funcion agregartweet
          document.querySelector('#formulario').addEventListener('submit', agregarTweet);

          





          // Borrar Tweets
          // la variable lista tweets que seria el div en el que se muestran las notas
          // se le añade una escucha que al hacer click ejecuta la funcion borrar
          listaNotas_div.addEventListener('click', borrarTweet);

          // Contenido cargado
          // al cargar el dom se ejecuta localStorageListo
          document.addEventListener('DOMContentLoaded', localStorageListo);

     }

// ----------------------------------------------------
//1 cada vez que se carga la pagina al cargar el dom se ejecuta localStorageListo
// document.addEventListener('DOMContentLoaded', localStorageListo); que viene directo de los listeners
// Mostrar datos de LocalStorage en la lista esta mierda es lo mismo que la funcion agregar tweets
function localStorageListo() {

     //define la varibles tweets por primera vez
     let tweets;

     
     // la variables tweets es igual a ejecutar la funcion de abajo
     tweets = obtenerTweetsLocalStorage();

     
     // hace un bucle que recorre el localstorage y .....
     tweets.forEach(function(tweet) {

          // copia de agregar tweet
          // ----------------------------------------------------
          // ----------------------------------------------------
          // crear boton de eliminar
          //crea un enlace "a"



          varias_cosas();
          
          const botonBorrar = document.createElement('a');

          // el .classList devuelve una coleccion de los atributos de la clase elementos ?.... en este
          // caso se usa para igualarlo a e.target.className?????
          botonBorrar.classList = 'borrar-tweet';



          // el texto del boton borrar lo iguala a x creando el boton borrar
          botonBorrar.innerText = 'X';

               // Crear elemento y añadirle el contenido a la lista
               const li = document.createElement('li');
               li.innerText = tweet;
               // añade el botón de borrar al tweet
               li.appendChild(botonBorrar);
               // añade el tweet a la lista
               listaNotas_div.appendChild(li);

          // copia de agregar tweet
          // ----------------------------------------------------
          // ----------------------------------------------------

     });
}





//2 cuando se ejecuta el submit se ejecuta la funcion agregar tweet
function agregarTweet(e) {

     e.preventDefault();


     // leer el valor del textarea y lo almacena en la variable
     const tweet = document.getElementById('tweet').value;
     

     // crear boton de eliminar
     //crea un enlace "a"
     const botonBorrar = document.createElement('a');

     // el .classList devuelve una coleccion de los atributos de la clase elementos ?.... en este
     // caso devuelve lista de elemento de la funcion borrar tweet
     botonBorrar.classList = 'borrar-tweet';



     // el texto del boton borrar lo igual a x creando el boton borrar
     botonBorrar.innerText = 'X';

     // Crear elemento y añadirle el contenido a la lista
     const li = document.createElement('li');
     

     // coge el valor de la lista y lo igual al text area ---> tweet es el text area
     li.innerText = tweet;

     // añade el botón de borrar al tweet
     li.appendChild(botonBorrar);

     // añade el tweet a la variable lista tweets que es el div de la lista
     listaNotas_div.appendChild(li);

     // ejecuta la funcion agregarTweet..... y agrega el text area dentro del local storage
     agregarTweetLocalStorage(tweet);


}

// 2 encadena con la de arriba
// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
     let tweets;
     tweets = obtenerTweetsLocalStorage();
     // Añadir el nuevo tweet
     tweets.push(tweet);
     // Convertir de string a arreglo para local storage
     localStorage.setItem('tweets', JSON.stringify(tweets) );
}



// ----------------------------------------------------


//3 cuando click en el div se borra el tweet
// Elimina el Tweet del DOM
function borrarTweet(e) {

     // previene cancela el evento para ser llamado de nuevo si es necesario
     e.preventDefault();


     // ????
     if(e.target.className === 'borrar-tweet') {

          e.target.parentElement.remove();
          borrarTweetLocalStorage(e.target.parentElement.innerText);
     } 
}


// ----------------------------------------------------



     // Comprobar que haya elementos en localstorage, retorna un arreglo
     function obtenerTweetsLocalStorage() {
          let tweets;
          // Revisamos los valoes de local storage
          if(localStorage.getItem('tweets') === null) {
               tweets = []; 
          } else {
               tweets = JSON.parse(localStorage.getItem('tweets') );
          }
          return tweets;
     }



     // Eliminar tweet de Local Storage

     function borrarTweetLocalStorage(tweet) {

          let tweets, tweetBorrar;
          // Elimina la X del tweet
          tweetBorrar = tweet.substring(0, tweet.length - 1);

          tweets = obtenerTweetsLocalStorage();

          tweets.forEach(function(tweet, index) {
               if(tweetBorrar === tweet) {
                    tweets.splice(index, 1);
               }
          }) ;

          localStorage.setItem('tweets', JSON.stringify(tweets) );
     }