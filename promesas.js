let result = undefined;

//console.log(result);
function waitUntil(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(message);
            //result = message;
            //resolve(result);
        }, 2000);
    });
}

//waitUntil('Puras promesas aquí!').then((result) => {
//    console.log(result);
//}).catch((err) => {
//    console.log(err);
//});
//console.log(result);

function multiplicar(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num1 * num2), 1500);
    });
}

function dividir(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num1 / num2), 2000);
    });
}

// Ejecuta todas las promesas que se envíen
// Si una de esas promeasas falla devuelve solo la excepción 
Promise.all([multiplicar(1, 2), dividir(1, 2),
    'Promesa aquí', 35, true])
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

function multiplicarLento(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num1 * num2), 2000);
    });
}

function dividirRapido(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num1 / num2),1000);
    });
}

// Devuelve el resultado de la primer promesa en resolverse
// Si alguna falla y es la más rápida, se devuelve en forma de excepción o ERROR
//Promise.race([multiplicarLento(1,2),dividirRapido(1,2)])
//    .then((result) => {
//        console.log('THEN', result);
//    })
//    .catch((error) => {
//        console.log('ERROR',error);
//    });