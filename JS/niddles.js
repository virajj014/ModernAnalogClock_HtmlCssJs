setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // For the niddles
    let hr = document.getElementById('hr');
    let mn = document.getElementById('mn');
    let sc = document.getElementById('sc');

    hr.style.transform = `rotate(${h * 30}deg)`; 
    mn.style.transform = `rotate(${m * 6}deg)`;
    sc.style.transform = `rotate(${s * 6}deg)`; 
});