let homeScore = document.getElementById("hScore")
let awayScore = document.getElementById("aScore")
let hScore = 0
let aScore = 0

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

function awayAddOne(){
    aScore += 1
    awayScore.textContent = aScore
}
function awayAddTwo(){
    aScore += 2
    awayScore.textContent = aScore
}
function awayAddThree(){
    aScore += 3
    awayScore.textContent = aScore
}