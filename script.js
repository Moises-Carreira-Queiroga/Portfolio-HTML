const bouton = document.getElementById("theme-toggle");
const html = document.documentElement;
console.log(bouton);
bouton.addEventListener("click", function () {
    console.log("clic !");
});
bouton.addEventListener("click", function () {
    if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    } else {
    html.setAttribute("data-theme", "dark");
    }
});