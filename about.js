const app = document.getElementById("app")

// Create main section container
const section = document.createElement("section")
section.className = "team-section"

// Title
const heading = document.createElement("h1")
heading.textContent = "One Team Many Talents"

// Subtitle
const subheading = document.createElement("p")
subheading.className = "subtitle"
subheading.textContent =
  "Our trusted development team delivers innovative, high-quality solutions with creativity and precision."

// Team data
const team = [
  {
    name: "Okon Joseph Itoro",
    role: "Frontend developer",
    image: "Images/itoro.jpg",
  },
  {
    name: "Isinkaye Iyanu",
    role: "Software developer and Content Creator",
    image: "Images/Iyanu.jpg",
  },
  {
    name: "Isaac Gabriel Umoh",
    role: "Frontend developer and Musical Instrumentalists",
    image: "Images/fine isaac.jpg",
  },
]

// Create team container
const container = document.createElement("div")
container.className = "team-container"

// Create each profile card
team.forEach((member) => {
  const card = document.createElement("div")
  card.className = "team-card"

  const img = document.createElement("img")
  img.src = member.image
  img.alt = `${member.name} photo`

  const name = document.createElement("h3")
  name.textContent = member.name

  const role = document.createElement("p")
  role.textContent = member.role

  card.appendChild(img)
  card.appendChild(name)
  card.appendChild(role)
  container.appendChild(card)
})

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav")
  const menuBtn = document.querySelector(".mobile-menu-btn")
  const body = document.body

  mobileNav.classList.toggle("active")
  // th button to clos and opn the cancl
  menuBtn.classList.toggle("active")
  body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : "auto"
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const mobileNav = document.getElementById("mobileNav")
  const menuBtn = document.querySelector(".mobile-menu-btn")

  if (!mobileNav.contains(event.target) && !menuBtn.contains(event.target)) {
    mobileNav.classList.remove("active")
    menuBtn.classList.remove("active")
    document.body.style.overflow = "auto"
  }
})
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTopBtn");

  if (btn) {
    // Show or hide the button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

    // Scroll to top smoothly when button is clicked
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// Close mobile menu on window resize if it's open
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    const mobileNav = document.getElementById("mobileNav")
    const menuBtn = document.querySelector(".mobile-menu-btn")

    mobileNav.classList.remove("active")
    menuBtn.classList.remove("active")
    document.body.style.overflow = "auto"
  }
});
// Desktop nav links
 const desktopAbout = document.getElementById("desktopAbout");
  const desktopPlans = document.getElementById("desktopPlans");
  const desktopSignup = document.getElementById("desktopSignup");
  // this is for the other pages yet to be pulled
  if (desktopAbout) {
    desktopAbout.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "about.html";
    });
  }
if (desktopPlans) {
    desktopPlans.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "plans.html";
    });
  }
  if (desktopSignup) {
    desktopSignup.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "signup.html";
    });
  }
  // mobile nav links      
   const mobileAbout = document.getElementById("mobileAbout");
  const mobilePlans = document.getElementById("mobilePlans");
   const signupBtn = document.getElementById("mobilenav_Signup");


  if (mobileAbout) {
    mobileAbout.addEventListener("click", function (e) {
      e.preventDefault();
      toggleMobileMenu();
      window.location.href = "about.html";
    });
  }

  if (mobilePlans) {
    mobilePlans.addEventListener("click", function (e) {
      e.preventDefault();
      toggleMobileMenu();
      window.location.href = "plans.html";
    });
  }
 
  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
      window.location.href = "signup.html";
    });
  }
  
// Append all elements
section.appendChild(heading)
section.appendChild(subheading)
section.appendChild(container)
app.appendChild(section)

// Make toggleMobileMenu globally available
window.toggleMobileMenu = toggleMobileMenu
