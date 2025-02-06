let homeScore = document.getElementById("hScore")
let guestScore = document.getElementById("gScore")
let hScore = 0
let gScore = 0

function homeAddOne(){
    hScore += 1
    homeScore.textContent = hScore
}
function homeAddTwo(){
    hScore += 2
    homeScore.textContent = hScore
}
function homeAddThree(){
    hScore += 3
    homeScore.textContent = hScore
}

function guestAddOne(){
    gScore += 1
    guestScore.textContent = gScore
}
function guestAddTwo(){
    gScore += 2
    guestScore.textContent = gScore
}
function guestAddThree(){
    gScore += 3
    guestScore.textContent = gScore
}