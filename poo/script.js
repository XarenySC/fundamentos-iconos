//*  function Perro(nombre, raza, size) {
// this.nombre = nombre;
// this.raza = raza;
// this.size = size;}

//Perro.prototype.ladrar = () => console.log('woof');
//Perro.prototype.queRazaSoy = function () {
// console.log(`Mi raza es: ${this.raza}`) }

// var loli = new Perro('loli', 'chihuahua', 'ch');
//var friday = new Perro('friday', 'shih tzu', 'ch');
// var jarvis = new Perro('jarvis', 'pastor ingles', 'G'); 

//*function heredaDE(prothijo, protpadre) {
  
}



function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.soyAlto = function (params) {
  return this.altura > 1.7
}
Persona.prototype.saludar = function (params) {
  console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}
heredaDE(Programador, Persona);
//*




function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

