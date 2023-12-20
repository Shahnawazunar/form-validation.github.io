const submitform = document.getElementById("form");
const user = document.getElementById("user");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");


submitform.addEventListener('submit',(event)=>{
event.preventDefault();
validate();
});

const reset = ()=>{
    submitform.value = ''
}

const isEmail = (emailVal)=>{
var atsymbol = emailVal.indexOf('@');
if(atsymbol < 1) return false ;
var dot = emailVal.lastIndexOf('.');
if(dot <= atsymbol + 3) return false ;
if(dot === emailVal.length -1)return false;
return true;
}

const validate = ()=>{
const userVal = user.value.trim();
const emailVal = email.value.trim();
const mobilelVal = mobile.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();

if(userVal === ""){
  setErrorMsg(user,'User Can Not Be Blank')
}else if(userVal <= 2){
  setErrorMsg(user,'User min 3 char')
}else{
  setSuccessMsg(user)
}

// email validatin
if(emailVal === ""){
  setErrorMsg(email,'Email Can Not Be Blank');
}else if(!isEmail(emailVal)){
  setErrorMsg(emailVal,'Not a Valid Email');
}else{
  setSuccessMsg(email);
}
// phone number set
if(mobilelVal === ""){
  setErrorMsg(mobile,'Number Can Not Be Blank');
}else if(mobilelVal.length !== 11){
  setErrorMsg(mobile,'Not a currect number');
}else{
  setSuccessMsg(mobile);
}

      // validate Password
      if(passwordVal === ""){
  setErrorMsg(password,'Password Can Not Be Blank');
}else if(passwordVal.length <= 5){
  setErrorMsg(password,'Minimum 6 char');
}else{
  setSuccessMsg(password);
}
            // validate conform Password
            if(cpasswordVal === ""){
  setErrorMsg(cpassword,'Confrim Can Not Be Blank');
}else if(passwordVal !== cpasswordVal){
  setErrorMsg(cpassword,'Not a Match Password');
}else{
  setSuccessMsg(cpassword);
}
}


function setErrorMsg(input,errormsgs){
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className= 'form-control error';
small.innerText = errormsgs
}

function setSuccessMsg(input){
const formControl = input.parentElement;
formControl.className= 'form-control success';

}