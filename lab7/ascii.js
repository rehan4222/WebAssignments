document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('text-area');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const animationSelect = document.getElementById('animation');
    const fontSizeSelect = document.getElementById('fontsize');
    const turboCheckbox = document.getElementById('turbo');
    
    let timer = null;
    let animationFrames = [];
    let currentFrame = 0;
    let delay = 250;
    let animationText = '';

    function startAnimation() {
        animationText = textarea.value;
        animationFrames = animationText.split('=====\n');
        currentFrame = 0;
        timer = setInterval(() => {
            textarea.value = animationFrames[currentFrame];
            currentFrame = (currentFrame + 1) % animationFrames.length;
        }, delay);

        startButton.disabled = true;
        stopButton.disabled = false;
        animationSelect.disabled = true;
    }

    function stopAnimation() {
        clearInterval(timer);
        timer = null;
        textarea.value = animationText;

        startButton.disabled = false;
        stopButton.disabled = true;
        animationSelect.disabled = false;
    }

    function changeAnimation() {
        const selectedAnimation = animationSelect.value;
        textarea.value = selectedAnimation === "Blank" ? "" : ANIMATIONS[selectedAnimation];
    }

    function changeFontSize() {
        textarea.style.fontSize = fontSizeSelect.value;
    }

    function changeSpeed() {
        delay = turboCheckbox.checked ? 50 : 250;
        if (timer !== null) {
            clearInterval(timer);
            startAnimation();
        }
    }

    startButton.addEventListener('click', startAnimation);
    stopButton.addEventListener('click', stopAnimation);
    animationSelect.addEventListener('change', changeAnimation);
    fontSizeSelect.addEventListener('change', changeFontSize);
    turboCheckbox.addEventListener('change', changeSpeed);
});
