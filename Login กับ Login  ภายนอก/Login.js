function togglePassword() {
  const password = document.getElementById("password");
  const eyeOff = document.getElementById("togglePasswordOff");
  const eyeOn = document.getElementById("togglePasswordOn");

  if (password.type === "password") {
    password.type = "text";
    eyeOff.style.display = "none";    // ซ่อนตาปิด
    eyeOn.style.display = "inline";   // แสดงตาเปิด
  } else {
    password.type = "password";
    eyeOff.style.display = "inline";  // แสดงตาปิด
    eyeOn.style.display = "none";     // ซ่อนตาเปิด
  }
}

// ระบบล็อกอินแบบง่าย ตรวจสอบจากข้อมูล hardcoded
const validLogins = {
  "101": "hotel123",
  "102": "hotel456",
  "103": "hotel789"
};

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const messageDiv = document.getElementById('message');

  // ข้อมูลล็อกอินตัวอย่าง (hardcoded)
  const validLogins = {
    "101": "hotel123",
    "102": "hotel456",
    "103": "hotel789"
  };

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันรีเฟรชหน้า

    const room = document.getElementById('roomNumber').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (validLogins[room] && validLogins[room] === pass) {
      messageDiv.textContent = "Login successful! Redirecting...";
      messageDiv.style.color = "limegreen";

      // ตัวอย่างเปลี่ยนหน้า หลังล็อกอินสำเร็จ
      setTimeout(() => {
        window.location.href = "dashboard.html";  // เปลี่ยน URL ตามต้องการ
      }, 1500);
    } else {
      messageDiv.textContent = "Invalid room number or password.";
      messageDiv.style.color = "red";
    }
  });
});


