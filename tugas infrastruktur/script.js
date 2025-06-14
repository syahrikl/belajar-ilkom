document.addEventListener('DOMContentLoaded', function() {

    // === LOGIKA LOGIN GATE ===
    // 1. Tentukan Username & Password yang Benar
    const correctUsername = 'syahri'; // Ganti jika perlu
    const correctPassword = '12345678'; // Ganti jika perlu

    // 2. Pilih Elemen dari HTML
    const loginGate = document.getElementById('login-gate');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    
    const mainHeader = document.querySelector('.main-header');
    const mainContent = document.querySelector('main');
    const mainFooter = document.querySelector('.main-footer');

    // 3. Tambahkan Event Listener ke Form
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form reload halaman

        // Ambil nilai yang diinput pengguna
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // 4. Periksa apakah kredensial benar
        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
            // Jika Benar:
            // Sembunyikan login gate dengan efek fade out
            loginGate.style.transition = 'opacity 0.5s ease';
            loginGate.style.opacity = '0';
            setTimeout(() => {
                loginGate.style.display = 'none';
            }, 500); // Tunggu animasi selesai

            // Tampilkan konten website
            mainHeader.style.display = 'block'; // atau 'flex' jika header menggunakan flexbox
            mainContent.style.display = 'block';
            mainFooter.style.display = 'block'; // atau 'flex' jika footer menggunakan flexbox
        } else {
            // Jika Salah:
            // Tampilkan pesan error
            loginError.style.display = 'block';
        }
    });


    // --- FUNGSI WEBSITE LAINNYA DI BAWAH INI ---

    // 1. Mobile Menu Hamburger Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
        });
    }

    // 2. Simulasi Form Kontak
    const contactForm = document.getElementById('contactForm');
    if(contactForm){
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Terima kasih, ${name}! Pesan Anda telah "terkirim".`);
            contactForm.reset();
        });
    }

    // 3. Highlight Navigasi Aktif saat Scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.main-nav a');
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    });
});