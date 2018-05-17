var box = document.getElementById("box");

var items = box.querySelector("li");
var input = box.querySelector("input");

  box.addEventListener("click", editItem());
  input.addEventListener("blur", updateItem());
  input.addEventListener("keypress", itemKeypress());


function editItem() {
  box.className = "edit";
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  
  box.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(box);
  }
}