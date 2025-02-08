document.getElementById('revealProposal').addEventListener('click', function() {
  const message = document.getElementById('proposalMessage');
  message.style.display = 'block';

  // Fade-in effect
  setTimeout(() => {
      message.style.opacity = 1;
  }, 50);
});


document.querySelectorAll('.memoryBtn').forEach(button => {
  button.addEventListener('click', function() {
      const imageSrc = this.getAttribute('data-image');
      const text = this.getAttribute('data-text');

      document.getElementById('memoryImage').src = imageSrc;
      document.getElementById('memoryText').textContent = text;
      document.getElementById('memoryDisplay').style.display = "block";
  });
});


document.querySelectorAll('.memoryBtn').forEach(button => {
  button.addEventListener('click', function() {
      const imageSrc = this.getAttribute('data-image');
      const text = this.getAttribute('data-text');
      
      // Set the content
      document.getElementById('memoryImage').src = imageSrc;
      document.getElementById('memoryText').textContent = text;
      
      // Get the display container and show it
      const memoryDisplay = document.getElementById('memoryDisplay');
      memoryDisplay.style.display = "block";
      
      // Trigger fade-in effect
      setTimeout(() => {
          memoryDisplay.style.opacity = "1";
      }, 50);
  });
});


// Fade in sections as they scroll into view
const fadeSections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

fadeSections.forEach(section => {
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  const revealProposalBtn = document.getElementById("revealProposal");
  const proposalMessage = document.getElementById("proposalMessage");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  // Create a GIF container dynamically
  const gifContainer = document.createElement("div");
  gifContainer.style.display = "none";
  gifContainer.style.marginTop = "20px";
  
  const proposalGif = document.createElement("img");
  proposalGif.src = "images/kidGif.gif"; // Ensure this image exists in your project
  proposalGif.alt = "Happy Proposal GIF";
  proposalGif.width = 300;
  
  gifContainer.appendChild(proposalGif);
  proposalMessage.appendChild(gifContainer); // Attach below Yes/No buttons

  // Reveal proposal section on button click
  revealProposalBtn.addEventListener("click", function () {
      proposalMessage.style.display = "block";
      proposalMessage.style.opacity = "1";
  });

  // Show GIF when "Yes" is clicked
  yesBtn.addEventListener("click", function () {
      gifContainer.style.display = "block";
  });

  // Handle "No" button click
  noBtn.addEventListener("click", function () {
      alert("Oh no! Maybe someday? ❤️");
  });
});