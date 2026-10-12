// 1. WHATSAPP NUMBER (country code, no plus, no spaces)
const whatsappNumber = "254789509623";

// 2. MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", function () { nav.classList.toggle("open"); });
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () { nav.classList.remove("open"); });
});

// 3. FLOATING BUTTON: opens a chat with a greeting
document.getElementById("waFloat").href =
  "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent("Hello Zuri Hair Studio, I would like to ask about your services.");

// 4. DATE FIELD: do not allow days in the past
const dateInput = document.getElementById("date");
dateInput.min = new Date().toISOString().split("T")[0];

// 5. BOOKING FORM: build a WhatsApp message and open it
const bookForm = document.getElementById("bookForm");
const formMsg = document.getElementById("formMsg");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const date = dateInput.value;
  const message = "Hello Zuri Hair Studio, my name is " + name +
    ". I would like to book " + service + " on " + date + ".";
  formMsg.textContent = "Opening WhatsApp...";
  window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message), "_blank");
});
