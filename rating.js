//  Body reset colors

document.getElementById("body").onclick = function() { resetColors() };

// Mouse over

document.getElementById("1").onmouseover = function() { changeColors(1) };
document.getElementById("2").onmouseover = function() { changeColors(2) };
document.getElementById("3").onmouseover = function() { changeColors(3) };
document.getElementById("4").onmouseover = function() { changeColors(4) };
document.getElementById("5").onmouseover = function() { changeColors(5) };

//Mouse click

document.getElementById("1").onclick = function() { changeColors(1) };
document.getElementById("2").onclick = function() { changeColors(2) };
document.getElementById("3").onclick = function() { changeColors(3) };
document.getElementById("4").onclick = function() { changeColors(4) };
document.getElementById("5").onclick = function() { changeColors(5) };


// Reset Colors

function resetColors() {
    for (var i = 1; i <= 5; i++) {
        document.getElementById(i).classList.remove("fix");
    }
}

// Change Colors

function changeColors(x) {
    resetColors();
    for (var i = 1; i <= x; i++) {
        document.getElementById(i).classList.add("fix");
    }
    event.stopPropagation();
}