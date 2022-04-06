let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});

userNum.focus();

let counter = 0;

function run() {
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10)
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers() {
    let x = userNumber();
    let y = randomNum();
    let d = document.getElementById("compare")
    let e = document.getElementById("counter")

    if (x != y) {
        d.innerHTML = "Numbers are not equal. Computer got " + y + ", & user got " + x;
        d.style.backgroundColor = "#782222";
        d.style.color = "white";
        d.style.padding = "15px";
        d.style.textAlign = "center";
        counter++
        e.innerHTML = "You have made " + counter + " attempts."
        e.style.backgroundColor = "#191919";
        e.style.color = "white";
        e.style.padding = "15px";
        e.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor ="#191919"
    } else if (x == y) {
        d.innerHTML = "Numbers are equal. Computer got " + y + ", & user got " + x;
        d.style.backgroundColor = "#255417";
        d.style.color = "white";
        d.style.padding = "15px";
        d.style.textAlign = "center";
        counter++
        e.innerHTML = "You took " + counter + " attempts to get it right."
        e.style.backgroundColor = "#191919";
        e.style.color = "white";
        e.style.padding = "15px";
        e.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor ="#191919"
    }
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}