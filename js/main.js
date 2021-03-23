// modalWriteUs
document.addEventListener("DOMContentLoaded", ()=>{
  console.log("ok");
  const write__us = document.getElementById("write__us")
  const modal__write__us=document.getElementById("modal__write__us")
  write__us.addEventListener("click", (event)=>{
    modal__write__us.classList.add("visible")
    event.preventDefault();
    const modalClose=document.getElementById("modal__close")
    modal__close.addEventListener("click",()=>{
      modal__write__us.classList.remove("visible");
    })
  })
});

document.addEventListener("DOMContentLoaded", ()=>{
  console.log("ok");
  const map__big = document.getElementById("map__big")
  const modal__map=document.getElementById("modal__map")
  map__big.addEventListener("click", (event)=>{
    modal__map.classList.add("visible")
    event.preventDefault();
    const modal__map__close=document.getElementById("modal__map__close")
    modal__map__close.addEventListener("click",()=>{
      modal__map.classList.remove("visible");
    })
  })
});
