const open = document.querySelector("#open-modal-btn");
const close = document.querySelector("#close-modal");

function openModal() {
    document.getElementById("modal-open").style.display = "block";
}

function closeModal() {
    document.getElementById("modal-open").style.display = "none";
}

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);