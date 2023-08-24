
 
const length =5; 
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowwerCase = "abcdefghijklmnopqrstuvwxyz"; 
const numbers = "0123456789"; 
const symboles ="!@#$%^&*()_+?><";
 
let password = "";

function createRandomPassword(){
     password =""; 
    for(let i=0; i < length ; i++) { 
        password += upperCase[Math.floor(Math.random() * upperCase.length)] 
         
        password += numbers[Math.floor(Math.random() * numbers.length)] 
        password += lowwerCase[Math.floor(Math.random() * lowwerCase.length)] 
        password += symboles[Math.floor(Math.random() * symboles.length)] 

    }
    return password; 
}

let text = document.querySelector("input") ;
document.getElementsByClassName("btn")[0].addEventListener("click" , function() {
    // let num = Math.floor(Math.random()* 3 ) ;
    createRandomPassword();
    // text.value= "password"; 
    text.value= password; 
}); 


document.addEventListener("DOMContentLoaded", function() {
    let copyBtn = document.querySelector("#copyBtn"); 
    let textCopied = document.querySelector("#text1"); 
    copyBtn.addEventListener("click" , function(){ 
        textCopied.select();
       
        document.execCommand("copy");
        if(text.value !==""){
            alert("copied ! ");
        }else {
            // alert("dsf")
        }
        // alert("copied ! ")
    })

}); 