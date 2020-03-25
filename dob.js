function checkDOB(valueDate){
    return !Date.parse(valueDate);
}


function executeLogic(getElementById('submit').onclick("Click"), function(){
  if(checkDOB(this.value)) {
    console.log( "Valid date of birth" );
  } else {
    console.log( "Invalid date of birth" );
  }
});
