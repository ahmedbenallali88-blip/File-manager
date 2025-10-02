// تسجيل الدخول
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Ahmed1509" && password === "12345") {
    window.location.href = "dashboard.html";
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
  }
});

function forgotPassword() {
  alert("يرجى التواصل مع الإدارة لاسترجاع كلمة المرور.");
}

// لوحة التحكم
function addFile() { alert("إضافة ملف جديد"); }
function editFile() { alert("تعديل الملف"); }
function deleteFile() { alert("تم حذف الملف"); }
function refreshPage() { location.reload(); }
function filterBySubject() { alert("تصنيف حسب المادة"); }
function searchFile() { alert("البحث عن ملف"); }
function previewFile() { alert("معاينة الملف"); }
function downloadFile() { alert("تحميل الملف"); }
function addFolder() { alert("إضافة مجلد جديد"); }
function logout() { window.location.href = "index.html"; }
