const mobileNavbar = document.querySelector(".navbar__mobile");
const backdrop = document.querySelector(".backdrop");
const serviceDetails = document.querySelector(".services__details");
const serviceDetailsBackdrop = document.querySelector(".services__backdrop");

//Navigation
const openNavbar = () => {
  mobileNavbar.style.transform = "scale(1)";
  mobileNavbar.style.opacity = "1";
  backdrop.style.display = "block";
};

const closeNavbar = () => {
  mobileNavbar.style.transform = "scale(0)";
  mobileNavbar.style.opacity = "0";
  backdrop.style.display = "none";
};

window.onresize = (e) => {
  if (window.innerWidth >= 768) {
    backdrop.style.display = "none";
  }
};

//Admin Console
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("%c This site was developed by,", "font-size: 14px; color: red;");
console.log("%c Ragul CS,", "font-size: 28px; color: blue;");
console.log("%c contact: ragulcs15@gmail.com, ragulcs.netlify.app,", "font-size: 14px; color: red;");
console.log("+++++++++++++++++++++++++++++++++++++++")

