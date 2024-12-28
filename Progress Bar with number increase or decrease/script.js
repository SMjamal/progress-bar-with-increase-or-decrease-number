let progressBar = document.getElementById('progressBar');
let percentageText = document.getElementById('percentageText');
let progress = 0;
let increaseSpeed = 1; // Change this value to control the speed of increase (1% per interval)

function updateProgressBar() {
    if (progress >= 80) {
        increaseSpeed = -1;  // Reverse direction when it reaches 100%
    } else if (progress <= 0) {
        increaseSpeed = 1;  // Reverse direction when it reaches 0%
    }

    progress += increaseSpeed;

    // Update progress bar width and percentage text
    progressBar.style.width = progress + '%';
    percentageText.textContent = progress + '%';
}

// Call the updateProgressBar function every 100ms to animate the progress
setInterval(updateProgressBar, 100);

// second start


let progressBarA = document.getElementById('progressBarA');
let percentageTextA = document.getElementById('percentageTextA');
let progressA = 0;
let increaseSpeedA = 1; // Change this value to control the speed of increase (1% per interval)

function updateProgressBarA() {
    if (progressA >= 90) {
        increaseSpeedA = -1;  // Reverse direction when it reaches 100%
    } else if (progressA <= 0) {
        increaseSpeedA = 1;  // Reverse direction when it reaches 0%
    }

    progressA += increaseSpeedA;

    // Update progress bar width and percentage text
    progressBarA.style.width = progressA + '%';
    percentageTextA.textContent = progressA + '%';
}

// Call the updateProgressBar function every 100ms to animate the progress
setInterval(updateProgressBarA, 100);





