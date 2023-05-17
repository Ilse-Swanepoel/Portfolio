//Script for Hiding and SHowing Nav-bar and page contents. GL

const menuBtn = document.querySelector('.burger-menu')
const navItems = document.querySelector('.display-menu')
const aboutMe = document.querySelector('.about-me')
const nameh1 = document.querySelectorAll('.nameh1')
const nameh2 = document.querySelector('.nameh2')
const navItemss = document.querySelectorAll('.nav-item')

document.addEventListener('DOMContentLoaded', function () {
  menuBtn.classList.remove('close')
  menuBtn.classList.add('open')
  navItems.classList.remove('open')
  navItems.classList.add('close')
})

menuBtn.addEventListener('click', toggleMenu)
navItemss.forEach((navItem) => {
  navItem.addEventListener('click', toggleBurger)
})

function toggleMenu() {
  menuBtn.classList.add('close')
  menuBtn.classList.remove('open')
  nameh2.classList.add('close')
  nameh2.classList.remove('open')
  nameh1.forEach((item) => {
    item.classList.add('close')
    item.classList.remove('open')
  })
  aboutMe.classList.add('close')
  aboutMe.classList.remove('open')
  navItems.classList.add('open')
  navItems.classList.remove('close')
}

function toggleBurger() {
  menuBtn.classList.remove('close')
  menuBtn.classList.add('open')
  nameh2.classList.add('open')
  nameh2.classList.remove('close')
  nameh1.forEach((item) => {
    item.classList.add('open')
    item.classList.remove('close')
  })
  aboutMe.classList.add('open')
  aboutMe.classList.remove('close')
  navItems.classList.remove('open')
  navItems.classList.add('close')
}


const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_89j8ndv",
      "template_o450b1s",
      "#contact-form",
      "B2n_U6rKZ5vIhg3Zf"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};