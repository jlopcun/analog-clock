const RootStyles = document.documentElement.style;
let seconds = new Date().getSeconds();
setInterval(()=>{
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    RootStyles.setProperty('--secondRotate',`${seconds+=6}deg`);
    RootStyles.setProperty('--minuteRotate',`${minutes*6}deg`);
    RootStyles.setProperty('--hourRotate',`${hours*30}deg`);
},1000);

