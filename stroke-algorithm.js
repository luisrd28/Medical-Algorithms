function handleTimeOption(selectedOption) {
    const options = document.querySelectorAll('.time-option');
    const thrombolysisCard = document.getElementById('thrombolysis-card');

    // Fade out unselected options
    options.forEach(option => {
        if (option.innerText.toLowerCase() !== selectedOption.replace(/[0-9.]/g, '')) {
            option.classList.add('fade-out');
        }
    });

    // Slide in thrombolysis card (only for "Less than 4.5 hrs")
    if (selectedOption === 'lt4.5') {
        setTimeout(() => {
            thrombolysisCard.classList.add('active');
        }, 300); // Wait for fade-out animation
    }
}

function showCriteria() {
    const modal = document.getElementById('criteria-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('criteria-modal');
    modal.style.display = 'none';
}
