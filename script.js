(function () {
  "use strict";

  var brandName = "Menorah Gold LLP";
  var whatsappNumber = "918495869862";
  var defaultMessage =
    "Hello Menorah Gold LLP, I would like to enquire about premium jewellery in Thrissur.";

  function buildWhatsAppUrl(message) {
    return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message || defaultMessage);
  }

  function setWhatsAppLinks() {
    document.querySelectorAll("[data-whatsapp-link]").forEach(function (link) {
      link.setAttribute("href", buildWhatsAppUrl(defaultMessage));
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
  }

  function setupHeader() {
    var header = document.querySelector("[data-header]");
    var menuToggle = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector("[data-site-nav]");
    var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']")) : [];

    if (!header) {
      return;
    }

    function setScrolledState() {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    }

    function closeMenu() {
      header.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      }
    }

    setScrolledState();
    window.addEventListener("scroll", setScrolledState, { passive: true });

    if (menuToggle) {
      menuToggle.addEventListener("click", function () {
        var willOpen = !header.classList.contains("is-open");
        header.classList.toggle("is-open", willOpen);
        document.body.classList.toggle("menu-open", willOpen);
        menuToggle.setAttribute("aria-expanded", String(willOpen));
        menuToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
      });
    }

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 920) {
        closeMenu();
      }
    });
  }

  function setupSmoothScroll() {
    document.querySelectorAll("a[href^='#']").forEach(function (anchor) {
      anchor.addEventListener("click", function (event) {
        var href = anchor.getAttribute("href");

        if (!href || href === "#") {
          return;
        }

        var target = document.querySelector(href);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function setupRevealAnimations() {
    var revealItems = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

    if (!revealItems.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index * 35, 220) + "ms";
      observer.observe(item);
    });
  }

  function setupFaq() {
    var faqButtons = Array.prototype.slice.call(document.querySelectorAll(".faq-question"));

    faqButtons.forEach(function (button) {
      var answerId = button.getAttribute("aria-controls");
      var answer = answerId ? document.getElementById(answerId) : null;

      if (!answer) {
        return;
      }

      button.addEventListener("click", function () {
        var isOpen = button.getAttribute("aria-expanded") === "true";

        if (isOpen) {
          button.setAttribute("aria-expanded", "false");
          answer.classList.remove("is-open");
          window.setTimeout(function () {
            if (button.getAttribute("aria-expanded") === "false") {
              answer.hidden = true;
            }
          }, 270);
          return;
        }

        faqButtons.forEach(function (otherButton) {
          var otherAnswerId = otherButton.getAttribute("aria-controls");
          var otherAnswer = otherAnswerId ? document.getElementById(otherAnswerId) : null;

          if (otherButton !== button && otherAnswer) {
            otherButton.setAttribute("aria-expanded", "false");
            otherAnswer.classList.remove("is-open");
            window.setTimeout(function () {
              if (otherButton.getAttribute("aria-expanded") === "false") {
                otherAnswer.hidden = true;
              }
            }, 270);
          }
        });

        answer.hidden = false;
        window.requestAnimationFrame(function () {
          button.setAttribute("aria-expanded", "true");
          answer.classList.add("is-open");
        });
      });
    });
  }

  function setupActiveNavigation() {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll("main section[id]")
    );
    var navLinks = Array.prototype.slice.call(
      document.querySelectorAll(".site-nav a[href^='#']")
    );

    if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) {
      return;
    }

    var linkById = {};
    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      linkById[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach(function (link) {
            link.classList.remove("is-active");
          });

          if (linkById[entry.target.id]) {
            linkById[entry.target.id].classList.add("is-active");
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-25% 0px -55% 0px",
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function setupEnquiryForm() {
    var form = document.querySelector("[data-enquiry-form]");
    var note = document.querySelector("[data-form-note]");

    if (!form) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = new FormData(form);
      var name = String(formData.get("name") || "").trim();
      var interest = String(formData.get("interest") || "").trim();
      var timeline = String(formData.get("timeline") || "").trim();
      var message = String(formData.get("message") || "").trim();
      var lines = [
        "Hello Menorah Gold LLP, I would like to enquire about jewellery.",
        name ? "Name: " + name : "",
        interest ? "Interest: " + interest : "",
        timeline ? "Occasion / timeline: " + timeline : "",
        message ? "Message: " + message : "",
      ].filter(Boolean);

      window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener");

      if (note) {
        note.textContent = "WhatsApp is opening with your enquiry message.";
      }
    });
  }

  function setFooterYear() {
    var year = document.querySelector("[data-year]");
    if (year) {
      year.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setWhatsAppLinks();
    setupHeader();
    setupSmoothScroll();
    setupRevealAnimations();
    setupFaq();
    setupActiveNavigation();
    setupEnquiryForm();
    setFooterYear();
  });
})();
