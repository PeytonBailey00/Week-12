let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});

userNum.focus();

let counter = 0;

function run() {
    let a = document.getElementById("paragraph")
    a.innerHTML = "Hello World!";
    a.style.backgroundColor = "purple";
    a.style.color = "white";
    a.style.padding = "15px";
    a.style.textAlign = "center";
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10)
    let b = document.getElementById("random")
    b.innerHTML = ran;
    b.style.backgroundColor = "blue";
    b.style.color = "white";
    b.style.padding = "15px";
    b.style.textAlign = "center";
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let c = document.getElementById("userNumber")
    c.innerHTML = user;
    c.style.backgroundColor = "orange";
    c.style.color = "white";
    c.style.padding = "15px";
    c.style.textAlign = "center";
    return user;
}

function compareNumbers() {
    let x = userNumber();
    let y = randomNum();
    let d = document.getElementById("compare")
    let e = document.getElementById("counter")

    if (x != y) {
        d.innerHTML = "Numbers are not equal. Computer got " + y + ", & user got " + x;
        d.style.backgroundColor = "red";
        d.style.color = "white";
        d.style.padding = "15px";
        d.style.textAlign = "center";
        counter++
        e.innerHTML = "You have made " + counter + " attempts."
        e.style.backgroundColor = "gray";
        e.style.color = "white";
        e.style.padding = "15px";
        e.style.textAlign = "center";
    } else if (x == y) {
        d.innerHTML = "Numbers are equal. Computer got " + y + ", & user got " + x;
        d.style.backgroundColor = "green";
        d.style.color = "white";
        d.style.padding = "15px";
        d.style.textAlign = "center";
        counter++
        e.innerHTML = "You took " + counter + " attempts to get it right."
        e.style.backgroundColor = "gray";
        e.style.color = "white";
        e.style.padding = "15px";
        e.style.textAlign = "center";
    }
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}