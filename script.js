const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
/* ========================================
   PRELOADER
======================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("loaded");

    }, 2200);

});
/* =========================================================
   COLDIUS CINEMATIC PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");


    if (!preloader) return;


    /*
       Give the logo time to establish itself
       before the cinematic zoom begins.
    */

    setTimeout(() => {

        preloader.classList.add("is-zooming");

    }, 1800);


    /*
       Remove the preloader after
       the zoom has completed.
    */

    setTimeout(() => {

        preloader.classList.add("finished");

    }, 3550);


});
