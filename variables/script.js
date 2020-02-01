//esto es un comentario sigle line comentarios simples
/* 
esto es un comentarios multilinea 
y puedo dar enter y no pasa nada si lo hago en el otro 
el programa cree que estot dando instrucciones*/

var miPrimerVariable;

miPrimerVariable = 'esto es el contenido de mi variable';

var miSegundaVariable = 'Este es el contenido de mi segunda variable';

var numeroUno, numeroDos, resultado, resultadoArreglado, resultadoEnNumero;

numeroUno = 10;
numeroDos = 20;
resultado = (numeroUno * numeroDos) / 3;
resultadoArreglado = resultado.toFixed(2);
resultadoEnNumero = parseFloat(resultadoArreglado);

//TRABAJANDO CON STRINGS=CADENAS DE TEXTO 

var nombre, apellidoP, apellidoM, saludo, nombreMayus, nombreBajas, letrasTotales, primeraLetra, str;
nombre = 'Xareny';
apellidoP = 'Saldaña';
apellidoM = 'Coca';
//saludo = 'Hola mi nombre es :' + nombre + apellidoP + apellidoM;
saludo = `Hola mi nombre es ${nombre} ${apellidoM} ${apellidoP}`;
nombreMayus = nombre.toUpperCase(); // convierte a mayusculas
nombreBajas = nombre.toLowerCase(); //convierte a minusculas
letrasTotales = nombre.length; //Devuelve cantidad de caracteres
primeraLetra = nombre.charAt(5); //Devuelve el caracter del numero
str = nombre.substr(2, 3);
