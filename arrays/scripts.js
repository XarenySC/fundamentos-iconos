var roberto = {
  nombre: 'roberto',
  apellido: 'mora',
  edad: '33',
  estatura: 1.63
}

var ana = {
  nombre: 'ana',
  apellido: 'perez',
  edad: '30',
  estatura: 1.76
}
var pix = {
  nombre: 'pix',
  apellido: 'coca',
  edad: '15',
  estatura: 1.83
}

var esMayor = function (persona) {
  return persona.edad < edadMayoria;
}

var esAlto = function (persona) {
  return persona.estatura > 1.7;
}

var convertirMtsACms = function (persona) {
  return {
    ...persona,
    altura: persona.estatura * 100
  }
}

var personas = [miguel, ana, pix];

var personasMayores = personas.filter(esMayor);
var personasAltas = personas.filter(esAlto);
var estaturaACms = personas.map(convertirMtsACms);