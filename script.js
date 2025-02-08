// script.js
document.getElementById('revealProposal').addEventListener('click', function() {
    const message = document.getElementById('proposalMessage');
    message.style.display = 'block';
    
    // Simple fade-in effect
    message.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
      if (opacity >= 1) clearInterval(fadeIn);
      opacity += 0.05;
      message.style.opacity = opacity;
    }, 50);
  });
  