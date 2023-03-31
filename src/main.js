// Create variables targetting the relevant DOM elements here 👇

// var newUserBook;
var currentCover;

//Cover elements
var randomTitle = document.querySelector('.cover-title');
var window = document.querySelector('html')
var randomDescriptor1 = document.querySelector('.tagline-1');
var randomDescriptor2 = document.querySelector(`.tagline-2`);
var image = document.querySelector('.cover-image');

// Buttons
var randomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var makeCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var veiwSavedButton = document.querySelector('.view-saved-button');
var createNewBookButton = document.querySelector('.create-new-book-button');

//pages
var homePage = document.querySelector('.home-view');
var savedCoversPage = document.querySelector('.saved-view');
var makeCoversPage = document.querySelector('.form-view');
var savedCoversSection = document.querySelector('.saved-covers-section');

//user inputs
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', displayNewCover);
window.addEventListener('load', displayNewCover)
homeButton.addEventListener('click', switchToHome);
veiwSavedButton.addEventListener('click', switchToSavedCovers);
makeCoverButton.addEventListener('click',switchToMakeCovers);
saveCoverButton.addEventListener('click', saveCover);
createNewBookButton.addEventListener('click', function(event) {
  event.preventDefault()
  makeUserBook()
  displayMadeCover()
});

// Create your event handlers and other functions here 👇

function displayNewCover() {
    currentCover = createCover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
    displayMadeCover();
};

function displayMadeCover(){
    randomTitle.innerText = currentCover.title;
    image.src = currentCover.coverImg;
    randomDescriptor1.innerText = currentCover.tagline1;
    randomDescriptor2.innerText = currentCover.tagline2;
}

function switchToHome(){
  homeButton.classList.add('hidden')
  saveCoverButton.classList.remove('hidden')
  randomCoverButton.classList.remove('hidden')
  savedCoversPage.classList.add('hidden')
  makeCoversPage.classList.add('hidden')
  homePage.classList.remove('hidden')
}

function switchToSavedCovers(){
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  savedCoversPage.classList.remove('hidden')
  makeCoversPage.classList.add('hidden')
  homePage.classList.add('hidden')
  displaySavedCovers()
}

function switchToMakeCovers(){
  saveCoverButton.classList.add('hidden')
  randomCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  savedCoversPage.classList.add('hidden')
  makeCoversPage.classList.remove('hidden')
  homePage.classList.add('hidden')
}

function displaySavedCovers(){
  console.log(savedCovers)
  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
    // `
    // <section class="mini-cover">
    // <img class="cover-image" src="${savedCovers[i].coverImg}">
    // <h2 class="cover-title">${savedCovers[i].title}</h2>
    // <h3 class="tagline">A tale of <span class="${savedCovers[i].tagline1}">passion</span> and <span class="${savedCovers[i].tagline2}"</h3>
    // <img class="price-tag" src="./assets/price.png">
    // <img class="overlay" src="./assets/overlay.png">
    // `
    `
<section class="mini-cover">
      <section class="main-cover">
        <img class="cover-image" src="${savedCovers[i].coverImg}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline1}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png"></img>
`
  }
}

function makeUserBook() {
  currentCover = createCover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value)
  saveUserInputs();
  switchToHome();
  return currentCover
}

function saveUserInputs() {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value);
  descriptors.push(userDesc2.value);
}

function saveCover() {
  console.log({currentCover})
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
  return savedCovers
}

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
};