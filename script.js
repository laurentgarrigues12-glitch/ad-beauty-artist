document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".nav");

    if (!menuButton || !nav) {
        return;
    }

    /* ------------------------------------------------------
       ÉTAT INITIAL
       Le menu mobile doit toujours être fermé au chargement
    ------------------------------------------------------ */

    nav.classList.remove("open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );


    /* ------------------------------------------------------
       OUVERTURE / FERMETURE AVEC LE BOUTON HAMBURGER
    ------------------------------------------------------ */

    menuButton.addEventListener("click", () => {

        const opened = nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            opened ? "true" : "false"
        );

    });


    /* ------------------------------------------------------
       FERMETURE APRÈS CLIC SUR UN LIEN
    ------------------------------------------------------ */

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* ------------------------------------------------------
       FERMETURE AVEC LA TOUCHE ÉCHAP
    ------------------------------------------------------ */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* ------------------------------------------------------
       RETOUR DESKTOP
       Empêche le menu mobile de rester ouvert
    ------------------------------------------------------ */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});