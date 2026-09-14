/* =========================================
   ZEYAD STORE — LOADING ENGINE
   ========================================= */

(function () {

    function createLoadingScreen() {

        if (document.getElementById("zeyad-loading-screen")) {
            return;
        }

        const screen = document.createElement("div");

        screen.id = "zeyad-loading-screen";


        /* =================================
           الاسم
           ================================= */

        const logo = document.createElement("div");

        logo.className = "zeyad-loading-logo";


        /* =================================
           شريط التحميل
           ================================= */

        const bar = document.createElement("div");

        bar.className = "zeyad-loading-bar";


        screen.appendChild(logo);

        screen.appendChild(bar);

        document.body.appendChild(screen);


        /* =================================
           ZEYAD STORE — حرف حرف
           ================================= */

        const text = "ZEYAD STORE";


        [...text].forEach(function (character, index) {

            const letter = document.createElement("span");

            letter.className = "zeyad-letter";

            letter.textContent =
                character === " "
                    ? "\u00A0"
                    : character;

            letter.style.animationDelay =
                (index * 0.075) + "s";

            logo.appendChild(letter);

        });


        /* =================================
           مدة اللودينج — 3 ثواني
           ================================= */

        setTimeout(function () {

            screen.classList.add(
                "zeyad-loading-hide"
            );


            setTimeout(function () {

                if (screen.parentNode) {

                    screen.remove();

                }

            }, 300);

        }, 3000);

    }


    /* =================================
       تشغيل عند دخول الصفحة
       ================================= */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            createLoadingScreen
        );

    } else {

        createLoadingScreen();

    }


    /* =================================
       متاح للاستخدام لاحقًا
       ================================= */

    window.ZeyadLoading = {

        show: createLoadingScreen

    };

})();