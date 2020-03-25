
function checkEmpty(email) {
    return !email.trim().length;
}

function executeLogic(getElementById('submit').onclick("Click"), function(){
  if(checkEmpty(this.value)) {
    console.log( "email is valid" );
  } else {
    console.log( "email is not valid" );
  }
});
