const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

function showPopup() {
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

closeBtn.addEventListener("click", closePopup);

window.onload = showPopup;