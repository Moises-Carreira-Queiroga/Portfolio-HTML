const bouton = document.getElementById("theme-toggle");
const html = document.documentElement;

function majIcone() {
    if (html.getAttribute("data-theme") === "dark") {
    bouton.textContent = "🌙";
    } else {
    bouton.textContent = "☀️";
    }
}

const themeSauvegarde = localStorage.getItem("theme");
if (themeSauvegarde === "dark") {
    html.setAttribute("data-theme", "dark");
}
majIcone();

bouton.addEventListener("click", function () {
    if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    }
    majIcone();
});

const elements = document.querySelectorAll("h2, .projects-grid, .skills-grid, .contact-links, #contact p");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
    if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    }
    });
}, { threshold: 0.15 });

elements.forEach(function (el) {
    el.classList.add("reveal");
    observer.observe(el);
});

const sections = document.querySelectorAll("section");
const liens = document.querySelectorAll(".menu a");

const observateurMenu = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
    if (entry.isIntersecting) {
        liens.forEach(function (lien) {
        lien.classList.remove("active");
        if (lien.getAttribute("href") === "#" + entry.target.id) {
            lien.classList.add("active");
        }
        });
    }
    });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(function (section) {
    observateurMenu.observe(section);
});