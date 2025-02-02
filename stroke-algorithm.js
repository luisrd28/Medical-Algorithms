let history = [];

function handleTimeOption(selectedOption) {
    const step1 = document.getElementById('step1');
    const thrombolysisCard = document.getElementById('thrombolysis-card');
    const imageButton = document.getElementById('image-button');
    const arrowIndicator = document.getElementById('arrow-indicator');
    const ctSection = document.getElementById('ct-scan-section');

    history.push('step1');
    document.getElementById('global-back-button').style.display = 'none';
    document.getElementById('step-back-button').style.display = 'block';

    step1.classList.add('slide-out');

    if (selectedOption === 'lt4.5') {
        setTimeout(() => {
            thrombolysisCard.classList.add('active');
            // Animate button/arrow after card appears
            setTimeout(() => {
                imageButton.classList.add('active');
                arrowIndicator.classList.add('active');
                ctSection.classList.add('active');
            }, 300);
        }, 500);
    }
}

function handleVesselOption(option) {
    const ctSection = document.getElementById('ct-scan-section');
    const thrombectomyResult = document.getElementById('thrombectomy-result');
    const managementResult = document.getElementById('management-result');

    ctSection.classList.remove('active');

    setTimeout(() => {
        if (option === 'present') {
            thrombectomyResult.classList.add('active');
        } else {
            managementResult.classList.add('active');
        }
    }, 300);
}

function showCriteria() {
    document.getElementById('criteria-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('criteria-modal').style.display = 'none';
}

function goBack() {
    if (history.length > 0) {
        const step1 = document.getElementById('step1');
        const thrombolysisCard = document.getElementById('thrombolysis-card');
        const imageButton = document.getElementById('image-button');
        const arrowIndicator = document.getElementById('arrow-indicator');
        const ctSection = document.getElementById('ct-scan-section');
        const thrombectomyResult = document.getElementById('thrombectomy-result');
        const managementResult = document.getElementById('management-result');

        history.pop();

        // Reset all elements
        step1.classList.remove('slide-out');
        thrombolysisCard.classList.remove('active');
        imageButton.classList.remove('active');
        arrowIndicator.classList.remove('active');
        ctSection.classList.remove('active');
        thrombectomyResult.classList.remove('active');
        managementResult.classList.remove('active');

        if (history.length === 0) {
            document.getElementById('global-back-button').style.display = 'block';
            document.getElementById('step-back-button').style.display = 'none';
        }
    }
}
