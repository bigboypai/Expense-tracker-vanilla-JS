// Class user to add each user
class User {
    constructor (name, team, division) {
        this.name = name;
        this.team = team;
        this.division = division;
    }
}

const abraham = new User ('Abraham Calvo', 'App Services', 'APTS')
const eduardo = new User ('Eduardo Echaverri', 'App Services', 'APTS')
const sebastian = new User ('Sebastian Quiros', 'DevOps', 'OSS')

// Use async to complete the data request

let name = document.getElementById('name')
let team = document.getElementById('team')
let division = document.getElementById('division')

function completeData (user) {
    name.innerText = ' ' + user.name
    team.innerText = ' ' + user.team
    division.innerText = ' ' + user.division
}

// Buttons from the nav-bar
const profileTab = document.querySelector('.profile-tab')
const securityTab = document.querySelector('.security-tab')

// Modals to be shown

let profileContainer = document.querySelector('.profile-container')
let securityContainer = document.querySelector('.security-container')

// Event listeners to add and remove CSS classes

profileTab.addEventListener('click', function() {
    securityContainer.classList.remove("displayNone")
    profileContainer.classList.add("displayNone");
    completeData(abraham)
})

securityTab.addEventListener('click', function() {
    profileContainer.classList.remove("displayNone")
    securityContainer.classList.add("displayNone");
})