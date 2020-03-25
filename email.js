
function checkEmpty(email) {
    return !email.trim().length;
}

function emailValidation(email){
  return /\S+@\S+\.\S+/.test(email);
}

function executeLogic(getElementById('submit').onclick("Click"), function(){
  if(checkEmpty(this.value) && emailValidation(this.value)) {
    console.log( "email is valid" );
  } else {
    console.log( "email is not valid" );
  }
});
