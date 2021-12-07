const cipher = {  // objeto que tiene propiedades y valores
  
  code : function(text, offset){ // code: propiedad del objeto cipher,donde tengo una función local, que me va a tomar parámetros.

    let textOutput = "";
    
    for (let index= 0; index<text.length; index++) { // ciclo recorre cada caracter del texto según su índice
     
      let ascii = text.charCodeAt(index); // obteniendo codigo ascii de cada letra
     
      let asciiConverted = (ascii - 65 + offset) % 26 + 65; // obteniendo número de la nueva letra (letra codificada) pasada a ascii
     
      let codedText = String.fromCharCode(asciiConverted); //pasando n° ascii a letra obtenido desde ascii convertido
     
      textOutput+=codedText
    }
    return textOutput
 }
};

export default cipher;
 
 

  


