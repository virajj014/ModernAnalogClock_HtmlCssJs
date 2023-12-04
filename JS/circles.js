setInterval(() => {
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // For the circles
    hh.style.strokeDashoffset = 510 - (h * 510) / 12; // 12 is the total hours
    mm.style.strokeDashoffset = 630 - (m * 630) / 60; // 60 is the total minutes
    ss.style.strokeDashoffset = 760 - (s * 760) / 60; // 60 is the total seconds
});