// ==========================================
// 3D PRINTING MEETS mRNA
// Professional Website JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // Dynamic Copyright Year
    // -----------------------------
    const year = document.querySelector("footer p:last-child");

    if (year) {
        year.innerHTML =
            `© ${new Date().getFullYear()} Educational Scientific Project`;
    }


    // -----------------------------
    // Smooth Navigation
    // -----------------------------
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // -----------------------------
    // Scroll Reveal Animation
    // -----------------------------
    const revealElements = document.querySelectorAll(
        ".card, .step, .feature-box, .section-title"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    // -----------------------------
    // Navbar Shadow on Scroll
    // -----------------------------
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.12)";

        } else {

            navbar.style.boxShadow =
                "0 3px 15px rgba(0,0,0,0.08)";

        }

    });


    // -----------------------------
    // Interactive Technology Cards
    // -----------------------------
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });


    // -----------------------------
    // 3D DNA Animation
    // -----------------------------
    const dna = document.querySelector(".dna");

    if (dna) {

        let rotation = 25;

        function animateDNA() {

            rotation += 0.3;

            dna.style.transform =
                `rotate(${rotation}deg)`;

            requestAnimationFrame(animateDNA);

        }

        animateDNA();

    }


    // -----------------------------
    // Hero Button Interaction
    // -----------------------------
    const exploreButton =
        document.querySelector('a[href="#technology"]');

    if (exploreButton) {

        exploreButton.addEventListener("click", () => {

            console.log(
                "Exploring 3D Printing + mRNA Technology"
            );

        });

    }


    // -----------------------------
    // Scientific Console Message
    // -----------------------------
    console.log(
        "3D Printing Meets mRNA | Advanced Drug Delivery"
    );

});