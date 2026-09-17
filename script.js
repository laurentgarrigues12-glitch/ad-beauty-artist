document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.menu-toggle'),n=document.querySelector('.site-header nav');if(!b||!n)return;const close=()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false')};b.addEventListener('click',()=>{const open=n.classList.toggle('open');b.setAttribute('aria-expanded',String(open))});n.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})});

// Logo décoratif dans chaque section
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("main > section").forEach((section, index) => {
        if (section.querySelector(".section-logo")) return;

        const logo = document.createElement("img");
        logo.src = "ad.png";
        logo.alt = "";
        logo.className = "section-logo section-logo-" + (index + 1);

        section.appendChild(logo);
    });
});
