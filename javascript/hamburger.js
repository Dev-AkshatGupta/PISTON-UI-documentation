



// for hamburger menu button on small visualViewport

const menuBtn = document.querySelector('.menu-btn');
const dropDownContent=document.querySelector(".dropdown-content");
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    myDropdown.classList.toggle("show");
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
 
});