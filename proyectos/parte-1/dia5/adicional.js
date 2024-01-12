// Desafío Adicional
function desafioAdicional() {
    // Ampliar el objeto persona con un método
    let persona = {
      nombre: 'Juan',
      edad: 25,
      lugarResidencia: 'Ciudad XYZ',
      saludar: function() {
        console.log(`¡Hola! Soy ${this.nombre} y tengo ${this.edad} años.`);
      }
    };
  
    // Llamar al método del objeto
    persona.saludar();
  }
  
  desafioAdicional();
  