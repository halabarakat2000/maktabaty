// script.js

// تهيئة القائمة المتنقلة
function initMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.nav-container').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
}

// إدارة سلايدر الصور
function initHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slide').length;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(nextSlide, 5000);
}

// إدارة عداد السلة
function updateCartCounter() {
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCount.textContent = count;
}

// تفعيل إرسال النموذج
function setupFormValidation() {
    const form = document.querySelector('.cta-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        
        if(nameInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            alert('الرجاء إدخال بيانات صحيحة');
            return;
        }
        
        // إرسال النموذج هنا
        console.log('تم إرسال النموذج بنجاح');
        form.reset();
    });
}

// التحقق من صيغة البريد الإلكتروني
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// تهيئة جميع الميزات
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroSlider();
    updateCartCounter();
    setupFormValidation();
});