import cipher from './cipher.js';

console.log(cipher);

window.addEventListener("load", inicio, true);

//asignándole a los eventos el código que le corresponde
function inicio() {
    document.getElementById("inputText").addEventListener("keyup", function (){
        this.value = this.value.toUpperCase(); //pasando texto a mayúsculas
    }, true);
    document.getElementById("code").addEventListener("click", function(){
        let text = document.getElementById("inputText").value; //obteniendo texto de entrada
        
        let numberDisplacement = document.getElementById("displacement").value; //obteniendo n° desplazamiento
    
        document.getElementById("textOutput").value = code(inputText, displacement);
    }, true);
        
}

function code(inputText, displacement){
    let result = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    displacement = (displacement % 26 + 26) % 26; //  que dé seguro entre 0 y 25

    if (inputText){
        for (let i = 0; i<inputText.length; i++){
            if (letters.indexOf(inputText[i]) !=-1){
                let position = ((letters.indexOf(textInput [i]) +displacement) %26);
                result += letters[position];
            }
            else
            result += textInput [i];
        }
    }
    return result;
}