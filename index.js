function pay() {
  let xy = document.getElementById("rlist");
  xy.style.display = "block";
  let cc = document.getElementById("srnav");
  cc.style.display = "block";
  let br = document.getElementById("rnav");
  br.style.display = "none";
}

function cod() {
  let xy = document.getElementById("rlist");
  xy.style.display = "none";
  let br = document.getElementById("srnav");
  br.style.display = "none";
  let hh = document.getElementById("rnav");
  hh.style.display = "block";
}

function openPopup() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "flex"; // Ensure it's visible
  setTimeout(() => {
    overlay.classList.add("active");
  }, 10); // Small delay to trigger animation
}

function closePopup() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("active");

  setTimeout(() => {
    overlay.style.display = "none"; // Hide after animation completes
  }, 300); // Matches transition duration
}

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_fg5yit7", "template_cfz4fo4", parms)
    .then(alert("Email Sent!!"));
}
