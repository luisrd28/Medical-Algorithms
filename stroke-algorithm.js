// Initialize elements
let history = []; // Add this at the TOP of your file
const step1 = document.getElementById('step1');
const thrombolysisCard = document.getElementById('thrombolysis-card');
const ctSection = document.getElementById('ct-section');
const thrombectomyResult = document.getElementById('thrombectomy-result');
const managementResult = document.getElementById('management-result');

function goBack() {
    if (history.length === 0) {
        window.location.href = 'browse.html'; // Exit if no steps left
        return;
    }

    const lastStep = history.pop(); // Get last step

    switch (lastStep) {
        case 'time-options':
            // Revert to initial time selection
            document.querySelectorAll('.time-option').forEach(opt => {
                opt.classList.remove('fade-out');
            });
            thrombolysisCard.classList.remove('active');
            ctSection.classList.remove('active');
            break;

        case 'ct-section':
            // Revert to thrombolysis step
            document.querySelectorAll('.vessel-btn').forEach(btn => {
                btn.classList.remove('fade-out');
            });
            thrombectomyResult.classList.remove('active');
            managementResult.classList.remove('active');
            break;
    }
}

// Handle time selection
function handleTimeOption(option) {
    if (option === 'lt4.5') {
        history.push('time-options'); {
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
