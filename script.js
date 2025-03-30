const  inputSlider=document.querySelector('.slider');
const  lengthDisplay=document.querySelector("[data-lenghtNumber]");
const passwordDisplay=document.querySelector(".data_password-dispaly");
const copyBtn= document.querySelector(".data-copyBTN");
 const copyMSG=document.querySelector(".data-copyMSE");
 const uppercaseCheck=document.querySelector("#uppercase");
 const lowercaseCheck=document.querySelector('#lowercase')
 const numbersCheck=document.querySelector('#Number');
 const symbolsCheck=document.querySelector("#symbol")
 const indicator=document.querySelector(".data-indicator")
 const generatebtn=document.querySelector(".generate button")
 const allcheckbox=document.querySelectorAll("input[type=checkbox]");
 const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();


//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}  


function setIndicator(color)
{
    indicator.style.color=color;

}


function getRandInteger(max,min)
{
   return Math.floor((Math.random()*(max-min))+min;
}

function generateRandomNumber()
{
    return getRandInteger(0,9);
}


function generateLowercase()
{
  return  String.fromCharCode(getRandInteger(97,123));
}


function generateUpperCase()
{
    return  String.fromCharCode(generateUpperCase(65,91));
}

function generatesymbol()
{
    const randNUm=getRandInteger(0,symbols.length)
    return symbols.charAt(randNUm);
}



function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}



async function copycontent()
{ 
    try{
      await navigator.clipboard.writeText(passwordDisplay.value);
      copyMSG.innerText='copied';
    }
    catch(e)
    {
        copyMSG.innerText='failed';
    }
    setTimeout(()=>
    {
        copyMSG.classList.remove("active");
    },2000) 
}