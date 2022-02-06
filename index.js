// For highlight js

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
  
  


// For modal opening closing
// const open=document.querySelector("#open-modal-btn");
// const close=document.querySelector("#close-modal");

// function openModal(){
// document.getElementById("modal-open").style.display="block";
// }

// function closeModal(){
//     document.getElementById("modal-open").style.display="none";
// }

// open.addEventListener("click",openModal);
// close.addEventListener("click",closeModal);

