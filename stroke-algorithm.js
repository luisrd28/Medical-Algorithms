// Navigation history tracker
let history = [];

// Element references
const step1 = document.getElementById('step1');
const thrombolysisCard = document.getElementById('thrombolysis-card');
const ctSection = document.getElementById('ct-section');
const thrombectomyResult = document.getElementById('thrombectomy-result');
const managementResult = document.getElementById('management-result');

// Handle time selection
function handleTimeOption(option) {
    history.push('time-options');

    document.querySelectorAll('.time-option').forEach(opt => {
        const isSelected = opt.getAttribute('onclick').includes(`'${option}'`);
        if (!isSelected) opt.classList.add('fade-out');
    });

    setTimeout(() => {
        if (option === 'lt4.5') {
            thrombolysisCard.classList.add('active');
            ctSection.classList.add('active');
        } else if (option === '4.5-24') {
            // ====== ADD THIS ======
            ctSection.style.marginTop = '0'; // Remove default spacing
            ctSection.classList.add('active');
            // ======================
        }
    }, 300);
}

// Handle vessel occlusion choice (unchanged)
function handleVesselOption(selectedOption) {
    history.push('ct-section');
    const vesselButtons = document.querySelectorAll('.vessel-btn');
    
    vesselButtons.forEach(btn => {
        if (!btn.innerText.toLowerCase().includes(selectedOption)) {
            btn.classList.add('fade-out');
        }
    });

    setTimeout(() => {
        if (selectedOption === 'present') {
            thrombectomyResult.classList.add('active');
        } else {
            managementResult.classList.add('active');
        }
    }, 300);
}

// Back button logic (unchanged)
function goBack() {
    if (history.length === 0) {
        window.location.href = 'browse.html';
        return;
    }

    const lastStep = history.pop();
    
    switch(lastStep) {
        case 'time-options':
            document.querySelectorAll('.time-option').forEach(opt => {
                opt.classList.remove('fade-out');
            });
            thrombolysisCard.classList.remove('active');
            ctSection.classList.remove('active');
            // ====== ADD THIS ======
            ctSection.style.marginTop = ''; // Reset to CSS default
            // ======================
            break;
            
        case 'ct-section':
            document.querySelectorAll('.vessel-btn').forEach(btn => {
                btn.classList.remove('fade-out');
            });
            thrombectomyResult.classList.remove('active');
            managementResult.classList.remove('active');
            break;
    }
}


// Image Modal Functions (add these if missing)
function showImageModal(imagePath) {
    const modalImage = document.getElementById('modal-image');
    const imageModal = document.getElementById('image-modal');
    
    modalImage.src = imagePath; // Set the image source
    imageModal.style.display = 'block'; // Show the modal
}

function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}
