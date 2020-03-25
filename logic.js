
function checkEmpty(name) {
    return !name.trim().length;
}

function atLeastTwoWord(name){
  return name.length >= 2;
}

function executeLogic(getElementById('submit').onClick("Click", function() {
  if(checkEmpty(this.value) && atLeastTwoWord(this.value)) {
    console.log( "name is valid" );
  } else {
    console.log( "name is not valid" );
  }
});
