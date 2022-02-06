const openToast=document.querySelector("#btn-open-toast");
const closeToast=document.querySelector("#btn-close-toast");
const toastDisplayed=document.querySelector("#toast-below");

openToast.addEventListener("click",()=>{
toastDisplayed.style.display="flex";    
})
closeToast.addEventListener("click",()=>{
toastDisplayed.style.display="none";    
})