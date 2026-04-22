// --- التحكم اليدوي هنا ---
// ضع true لفتح التقديم ، وضع false لإغلاق التقديم
let applicationOpen = true; 
// -----------------------

function updateApplicationUI() {
    const statusDiv = document.getElementById("status-display");
    
    if (applicationOpen) {
        // شكل الحالة وهي مفتوحة
        statusDiv.innerHTML = `
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 text-green-400 border border-green-800/30 rounded-full text-sm font-bold shadow-lg shadow-green-900/10">
                <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                التقديم مفتوح حالياً ✅
            </div>`;
    } else {
        // شكل الحالة وهي مغلقة
        statusDiv.innerHTML = `
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 text-red-400 border border-red-800/30 rounded-full text-sm font-bold">
                <span class="h-3 w-3 rounded-full bg-red-500"></span>
                التقديم مغلق حالياً ❌
            </div>`;
    }
}

function showSection(id) {
    // حذفنا 'leaderboard' من هنا لأنها صارت داخل 'home'
    const sections = ['home', 'rules', 'staff'];
    
    sections.forEach(s => {
        const sec = document.getElementById('section-' + s);
        const nav = document.getElementById('nav-' + s);
        if (sec) {
            sec.style.display = 'none';
            sec.classList.remove('show-section');
        }
        if (nav) nav.classList.remove('active');
    });

    const targetSec = document.getElementById('section-' + id);
    const targetNav = document.getElementById('nav-' + id);
    if (targetSec) {
        targetSec.style.display = 'block';
        targetSec.classList.add('show-section');
    }
    if (targetNav) targetNav.classList.add('active');
}

// تعديل وظيفة زر التقديم لتفحص الحالة اليدوية
function openForm() {
    if (!applicationOpen) {
        alert("نعتذر منك، التقديم مغلق حالياً من قبل الإدارة! ❌");
        return; // لن يفتح النموذج
    }
    
    // إذا كان مفتوحاً، يظهر النموذج (تأكد أن ID النموذج عندك هو applyForm)
    const form = document.getElementById("applyForm");
    if (form) {
        form.classList.remove('hidden');
        form.classList.add('flex');
    }
}

// تشغيل الوظيفة عند تحميل الصفحة
window.onload = () => {
    if (typeof renderAll === "function") renderAll(); 
    updateApplicationUI();
};