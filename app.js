var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000
})

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
