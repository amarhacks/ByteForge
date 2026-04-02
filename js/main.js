/* ═══════════════════════════════════════════════════════════════
   VectorMind — Interactive Scripts
   Cursor glow, card hover effects, hero stat counter
   ═══════════════════════════════════════════════════════════════ */

// Cursor glow follow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Card hover color sync
document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const g = card.querySelector('.card-glow');
        if (g) g.style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
        const g = card.querySelector('.card-glow');
        if (g) g.style.opacity = '0';
    });
});

// Smooth number count-up on hero stats
const statsEl = document.querySelectorAll('.hero-stat .sn');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const raw = el.textContent;
            const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
            const suffix = raw.replace(/[0-9.]/g, '');
            let start = 0, duration = 1200;
            const step = timestamp => {
                if (!start) start = timestamp;
                const p = Math.min((timestamp - start) / duration, 1);
                const ease = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(ease * num) + suffix;
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(el);
        }
    });
}, { threshold: 0.5 });
statsEl.forEach(el => observer.observe(el));
