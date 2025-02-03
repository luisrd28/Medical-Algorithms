// Initialize
let currentStep = 1;
const step1 = document.getElementById('step1');
const thrombolysisCard = document.getElementById('thrombolysis-card');
const ctSection = document.getElementById('ct-section');
const thrombectomyResult = document.getElementById('thrombectomy-result');
const managementResult = document.getElementById('management-result');

// Handle time selection
function handleVesselOption(selectedOption) {
    const vesselButtons = document.querySelectorAll('.vessel-btn');
    const ctText = document.querySelector('.ct-text');

    // Hide unselected buttons
    vesselButtons.forEach(btn => {
        if (btn.innerText.toLowerCase() !== selectedOption) {
            btn.classList.add('fade-out');
        }
    });

    // Show result based on selection
    setTimeout(() => {
        if (selectedOption === 'present') {
            thrombectomyResult.classList.add('active');
        } else {
            managementResult.classList.add('active');
        }
    }, 300);
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
