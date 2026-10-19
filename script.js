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