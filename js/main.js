// modalWriteUs
document.addEventListener("DOMContentLoaded", ()=>{
  console.log("ok");
  const writeUs = document.getElementById("writeUs")
  const modalWriteUs=document.getElementById("modalWriteUs")
  writeUs.addEventListener("click", (event)=>{
    modalWriteUs.classList.add("visible")
    event.preventDefault();
    const modalClose=document.getElementById("modalClose")
    modalClose.addEventListener("click",()=>{
      modalWriteUs.classList.remove("visible");
    })
  })
});
// writeUs
