function Validate() {
  var e = document.getElementById("ddlView");
  var strUser = e.options[e.selectedIndex].value;

  var strUser1 = e.options[e.selectedIndex].text;
  if (strUser == 0) {
    alert("Please select a user");
  }
}


function executeLogic(getElementById('submit').onclick("Click"), function() {
  if (validate(this.value)) {
    console.log("Blood Group select successfully");
  } else {
    console.log("Blood Group select unsuccessful");
  }
});
