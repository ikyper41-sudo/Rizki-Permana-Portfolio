
document.addEventListener("DOMContentLoaded", () => {

  // =========================================
  // 1. LANGUAGE SWITCHER ID / EN
  // =========================================

  const translations = {
    id: {
      nav: ["Beranda", "Tentang", "Project", "Skill", "Kontak"],
      search: "Cari project, skill, atau lainnya...",
      searchLabel: "Cari project, skill, atau lainnya",

      headerContact: "Hubungi Saya",

      heroDescription:
        "Portfolio pribadi yang menampilkan karya, keahlian, dan perjalanan belajar saya di dunia teknologi dan desain.",
      heroProjects: "Lihat Project",
      heroAbout: "Tentang Saya",

      aboutLabel: "TENTANG SAYA",
      aboutTitle: "Halo, Saya ",
      aboutDescription:
        "Saya adalah seorang Web Developer dan Graphic Designer yang memiliki minat besar dalam teknologi, desain kreatif, dan pengembangan web. Saya selalu berusaha belajar hal baru untuk menjadi lebih baik dan menciptakan karya yang bermanfaat.",
      aboutMore: "Selengkapnya",

      projectLabel: "PORTFOLIO",
      projectTitle: "Karya Terbaik Saya",
      projectDescription:
        "Kumpulan karya website dan desain kreatif yang telah saya kerjakan.",
      filters: ["Semua", "Web Design", "Graphic Design", "Landing Page"],

      projectDescriptions: [
        "Website layanan kunci keyless mobil dan motor",
        "Website cafe dengan tampilan elegan dan menu digital",
        "Website jasa laundry dengan informasi layanan dan harga",
        "Website AUTOCARE dengan informasi layanan dan detailing",
        "Template Instagram untuk bisnis kuliner dan cafe",
        "Desain album foto, photo collage dan scrapbook digital",
        "Katalog produk hijab dan fashion collection",
        "Desain iklan produk makanan dan minuman",
        "Desain banner, poster dan kebutuhan visual bisnis"
      ],

      skillsLabel: "SKILL",
      skillsTitle: "Keahlian Saya",
      skillsDescription:
        "Teknologi dan tools yang saya kuasai untuk mendukung setiap project.",
      skillsButton: "Lihat Detail",

      contactLabel: "KONTAK",
      contactTitle: "Mari Terhubung!",
      contactDescription:
        "Punya ide atau project yang ingin dikerjakan bersama? Saya terbuka untuk berdiskusi dan berkolaborasi.",
      contactButton: "Hubungi Saya",
      location: "Lokasi",
      email: "Email",

      searchNotFound:
        "Tidak ditemukan. Coba kata: Sadaya, Photobooth, Wedding, HTML, atau Skill.",

      openMenu: "Buka menu",
      closeMenu: "Tutup menu"
    },

    en: {
      nav: ["Home", "About", "Projects", "Skills", "Contact"],
      search: "Search projects, skills, or anything...",
      searchLabel: "Search projects, skills, or anything",

      headerContact: "Contact Me",

      heroDescription:
        "My personal portfolio showcasing my work, skills, and learning journey in technology and design.",
      heroProjects: "View Projects",
      heroAbout: "About Me",

      aboutLabel: "ABOUT ME",
      aboutTitle: "Hello, I'm ",
      aboutDescription:
        "I am a Web Developer and Graphic Designer with a strong interest in technology, creative design, and web development. I continuously strive to learn new things, improve my skills, and create meaningful work.",
      aboutMore: "Learn More",

      projectLabel: "PORTFOLIO",
      projectTitle: "My Best Works",
      projectDescription:
        "A collection of websites and creative designs I have worked on.",
      filters: ["All", "Web Design", "Graphic Design", "Landing Page"],

      projectDescriptions: [
        "Car and motorcycle keyless service website",
        "Elegant cafe website featuring a digital menu",
        "Laundry service website with service and pricing information",
        "AUTOCARE website featuring detailing services and information",
        "Instagram feed templates for food businesses and cafes",
        "Photo albums, photo collages, and digital scrapbook designs",
        "Hijab product catalog and fashion collection",
        "Food and beverage product advertising designs",
        "Banners, posters, and business visual design"
      ],

      skillsLabel: "SKILLS",
      skillsTitle: "My Skills",
      skillsDescription:
        "Technologies and tools I use to support every project.",
      skillsButton: "View Details",

      contactLabel: "CONTACT",
      contactTitle: "Let's Connect!",
      contactDescription:
        "Have an idea or a project you'd like to work on together? I'm open to discussions and collaborations.",
      contactButton: "Contact Me",
      location: "Location",
      email: "Email",

      searchNotFound:
        "No results found. Try searching for Sadaya, Photobooth, Wedding, HTML, or Skills.",

      openMenu: "Open menu",
      closeMenu: "Close menu"
    }
  };

  const languageButtons = document.querySelectorAll(".lang-btn");

  let currentLanguage = "id";

  try {
    currentLanguage = localStorage.getItem("portfolio-language") || "id";
  } catch (error) {
    // Gunakan Bahasa Indonesia jika localStorage diblokir browser.
  }

  if (!translations[currentLanguage]) {
    currentLanguage = "id";
  }

  // Helper untuk mengganti teks tanpa menghapus elemen HTML.
  function setText(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
      element.textContent = value;
    }
  }

  function setHTML(selector, value) {
    const element = document.querySelector(selector);

    if (element) {
      element.innerHTML = value;
    }
  }

  // Ubah teks label tanpa menghapus ikon dekoratif di dalamnya.
  function updateSectionLabel(selector, value) {
    const element = document.querySelector(selector);
    if (!element) return;

    const icon = element.querySelector("i");
    element.textContent = "";

    if (icon) {
      element.appendChild(icon);
    }

    element.append(document.createTextNode(` ${value}`));
  }

  function changeLanguage(language) {
    if (!translations[language]) return;

    currentLanguage = language;

    const t = translations[language];

    // -----------------------------------------
    // NAVIGATION
    // -----------------------------------------

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach((link, index) => {
      if (t.nav[index]) {
        link.textContent = t.nav[index];
      }
    });

    // -----------------------------------------
    // SEARCH
    // -----------------------------------------

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
      searchInput.placeholder = t.search;
      searchInput.setAttribute("aria-label", t.searchLabel);
    }

    // -----------------------------------------
    // HEADER
    // -----------------------------------------

    setHTML(
      ".button--header",
      `<span>➤</span> ${t.headerContact}`
    );

    // -----------------------------------------
    // HERO
    // -----------------------------------------

    setText(".hero__copy > p", t.heroDescription);

    setHTML(
      ".hero__actions .button--red",
      `${t.heroProjects} <b>→</b>`
    );

    setText(".hero__actions .button--outline", t.heroAbout);

    // -----------------------------------------
    // ABOUT
    // -----------------------------------------

    updateSectionLabel(".about__content .section-label", t.aboutLabel);

    setHTML(
      ".about__content .section-title",
      `${t.aboutTitle}<span>Rizki Permana!</span>`
    );

    setText(".about__content > p", t.aboutDescription);

    setHTML(
      ".about__content .button--small",
      `${t.aboutMore} <b>→</b>`
    );

    // -----------------------------------------
    // PROJECTS
    // -----------------------------------------

    updateSectionLabel(".projects > .page-wrap > .section-label", t.projectLabel);

    setText(".projects__heading .section-title", t.projectTitle);

    setText(".projects__heading p", t.projectDescription);

    // Project filter
    const filterButtons = document.querySelectorAll(".filter");

    filterButtons.forEach((button, index) => {
      if (t.filters[index]) {
        button.textContent = t.filters[index];
      }
    });

    // Project descriptions
    const projectDescriptions = document.querySelectorAll(
      ".project-card__info p"
    );

    projectDescriptions.forEach((description, index) => {
      if (t.projectDescriptions[index]) {
        description.textContent = t.projectDescriptions[index];
      }
    });

    // -----------------------------------------
    // SKILLS
    // -----------------------------------------

    updateSectionLabel(".skills__intro .section-label", t.skillsLabel);
    setText(".skills__intro .section-title", t.skillsTitle);
    setText(".skills__intro > p", t.skillsDescription);

    setHTML(
      ".skills__intro .button--small",
      `${t.skillsButton} <b>→</b>`
    );

    // -----------------------------------------
    // CONTACT
    // -----------------------------------------

    updateSectionLabel(".contact__copy .section-label", t.contactLabel);
    setText(".contact__copy h2", t.contactTitle);
    setText(".contact__copy p", t.contactDescription);

    setHTML(
      ".contact__copy .button",
      `${t.contactButton} <b>→</b>`
    );

    const contactLabels = document.querySelectorAll(
      ".contact__text small"
    );

    if (contactLabels[0]) {
      contactLabels[0].textContent = t.email;
    }

    if (contactLabels[2]) {
      contactLabels[2].textContent = t.location;
    }

    // -----------------------------------------
    // LANGUAGE BUTTON STATE
    // -----------------------------------------

    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === language;

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    // Update document language
    document.documentElement.lang = language;

    // Simpan bahasa jika localStorage tersedia.
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (error) {
      // Penggantian bahasa tetap berjalan meskipun penyimpanan diblokir.
    }
  }

  // Language button events
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      changeLanguage(button.dataset.lang);
    });
  });

  // Apply saved language
  changeLanguage(currentLanguage);


  // =========================================
  // 2. MOBILE NAVIGATION
  // =========================================

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  function closeMobileMenu() {
    if (!menuToggle || !nav) return;

    nav.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      translations[currentLanguage].openMenu
    );

    menuToggle.textContent = "☰";
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? translations[currentLanguage].closeMenu
          : translations[currentLanguage].openMenu
      );

      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Close menu after switching language
    languageButtons.forEach((button) => {
      button.addEventListener("click", closeMobileMenu);
    });
  }


  // =========================================
  // 3. FOOTER YEAR
  // =========================================

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // =========================================
  // 4. ACTIVE NAVIGATION
  // =========================================

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav a");

  if (
    "IntersectionObserver" in window &&
    sections.length &&
    navLinks.length
  ) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          navLinks.forEach((link) => {
            const isActive =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("is-active", isActive);
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px"
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }


  // =========================================
  // 5. PROJECT FILTER
  // =========================================

  const filterButtons = document.querySelectorAll(".filter");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => {
        item.classList.remove("is-active");
      });

      button.classList.add("is-active");

      const selected = button.dataset.filter || "all";

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || "")
          .trim()
          .split(/\s+/);

        const shouldShow =
          selected === "all" || categories.includes(selected);

        card.hidden = !shouldShow;
      });
    });
  });


  // =========================================
  // 6. PROJECT SEARCH
  // =========================================

  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const query = searchInput.value.trim().toLowerCase();

      if (!query) {
        searchInput.focus();
        return;
      }

      const match = [...projectCards].find((card) => {
        const searchableText = (
          (card.dataset.search || "") +
          " " +
          card.innerText
        ).toLowerCase();

        return searchableText.includes(query);
      });

      if (match) {
        // Reveal matching project
        match.hidden = false;

        match.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

        if (typeof match.animate === "function") {
          match.animate(
            [
              { outline: "3px solid #e50925" },
              { outline: "0 solid transparent" }
            ],
            {
              duration: 1200,
              easing: "ease-out"
            }
          );
        }

        return;
      }

      const sectionMatch = [...sections].find((section) =>
        section.innerText.toLowerCase().includes(query)
      );

      if (sectionMatch) {
        sectionMatch.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        alert(translations[currentLanguage].searchNotFound);
      }
    });
  }


  // =========================================
  // 7. SPIDER-MAN WEB CURSOR
  // =========================================

  (() => {
    const canvas = document.getElementById("webCursor");

    if (
      !canvas ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastPointerTime = 0;

    const webs = [];

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas, {
      passive: true
    });

    const addWeb = (x, y) => {
      webs.push({
        x,
        y,
        age: 0,
        life: 48,
        radius: 22 + Math.random() * 10
      });

      if (webs.length > 9) {
        webs.shift();
      }

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(drawWebs);
      }
    };

    function drawWebs() {
      animationFrame = 0;

      ctx.clearRect(0, 0, width, height);

      for (let i = webs.length - 1; i >= 0; i--) {
        const web = webs[i];

        web.age++;

        const alpha = Math.max(0, 1 - web.age / web.life);

        const radius =
          web.radius * (0.75 + (web.age / web.life) * 0.8);

        ctx.save();
        ctx.translate(web.x, web.y);

        ctx.globalAlpha = alpha * 0.7;
        ctx.strokeStyle = "#e50925";
        ctx.lineWidth = 1;
        ctx.shadowColor = "#e50925";
        ctx.shadowBlur = 5;

        // Radial web lines
        for (let ray = 0; ray < 8; ray++) {
          const angle = (Math.PI * 2 * ray) / 8;

          ctx.beginPath();
          ctx.moveTo(0, 0);

          ctx.lineTo(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius
          );

          ctx.stroke();
        }

        // Web rings
        for (let ring = 1; ring <= 3; ring++) {
          const ringRadius = (radius * ring) / 3;

          ctx.beginPath();

          for (let ray = 0; ray <= 8; ray++) {
            const angle = (Math.PI * 2 * ray) / 8;

            const x = Math.cos(angle) * ringRadius;
            const y = Math.sin(angle) * ringRadius;

            if (ray === 0) {
              ctx.moveTo(x, y);
            } else {
              const middleAngle = angle - Math.PI / 8;

              ctx.quadraticCurveTo(
                Math.cos(middleAngle) * ringRadius * 0.91,
                Math.sin(middleAngle) * ringRadius * 0.91,
                x,
                y
              );
            }
          }

          ctx.stroke();
        }

        ctx.restore();

        if (web.age >= web.life) {
          webs.splice(i, 1);
        }
      }

      if (webs.length) {
        animationFrame = requestAnimationFrame(drawWebs);
      }
    }

    window.addEventListener(
      "pointermove",
      (event) => {
        const now = performance.now();

        if (now - lastPointerTime < 34) return;

        lastPointerTime = now;

        addWeb(event.clientX, event.clientY);
      },
      { passive: true }
    );
  })();


  // =========================================
  // 8. SPIDER-MAN FACE REVEAL
  // =========================================

  const character = document.getElementById("heroCharacterReveal");

  if (character) {

    function moveSpotlight(event) {
      const rect = character.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      character.style.setProperty("--spot-x", `${x}px`);
      character.style.setProperty("--spot-y", `${y}px`);
    }

    // Mouse enters character area
    character.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") {
        character.classList.add("is-active");
        moveSpotlight(event);
      }
    });

    // Spotlight follows cursor
    character.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "touch") {
        moveSpotlight(event);
      }
    });

    // Mouse leaves character
    character.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "touch") {
        character.classList.remove("is-active");
      }
    });

    // Touch support
    character.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") {
        moveSpotlight(event);
        character.classList.toggle("is-active");
      }
    });
  }


  // =========================================
  // 9. PAGE ENTRANCE REVEAL
  // =========================================

  const revealElements = document.querySelectorAll("[data-reveal]");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px"
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

});
