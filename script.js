

const generate=document.querySelector("button")
const symbolBox=document.querySelector("#symbol")
const numbersBox=document.querySelector("#numbers")
const passLen=document.querySelector("#length-value")
const slider=document.querySelector("#lengthSlide")
const pw1=document.querySelector("#pw1")
const pw2=document.querySelector("#pw2")

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=<>?/{}~";

slider.addEventListener("input",()=>{
    passLen.textContent=slider.value
})


generate.addEventListener("click",()=>{
    pw1.textContent=generatePassword()
    pw2.textContent=generatePassword()
})

[pw1,pw2].forEach((pwBox)=>{
    if(pwBox.textContent){
        navigator.clipboard.writeText(pwBox.textContent)
        pwBox.textContent="✅ Copied!"
        setTimeout(()=>{
            pwBox.textContent=generatePassword()
        },800)
    }
})

function generatePassword(){
    let chars=letters
    if(symbolBox.checked) chars+=symbols
    if(numbers.checked) chars+=numbers

    let password=""
    for(let i=0;i<parseInt(passLen.textContent);i++){
        password+=chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return password
}