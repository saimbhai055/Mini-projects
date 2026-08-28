let count=0;
let para=document.getElementById("num");
let counter=document.getElementById("count");
let reset=document.getElementById("reset");
para.innerHTML=count;
counter.addEventListener("click",function() {
    // let newCount=count++;
    count++;
    para.innerHTML=count;
});
reset.addEventListener("click",()=>{
    para.innerText=count*0;
    count="";
});


