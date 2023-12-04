setInterval(() => {
   
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();



    // For the dots


    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');

    let deg = 6;
    sec_dot.style.transform = `rotate(${s * 6}deg)`; // 360/60 = 6
    min_dot.style.transform = `rotate(${m * 6}deg)`; // 360/60 = 6
    hr_dot.style.transform = `rotate(${h * 30}deg)`; // 360/12 = 30
});