// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var arreglo = array;
  return arreglo[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var arreglo = array;
  return arreglo[(arreglo.length - 1)];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i in array){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabra=palabras;
  var mensaje ='';
  for(var i in palabra){
    if (mensaje === ''){
      mensaje = palabra[i];
    }else{
      mensaje = mensaje + ' ' + palabra[i];
    }
  }
  return mensaje;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    if(array.includes(elemento)){
      return true;
    }else{
      return false;
    }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var Suma=0;
  for(var k in numeros){
    Suma=Suma+numeros[k];
  }
  return Suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var Suma=0;
  for(var k in resultadosTest){
    Suma=Suma+resultadosTest[k];
  }
  var promedio = Suma/resultadosTest.length;
  return promedio;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var Mayor = numeros[0];
  for(var i in numeros){
    if(numeros[i]>Mayor){
      Mayor = numeros[i];
    }
  }
  return Mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length===0){
    return 0;
  }else if(arguments.length===1){
    if(arguments[0]===0){
      return 0;
    }
    return arguments[0];
    }else{
      var multiplicar = arguments[0];
      for(var k=1;k<arguments.length; k++){
        multiplicar = multiplicar * arguments[k];
      }
      return multiplicar;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var Mayores18 = 0;
  for(var j in arreglo){
    if(arreglo[j]>18){
      Mayores18+=1;
    }
  }
  return Mayores18;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if(numeroDeDia>1 & numeroDeDia<7){
    return 'Es dia Laboral';
  }else if(numeroDeDia===1 || numeroDeDia===7){
    return 'Es fin de semana';
  }
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var primerD = parseInt(String(n)[0]);
  if(primerD===9){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var contador =0;
  var PrimerCo = arreglo[0];
  for(var j in arreglo){
    if(PrimerCo!=arreglo[j]){
      return false;
    }
  }
  return true;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArreglo = [];
  var contador1 = 0;
  var contador2 = 0;
  var contador3 = 0;
  for(var k in array){
    if(array[k]=='Enero'){
      nuevoArreglo.push('Enero');
      contador1=contador1+1;
    }else if(array[k]=='Marzo'){
      nuevoArreglo.push('Marzo');
      contador2=contador2+1;
    }else if(array[k]=='Noviembre'){
      nuevoArreglo.push('Noviembre');
      contador3=contador3+1;
    }
  }
  if(contador1>0 && contador2>0 && contador3>0){
    return nuevoArreglo;
  }else{
    return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var ArrayMayo = [];
  for(var i in array){
    if(array[i]>100){
      ArrayMayo.push(array[i]);
    }
  }
  return ArrayMayo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var contador = 0;
  var NuevoArray =[];
  for(var i= 0;i<10;i++){
    numero=numero+2;
    if(numero==i){
      contador+=1;
      break;
    }
    NuevoArray.push(numero);
  }
  if(contador===1){
    return "Se interrumpió la ejecución";
  }else{
    return NuevoArray;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var NuevoArray =[];
  for(var i= 0;i<10;i++){
    if(i===4){
      continue;
    }else{
      numero=numero+2;
      NuevoArray.push(numero);
    }
  }
  return NuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
