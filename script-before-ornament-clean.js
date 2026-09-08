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
(function () {

    function placeAboutOrnament() {

        if (window.innerWidth <= 850) return;

        const section = document.querySelector('#apropos');

        const content = section?.querySelector('.about-content');
        const button = section?.querySelector('.about-button');
        const image = section?.querySelector('.about-image');
        const ornament = section?.querySelector('.about-ornament-ref');

        if (!content || !button || !image || !ornament) return;

        const contentRect = content.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();

        const middle =
            buttonRect.bottom +
            ((imageRect.bottom - buttonRect.bottom) / 2);

        ornament.style.top =
            (middle - contentRect.top) + 'px';
    }

    window.addEventListener('load', placeAboutOrnament);
    window.addEventListener('resize', placeAboutOrnament);

    setTimeout(placeAboutOrnament, 100);

})();

(function () {

    function fixAboutOrnamentPosition() {

        if (window.innerWidth <= 850) return;

        const section = document.querySelector('#apropos');
        if (!section) return;

        const content = section.querySelector('.about-content');
        const image = section.querySelector('.about-image');
        const button = section.querySelector('.about-button');
        const ornament = section.querySelector('.about-ornament-ref');

        if (!content || !image || !button || !ornament) return;

        const contentRect = content.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const middleViewport =
            buttonRect.bottom +
            ((imageRect.bottom - buttonRect.bottom) / 2);

        const middleInsideContent =
            middleViewport - contentRect.top;

        content.style.setProperty(
            '--about-ornament-top',
            middleInsideContent + 'px'
        );
    }

    window.addEventListener('load', fixAboutOrnamentPosition);
    window.addEventListener('resize', fixAboutOrnamentPosition);

    document.addEventListener(
        'DOMContentLoaded',
        fixAboutOrnamentPosition
    );

    setTimeout(fixAboutOrnamentPosition, 250);

})();
