let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let home = 0
let guest = 0

// HOME FUNCTIONS

function add1home() {
    home += 1
    homeScore.textContent = home
}

function add2home() {
    home += 2
    homeScore.textContent = home
}

function add3home() {
    home += 3
    homeScore.textContent = home
}

// GUEST FUNCTIONS

function add1guest() {
    guest += 1
    guestScore.textContent = guest
}

function add2guest() {
    guest += 2
    guestScore.textContent = guest
}

function add3guest() {
    guest += 3
    guestScore.textContent = guest
}

// NEW GAME BUTTON

function reset() {
    guest = 0
    guestScore.textContent = 0
    home = 0
    homeScore.textContent = 0
}

// LEADER HIGHLIGHTER
function highlight() { 

    if (guestScore.textContent > homeScore.textContent) {
            guestScore.style.border = "2px solid #F94F6D"
        } else if (homeScore.textContent > guestScore.textContent) {
            homeScore.style.border = "2px solid #F94F6D"
        }  
    
     
}

highlight()
