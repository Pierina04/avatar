const frases = ["Dondequiera que vayamos, esta familia es nuestra fortaleza", "El camino del agua no tiene ni principio ni fin", "Lo mas peligroso de pandora, es que puedes llegar a amarla demasiado", "La riqueza del mundo no esta bajo tierra, esta a nuestro alrededor"];
    const botonGenerarFrase = document.getElementById("generar-frase");
    const fraseDisplay = document.getElementById("frase-display");
    
    botonGenerarFrase.addEventListener("click", function() {
      const fraseAleatoria = obtenerFraseAleatoria(frases);
      mostrarFraseEnPantalla(fraseAleatoria);
    });
    
    function obtenerFraseAleatoria(frases) {
      const indice = Math.floor(Math.random() * frases.length);
      return frases[indice];
    }
    
    function mostrarFraseEnPantalla(frase) {
      fraseDisplay.textContent = frase;
    }
