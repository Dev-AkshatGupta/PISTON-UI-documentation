const btnShow=document.querySelector("#btn-show");
const btnNotShow=document.querySelector("#btn-not-show");

// const btnRemove=document.querySelector("");
btnShow.addEventListener("click",()=>{
    console.log(2);
  btnShow.disabled=true;
  btnNotShow.style.display="block";
})
btnNotShow.addEventListener("click",()=>{
    console.log(1);
    btnNotShow.style.display="none";
    btnShow.disabled=false;
    btnShow.innerHtml=`Show`;
})