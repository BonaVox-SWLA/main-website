// toggle menu
function toggleMenu() {
  var mobileMenu = document.getElementById("mobile-menu");

  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.ariaHidden = "false";
    mobileMenu.ariaExpanded = "true";
  } else {
    mobileMenu.ariaHidden = "true";
    mobileMenu.ariaExpanded = "false";
  }
}

// close menu
function closeMenu() {
  mobileMenu = document.getElementById("mobile-menu");

  mobileMenu.classList.remove("active");

  mobileMenu.ariaHidden = "true";
  mobileMenu.ariaExpanded = "false";
}

// show blurb
function showBlurb(event, eventName) {
  var i, blurb, card;

  blurb = document.getElementsByClassName("blurb");
  for (i = 0; i < blurb.length; i++) {
    blurb[i].style.height = "0%";
  }

  card = document.getElementsByClassName("card");
  for (i = 0; i < card.length; i++) {
    card[i].classList.remove("active-blurb");
  }

  document.getElementById(eventName).style.height = "100%";

  event.currentTarget.classList.add("active-blurb");
}

// hide blurb
function hideBlurb(event, eventName) {
  var i, blurb, card;

  card = document.getElementsByClassName("card");
  for (i = 0; i < card.length; i++) {
    card[i].classList.add("active-blurb");
  }

  document.getElementById(eventName).style.height = "0%";

  event.currentTarget.classList.remove("active-blurb");
}

// load more previous concerts

function loadMore() {
  var overflow, loadBtn;

  overflow = document.getElementById("concert-overflow");
  loadBtn = document.getElementById("load-button");

  overflow.style.display = "grid";
  loadBtn.style.display = "none";
  overflow.ariaHidden = "false";
}

// image carousel

const imgOne = document.getElementById("img-1");
if (imgOne) {
  imgWidth = imgOne.offsetWidth;
}
var currentMargin = 0;

// next image function
function nextImg() {
  let i, pageNo, img;

  pageNo = document.getElementById("page-no");
  img = document.getElementsByClassName("img");

  // image slider
  function slider() {
    var i, imgWidth, width;

    imgWidth = document.getElementById("img-1").offsetWidth; // width of one image
    currentMargin += imgWidth;

    for (i = 0; i < 1; i++) {
      img[i].style.marginLeft = -currentMargin + "px";
    }

    if (currentMargin >= img.length * imgWidth) {
      currentMargin = 0;
      img[0].style.marginLeft = "0px";
    }
  }

  slider();

  // image page counter
  pageNo.innerHTML++;

  if (pageNo.innerHTML > img.length) {
    pageNo.innerHTML = 1;
  }
}

function prevImg() {
  let i, pageNo, img;

  pageNo = document.getElementById("page-no");
  img = document.getElementsByClassName("img");

  function slider() {
    var i, imgWidth;

    imgWidth = document.getElementById("img-1").offsetWidth;
    currentMargin -= imgWidth;

    if (currentMargin < 0) {
      currentMargin = (img.length - 1) * imgWidth;
    }

    for (i = 0; i < 1; i++) {
      img[i].style.marginLeft = -currentMargin + "px";
    }
  }

  slider();

  pageNo.innerHTML--;

  if (pageNo.innerHTML < 1) {
    pageNo.innerHTML = img.length;
  }
}

function totalPages() {
  let totalPages, img;

  totalPages = document.getElementById("page-ttl");
  img = document.getElementsByClassName("img");

  totalPages.innerHTML = img.length;
}

// Readmore

function readMore(event, blurbName, buttonName) {
  document.getElementById(blurbName).classList.toggle("expanded");

  if (document.getElementById(blurbName).classList.contains("expanded")) {
    document.getElementById(blurbName).ariaExpanded = "true";
    document.getElementById(buttonName).innerHTML = "Read less";
  } else {
    document.getElementById(blurbName).ariaExpanded = "false";
    document.getElementById(buttonName).innerHTML = "Read more";
  }
}

// Social media share buttons

  const facebookBtn = document.querySelector(".share .facebookBtn");
  const twitterBtn = document.querySelector(".twitterBtn");
  const linkedinBtn = document.querySelector(".linkedinBtn");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.querySelector(".event-title-text").innerHTML);

  facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  twitterBtn.href = `https://twitter.com/intent/tweet?url=${url}&text=${title}&hashtags=BonaVoxSWLA`
  linkedinBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`


