import cipher from './cipher.js';


document.getElementById("inputText").addEventListener("keyup", function(){
    let textoEntrada = document.getElementById("inputText");
    textoEntrada.value = document.getElementById("inputText").value.toUpperCase();
    
});


   const code = document.getElementById("code")
   if(code){
   code.addEventListener("click", function(){
    
    let text = document.getElementById("inputText").value;

    let offset = document.getElementById("displacement").value;
  
  let offsetNumber = Number.parseInt(offset);
    
   let cipherText = cipher.encode(text,offsetNumber);
   
    let finalText = document.getElementById("textOutput");
    
    finalText.value = cipherText;
   
})}

const coded = document.getElementById("coded");
 if(coded){
coded.addEventListener("click", function(){
    
    let text = document.getElementById("inputText").value;

    let offset = document.getElementById("displacement").value;
  
    let offsetNumber = Number.parseInt(offset);
    
    let cipherText = cipher.decode(text,offsetNumber);
   
    let finalText = document.getElementById("textOutput");
    
    finalText.value = cipherText;
   
})}













