let days=document.querySelector("#day");
let hours=document.querySelector("#Hours");
let mins=document.querySelector("#Mins");
let second=document.querySelector("#second");
console.log(days);
console.log(hours);
console.log(mins);
console.log(second);

setInterval(()=>{
    let nowTime=new Date();
    let d=nowTime.getDate();
    let h=nowTime.getHours();
    let m=nowTime.getMinutes();
    let s=nowTime.getSeconds();

h=h<10?`0${h}`:h;
m=m<10?`0${m}`:m;
s=s<10?`0${s}`:s;
d=d<10?`0${d}`:d;    
days.innerHTML=d;
hours.innerHTML=h;
mins.innerHTML=m;
second.innerHTML=s;

},1000)



