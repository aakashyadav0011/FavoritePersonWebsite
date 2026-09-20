document.addEventListener("DOMContentLoaded", () => {

    const openBtn = document.getElementById("openBtn");
    const content = document.getElementById("content");
    const hero = document.getElementById("hero");
    const music = document.getElementById("music");

    const message = `I wanted to make you something instead of simply saying “you are special.”

Because sometimes words feel too small for the people who genuinely matter.

You have a way of making ordinary moments feel memorable. Your smile, your little habits, the way you care, and simply the fact that you are there — all of it means more than I probably say.

So whenever you doubt how special you are, come back to this little page and remember:

Somewhere, someone is genuinely grateful that you exist. ❤️`;

    function typeText(text, element, speed = 32) {
        let i = 0;
        element.textContent = "";

        const timer = setInterval(() => {
            element.textContent += text.charAt(i++);

            if (i >= text.length) {
                clearInterval(timer);
            }
        }, speed);
    }

    openBtn.addEventListener("click", () => {

        hero.style.display = "none";
        content.classList.remove("hidden");

        // Start music after button click
        if (music) {
            music.play().catch(error => {
                console.log("Music could not autoplay:", error);
            });
        }

        setTimeout(() => {
            typeText(
                message,
                document.getElementById("typing")
            );
        }, 300);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createHearts(25);
    });

    document.getElementById("finalBtn").addEventListener("click", () => {

        document.getElementById("finalMessage").classList.add("show");

        document.getElementById("finalBtn").textContent = "❤️ For You";

        createHearts(45);
    });

    function createHearts(count = 1) {

        for (let i = 0; i < count; i++) {

            const h = document.createElement("div");

            h.className = "heart";

            h.textContent = ["❤️", "💗", "💕", "✨", "🌸"][
                Math.floor(Math.random() * 5)
                ];

            h.style.left = Math.random() * 100 + "%";

            h.style.fontSize =
                (12 + Math.random() * 22) + "px";

            h.style.animationDuration =
                (4 + Math.random() * 5) + "s";

            h.style.animationDelay =
                (Math.random() * 1.5) + "s";

            document.getElementById("hearts").appendChild(h);

            setTimeout(() => {
                h.remove();
            }, 10000);
        }
    }

    // Floating hearts continuously
    setInterval(() => {
        createHearts(1);
    }, 1200);

});