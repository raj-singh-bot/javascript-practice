var ispause = -1;
let myclock;
let buttonstart = document.getElementById('start');
let buttonpause = document.getElementById('pause');
function Clock(){
    let date = new Date();
    let hh = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
   min = (min < 10) ? "0" + min : min;
   sec = (sec < 10) ? "0" + sec : sec;

    let time =`${hh} : ${min} : ${sec}` ;
    
    document.getElementById('clock').innerHTML = time;
}
buttonstart.addEventListener('click', function(){
    clearInterval(myclock);
    myclock = setInterval(Clock, 10);
});

buttonpause.addEventListener('click', function(){
    clearInterval(myclock);
});
// function pause(){
//     if(ispause == 0){
//     }
// }
// let myclock = setInterval(Clock, 1000);   
// function pause(){
//     if(myclock !== -1){
//         clearInterval(myclock);
//         myclock = -1;
//     }
// }
// function resume(){
//     if(myclock == -1){
//         myclock = setInterval(Clock, 1000);
//     }
// }