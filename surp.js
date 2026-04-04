document.getElementById("btn1").addEventListener("click", function() {
    window.location.href = "sim.html";
});

const btn = document.getElementById("btn2");

btn.addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
});