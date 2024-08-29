let numeros = [5, 10, 15, 20, 25];


// Forma de calcular la suma del arreglo
let suma = numeros.reduce(function (acumulador, vActual) {
  return acumulador + vActual;}, 0);


// Mostrar la suma en la consola
console.log('La suma de los elementos es: ' + suma);
