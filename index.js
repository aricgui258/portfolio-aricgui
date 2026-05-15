document.addEventListener('DOMContentLoaded', () => {
    // Hero Entrance Animations (only if elements exist)
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
            heroTitle.style.transition = 'all 1s ease-out';
        }, 300);
    }

    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
            heroSubtitle.style.transition = 'all 1s ease-out';
        }, 600);
    }

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Initial check in case elements are already in view
    setTimeout(revealOnScroll, 100);

    // Mouse follow effect for blobs (subtle)
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');
    const blob3 = document.querySelector('.blob-3');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        if (blob1) blob1.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
        if (blob2) blob2.style.transform = `translate(${x * -0.02}px, ${y * -0.02}px)`;
        if (blob3) blob3.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`;
    });
});

// Video Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    const triggers = document.querySelectorAll('.video-trigger');
    const closeBtn = document.querySelector('.close-modal');

    if (modal && triggers.length > 0) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const videoSrc = trigger.getAttribute('href');
                player.src = videoSrc + "?autoplay=1";
                modal.classList.add('active');
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        const closeModal = () => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                player.src = "";
                document.body.style.overflow = 'auto';
            }, 300);
        };

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});
