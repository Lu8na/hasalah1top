function showEditForm() {
  document.getElementById("editForm").style.display = "flex";
}

function saveChanges() {
  const newEmail = document.getElementById("newEmail").value;
  const newPassword = document.getElementById("newPassword").value;

  if (newEmail) {
    document.getElementById("email").innerText = newEmail;
    alert(inArabic ? "✅ تم تحديث البريد الإلكتروني" : "✅ Email updated");
  }

  if (newPassword) {
    alert(inArabic ? "🔐 تم حفظ كلمة المرور الجديدة" : "🔐 Password saved");
  }

  document.getElementById("editForm").style.display = "none";
}

function toggleDescription() {
  const desc = document.getElementById("personality-description");
  desc.style.display = (desc.style.display === 'none') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  // تحريك البارات وتحبيطها إلى القيمة النهائية مرة واحدة
  const bars = document.querySelectorAll(".bar");
  bars.forEach(bar => {
    const finalHeight = bar.getAttribute("data-height") || "100px";
    bar.style.height = "0";
    setTimeout(() => {
      bar.style.height = finalHeight;
    }, 300);
  });
});



let inArabic = true; // أو false حسب البداية

function toggleLanguage() {
  const htmlTag = document.documentElement;
  inArabic = !inArabic;

  htmlTag.setAttribute("lang", inArabic ? "ar" : "en");
  htmlTag.setAttribute("dir", inArabic ? "rtl" : "ltr");

  // تحديث عنوان الصفحة
  const h1 = document.querySelector("h1");
  h1.innerHTML = inArabic
    ? '<i class="fa-solid fa-user"></i> الملف الشخصي'
    : '<i class="fa-solid fa-user"></i> Profile';

  // تحديث محتوى infoCard مع تضمين onclick للزر
  const infoCard = document.getElementById("infoCard");
  infoCard.innerHTML = inArabic
    ? `
      <p><strong>الاسم:</strong> لين محمد</p>
      <p><strong>البريد الإلكتروني:</strong> <span id="email">leen@example.com</span></p>
      <p><strong>العمر:</strong> 22 سنة</p>
      <p><strong>المدينة:</strong> الرياض</p>
      <p><strong>اللقب المالي:</strong> الطموحة المدخرة</p>
      <div style="display: flex; gap: 10px; justify-content: flex-start;">
        <button class="btn" onclick="showEditForm()">تعديل المعلومات <i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn" onclick="toggleLanguage()" title="تغيير اللغة">English <i class="fa-solid fa-globe"></i></button>
      </div>
    `
    : `
      <p><strong>Name:</strong> Leen Mohammed</p>
      <p><strong>Email:</strong> <span id="email">leen@example.com</span></p>
      <p><strong>Age:</strong> 22</p>
      <p><strong>City:</strong> Riyadh</p>
      <p><strong>Finance Title:</strong> Ambitious Saver</p>
      <div style="display: flex; gap: 10px; justify-content: flex-start;">
        <button class="btn" onclick="showEditForm()">Edit Info <i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn" onclick="toggleLanguage()" title="Switch Language">عربي <i class="fa-solid fa-globe"></i></button>
      </div>
    `;

  // تحديث محتوى financeCard
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

  // تحديث نموذج التعديل placeholders وزر الحفظ
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

  // ضبط النص والاتجاه داخل العناصر المهمة
  const cards = document.querySelectorAll(".card, #bottomNav a");
  cards.forEach(el => {
    el.style.textAlign = inArabic ? "right" : "left";
  });
}



document.addEventListener("DOMContentLoaded", function () {
  const notificationIcon = document.getElementById("notificationIcon");
  const notificationsPanel = document.getElementById("notifications");

  // نتأكد إن العناصر موجودة عشان ما يطلع خطأ
  if (notificationIcon && notificationsPanel) {
    notificationIcon.addEventListener("click", () => {
      notificationsPanel.style.display =
        notificationsPanel.style.display === "none" || notificationsPanel.style.display === ""
          ? "block"
          : "none";
    });

    document.addEventListener("click", (e) => {
      if (
        !notificationsPanel.contains(e.target) &&
        !notificationIcon.contains(e.target)
      ) {
        notificationsPanel.style.display = "none";
      }
    });
  }
});
localStorage.setItem("userEmail", newEmail);
window.addEventListener('DOMContentLoaded', () => {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
    // مثال: عرض البريد الإلكتروني في عنصر موجود بالصفحة، مثلا داخل div أو p 
    // لازم تضيف في HTML عنصر له id مثل "userEmailDisplay" أو تختار مكان مناسب للعرض
    const emailDisplay = document.getElementById("userEmailDisplay");
    if (emailDisplay) {
      emailDisplay.textContent = `البريد الإلكتروني: ${userEmail}`;
    }
  }
});

<script src="//code.tidio.co/syfglhw644avucp27nknohc68m33713h.js" async></script>






async function markComplete() {
  const index = localStorage.getItem("selectedGoalIndex");
  const goals = JSON.parse(localStorage.getItem("goals") || "[]");
  const goal = goals[index];

  if (!goal) return alert("لا يوجد هدف.");

  const salary = Number(localStorage.getItem("userSalary") || 0);
  const duration = Number(goal.duration || 1);
  const monthly = Number(goal.amount) / duration;

  if (!goal.saved) goal.saved = 0;
  if (!goal.monthsCompleted) goal.monthsCompleted = 0;

  // تحقق من الراتب قبل التقدم
  if (salary < monthly) {
    alert(`⚠️ راتبك لا يغطي مبلغ الادخار الشهري المطلوب (${monthly.toFixed(2)} ريال).`);
    return;
  }

  if (goal.monthsCompleted >= duration || goal.saved >= goal.amount) {
    goal.saved = goal.amount;
    alert("🎉 تم تحقيق الهدف بالكامل!");
  } else {
    goal.monthsCompleted += 1;
    goal.saved += monthly;
    if (goal.saved > goal.amount) goal.saved = goal.amount;

    // نسبة الادخار من الراتب
    const savingPercent = (monthly / salary) * 100;
    alert(`✅ تمت إضافة ${monthly.toFixed(2)} ريال. نسبة الادخار من راتبك: ${savingPercent.toFixed(1)}%`);
  }

  // حفظ التعديلات
  goals[index] = goal;
  localStorage.setItem("goals", JSON.stringify(goals));
  displayDetails();

  // 🧠 إرسال البيانات إلى الذكاء الاصطناعي
  try {
    const response = await fetch('/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        saved: goal.saved,
        amount: goal.amount,
        monthsCompleted: goal.monthsCompleted,
        duration: goal.duration
      })
    });

    const result = await response.json();
    alert(result.status);
  } catch (error) {
    console.error("فشل الاتصال بالخادم:", error);
  }
}


function saveSalary() {
  const salaryInput = document.getElementById("salaryInput").value;
  const salary = Number(salaryInput);
  if (!salary || salary <= 0) {
    alert("يرجى إدخال راتب شهري صالح");
    return;
  }
  localStorage.setItem("userSalary", salary);
}



