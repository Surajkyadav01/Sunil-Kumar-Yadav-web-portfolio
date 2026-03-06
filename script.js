// 1️⃣ Theme toggle (Sun/Moon icon ke sath update kiya gaya)
function toggleTheme() {
  document.body.classList.toggle("light");
  
  let themeBtn = document.querySelector(".theme");
  // Agar light mode on hai toh Moon dikhaye, nahi toh Sun dikhaye
  if(document.body.classList.contains("light")) {
    themeBtn.innerText = "☀️";
  } else {
    themeBtn.innerText = "🌙";
  }
}

// 2️⃣ Animate skill bars on scroll
const skillSpans = document.querySelectorAll('.progress span');
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills');
  if(skillsSection) {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (sectionTop < screenHeight - 100) {
      skillSpans.forEach(span => {
        span.style.width = span.getAttribute('style');
      });
    }
  }
});

// 3️⃣ Visitor counter (continuous increment)
function VisitorCounter() {
  const counter = document.getElementById('visitorCount');
  if(!counter) return;
  let current = 100; // starting point
  counter.innerText = current;
  setInterval(() => {
    current += Math.floor(Math.random() * 3) + 1; // 1-2-3 increment
    counter.innerText = current;
  }, 2000);
}

// Fake Signup Form Logic (Aapka purana code theek karke rakha hai)
const fakeForm = document.getElementById('fakeSignupForm');
if(fakeForm) {
  fakeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.email.value;
    const status = document.getElementById('signupStatus');
    if(status) status.innerText = `🎉 Account created for ${email} (fake demo)`;
    this.reset(); 
  });
}

// **Run JS after HTML is loaded** (Visitor counter start karne ke liye)
window.addEventListener('DOMContentLoaded', () => {
  VisitorCounter(); // Naam theek kar diya gaya hai
});

// --- Send Message to WhatsApp Logic ---
function sendToWhatsApp(event) {
  event.preventDefault(); // Page ko refresh hone se rokenge
  
  // User ne jo form me bhara hai, use nikalna
  let name = document.getElementById('waName').value;
  let email = document.getElementById('waEmail').value;
  let subject = document.getElementById('waSubject').value;
  let message = document.getElementById('waMessage').value;
  
  // Ek mast sa WhatsApp message format banana
  let textMessage = "Hello Sunil,\n\n*New Portfolio Message* 🚀\n\n";
  textMessage += "*Name:* " + name + "\n";
  textMessage += "*Email:* " + email + "\n";
  textMessage += "*Subject:* " + subject + "\n";
  textMessage += "*Message:* " + message;
  
  // Text ko URL format me badalna
  let encodedMessage = encodeURIComponent(textMessage);
  
  // Aapka WhatsApp number yahan set kiya gaya hai (91 + 6393869405)
  let whatsappURL = "https://wa.me/916393869405?text=" + encodedMessage;
  
  // Naye tab me WhatsApp open karna
  window.open(whatsappURL, '_blank'); 
}