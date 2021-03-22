window.onload = auto;



// Define slider Time Interval (in milliseconds)
const INTERVAL = 3000

// Getting sliders images
let wohnenSliderImages = Array.from(document.querySelectorAll('#wohnen .slider img'));
let arbeitenSliderImages = Array.from(document.querySelectorAll('#arbeiten .slider img'));
let offentlichSliderImages = Array.from(document.querySelectorAll('#offentlich .slider img'));

// Counting the slides
let wohnenSlidesCount = wohnenSliderImages.length;
let arbeitenSlidesCount = arbeitenSliderImages.length;
let offentlichSlidesCount = offentlichSliderImages.length;



// Controlling the starting slide (current index)
let currentWohnen = 1
let currentArbeiten = 1
let currentOffentlich = 1



// Creating the main Indicators Elements - ul
let wohnenEl = document.createElement('ul');
wohnenEl.setAttribute('id', 'wohnen-el');

let arbeitenEl = document.createElement('ul');
arbeitenEl.setAttribute('id', 'arbeiten-el');

let offentlichEl = document.createElement('ul');
offentlichEl.setAttribute('id', 'offentlich-el');

// Looping the slides count to be reflected on Indicators - li
for (var i = 1; i <= wohnenSlidesCount; i++) {
    let indicator = document.createElement('li');
    indicator.setAttribute('index', i);
    wohnenEl.appendChild(indicator);
}
for (var i = 1; i <= arbeitenSlidesCount; i++) {
    let indicator = document.createElement('li');
    indicator.setAttribute('index', i);
    arbeitenEl.appendChild(indicator);
}
for (var i = 1; i <= offentlichSlidesCount; i++) {
    let indicator = document.createElement('li');
    indicator.setAttribute('index', i);
    offentlichEl.appendChild(indicator);
}

// Appending the created indicators to the page
document.querySelector('#wohnen .indicators').appendChild(wohnenEl);
document.querySelector('#arbeiten .indicators').appendChild(arbeitenEl);
document.querySelector('#offentlich .indicators').appendChild(offentlichEl);

// getting the existing indicators elements
let indicatorsWohnen = document.querySelector('#wohnen ul');
let indicatorsArbeiten = document.querySelector('#arbeiten ul');
let indicatorsOffentlich = document.querySelector('#offentlich ul');

// getting the existing indicators Bullets
let bulletsWohnen = Array.from(document.querySelectorAll('#wohnen-el li'));
let bulletsArbeiten = Array.from(document.querySelectorAll('#arbeiten-el li'));
let bulletsOffentlich = Array.from(document.querySelectorAll('#offentlich-el li'));

function auto() {
    setInterval("nextSlide()", INTERVAL);
}

// Next Slide Function
function nextSlide() {
    // Check if we are on the last slide and reset slider
    if (currentWohnen == wohnenSlidesCount) {
        currentWohnen = 0
        currentWohnen++;
    } else {
        currentWohnen++;
    }
    if (currentArbeiten == arbeitenSlidesCount) {
        currentArbeiten = 0
        currentArbeiten++;
    } else {
        currentArbeiten++;
    }
    if (currentOffentlich == offentlichSlidesCount) {
        currentOffentlich = 0
        currentOffentlich++;
    } else {
        currentOffentlich++;
    }
    theChecker();
}


function theChecker() {
    // make sure 'Active' class is removed from all
    removeAllActive();
    // add 'active' class to current slide
    wohnenSliderImages[currentWohnen - 1].classList.add('active');
    arbeitenSliderImages[currentArbeiten - 1].classList.add('active');
    offentlichSliderImages[currentOffentlich - 1].classList.add('active');
    // add 'active' class to current indicator
    indicatorsWohnen.children[currentWohnen - 1].classList.add('active');
    indicatorsArbeiten.children[currentArbeiten - 1].classList.add('active');
    indicatorsOffentlich.children[currentOffentlich - 1].classList.add('active');
}

// Looping Through Bullets Items
//////////////////////////////////////////
for (let i = 0; i < bulletsWohnen.length; i++) {
    bulletsWohnen[i].onclick = function () {
        currentWohnen = parseInt(this.getAttribute('index'));
        theChecker();
    }
}
for (let i = 0; i < bulletsArbeiten.length; i++) {
    bulletsArbeiten[i].onclick = function () {
        currentArbeiten = parseInt(this.getAttribute('index'));
        theChecker();
    }
}
for (let i = 0; i < bulletsOffentlich.length; i++) {
    bulletsOffentlich[i].onclick = function () {
        currentOffentlich = parseInt(this.getAttribute('index'));
        theChecker();
    }
}



// Remove Active Classes From Images and  Bullets
function removeAllActive() {
    // Loop Through Images
    wohnenSliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    arbeitenSliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    offentlichSliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    // Loop Through Bullets
    bulletsWohnen.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
    bulletsArbeiten.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
    bulletsOffentlich.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}


// Triggering the checker function
theChecker();