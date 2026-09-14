// ZEYAD STORE - Soft Premium Click

let audioContext = null;

function playSelectionSound() {

    try {

        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const now = audioContext.currentTime;

        // النغمة الناعمة
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(780, now);
        oscillator.frequency.exponentialRampToValueAtTime(
            620,
            now + 0.09
        );

        // دخول وخروج ناعم للصوت
        gain.gain.setValueAtTime(0.0001, now);

        gain.gain.exponentialRampToValueAtTime(
            0.10,
            now + 0.008
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + 0.12
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(now);
        oscillator.stop(now + 0.13);

    } catch (error) {
        console.log("Selection sound error:", error);
    }
}


// تشغيل الصوت عند الضغط على الاختيارات
document.addEventListener("pointerdown", function (event) {

    const target = event.target.closest(
        "button, a, select, input[type='button'], input[type='submit'], .game-card, .card"
    );

    if (!target) return;

    playSelectionSound();

});