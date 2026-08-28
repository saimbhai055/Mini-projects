let btn=document.querySelectorAll("button");
let main=document.querySelector(".main");
btn.forEach(function(el){
    el.addEventListener("click" , function(){
        main.style.backgroundColor=this.innerText;
        el.style.backgroundColor=this.innerText;
        el.style.color="white";
        // btn[3].style.color="black";
        if (el.innerHTML === "yellow") {
            this.style.color="black"
        }
    })
});
// btn.forEach((el)=>{
//     el.onclick = function(){
//     }
// })