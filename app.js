function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    document.getElementById("paragraph").style.padding = "15px";
    document.getElementById("paragraph").style.textAlign = "center";
    randomNum();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10)
    let a = document.getElementById("random")
    a.innerHTML = ran;
    a.style.backgroundColor = "blue";
    a.style.color = "white";
    a.style.padding = "15px";
    a.style.textAlign = "center";
}