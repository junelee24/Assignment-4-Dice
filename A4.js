var D = document.getElementById('D-Circle');
D.addEventListener("click", ChangeDColor);

var Dr = document.getElementById('D-Rectangle');
Dr.addEventListener("click", ChangeDrColor);

var I = document.getElementById('I-Rectangle');
I.addEventListener("click", ChangeIColor);

var Isq = document.getElementById('I-Square');
Isq.addEventListener("mouseover", ChangeIsqPos);
Isq.addEventListener("mouseout", ChangeIsqPosback);

var C = document.getElementById('C-Circle');
C.addEventListener("click", ChangeCColor);

var Espine = document.getElementById('E-Spine');
Espine.addEventListener("click", ChangeEspineColor);

var E = document.getElementById('E-Rectangle');
E.addEventListener("click", ChangeEColor);

function ChangeDColor(){
    D.style.backgroundColor = "white";
}

function ChangeDrColor(){
    Dr.style.backgroundColor = "white";
}

function ChangeIColor(){
    I.style.backgroundColor = "white";
}


function ChangeIsqPos(){
    Isq.style.top = "70px";
}
function ChangeIsqPosback(){
    Isq.style.top = "180px";
}

function ChangeCColor(){
    C.style.backgroundColor = "white";
}
function ChangeEspineColor(){
    Espine.style.backgroundColor = "white";
}
function ChangeEColor(){
    E.style.backgroundColor = "white";
}


var Er = document.getElementById('E-Rectangle');
Er.addEventListener("mouseover", AddAnimation);

function AddAnimation() {
    Er.classList.add("animation");
    console.log(Er, "running the animation function")
}
