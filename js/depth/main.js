const toggleActive = (selector) => {
    const buttons = document.querySelectorAll(selector);
    if (!buttons.length) return;
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
};

toggleActive('.cat-btn');
toggleActive('.sub-pill');
toggleActive('.sort-btn');

const navKey = document.body.dataset.nav;
if (navKey) {
    const pills = document.querySelectorAll('.nav-pill');
    pills.forEach(p => p.classList.remove('active'));
    const active = document.querySelector(`.nav-pill[data-nav="${navKey}"]`);
    if (active) active.classList.add('active');
}

const countEls = document.querySelectorAll('.count-up');
if (countEls.length) {
    const countUp = (el, target, suffix = '', duration = 1200) => {
        if (isNaN(target)) return;
        let start = null;
        const step = ts => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            const val = target < 10 ? Math.round(ease * target) : Math.round(ease * target);
            el.textContent = val + suffix;
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const raw = el.textContent;
            const suffix = raw.replace(/[0-9.]/g, '');
            const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
            if (!isNaN(num)) countUp(el, num, suffix);
            obs.unobserve(el);
        });
    }, { threshold: 0.5 });

    countEls.forEach(el => obs.observe(el));
}
