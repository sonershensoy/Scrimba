const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pw1 = document.querySelector(".pw1")
let pw2 = document.querySelector(".pw2")
let genarated = false

function generate() {
    for (i = 0; i < 15; i++) {
        let randomPw = Math.floor(Math.random() * characters.length)
        let randomPw2 = Math.floor(Math.random() * characters.length)
        pw1.value += characters[randomPw]
        pw2.value += characters[randomPw2]
}
 genarated = true
}

function render() {
 if (genarated === true) {
     pw1.value = "" 
     pw2.value = "" 
     genarated = false
     generate()
 } else {
    generate()
    
 }
}

