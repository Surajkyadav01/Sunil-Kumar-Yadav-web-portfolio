// Certificate Popup Logic

function openModal(src) {

  document.getElementById("certModal").style.display = "block";

  document.getElementById("fullCertImg").src = src;

}

// 1️⃣ Theme toggle

function toggleTheme() {

  document.body.classList.toggle("light");

  let themeBtn = document.querySelector(".theme");

  if (document.body.classList.contains("light")) {

    themeBtn.innerText = "☀️";

  } else {

    themeBtn.innerText = "🌙";

  }

}

// 2️⃣ Animate skill bars on scroll

const skillSpans = document.querySelectorAll('.progress span');

window.addEventListener('scroll', () => {

  const skillsSection = document.querySelector('.skills');

  if (skillsSection) {

    const sectionTop = skillsSection.getBoundingClientRect().top;

    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {

      skillSpans.forEach(span => {

        span.style.width = span.getAttribute('data-width');

      });

    }

  }

});

// --- Live Visitor Counter Logic (1 se 100 tak fir restart) ---

let count = 1;

function startLiveCounter() {

  const counterDisplay = document.getElementById('visitorCount');

  if (!counterDisplay) return;

  counterDisplay.innerText = count;

  setInterval(() => {

    count++;

    if (count > 100) {

      count = 1; // 100 ke baad fir se 1

    }

    counterDisplay.innerText = count;

  }, 2000); // har 2 second me badhega

}

// Signup Form Logic

const Form = document.getElementById('SignupForm');

if (Form) {

  Form.addEventListener('submit', function (e) {

    e.preventDefault();

    const email = this.email.value;

    const status = document.getElementById('signupStatus');

    if (status) {

      status.innerText = `🎉 Account created for ${email} (demo)`;

    }

    this.reset();

  });

}

// Run JS after HTML loads

window.addEventListener('DOMContentLoaded', () => {

  // Visitor Counter start

  startLiveCounter();

  // --- Modal Popup Logic ---

  const modal = document.getElementById("certModal");

  const modalImg = document.getElementById("fullCertImg");

  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll('#certificates img').forEach(img => {

    img.style.cursor = "pointer";

    img.onclick = function () {

      modal.style.display = "block";

      modalImg.src = this.src;

    }

  });

  if (closeBtn) {

    closeBtn.onclick = function () {

      modal.style.display = "none";

    }

  }

  window.onclick = function (event) {

    if (event.target == modal) {

      modal.style.display = "none";

    }

  }

});

// --- Send Message to WhatsApp Logic ---

function sendToWhatsApp(event) {

  event.preventDefault();

  let name = document.getElementById('waName').value;

  let email = document.getElementById('waEmail').value;

  let subject = document.getElementById('waSubject').value;

  let message = document.getElementById('waMessage').value;

  let textMessage = "Hello Sunil,\n\n*New Portfolio Message* 🚀\n\n";

  textMessage += "*Name:* " + name + "\n";

  textMessage += "*Email:* " + email + "\n";

  textMessage += "*Subject:* " + subject + "\n";

  textMessage += "*Message:* " + message;

  let encodedMessage = encodeURIComponent(textMessage);

  let whatsappURL = "https://wa.me/916393869405?text=" + encodedMessage;

  window.open(whatsappURL, '_blank');

}  

// --- NEW: Aquarium (फिश टैंक) एनीमेशन लॉजिक ---
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('toolsAquarium');
    if (!container) return; 
    const logos = container.querySelectorAll('.tool-logo');

    // एनीमेशन की गति
    const speed = 1.2; 

    logos.forEach(logo => {
        // शुरुआती स्थिति
        let state = {
            x: Math.random() * (container.clientWidth - 60),
            y: Math.random() * (container.clientHeight - 60),
            dx: (Math.random() > 0.5 ? 1 : -1) * speed, 
            dy: (Math.random() > 0.5 ? 1 : -1) * speed, 
            width: 55, 
            height: 55
        };

        function animate() {
            if (!container.clientWidth) {
                requestAnimationFrame(animate);
                return;
            }

            let maxX = container.clientWidth - state.width;
            let maxY = container.clientHeight - state.height;

            // दीवार से टकराकर मुड़ने का एकदम सही लॉजिक (<= और >=)
            if (state.x <= 0 || state.x >= maxX) {
                state.dx = -state.dx; 
            }
            if (state.y <= 0 || state.y >= maxY) {
                state.dy = -state.dy; 
            }

            state.x += state.dx;
            state.y += state.dy;

            // सेफ्टी लॉक (ताकि बॉक्स के बाहर न जाएं और न ही कोनों में फंसें)
            if(state.x < 0) state.x = 0;
            if(state.y < 0) state.y = 0;
            if(state.x > maxX) state.x = maxX;
            if(state.y > maxY) state.y = maxY;

            logo.style.left = `${state.x}px`;
            logo.style.top = `${state.y}px`;

            requestAnimationFrame(animate); 
        }

        animate(); 
    });
});
