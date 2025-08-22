setTimeout(() => {
  document.getElementById('topRightImg').classList.add('show');
}, 2000);
setTimeout(() => {
  const letsGo = document.getElementById('letsGoText');
  letsGo.classList.add('pop');
}, 5000);

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark-theme');
}

function handleSignUp() {
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();

  if (!email || !password || !/^\d{10}$/.test(phone)) {
    alert("Please enter valid credentials including a 10-digit phone number.");
    return false;
  }

  // Generate 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  sessionStorage.setItem('brochain_otp', otp);
  alert('Your OTP is: ' + otp);
  window.location.href = 'otp.html';
  return false; // Prevent default form submission if used in a form
}

if (document.getElementById('otpCode')) {
  document.getElementById('otpCode').textContent = sessionStorage.getItem('brochain_otp') || '----';
}

function verifyOtp() {
  const userOtp = document.getElementById('userOtp').value.trim();
  const realOtp = sessionStorage.getItem('brochain_otp');
  const result = document.getElementById('otpResult');
  if (userOtp === realOtp) {
    result.textContent = "OTP Verified! 🎉";
    result.style.color = "#FFD600";
  } else {
    result.textContent = "Incorrect OTP. Try again.";
    result.style.color = "#ff4444";
  }
}
// Hamburger Sidebar Toggle
const sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');

sidebarOpenBtn.addEventListener('click', () => {
  sidebarMenu.classList.add('active');
  sidebarBackdrop.classList.add('active');
});
sidebarCloseBtn.addEventListener('click', () => {
  sidebarMenu.classList.remove('active');
  sidebarBackdrop.classList.remove('active');
});
sidebarBackdrop.addEventListener('click', () => {
  sidebarMenu.classList.remove('active');
  sidebarBackdrop.classList.remove('active');
});

// Video Slider Auto & Swipe
let videoIndex = 0;
const videoSlider = document.getElementById('videoSlider');
const videoDots = document.querySelectorAll('.slider-dots .dot');

function updateVideoSlider() {
  videoSlider.style.transform = `translateX(-${videoIndex * 320}px)`;
  videoDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === videoIndex);
  });
}
setInterval(() => {
  videoIndex = (videoIndex + 1) % 3;
  updateVideoSlider();
}, 5000);

let startX = null;
videoSlider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});
videoSlider.addEventListener('touchend', e => {
  if (startX === null) return;
  const diff = e.changedTouches[0].clientX - startX;
  if (diff > 40 && videoIndex > 0) videoIndex--;
  else if (diff < -40 && videoIndex < 2) videoIndex++;
  updateVideoSlider();
  startX = null;
});

// Phrase Slider Auto & Swipe
const phraseSlider = document.getElementById("phraseSlider");
let phraseIndex = 0;
setInterval(() => {
  phraseIndex = (phraseIndex + 1) % 3;
  phraseSlider.style.transform = `translateX(-${phraseIndex * 320}px)`;
}, 5000);

let phraseStartX = null;
phraseSlider.addEventListener("touchstart", e => {
  phraseStartX = e.touches[0].clientX;
});
phraseSlider.addEventListener("touchend", e => {
  if (phraseStartX === null) return;
  const endX = e.changedTouches[0].clientX;
  const diff = endX - phraseStartX;

  if (diff > 40 && phraseIndex > 0) phraseIndex--;
  else if (diff < -40 && phraseIndex < 2) phraseIndex++;

  phraseSlider.style.transform = `translateX(-${phraseIndex * 320}px)`;
  phraseStartX = null;
});
