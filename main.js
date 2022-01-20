let twitterBtn = document.querySelector("#twitter-btn");
let linkedInBtn = document.querySelector("#linked-in-btn");
let githubBtn = document.querySelector("#github-btn");
let hamburgerMenu = document.querySelector("#hamburger-menu");

let gotoUpBtn = document.querySelector("#goto-top");

let isAndroid = /Android/i.test(navigator.userAgent);

if (isAndroid) {
  twitterBtn.setAttribute(
    "href",
    "https://twitter.com/intent/user?screen_name=abdrabo60"
  );
  //can't get linkedin id
  // linkedInBtn.setAttribute("href", "linkedin://profile/[profile id]");
}

window.onscroll = () => {
  window.scrollY > 0
    ? gotoUpBtn.classList.remove("hidden")
    : gotoUpBtn.classList.add("hidden");
  console.log(window.scrollY > 0);
};

gotoUpBtn.onclick = () => {
  window.scrollTo(window.scrollX, 0);
};

hamburgerMenu.onclick = () => {
  let headLinks = document.querySelector("nav .head-links");
  if (getComputedStyle(headLinks).display === "none") {
    headLinks.style.display = "block";
  } else {
    headLinks.style.display = "none";
  }
};
