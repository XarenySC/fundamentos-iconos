

var sumandoUno = prompt('5');
var sumandoDos = prompt('7');

function Suma(numero1, numero2) {
  var suma = parseInt(numero1) + parseInt(numero2);
  var resultado = `El resultado de suma es: ${suma}`;
  console.log(resultađo);
}

function Resta(numero1, numero2) {
  var resta = parseInt(numero1) - parseInt(numero2);
  var resultado = `El resultado de resta es: ${resta}`;
  console.log(resultado);
}

function multi(numero1, numero2) {
  var multi = parseInt(numero1) * parseInt(numero2);
  var resultado = `El resultado de multi es: ${multi}`;
  console.log(resultado);
}

function divi(numero1, numero2) {
  var divi = parseInt(numero1) / parseInt(numero2);
  var resultado = `El resultado de divi es: ${divi}`;
  console.log(resultado);
}

suma(sumandoUno, sumandoDos);
resta(sumandoUno, sumandoDos);
multi(sumandoUno, sumandoDos);
divi(sumandoUno, sumandoDos);






/*var miVarGlobal = 'soy gobal';
var nombre = 'Mauricio';
function saludar(nombre, apellido) {
  var saludo = 'Hola, mi nombre es ${nombre} ${apellido}';
  console.log(saludo);


}
saludar('Ana', 'valencia');
console.log(nombre);*/