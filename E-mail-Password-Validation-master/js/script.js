const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// E-posta Doğrulama
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //e-posta değeri e-posta kalıbıyla eşleşmezse geçersiz sınıf ekleme
  }
  emailField.classList.remove("invalid"); //e-posta değeri emaiPattern ile eşleşirse geçersiz sınıfın kaldırılması
}

// Şifreyi gizle ve göster
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //göz simgesinin ana öğesini alma ve şifre girişini seçme
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Şifre Doğrulama
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*.?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //parola giriş değeri passPattern ile eşleşmiyorsa geçersiz sınıf ekleme
  }
  passField.classList.remove("invalid"); // parola giriş değeri passPattern ile eşleşirse geçersiz sınıfın kaldırılması
}

// Parola Doğrulamayı Onaylayın
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Form Özetinde Fonksiyon Çağırma
form.addEventListener("submit", (e) => {
  e.preventDefault(); //form göndermeyi engelleme
  checkEmail();
  createPass();
  confirmPass();

  //tuşa basıldığında arama işlevi
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
