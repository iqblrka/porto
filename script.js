/* ============================
   TAILWIND CONFIGURATION
   (Harus dieksekusi setelah tailwind CDN dimuat)
   ============================ */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'sans-serif'] },
            colors: {
                primary:  '#080c16',
                secondary:'#3b82f6',
                accent:   '#06b6d4',
                darkCard: '#101725'
            },
            screens: {
                xs: '480px', // tambahkan breakpoint xs agar xs:grid-cols-3 berfungsi
            },
            animation: {
                'float':       'float 6s ease-in-out infinite',
                'pulse-slow':  'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow':   'spin 15s linear infinite',
                'border-beam': 'border-beam 4s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%':      { transform: 'translateY(-20px)' }
                },
                'border-beam': {
                    '100%': { 'offset-distance': '100%' }
                }
            }
        }
    }
};

/* ============================
   PARTIKEL BACKGROUND
   ============================ */
function initParticles() {
    // Kurangi partikel di HP/tablet untuk hemat CPU & baterai
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    const particleCount = isMobile ? 15 : 40;

    particlesJS("particles-js", {
        particles: {
            number:  { value: particleCount, density: { enable: true, value_area: 800 } },
            color:   { value: ["#3b82f6", "#06b6d4", "#ffffff"] },
            shape:   { type: "circle" },
            opacity: { value: 0.2, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false } },
            size:    { value: 2, random: true, anim: { enable: true, speed: 1, size_min: 0.5, sync: false } },
            line_linked: { enable: false },
            move: {
                enable: true, speed: 0.3, direction: "none",
                random: true, straight: false, out_mode: "out", bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: false },
                onclick: { enable: false },
                resize:  true
            }
        },
        retina_detect: true
    });
}

/* ============================
   VANILLA TILT (Desktop only)
   ============================ */
function initTilt() {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouch) {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max:         8,
            speed:       300,
            glare:       true,
            "max-glare": 0.15,
            perspective: 1000,
            scale:       1.02,
            gyroscope:   false
        });
    }
}

/* ============================
   MOUSE GLOW
   ============================ */
function initMouseGlow() {
    const mouseGlow = document.getElementById('mouse-glow');
    let mouseX = 0, mouseY = 0;
    let glowX  = 0, glowY  = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        mouseGlow.style.setProperty('--mouse-x', `${glowX}px`);
        mouseGlow.style.setProperty('--mouse-y', `${glowY}px`);
        requestAnimationFrame(animate);
    }
    animate();
}

/* ============================
   MOBILE MENU
   ============================ */
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon   = document.getElementById('menu-icon');
let menuOpen = false;

function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
        mobileMenu.classList.remove('hidden');
        // Delay sedikit agar transisi max-height berjalan setelah display berubah
        requestAnimationFrame(() => {
            requestAnimationFrame(() => mobileMenu.classList.add('open'));
        });
    } else {
        closeMenu();
    }
    menuIcon.classList.toggle('fa-bars',  !menuOpen);
    menuIcon.classList.toggle('fa-times',  menuOpen);
}

function closeMenu() {
    if (!menuOpen && mobileMenu.classList.contains('hidden')) return;
    menuOpen = false;
    mobileMenu.classList.remove('open');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    // Sembunyikan setelah transisi selesai (400ms sesuai CSS)
    setTimeout(() => mobileMenu.classList.add('hidden'), 400);
}

/* ============================
   NAVBAR SCROLL
   ============================ */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('shadow-xl');
        } else {
            navbar.classList.remove('shadow-xl');
        }
        // Tutup menu mobile saat scroll
        if (menuOpen) closeMenu();
    });
}

/* ============================
   SCROLL REVEAL + SKILL BARS
   ============================ */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.querySelectorAll('.skill-bar').forEach(bar => {
                    bar.classList.add('active');
                });
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

/* ============================
   FORM KONTAK — BUKA GMAIL
   ============================ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nama  = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();

        const toEmail  = 'muhammad.iqbal.rakha@gmail.com';
        const subject  = `Pesan Portfolio - ${nama}`;
        const body     = `Halo M. Iqbal Rakha,\n\nSaya ${nama} (${email}) mengirim pesan via website:\n\n"${pesan}"`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        this.reset();
    });
}

/* ============================
   INIT — Tunggu DOM siap
   ============================ */
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initTilt();
    initMouseGlow();
    initNavbarScroll();
    initScrollReveal();
    initContactForm();
});
