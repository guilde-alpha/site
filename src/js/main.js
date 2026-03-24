// Navbar scroll effect
(function () {
  const header = document.getElementById("site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run on load
})();

// Mobile menu toggle
(function () {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!isOpen));

    // Animate burger lines
    const lines = btn.querySelectorAll(".burger-line");
    if (!isOpen) {
      // Menu is now visible
      lines[0].style.transform = "translateY(7px) rotate(45deg)";
      lines[1].style.opacity = "0";
      lines[2].style.transform = "translateY(-7px) rotate(-45deg)";
    } else {
      lines[0].style.transform = "";
      lines[1].style.opacity = "";
      lines[2].style.transform = "";
    }
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
      const lines = btn.querySelectorAll(".burger-line");
      lines[0].style.transform = "";
      lines[1].style.opacity = "";
      lines[2].style.transform = "";
    });
  });
})();
