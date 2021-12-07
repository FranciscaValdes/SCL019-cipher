import cipher from './cipher.js';

console.log(cipher);



document.getElementById("code").addEventListener("click", function(){
    let text = document.getElementById("inputText").value;
    let offset = document.getElementById("displacement").value;
    let cipherText = cipher.code(text,offset);
    let finalText = document.getElementById("textOutput");
    finalText.value = cipherText;
}, true);


//document.getElementById()


// window.addEventListener("load", mayusculas, true);
  
// //const textOne = document.getElementById("inputText")
// function mayusculas () {
//     document.getElementById("inputText").addEventListener("keyup", function (){
//         this.value = this.value.toUpperCase(); //pasando texto a mayúsculas
//     }, true);
// }
// window.addEventListener("load", inicio, true);//asignándole a los eventos el código que le corresponde
// function inicio() {
//     document.getElementById("code").addEventListener("click", function(){
//         let text = document.getElementById("inputText").value; //obteniendo texto de entrada

//         let numberDisplacement = document.getElementById("displacement").value; //obteniendo n° desplazamiento

//         document.getElementById("textOutput").value = cipher.code(stringOutput);
//     }, true);

// }



