<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>الملف الشخصي – حصالة</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet" />
  <style>
    body {
      font-family: 'Tajawal', sans-serif;
      background: #FDF1ED;
      color: #0D1C2E;
      max-width: 430px;
      margin: auto;
      padding: 20px;
      direction: rtl;
    }
    h1 {
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 15px;
      text-align: center;
    }
    #infoCard, #financeCard {
      background: white;
      border-radius: 16px;
      padding: 15px 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.06);
      margin-bottom: 20px;
    }
    #infoCard p, #financeCard p {
      margin: 8px 0;
      font-size: 16px;
    }
    .btn {
      background-color: #0D1C2E;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 10px;
      cursor: pointer;
      font-weight: 700;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn:hover {
      background-color: #14293D;
    }
    #editForm {
      display: none;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 20px;
    }
    #editForm input {
      padding: 10px;
      font-size: 16px;
      border-radius: 10px;
      border: 1px solid #ccc;
      width: 100%;
      box-sizing: border-box;
    }
    #bottomNav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #0D1C2E;
      display: flex;
      justify-content: space-around;
      padding: 10px 0;
    }
    #bottomNav a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    #bottomNav a.active {
      color: #ff7693;
    }
  </style>
</head>
<body>

  <h1><i class="fa-solid fa-user"></i> الملف الشخصي</h1>

  <div id="infoCard">
    <p><strong>الاسم:</strong> لين محمد</p>
    <p><strong>البريد الإلكتروني:</strong> <span id="email">leen@example.com</span></p>
    <p><strong>العمر:</strong> 22 سنة</p>
    <p><strong>المدينة:</strong> الرياض</p>
    <p><strong>اللقب المالي:</strong> الطموحة المدخرة</p>
    <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: flex-start;">
      <button class="btn" onclick="showEditForm()">تعديل المعلومات <i class="fa-solid fa-pen-to-square"></i></button>
      <button class="btn" onclick="toggleLanguage()" title="تغيير اللغة">English <i class="fa-solid fa-globe"></i></button>
    </div>
  </div>

  <div id="financeCard">
    <h3><i class="fa-solid fa-star"></i> بطاقتك المالية</h3>
    <p>أنت شخصية مالية منضبطة، تحب الادخار وتخطط لأهداف طويلة المدى.</p>
  </div>

  <div id="editForm">
    <input type="email" id="newEmail" placeholder="البريد الإلكتروني الجديد" />
    <input type="password" id="newPassword" placeholder="كلمة المرور الجديدة" />
    <button class="btn" onclick="saveChanges()">حفظ التعديلات</button>
  </div>

  <nav id="bottomNav">
    <a href="index.html"><i class="fa-solid fa-house"></i><span>الرئيسية</span></a>
    <a href="analysis.html"><i class="fa-solid fa-chart-line"></i><span>التحليل</span></a>
    <a href="goals.html"><i class="fa-solid fa-bullseye"></i><span>أهدافي</span></a>
    <a href="profile.html" class="active"><i class="fa-solid fa-user"></i><span>ملفي</span></a>
  </nav>

  <script>
    let inArabic = true;

    function showEditForm() {
      document.getElementById("editForm").style.display = "flex";
    }

    function saveChanges() {
      const newEmail = document.getElementById("newEmail").value.trim();
      const newPassword = document.getElementById("newPassword").value.trim();

      if (newEmail) {
        localStorage.setItem("userEmail", newEmail);
        document.getElementById("email").innerText = newEmail;
        alert(inArabic ? "✅ تم تحديث البريد الإلكتروني" : "✅ Email updated");
      }

      if (newPassword) {
        // هنا يمكنك إضافة حفظ كلمة المرور بأمان إذا أردت، الآن مجرد تنبيه
        alert(inArabic ? "🔐 تم حفظ كلمة المرور الجديدة" : "🔐 Password saved");
      }

      // إخفاء النموذج بعد الحفظ
      document.getElementById("editForm").style.display = "none";
      
      // تنظيف الحقول
      document.getElementById("newEmail").value = "";
      document.getElementById("newPassword").value = "";
    }

    function toggleLanguage() {
      inArabic = !inArabic;
      const htmlTag = document.documentElement;

      htmlTag.setAttribute("lang", inArabic ? "ar" : "en");
      htmlTag.setAttribute("dir", inArabic ? "rtl" : "ltr");

      // تحديث العنوان
      const h1 = document.querySelector("h1");
      h1.innerHTML = inArabic
        ? '<i class="fa-solid fa-user"></i> الملف الشخصي'
        : '<i class="fa-solid fa-user"></i> Profile';

      // تحديث infoCard
      const infoCard = document.getElementById("infoCard");
      infoCard.innerHTML = inArabic
        ? `
          <p><strong>الاسم:</strong> لين محمد</p>
          <p><strong>البريد الإلكتروني:</strong> <span id="email">${localStorage.getItem("userEmail") || "leen@example.com"}</span></p>
          <p><strong>العمر:</strong> 22 سنة</p>
          <p><strong>المدينة:</strong> الرياض</p>
          <p><strong>اللقب المالي:</strong> الطموحة المدخرة</p>
          <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: flex-start;">
            <button class="btn" onclick="showEditForm()">تعديل المعلومات <i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn" onclick="toggleLanguage()" title="تغيير اللغة">English <i class="fa-solid fa-globe"></i></button>
          </div>
        `
        : `
          <p><strong>Name:</strong> Leen Mohammed</p>
          <p><strong>Email:</strong> <span id="email">${localStorage.getItem("userEmail") || "leen@example.com"}</span></p>
          <p><strong>Age:</strong> 22</p>
          <p><strong>City:</strong> Riyadh</p>
          <p><strong>Finance Title:</strong> Ambitious Saver</p>
          <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: flex-start;">
            <button class="btn" onclick="showEditForm()">Edit Info <i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn" onclick="toggleLanguage()" title="Switch Language">عربي <i class="fa-solid fa-globe"></i></button>
          </div>
        `;

      // تحديث financeCard
      const financeCard = document.getElementById("financeCard");
      financeCard.innerHTML = inArabic
        ? `
          <h3><i class="fa-solid fa-star"></i> بطاقتك المالية</h3>
          <p>أنت شخصية مالية منضبطة، تحب الادخار وتخطط لأهداف طويلة المدى.</p>
        `
        : `
          <h3><i class="fa-solid fa-star"></i> Your Financial Card</h3>
          <p>You are a disciplined financial person who loves saving and long-term planning.</p>
        `;

      // تحديث placeholders وزر الحفظ في النموذج
      const editForm = document.getElementById("editForm");
      editForm.innerHTML = inArabic
        ? `
          <input type="email" id="newEmail" placeholder="البريد الإلكتروني الجديد" />
          <input type="password" id="newPassword" placeholder="كلمة المرور الجديدة" />
          <button class="btn" onclick="saveChanges()">حفظ التعديلات</button>
        `
        : `
          <input type="email" id="newEmail" placeholder="New Email" />
          <input type="password" id="newPassword" placeholder="New Password" />
          <button class="btn" onclick="saveChanges()">Save Changes</button>
        `;

      // تحديث القائمة السفلية
      const bottomNav = document.getElementById("bottomNav");
      bottomNav.innerHTML = inArabic
        ? `
          <a href="index.html"><i class="fa-solid fa-house"></i><span>الرئيسية</span></a>
          <a href="analysis.html"><i class="fa-solid fa-chart-line"></i><span>التحليل</span></a>
          <a href="goals.html"><i class="fa-solid fa-bullseye"></i><span>أهدافي</span></a>
          <a href="profile.html" class="active"><i class="fa-solid fa-user"></i><span>ملفي</span></a>
        `
        : `
          <a href="index.html"><i class="fa-solid fa-house"></i><span>Home</span></a>
          <a href="analysis.html"><i class="fa-solid fa-chart-line"></i><span>Analysis</span></a>
          <a href="goals.html"><i class="fa-solid fa-bullseye"></i><span>Goals</span></a>
          <a href="profile.html" class="active"><i class="fa-solid fa-user"></i><span>Profile</span></a>
        `;

      // ضبط اتجاه النصوص داخل العناصر المهمة
      const cards = document.querySelectorAll("#infoCard, #financeCard, #bottomNav a");
      cards.forEach(el => {
        el.style.textAlign = inArabic ? "right" : "left";
      });
    }

    // عند تحميل الصفحة، نعرض البريد المخزن ونضبط اللغة
    document.addEventListener("DOMContentLoaded", () => {
      // نعرض البريد المخزن لو موجود
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        const emailSpan = document.getElementById("email");
        if (emailSpan) emailSpan.innerText = storedEmail;
      }
      // ضبط اللغة والاتجاه (يمكن تعديل البداية حسب رغبتك)
      toggleLanguage();
    });
  </script>
</body>
</html>



