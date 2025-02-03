// Navigation history tracker
let history = [];

// Element references
const step1 = document.getElementById('step1');
const thrombolysisCard = document.getElementById('thrombolysis-card');
const ctSection = document.getElementById('ct-section');
const thrombectomyResult = document.getElementById('thrombectomy-result');
const managementResult = document.getElementById('management-result');
const pathwayContainer = document.getElementById('pathway-container'); // Added

// Handle time since onset selection
function handleTimeOption(option) {
  history.push('time-options');

  // Hide unselected time options
  document.querySelectorAll('.time-option').forEach(opt => {
    const isSelected = opt.getAttribute('onclick').includes(`'${option}'`);
    if (!isSelected) opt.classList.add('fade-out');
  });

  // Show appropriate pathway
  setTimeout(() => {
    pathwayContainer.classList.remove('no-thrombolysis'); // Reset
    
    if (option === 'lt4.5') {
      // Show thrombolysis card + CT section
      thrombolysisCard.classList.add('active');
      ctSection.classList.add('active');
    } else if (option === '4.5-24') {
      // Skip thrombolysis card
      pathwayContainer.classList.add('no-thrombolysis');
      ctSection.classList.add('active');
    }
    // Add 'gt24' logic later
  }, 300);
}

// Handle vessel occlusion choice
function handleVesselOption(selectedOption) {
  history.push('ct-section');
  const vesselButtons = document.querySelectorAll('.vessel-btn');
  
  // Hide unselected button
  vesselButtons.forEach(btn => {
    if (!btn.innerText.toLowerCase().includes(selectedOption)) {
      btn.classList.add('fade-out');
    }
  });

  // Show result
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
    window.location.href = 'browse.html';
    return;
  }

  const lastStep = history.pop();
  
  switch(lastStep) {
    case 'time-options':
      // Reset to initial state
      document.querySelectorAll('.time-option').forEach(opt => {
        opt.classList.remove('fade-out');
      });
      thrombolysisCard.classList.remove('active');
      ctSection.classList.remove('active');
      pathwayContainer.classList.remove('no-thrombolysis'); // Reset container
      break;
      
    case 'ct-section':
      // Reset to CT scan step
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
