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
