// Sign in modal
var signInModal = document.getElementById("gnd-signInModal");
var ctaButton = document.getElementById("gnd-signInBtn");
var mainButton = document.getElementById("gnd-signInHeaderBtn");
var closeSpan = document.getElementsByClassName("close")[0];
ctaButton.onclick = displayModal;
mainButton.onclick = displayModal;

function displayModal() {
  signInModal.style.display = "flex";
}

closeSpan.onclick = function() {
  signInModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
}

