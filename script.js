// Replace with your actual email
const email = `darrelltmh@gmail.com`;
const resumeLink = `https://drive.google.com/file/d/1W1DNPz85OiMuYwQQXOdA2TOnSQMkYlgs/view?usp=drive_link`;
document.getElementById("email-contact").innerText = email;
document.getElementById("footer-email").innerText = email;

function downloadResume() {
  window.open(resumeLink, "_blank");
}
