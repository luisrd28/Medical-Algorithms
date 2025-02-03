// Initialize elements
const step1 = document.getElementById('step1');
const thrombolysisCard = document.getElementById('thrombolysis-card');
const ctSection = document.getElementById('ct-section');
const thrombectomyResult = document.getElementById('thrombectomy-result');
const managementResult = document.getElementById('management-result');

// Handle time selection
function handleTimeOption(option) {
    if (option === 'lt4.5') {
        // Fade out unselected time options
        document.querySelectorAll('.time-option:not(:first-child)').forEach(opt => {
            opt.classList.add('fade-out');
        });

        // Show thrombolysis card after 300ms
        setTimeout(() => {
            thrombolysisCard.classList.add('active');
        }, 300);

        // Show CT section after 600ms
        setTimeout(() => {
            ctSection.classList.add('active');
        }, 600);
    }
}

// Handle vessel occlusion choice
function handleVesselOption(selectedOption) {
    const vesselButtons = document.querySelectorAll('.vessel-btn');
    
    // Hide unselected button
    vesselButtons.forEach(btn => {
        if (!btn.innerText.toLowerCase().includes(selectedOption)) {
            btn.classList.add('fade-out');
        }
    });

    // Show result after 300ms (time for button to fade out)
    setTimeout(() => {
        if (selectedOption === 'present') {
            thrombectomyResult.classList.add('active');
        } else {
            managementResult.classList.add('active');
        }
    }, 300);
}

// Image modal functions (leave these as-is if you already have them)
function showImageModal(imagePath) {
    document.getElementById('modal-image').src = imagePath;
    document.getElementById('image-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}
