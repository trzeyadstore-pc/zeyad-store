// ZEYAD STORE - Startup Sound

let startupAudioContext = null;

function playStartupSound() {

    try {

        if (!startupAudioContext) {
            startupAudioContext = new (
                window.AudioContext || window.webkitAudioContext
            )();
        }

        if (startupAudioContext.state === "suspended") {
            startupAudioContext.resume();
        }

        const now = startupAudioContext.currentTime;

        // النغمة الأساسية
        const oscillator = startupAudioContext.createOscillator();
        const gain = startupAudioContext.createGain();

        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(420, now);

        oscillator.frequency.exponentialRampToValueAtTime(
            760,
            now + 0.16
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            520,
            now + 0.32
        );

        // دخول وخروج ناعم
        gain.gain.setValueAtTime(0.0001, now);

        gain.gain.exponentialRampToValueAtTime(
            0.16,
            now + 0.025
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + 0.38
        );

        oscillator.connect(gain);
        gain.connect(startupAudioContext.destination);

        oscillator.start(now);
        oscillator.stop(now + 0.4);

    } catch (error) {
        console.log("Startup sound error:", error);
    }

}


// تشغيل الصوت عند الضغط على "دخول إلى المتجر" فقط
document.addEventListener("pointerdown", function (event) {

    const button = event.target.closest(".store-button");

    if (!button) return;

    playStartupSound();

});