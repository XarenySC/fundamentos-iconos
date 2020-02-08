// this global

console.log(`this: ${this}`);

function quienEsThis() {
  return this
}
console.log(`Quien es this dentro de una funcion: ${quienEsThis()}`)

function quienEsThisEstricto() {
  'use strict';
  return this;
}

console.log(`Quien es this dentro de una funcion estricta: ${quienEsThisEstricto()}`)

const persona = {
  name: 'xareny',
  lastName: 'saldaña',
  age: 26,
  saludar: function () {
    console.log(`hola soy ${this.name}`)
  }

  whoIsThis: function () {
    console, log(`quien es this dentro de un objeto ${this}`)
  }

}

persona.saludar();
persona.whoIsThis();



function Persona(name) {
  this.name = name

}
Persona.prototype.saludar = function () {
  console.log(`hola soy ${this.name}`)
}

const xareny = new Persona('xareny');
xareny.saludar();