function Time(){
    let time= new Date();
    let hour= time.getHours();
    let min = time.getMinutes();
    let sec= time.getSeconds();


document.getElementById("hour")
.innerHTML=hour;
document.getElementById("minute")
.innerHTML=min;
document.getElementById("second")
.innerHTML=sec;
}
Time();
setInterval(Time,1000);