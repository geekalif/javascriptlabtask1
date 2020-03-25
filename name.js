function checkEmpty(name) {
    return !name.trim().length;
}

function atLeastTwoWord(name){
  return name.length >= 2;
}

function letterCheck(name){
  var letter = /^[A-Za-z]+$/;
  return name.value.match(letter);
}

function startWithALetter(name){
  return !(name.charAt(0) >=0 && name.charAt(0)<=9);
}

function executeLogic(getElementById('submit').onclick("Click"), function(){
  if(checkEmpty(this.value) && atLeastTwoWord(this.value) && startWithALetter(this.value) && letterCheck(this.value)) {
    console.log( "name is valid" );
  } else {
    console.log( "name is not valid" );
  }
});
