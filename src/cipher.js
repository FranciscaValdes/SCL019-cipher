const cipher = {  // cipher:pbjeto que tiene propiedades y valores
  
  encode : function(text, offset){ // encode: propiedad del objeto cipher,donde tengo una función local, que me va a tomar parámetros.

    let textOutput = "";

    for (let index= 0; index<text.length; index++) { // ciclo recorre cada caracter del texto
     
    let asciiConverted = "";
      
      let ascii = text.charCodeAt(index); // obteniendo codigo ascii de cada letra
      if(ascii>64 && ascii<91){               //delimitando la función a alfabeto en mayúsculas
    
       asciiConverted = (ascii - 65 + offset) % 26 + 65; // obteniendo número de la nueva letra (letra codificada) pasada a ascii
} 
     

      let codedText = String.fromCharCode(asciiConverted); //pasando n° ascii a letra obtenido desde ascii convertido
     

     
      textOutput+=codedText
    }
    return textOutput;
 },

 decode : function(text, offset){ // decode: propiedad del objeto cipher,donde tengo una función local, que me va a tomar parámetros.

  let textOutput = "";
  


  for (let index= 0; index<text.length; index++) { // ciclo recorre cada caracter del texto
   
    let asciiConverted="";
    
    let ascii = text.charCodeAt(index); // obteniendo codigo ascii de cada letra
   
    if(ascii>64 && ascii<91){                //delimitando la función solo a alfabeto en mayúsculas
    
    asciiConverted = (ascii + 65 - offset) % 26 + 65; // obteniendo número de la nueva letra (letra codificada) pasada a ascii
    }
    
    
    let codedText = String.fromCharCode(asciiConverted); //pasando n° ascii a letra obtenido desde ascii convertido
  
    textOutput+=codedText
  }
  return textOutput;
}

};

export default cipher;
 
 
