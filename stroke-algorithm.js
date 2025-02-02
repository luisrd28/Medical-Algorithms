// Initialize
let currentStep = 1;
const step1 = document.getElementById('step1');
const thrombolysisCard = document.getElementById('thrombolysis-card');
const ctSection = document.getElementById('ct-section');
const thrombectomyResult = document.getElementById('thrombectomy-result');
const managementResult = document.getElementById('management-result');

// Handle time selection
function handleTimeOption(option) {
    if (option === 'lt4.5') {
        // Fade out and collapse unselected options
        document.querySelectorAll('.time-option:not(:first-child)').forEach(opt => {
            opt.classList.add('fade-out');
        });

        // Wait for fade-out animation to finish before sliding in the card
        setTimeout(() => {
            thrombolysisCard.classList.add('active');
        }, 300); // Match CSS transition duration (0.3s)
    }
}

// Handle vessel occlusion choice
function handleVesselOption(option) {
    ctSection.classList.remove('active');
    
    setTimeout(() => {
        if (option === 'present') {
            thrombectomyResult.classList.add('active');
        } else {
            managementResult.classList.add('active');
        }
    }, 300);
}

// Image modal
function showImageModal(imagePath) {
    document.getElementById('modal-image').src = imagePath;
    document.getElementById('image-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}
