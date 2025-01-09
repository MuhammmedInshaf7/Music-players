// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  song.src = "./assets/Songs/sottu sotta.mp3";
  songName.innerText = "sottu sotta";
  songBy.innerText = "Vijay Yesudass";
  title.innerText = "sottu sotta";
  download.href = "./assets/Songs/sottu sotta.mp3";
  aboutSong.innerText = "Sottu Sotta from the movie Vennila Kabadi Kuzhu is a lively and energetic folk song, sung by Vijay Yesudas and Sangeetha, with music composed by Vidyasagar and lyrics by Pa. Vijay. Released in 2009, this track has become an anthem for sports enthusiasts and fans of energetic music, capturing the spirit of Tamil Nadu's rural life and kabaddi culture. ";
});


buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  song.src = "./assets/Songs/Idhazhin Oram.mp3";
  songName.innerText = " Idhazhin Oram";
  songBy.innerText = "Hariharan";
  title.innerText = "Idhazhin Oram";
  download.href = "./assets/Songs/Idhazhin Oram.mp3";
  aboutSong.innerText = `"Idhazhin Oram from the film Anniyan is a beautiful romantic track, sung by Hariharan with music composed by Harris Jayaraj. This song, with its soulful melody and poetic lyrics by Vairamuthu, was released in 2005 and captures the emotional depth of a love story, where the protagonist expresses his feelings of longing and admiration for the woman he loves.

" `;
});


buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  song.src = "./assets/Songs/Va Va Nilava Pudichi.mp3";
  songName.innerText = "Va Va Nilava Pudichi";
  songBy.innerText = "Karthi";
  title.innerText = "Va Va Nilava Pudichi";
  download.href = "./assets/Songs/Va Va Nilava Pudichi.mp3";
  aboutSong.innerText = "Va Va Nilava Pudichi from Aasai is a classic Tamil romantic number. Sung by Karthik, the song features music by the legendary A.R. Rahman and lyrics by Vairamuthu. Released in 1995, this track has remained a timeless favorite, with its smooth melody and heartfelt lyrics that beautifully express the feelings of love and desire.";
});









