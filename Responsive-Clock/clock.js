setInterval(() => {
    d = new Date();
    h = d.getHours()-12;
    m = d.getMinutes();
    s = d.getSeconds();
    console.log(h,m,s);
    hrotation = 30*h + m/2;
    mrotation = 6*m;
    srotation = 6*s;
    console.log(hrotation,mrotation,srotation);
    document.getElementById("second").style.transform='rotate('+srotation+ 'deg)';
    document.getElementById("minute").style.transform='rotate('+mrotation+ 'deg)';
    document.getElementById("hour").style.transform='rotate('+hrotation+ 'deg)';
}, 1000);