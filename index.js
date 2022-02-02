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
  

// For the dark and light mode
const sun=document.querySelector("#toggle-theme");
const moon=document.querySelector(".fa-moon");
function clickHandler(){
  sun.toggle.classList("fa-moon");
  sun.remove.classList("fa-sun");
}
sun.addEventListener("click",clickHandler);
moon.addEventListener("click",()=>{
  moon.toggle.classList("fa-sun");
  moon.remove.classList("fa-moon");
})


