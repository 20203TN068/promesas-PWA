/*
Ejercicio 4: Promesas en Cadena con Retraso
Crea una función que realice las siguientes tareas:
Recibe un número n como argumento.
Utiliza un bucle para crear una cadena de promesas, donde cada promesa se resuelve después de N 
segundos con el número actual en el bucle.
Cada promesa debe imprimir el número en la consola antes de resolverse.
Finalmente, devuelve una promesa que se resuelva después de N segundos con el
mensaje "Todas las promesas se resolvieron"
*/
function promesasEnCadenaConRetraso(n) {
    let promiseChain = Promise.resolve();
    for (let i = 1; i <= n; i++) {
      promiseChain = promiseChain.then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(i);
            resolve();
          }, n * 1000);
        });
      });
    }
    return promiseChain.then(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Todas las promesas se resolvieron');
          resolve();
        }, n * 1000);
      });
    });
  }
  
  promesasEnCadenaConRetraso(3).then(() => {
    console.log('Promesas en cadena con retraso finalizadas');
  }).catch((error) => {
    console.log(error);
  }); 