document.addEventListener("DOMContentLoaded", function () {

    /* ================= Smooth Scroll Effect ================= */

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {

            if (this.hash !== "") {
                e.preventDefault();

                const hash = this.hash;
                const target = document.querySelector(hash);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });
    });


    /* ================= Scroll Fade Animation ================= */

    const cards = document.querySelectorAll(".card, .stat-card, .team-card, .timeline-item");

    function fadeCards() {
        cards.forEach(card => {

            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < window.innerHeight - 50) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }

        });
    }

    window.addEventListener("scroll", fadeCards);
    fadeCards(); // Run once on load


    /* ================= EmailJS Initialization ================= */

    if (!window.emailjsInitialized) {
        emailjs.init("YOUR_PUBLIC_KEY");
        window.emailjsInitialized = true;
    }


    /* ================= Contact Form Submission ================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                from_name: this[0].value,
                from_email: this[1].value,
                message: this[2].value,
                to_email: "rsi2022001@iiita.ac.in"
            })
            .then(function () {
                alert("Message Sent Successfully");
                contactForm.reset();
            })
            .catch(function (error) {
                console.error("EmailJS Error:", error);
                alert("Failed to send message. Please try again.");
            });

        });
    }

});


/* ================= Back/Forward Cache Fix ================= */

window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        console.log("Page restored from cache");

        // Re-run animations if needed
        document.querySelectorAll(".card, .stat-card, .team-card, .timeline-item")
        .forEach(card => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        });
    }
});

/* ================= Navbar Scroll Effect ================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
