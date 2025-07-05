function toggleMobileMenu() {
          const mobileNav = document.getElementById('mobileNav');
          const menuBtn = document.querySelector('.mobile-menu-btn');
          
          mobileNav.classList.toggle('active');
          menuBtn.classList.toggle('active');
      }

      // Close mobile menu when clicking outside
      document.addEventListener('click', function(event) {
          const mobileNav = document.getElementById('mobileNav');
          const menuBtn = document.querySelector('.mobile-menu-btn');
          
          if (!menuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
              mobileNav.classList.remove('active');
              menuBtn.classList.remove('active');
          }
      });

      // Close mobile menu on window resize
      window.addEventListener('resize', function() {
          if (window.innerWidth > 640) {
              const mobileNav = document.getElementById('mobileNav');
              const menuBtn = document.querySelector('.mobile-menu-btn');
              mobileNav.classList.remove('active');
              menuBtn.classList.remove('active');
          }
      });
        document.addEventListener("DOMContentLoaded", function () {
  const desktopAbout = document.getElementById("desktopAbout");
  const desktopPlans = document.getElementById("desktopPlans");
  const desktopSignup = document.getElementById("desktopSignup");

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

  // Mobile nav links      
  const mobileAbout = document.getElementById("mobileAbout");
  const mobilePlans = document.getElementById("mobilePlans");
  const signupBtn = document.getElementById("mobileSignup"); // Ensure this ID matches your HTML

  if (mobileAbout) {
    mobileAbout.addEventListener("click", function (e) {
      e.preventDefault();
    //   toggleMobileMenu();
      window.location.href = "about.html";
    });
  }

  if (mobilePlans) {
    mobilePlans.addEventListener("click", function (e) {
      e.preventDefault();
    //   toggleMobileMenu();
      window.location.href = "plans.html";
    });
  }
 
  if (signupBtn) {
    signupBtn.addEventListener("click", function () {
    //   toggleMobileMenu(); // Optionally close the menu
      window.location.href = "signup.html";
    });
  }
});