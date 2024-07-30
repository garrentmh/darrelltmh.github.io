// Replace with your actual email
const email = `darrelltmh@gmail.com`;
const resumeLink = `https://drive.google.com/file/d/1yTc0YtKKai4-CKSjELQbsVdxRh2wnpoh/view?usp=drive_link`;
document.getElementById("email-contact").innerText = email;
document.getElementById("footer-email").innerText = email;

function downloadResume() {
  window.open(resumeLink, "_blank");
}
