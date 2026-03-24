window.addEventListener("load", () => {
    let name = document.querySelector(".intro-name");
    let intro = document.querySelector(".intro-loader");

    if (!name || !intro) return;

    setTimeout(() => {
        name.style.opacity = "1";
        name.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        intro.style.transform = "translateY(-100%)";
    }, 2000);
});
