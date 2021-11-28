const password = document.getElementById("password");
const passlen = document.getElementById("passlen");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");
const bubble = document.getElementsByClassName("bubble")[0];



const upperCase = "ABCDEFGHIJKLMNOPRSTUVYZXW";
const lowerCase = "abcdefghijklmnoprstuvyzxw";
const numberCase = "0123456789";
const symbolCase = "@!%&/_-.+-:#$";

const getUpper = () => {
   return upperCase[Math.floor(Math.random() * upperCase.length)];
};
const getLower = () => {
 return  lowerCase[Math.floor(Math.random() * lowerCase.length)];
};
const getNumber = () => {
  return numberCase[Math.floor(Math.random() * numberCase.length)];
};
const getSymbol = () => {
 return symbolCase[Math.floor(Math.random() * symbolCase.length)];
};

const generateNewPassword = () =>{
    const passLength = passlen.value;
    let pass = '';
    
    for( let x = 0; x < passLength ; x++){
        const passx = generatePass();
        pass += passx;
    }
    
    password.innerText = pass;
     

}

const generatePass = () =>{
  const generateP = []
    if(upper.checked){
        generateP.push(getUpper())
    }
    if(lower.checked){
        generateP.push(getLower())
    }
    if(number.checked){
        generateP.push(getNumber())
    }
    if(symbol.checked){
        generateP.push(getSymbol())
    }

    return generateP[Math.floor(Math.random()*generateP.length)]
}

function copyTrue (){
    bubble.style.opacity="1 !important"
    bubble.style.left="60% "
    bubble.style.color="#198754"
    bubble.classList.add("bubble-animation")
}
function copyFalse (){
    bubble.style.opacity="0 !important"
    bubble.style.left="25%"
    bubble.style.zIndex="0"
    bubble.style.color="#198754"
    bubble.classList.remove("bubble-animation");
}

generate.addEventListener("click", () => {
    generateNewPassword();
    copyFalse ()
    
  });
  password.addEventListener("click",()=>{
    copyTrue()
    const copyitem=password.innerText 

    navigator.clipboard.writeText(copyitem)

    function bubblefunc(){
        bubble.style.zIndex="-100"
    }
    function removeBubbleFunc(){

    }

    setTimeout(bubblefunc,1500);
    
  })
  

