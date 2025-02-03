// Navigation history tracker
let history = [];

// Element references
const step1 = document.getElementById('step1');
const thrombolysisCard = document.getElementById('thrombolysis-card');
const ctSection = document.getElementById('ct-section');
const thrombectomyResult = document.getElementById('thrombectomy-result');
const managementResult = document.getElementById('management-result');

// Handle time since onset selection
function handleTimeOption(option) {
    if (option === 'lt4.5') {
        history.push('time-options'); // Track step
        
        // Hide unselected options
        document.querySelectorAll('.time-option:not(:first-child)').forEach(opt => {
            opt.classList.add('fade-out');
        });

        // Show thrombolysis card and CT section
        setTimeout(() => {
            thrombolysisCard.classList.add('active');
            ctSection.classList.add('active');
        }, 300);
    }
    // Add logic for other options (4.5-24hrs, >24hrs) here
}

// Handle vessel occlusion choice
function handleVesselOption(selectedOption) {
    history.push('ct-section'); // Track step
    
    const vesselButtons = document.querySelectorAll('.vessel-btn');
    
    // Hide unselected button
    vesselButtons.forEach(btn => {
        if (!btn.innerText.toLowerCase().includes(selectedOption)) {
            btn.classList.add('fade-out');
        }
    });

    // Show treatment result
    setTimeout(() => {
        if (selectedOption === 'present') {
            thrombectomyResult.classList.add('active');
        } else {
            managementResult.classList.add('active');
        }
    }, 300);
}

// Back button functionality
function goBack() {
    if (history.length === 0) {
        window.location.href = 'browse.html'; // Exit to browse page
        return;
    }

    const lastStep = history.pop();
    
    switch(lastStep) {
        case 'time-options':
            // Revert to initial time selection
            document.querySelectorAll('.time-option').forEach(opt => {
                opt.classList.remove('fade-out');
            });
            thrombolysisCard.classList.remove('active');
            ctSection.classList.remove('active');
            break;
            
        case 'ct-section':
            // Revert to CT scan step
            document.querySelectorAll('.vessel-btn').forEach(btn => {
                btn.classList.remove('fade-out');
            });
            thrombectomyResult.classList.remove('active');
            managementResult.classList.remove('active');
            break;
    }
}

// Image modal functions (keep these unchanged)
function showImageModal(imagePath) {
    document.getElementById('modal-image').src = imagePath;
    document.getElementById('image-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}
