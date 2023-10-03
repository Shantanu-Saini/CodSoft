let inputStr = "";
let btnVal = document.querySelectorAll(".grid-item"); // select all items of class name 'grid-item'.

Array.from(btnVal).forEach((btn) => {
  // EventListener for button when its clicked
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      inputStr = eval(inputStr);
      document.querySelector("input").value = inputStr;
    } 
    else if (e.target.innerHTML == "AC") {
      inputStr = '';
      document.querySelector("input").value = inputStr;
    } 
    else if (e.target.innerHTML == "⬅") {
      inputStr = inputStr.substring(0, inputStr.length-1);
      document.querySelector("input").value = inputStr;
    } 
    else {
      inputStr += e.target.innerHTML; // concatinating value of button in the inputStr.
      document.querySelector("input").value = inputStr; // changing the value of input area.
    }
  });
});
