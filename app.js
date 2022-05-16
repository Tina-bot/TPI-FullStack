const badgeYellow = document.querySelector('#badge-yellow')
const badgeYello2 = document.querySelector('#badge-yellow2')
const badgeRed = document.querySelector('#badge-red')
const badgeBlue = document.querySelector('#badge-blue')
const badgeBlue2 = document.querySelector('#badge-blue2')
const badgeGrey = document.querySelector('#badge-grey')

function colorizeBadge(badge, color) {
    badge.style.backgroundColor = '#' + color
}

colorizeBadge(badgeYellow, 'f0ad4e')
colorizeBadge(badgeRed, 'd9534f')
colorizeBadge(badgeBlue, '5bc0de')
colorizeBadge(badgeGrey, '777')
colorizeBadge(badgeYello2, 'f0ad4e')
colorizeBadge(badgeBlue2, '5bc0de')

//validation
const form = document.querySelector('#form')
const formInputs = document.querySelectorAll('#form input')
const formTextarea = document.querySelector('#form textarea')
const formButton = document.querySelector('#form button')
const alertDanger = document.querySelector('#alert-danger')
const alertSuccess = document.querySelector('#alert-success')


function validateForm() {
    let isValid = true
    formInputs.forEach(input => {
        if (input.value == '') {
            isValid = false
        }
    })
    if (formTextarea.value == '') {
        isValid = false
    }
    return isValid
}


formButton.addEventListener('click', function (e) {
    e.preventDefault()
    if (validateForm()) {
        alertSuccess.style.display = 'block'
        alertDanger.style.display = 'none'

    } else {
        alertSuccess.style.display = 'none'
        alertDanger.style.display = 'block'

    }
}
)
