var miFuncionNormal = function (params) {
  console.log('mi funcion clasica')

}
//ahorro de la palabra function
var miFuncionArrow = () => {
  console.log('mi funcion clasica')
}

var saludo = (nombre, apellido) => {
  console.log('Hola mi nombre es ${nombre} ${apellido} ');
}

var saludoNombre = nombre => {
  console.log('hola mi nombre es: ${nombre}');
}

var saludoNombre = nombre => console.log('hola mi nombre es: ${nombre}');


setTimeout(() => {
  console.log('me muestro despues de dos segundos')

}, 3000);