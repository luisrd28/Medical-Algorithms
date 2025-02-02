function handleTimeOption(selectedOption) {
    const step1 = document.getElementById('step1');
    const thrombolysisCard = document.getElementById('thrombolysis-card');

    // Slide out the entire step
    step1.classList.add('slide-out');

    if (selectedOption === 'lt4.5') {
        setTimeout(() => {
            thrombolysisCard.classList.add('active');
        }, 500);
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
