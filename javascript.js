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
    if(slider) {
        let currentSlide = 0;
        const totalSlides = document.querySelectorAll('.slide').length;

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        setInterval(nextSlide, 5000);
    }
}

// إدارة عداد السلة
function updateCartCounter() {
    const cartCount = document.querySelector('.cart-count');
    if(cartCount) {
        let count = parseInt(localStorage.getItem('cartCount')) || 0;
        cartCount.textContent = count;
    }
}

// تفعيل إرسال النموذج
function setupFormValidation() {
    const form = document.querySelector('.cta-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = form.querySelector('input[type="text"]');
            const emailInput = form.querySelector('input[type="email"]');
            
            if(nameInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                alert('الرجاء إدخال بيانات صحيحة');
                return;
            }
            
            console.log('تم إرسال النموذج بنجاح');
            form.reset();
        });
    }
}

// التحقق من صيغة البريد الإلكتروني
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// تحميل الكتب
function loadBooks() {
    const booksContainer = document.getElementById('booksContainer');
    if(booksContainer) {
        const books = [
            {
                title: 'الكتاب الأول',
                author: 'أحمد محمد',
                price: 20,
                image: 'book1.jpg',
                description: 'وصف الكتاب الأول هنا'
            },
            {
                title: 'الكتاب الثاني',
                author: 'فاطمة علي',
                price: 25,
                image: 'book2.jpg',
                description: 'وصف الكتاب الثاني هنا'
            }
        ];

        booksContainer.innerHTML = books.map(book => `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}" class="book-cover">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">المؤلف: ${book.author}</p>
                <p class="book-price">السعر: $${book.price}</p>
                <div class="book-actions">
                    <button class="read-btn">قراءة مجانية</button>
                    <button class="buy-btn">شراء الآن</button>
                </div>
            </div>
        `).join('');

        setupPurchaseButtons();
    }
}

// إدارة عملية الشراء
function setupPurchaseButtons() {
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bookTitle = btn.closest('.book-card').querySelector('.book-title').textContent;
            if(confirm(`هل تريد شراء الكتاب: ${bookTitle}؟`)) {
                const currentCount = parseInt(localStorage.getItem('cartCount')) || 0;
                localStorage.setItem('cartCount', currentCount + 1);
                updateCartCounter();
                alert('تمت إضافة الكتاب إلى سلة التسوق');
            }
        });
    });
}

// تهيئة جميع الميزات
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeroSlider();
    updateCartCounter();
    setupFormValidation();
    loadBooks();
    initSearch(); // إضافة نظام البحث
    addFilters(); // إضافة نظام التصفية

    // حدث زر ابدأ الرحلة
    const startBtn = document.getElementById('startJourneyBtn');
    if(startBtn) {
        startBtn.addEventListener('click', () => {
            window.location.href = 'books.html';
        });
    }
    // تحسين نظام البحث
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('.book-card').forEach(card => {
                const title = card.querySelector('.book-title').textContent.toLowerCase();
                card.style.display = title.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }
}

// إضافة نظام تصفية
function addFilters() {
    const filterBar = document.createElement('div');
    filterBar.className = 'filter-bar';
    filterBar.innerHTML = `
        <button class="filter-btn active" data-filter="all">الكل</button>
        <button class="filter-btn" data-filter="bestseller">الأكثر مبيعاً</button>
        <button class="filter-btn" data-filter="new">إصدارات جديدة</button>
    `;
    document.querySelector('.books-section').prepend(filterBar);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            filterBooks(filter);
        });
    });
}

function filterBooks(filter) {
    document.querySelectorAll('.book-card').forEach(card => {
        const isBestseller = card.querySelector('.bestseller');
        const isNew = card.querySelector('.new');
        card.style.display = 
            (filter === 'all') ? 'block' :
            (filter === 'bestseller' && isBestseller) ? 'block' :
            (filter === 'new' && isNew) ? 'block' : 'none';
    });
}
// نظام الترتيب
    document.getElementById('sortBooks')?.addEventListener('change', (e) => {
        const value = e.target.value;
        // إضافة دالة الترتيب حسب السعر/التقييم
    });
});// نظام الترتيب
    document.getElementById('sortBooks')?.addEventListener('change', (e) => {
        const value = e.target.value;
        // إضافة دالة الترتيب حسب السعر/التقييم
    });
    document.addEventListener("DOMContentLoaded", function() {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                document.body.insertAdjacentHTML("afterbegin", data);
            });
    });
    document.addEventListener("DOMContentLoaded", function () {
    const accountToggle = document.querySelector(".account-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    accountToggle.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show-menu");
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener("click", function (event) {
        if (!accountToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show-menu");
        }
    });
});

});
