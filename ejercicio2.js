/* 
Ejercicio 2: Promesa de Múltiples Solicitudes
Crea una función que realice las siguientes tareas:
Recibe un array de URLs como argumento.
Utiliza fetch y promesas para realizar una solicitud GET a cada URL en el array.
Devuelve una promesa que se resuelva con un array de los resultados de todas las solicitudes.
*/
function promesaDeSolicitudes(urls) {
    const promises = urls.map(url => fetch(url));
    return Promise.all(promises)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        return data;
      });
  }
  
  promesaDeSolicitudes(['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2'])
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });