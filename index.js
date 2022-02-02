// For highlight js
{
    document.addEventListener('DOMContentLoaded', (event) => {
      document.querySelectorAll('pre code').forEach((el) => {
        el.innerHTML = el.innerHTML
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;')
        hljs.highlightElement(el)
      })
    })
  }
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

// For the dark and light mode

const sun=document.querySelector("#light-mode");
const sunIcon=document.querySelector(".fa-sun");
const moon=document.querySelector("#dark-mode");
sun.addEventListener("click",()=>{
  console.log("fuck");
});
sunIcon.addEventListener("click",()=>{
  console.log("icon");
});






