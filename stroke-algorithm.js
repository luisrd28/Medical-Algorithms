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
    history.push('time-options'); // Track step

    // Fade out unselected time options
    document.querySelectorAll('.time-option').forEach(opt => {
        const isSelected = opt.getAttribute('onclick').includes(`'${option}'`);
        if (!isSelected) opt.classList.add('fade-out');
    });

    // Handle pathway based on selection
    setTimeout(() => {
        if (option === 'lt4.5') {
            // Show thrombolysis card + CT section
            thrombolysisCard.classList.add('active');
            ctSection.classList.add('active');
        } else if (option === '4.5-24') {
            // Skip thrombolysis, show CT section directly
            ctSection.classList.add('active');
        }
        // Add 'gt24' logic later
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

// Image modal functions (unchanged)
function showImageModal(imagePath) { /* ... */ }
function closeModal() { /* ... */ }
