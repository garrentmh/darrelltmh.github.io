// Replace with your actual email
const email = config.email;
const resumeLink = config.resumeLink;
document.getElementById("email-contact").innerText = email;
document.getElementById("footer-email").innerText = email;

function downloadResume() {
  window.open(resumeLink, "_blank");
}
