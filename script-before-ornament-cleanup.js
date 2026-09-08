const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const opened = nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            opened ? "true" : "false"
        );

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}
/* ==========================================================
   À PROPOS - positionnement dynamique de l'ornement
========================================================== */

(function () {

    function placeAboutOrnament() {

        if (window.innerWidth <= 850) return;

        const aboutSection = document.querySelector('#apropos');
        if (!aboutSection) return;

        const aboutContent = aboutSection.querySelector('.about-content');
        if (!aboutContent) return;

        const aboutButton = aboutContent.querySelector('.site-button, .about-button');
        if (!aboutButton) return;

        let ornament = aboutContent.querySelector('.about-ornament-ref');

        if (!ornament) {
            ornament = document.createElement('div');
            ornament.className = 'about-ornament-ref';
            ornament.innerHTML = '<span class="line"></span><span class="diamond"></span><span class="line"></span>';
            aboutContent.appendChild(ornament);
        }

        const contentRect = aboutContent.getBoundingClientRect();
        const buttonRect = aboutButton.getBoundingClientRect();

        const buttonBottomInside = buttonRect.bottom - contentRect.top;
        const remainingSpace = contentRect.height - buttonBottomInside;
        const ornamentCenter = buttonBottomInside + (remainingSpace / 2);

        ornament.style.top = ornamentCenter + 'px';
    }

    function safePlaceAboutOrnament() {
        requestAnimationFrame(function () {
            placeAboutOrnament();
        });
    }

    window.addEventListener('load', safePlaceAboutOrnament);
    window.addEventListener('resize', safePlaceAboutOrnament);
    document.addEventListener('DOMContentLoaded', safePlaceAboutOrnament);

})();

/* ==========================================================
   POSITION FINALE ORNEMENT À PROPOS
========================================================== */

(function () {

    function positionAboutOrnamentFinal() {

        if (window.innerWidth <= 850) return;

        const section = document.querySelector('#apropos');
        if (!section) return;

        const button = section.querySelector('.about-button, .site-button');
        if (!button) return;

        let ornament = section.querySelector('.about-ornament-ref');
        if (!ornament) return;

        /* L'ornement devient enfant direct de la section */
        if (ornament.parentElement !== section) {
            section.appendChild(ornament);
        }

        const sectionRect = section.getBoundingClientRect();
        const buttonRect  = button.getBoundingClientRect();

        /* Milieu exact entre bas du bouton et bas de la section */
        const buttonBottom = buttonRect.bottom - sectionRect.top;
        const sectionBottom = sectionRect.height;

        const middle =
            buttonBottom +
            ((sectionBottom - buttonBottom) / 2);

        ornament.style.top = middle + 'px';
    }

    window.addEventListener('load', positionAboutOrnamentFinal);
    window.addEventListener('resize', positionAboutOrnamentFinal);

    document.addEventListener(
        'DOMContentLoaded',
        positionAboutOrnamentFinal
    );

    setTimeout(positionAboutOrnamentFinal, 150);

})();
