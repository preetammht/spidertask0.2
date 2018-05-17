var bar = document.getElementById("bar");
var rea = document.getElementById("rea");
var csk = document.getElementById("csk");

bar.addEventListener("click", picLink);
rea.addEventListener("click", picLink);
csk.addEventListener("click", picLink);

function picLink() {
  var allImages = [document.getElementById("bar-pic"),document.getElementById("rea-pic"),document.getElementById("csk-pic")];

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}