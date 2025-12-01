document.getElementById("contactForm").onsubmit = function (e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Message sent successfully!";
};
