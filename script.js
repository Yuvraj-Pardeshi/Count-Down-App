let input = document.getElementById("date-time");
let btn = document.getElementById("submit");

function countdown () {
    const endDate = new Date(input.value);
    const currDate = new Date();
    let diff = endDate - currDate;
    if(diff<0){
        return;
    }
    const days = Math.floor(diff / (24*60*60*1000));
    const daysms = diff % (24*60*60*1000);
    const hours = Math.floor(daysms / (60*60*1000));
    const hoursms = diff % (60*60*1000);
    const minutes = Math.floor(hoursms / (60*1000));
    const minutesms = diff % (60*1000);
    const sec = Math.floor(minutesms / 1000);
    // console.log(days + ":" + hours + ":" + minutes + ":" + sec);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML= sec;
  }
btn.addEventListener('click',()=>{
    countdown();
    setInterval(countdown,1000);
});


  //days
//   console.log("Days : "+Math.floor(diff/86400000));
  //hours
//   console.log("Hours : "+Math.floor(diff/3600)%24);
  //minutes
//   console.log("Minutes : "+Math.floor(diff/60)%60);
// const endDate = new Date(input.value);
//     console.log("end : ",endDate);
//     const currDate = new Date();
//     let diff = endDate - currDate;
//     console.log(diff);