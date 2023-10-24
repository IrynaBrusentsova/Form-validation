"use strict";
function validation(form) {
    function deleteError(input){
        const parent = input.parentNode;
        if(parent.classList.contains('error')){
            parent.querySelector('.error-label').remove()
            parent.classList.remove('.error')
        }
    }
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;

    parent.classList.add("error");
    parent.append(errorLabel)
  }
  let result = true;

  const allInput = form.querySelectorAll("input");
  for (const input of allInput) {
    deleteError(input);
    if (input.value == "") {
      console.log("Error");
      createError(input, "Field is not complete!");
      result = false;
    }
  }
  
  return result;
}
document.querySelectorAll;

document.getElementById("add-form").addEventListener("submit", function (e) {
  e.preventDefault();

  if (validation(this) == true) {
    alert("The form has been verified successfully!");
  }
});
