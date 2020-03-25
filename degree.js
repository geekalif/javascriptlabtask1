function validate(){
  var checkboxs=document.getElementsByName("optionBox");
    var decision=false;
    for(var i=0,l=checkboxs.length;i<l;i++)
    {
        if(checkboxs[i].checked)
        {
            decision=true;
            break;
        }
    }
    if(okay)alert("Thank you for checking a checkbox");
    else alert("Please check a checkbox");
}

function executeLogic(getElementById('submit').onclick("Click"), function(){
  if(validate(this.value)) {
    console.log( "Degree select successfully" );
  } else {
    console.log( "Degree select unsuccessful" );
  }
});
