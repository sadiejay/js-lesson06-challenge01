var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
  button.innerText = "You’ve got this!!!";
  modal.classList.add("show-modal");
});

modalX.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
});

document.addEventListener("keydown", function (e){
  console.log(e.key);
  if (e.key === "Escape"){
    // console.log("you pressed the button");
    if (modal.classList.contains("show-modal")){
      modal.classList.remove("show-modal");
      button.innerText = "Who's got this?";
    }
  }
});

 var closeModal function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
 };