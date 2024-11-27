function checkLogin() {
    // بيانات اسم المستخدم وكلمة المرور الصحيحة
    const correctUser = "admin";
    const correctPass = "12345";

    // الحصول على المدخلات
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // التحقق من صحة البيانات
    if (username === correctUser && password === correctPass) {
        // التوجيه إلى الصفحة الثانية
        window.location.href = "back.html";
    } else {
        // عرض رسالة خطأ
        document.getElementById("error").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    }
}