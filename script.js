var form = document.getElementById("details");
function submitForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", submitForm);

function formValidate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phno = document.getElementById("phoneNumber").value;
  const gender = document.getElementById("gender").value;
  const pass = document.getElementById("password").value;

  document.getElementById("nameVal").textContent = "";
  document.getElementById("emailVal").textContent = "";
  document.getElementById("phnVal").textContent = "";
  document.getElementById("genderVal").textContent = "";
  document.getElementById("PassVal").textContent = "";

  var error = [];

  if (name.length<3) {
    error.push("This Feild required")
    document.getElementById("nameVal").textContent = "This Feild required >3";
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(email)){
    error.push("This Feild required")
    document.getElementById("emailVal").textContent = "This Feild required format";
  } 
  phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if(!phoneNum.test(phno) && phno.length<10 ){
    error.push("This Feild required")
    document.getElementById("phnVal").textContent = "This Feild required ";
  } 
  if(gender===""){
    error.push("This Feild required")
    document.getElementById("genderVal").textContent = "This Feild required";

  } 
  if(pass.length<6){
    error.push("this Feild required")
    document.getElementById("PassVal").textContent = "This Feild required";
  } 
  if(error.length>0){
    return false;
  } 

  alert("Form submitted")
  return true;

}
