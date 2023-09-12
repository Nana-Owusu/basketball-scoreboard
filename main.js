let scoreLineHome = document.getElementById("scorelinehome")
let scoreLineAway = document.getElementById("scorelineaway")
let scoreSection = document.getElementById("scoresection")
let countHome = 0
let countAway = 0
let goal = "Goal 🎉"
let noGoal = "No Goal 😩"

//scoreline Home
function pointOneHome() {
    countHome += 1
    scoreLineHome.textContent = countHome
    scoreSection.textContent = goal
}

function pointTwoHome(){
    countHome += 2
    scoreLineHome.textContent = countHome
    scoreSection.textContent = goal
}

function pointThreeHome() {
    countHome += 3
    scoreLineHome.textContent = countHome
    scoreSection.textContent = goal
}

//Negative Home

function takeOneHome() {
    countHome -= 1
    scoreLineHome.textContent = countHome
    scoreSection.textContent = noGoal
}

function takeTwoHome() {
    countHome -= 2
    scoreLineHome.textContent = countHome
    scoreSection.textContent = noGoal
}

function takeThreeHome() {
    countHome -= 3
    scoreLineHome.textContent = countHome
    scoreSection.textContent = noGoal
}



//scoreline Away
function pointOneAway() {
    countAway += 1
    scoreLineAway.textContent = countAway
    scoreSection.textContent = goal
}

function pointTwoAway(){
    countAway += 2
    scoreLineAway.textContent = countAway
    scoreSection.textContent = goal
}

function pointThreeAway() {
    countAway += 3
    scoreLineAway.textContent = countAway
    scoreSection.textContent = goal
}

//Negative Away

function takeOneAway() {
    countAway -= 1
    scoreLineAway.textContent = countAway
    scoreSection.textContent = noGoal
}

function takeTwoAway() {
    countAway -= 2
    scoreLineAway.textContent = countAway
    scoreSection.textContent = noGoal
}

function takeThreeAway() {
    countAway -= 3
    scoreLineAway.textContent = countAway
    scoreSection.textContent = noGoal
}

//Reset score board
function reset() {
    countHome = 0
    countAway = 0
    scoreSection.textContent = "--"
    scoreLineHome.textContent = countHome
    scoreLineAway.textContent = countAway 
}