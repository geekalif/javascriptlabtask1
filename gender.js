function checkGenderRadioButton(){
  var radioOption = document.getElementsByName("gender");
   var formValid = false;

   var i = 0;

   while (!formValid && i < radios.length) {
           if (radios[i].checked) formValid = true;
           i++;
       }
    return formValid;
}

function executeLogic(getElementById('submit').onclick("Click"), function(){
  if(checkGenderRadioButton(this.value)) {
    console.log( "Gender is valid" );
  } else {
    console.log( "Gender is not valid" );
  }
});
