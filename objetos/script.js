var Xareny = {
  nombre: 'Xareny',
  apellido: 'Saldaña',
  edad: '26',
  saludar: function () {
    console.log(`mi nombre es ${xareny.nombre}`);

  }
}

var viernes = {
  nombre: 'viernes',
  raza: 'Shih-tzu',
  edad: 1,
  color: 'cafe'
}

function colorPerro(perro) {
  console.log(`el perro es de color: ${perro.color}`);
  return {
    ...perro,
    color: 'verde'
  }

}

colorPerro(viernes)