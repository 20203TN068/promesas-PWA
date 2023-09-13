/* 
Ejercicio 3: Promesas Paralelas
Crea una función que realice las siguientes tareas:
Recibe un array de funciones que devuelven promesas como argumento.
Ejecuta todas las funciones en paralelo y espera a que todas las promesas se resuelvan.
Devuelve una promesa que se resuelva con un array de los resultados de todas las promesas.
*/
function promesasParalelas(promises) {
    return Promise.all(promises.map(promise => promise()));
  }
  
  promesasParalelas([() => Promise.resolve(1), () => Promise.resolve(2)])
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
