// Contact contact-modal
var contactModal = document.getElementById("gnd-contactModal");
var contactButton = document.getElementById("gnd-contactBtn");
var closeContactSpan = document.getElementsByClassName("gnd-close-contact-modal")[0];
contactButton.onclick = displayContactModal;

function displayContactModal() {
  contactModal.style.display = "flex";
}

closeContactSpan.onclick = function() {
  contactModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == contactModal) {
    contact.style.display = "none";
  }
}
