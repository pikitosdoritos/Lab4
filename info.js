let arr = [
    'Never give up',
    'Success is the sum of small efforts',
    'No emotions, just money and mission.',
    'The problem is your mind.'
]

let lastIndex = -1

const photo = document.getElementById('mainPhoto')

let originalWidth
let originalHeight

photo.onload = () => {
    originalWidth = photo.naturalWidth
    originalHeight = photo.naturalHeight
}

randomQuotes()
buttonUpdate()
languageChange()
imageChooser()
staticMenuHover()
selectMenuNavigation()

function randomQuotes() {
    let randomIndex

    do {
        randomIndex = Math.floor(Math.random() * arr.length)
    } while (randomIndex === lastIndex)

    lastIndex = randomIndex

    const quote = document.getElementById('quote')
    quote.textContent = arr[randomIndex]
}


function buttonUpdate() {
    const updateButton = document.getElementById('newQuoteBtn')
    updateButton.addEventListener('click', randomQuotes)
}

function increasePhoto() {
    photo.style.transform = 'scale(1.1)'
    photo.style.transition = 'transform 1s ease'
}

function resetPhoto() {
    photo.style.transform = 'scale(1)'
    photo.style.transition = 'transform 1s ease'
}

function languageChange() {
    const en = document.querySelector('.en-button')
    const ua = document.querySelector('.ua-button')

    en.addEventListener('click', () => {
        window.location.href = 'index.html'
    })

    ua.addEventListener('click', () => {
        window.location.href = 'index_ua.html'
    })
}

function imageChooser() {
    const radioBtn = document.querySelectorAll('input[name="imgChoice"]')
    const display = document.getElementById('imageDisplay')

    for (let radio of radioBtn) {
        radio.addEventListener('change', function () {
            const selectedValue = this.value

            if (selectedValue === '1') {
                display.innerHTML = `<img src="images/img1.jpg" width="300" height="300">`
            } else if (selectedValue === '2') {
                display.innerHTML = `<img src="images/img2.jpg" width="300" height="300">`
            } else if (selectedValue === '3') {
                display.innerHTML = `<img src="images/img3.jpg" width="300" height="300">`
            } else if (selectedValue === '4') {
                display.innerHTML = `<img src="images/img4.jpg" width="300" height="300">`
            } else if (selectedValue === '5') {
                display.innerHTML = `<img src="images/img5.jpg" width="300" height="300">`
            }
        })
    }
}

function staticMenuHover() {
    const links = document.querySelectorAll('.menu-link')

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'red'
        })

        link.addEventListener('mouseout', () => {
            link.style.color = ''
        })
    })
}

function selectMenuNavigation() {
    const select = document.getElementById('pageSelect')

    if (!select) return

    select.addEventListener('change', function () {
        if (this.value !== "") {
            window.location.href = this.value
        }
    })
}

