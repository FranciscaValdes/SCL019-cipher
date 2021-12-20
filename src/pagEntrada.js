
//playing to create a user
document.getElementById("entrar").addEventListener("click", function  login(){
    
    let usuarios = document.getElementById("usuario").value;
    
    let claves = document.getElementById("clave").value;
    
    if (usuarios =="fran" && claves =="13") { 
        location.pathname= "pagDiarioSecreto.html";
    }
     else alert("No eres el usuario de este Diario, no puedes entrar")
}
)

    


