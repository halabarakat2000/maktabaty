document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.createElement('div');
            menuToggle.className = 'mobile-menu';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.querySelector('.nav-container').appendChild(menuToggle);

            menuToggle.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.toggle('active');
            });
        });