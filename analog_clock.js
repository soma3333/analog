setInterval(()=>{
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let rhr=30*hr+min/2;;
    let rmin=6*min;
    let rsec=6*sec;
    
    const hour=document.getElementById("hour");
    const minute=document.getElementById("minute");
    const second=document.getElementById("second");

    hour.style.transform=`rotate(${rhr}deg)`;
    minute.style.transform=`rotate(${rmin}deg)`;
    second.style.transform=`rotate(${rsec}deg)`;

  
},1000);