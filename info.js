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
    const radioBtn = document.querySelectorAll('input[name="imgChoice"]');
    const display = document.getElementById('imageDisplay');

    for (let radio of radioBtn) {
        radio.addEventListener('change', function () {
            const selectedValue = this.value;

            display.innerHTML = `<img id="galleryImg" src="images/img${selectedValue}.jpg">`;

            const img = document.getElementById("galleryImg");

            img.onload = function () {
                updateNaturalSize(img);  // читаємо справжні розміри
                currentWidth = img.naturalWidth * 0.6; // стартова ширина
                resizeImage();           // малюємо без деформації
            };
        });
    }
}

let currentWidth = 500;
let step = 50;

let naturalWidth = null;
let naturalHeight = null;

function updateNaturalSize(img) {
    naturalWidth = img.naturalWidth;
    naturalHeight = img.naturalHeight;
}

function resizeImage() {
    const img = document.querySelector("#imageDisplay img");
    if (!img || !naturalWidth || !naturalHeight) return;

    img.style.width = currentWidth + "px";

    const ratio = naturalHeight / naturalWidth;
    img.style.height = currentWidth * ratio + "px";
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

// --- Zoom In ---
document.getElementById("zoomInBtn").addEventListener("click", function () {
    currentWidth += step;
    resizeImage();
});

// --- Zoom Out ---
document.getElementById("zoomOutBtn").addEventListener("click", function () {
    if (currentWidth > 100) currentWidth -= step;
    resizeImage();
});

// --- Back Button ---
document.getElementById("backBtn").addEventListener("click", function () {
    window.location.href = document.referrer || "index.html";
});
