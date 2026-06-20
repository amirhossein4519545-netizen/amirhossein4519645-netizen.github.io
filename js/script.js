/* ============================================================
   GLOBAL SCRIPTS & PAGE‑SPECIFIC INITIALIZATION
   ============================================================ */
'use strict';

// ---------- MOBILE MENU ----------
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.contains('nav--open');
        if (isOpen) {
            nav.classList.remove('nav--open');
            toggle.classList.remove('mobile-toggle--active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        } else {
            nav.classList.add('nav--open');
            toggle.classList.add('mobile-toggle--active');
            toggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }
    });

    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--open');
            toggle.classList.remove('mobile-toggle--active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

// ---------- STICKY HEADER ----------
function initStickyHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    const hero = document.querySelector('.hero:not(.page-hero)');
    window.addEventListener('scroll', () => {
        const threshold = hero ? hero.offsetHeight - 80 : 100;
        if (window.scrollY > threshold) header.classList.add('header--sticky');
        else header.classList.remove('header--sticky');
    });
}

// ---------- SCROLL REVEAL ----------
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal:not(.reveal--visible)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
}

// ---------- TESTIMONIALS ----------
function initTestimonials() {
    const dots = document.querySelectorAll('#testimonialDots .dot');
    const cards = document.querySelectorAll('.testimonial-card');
    if (!dots.length || !cards.length) return;

    let current = 0;
    function show(i) {
        cards.forEach(c => c.classList.remove('testimonial-card--active'));
        dots.forEach(d => d.classList.remove('dot--active'));
        cards[i].classList.add('testimonial-card--active');
        dots[i].classList.add('dot--active');
        current = i;
    }
    dots.forEach(dot => dot.addEventListener('click', () => show(parseInt(dot.dataset.index))));
    setInterval(() => show((current + 1) % cards.length), 5000);
}

// ---------- FAQ ACCORDION ----------
function initFaq() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const wasOpen = item.classList.contains('faq-item--open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('faq-item--open'));
            if (!wasOpen) item.classList.add('faq-item--open');
        });
    });
}

// ---------- PRODUCT DETAIL PAGE ----------
function initProductDetailPage() {
    const main = document.getElementById('productDetailMain');
    if (!main) return;
    const productId = getUrlParam('id');
    const product = products.find(p => p.id === productId) || products[0];

    document.getElementById('breadcrumbProduct').textContent = product.name;

    main.innerHTML = `
        <div class="product-gallery">
            <div class="gallery-main"><img src="${product.images[0]}" alt="${product.name}" id="mainImage"></div>
            <div class="gallery-thumbs">
                ${product.images.map((img, i) => `<div class="gallery-thumb ${i===0?'gallery-thumb--active':''}" data-index="${i}"><img src="${img}" alt=""></div>`).join('')}
            </div>
        </div>
        <div class="product-info">
            <h1 class="product-info__name">${product.name}</h1>
            <p class="product-info__type">${product.type} · ${product.collection}</p>
            <p>${product.fullDescription}</p>
            <div class="product-info__meta-grid">
                <div><small>Longevity</small><br>${product.longevity}</div>
                <div><small>Type</small><br>${product.type}</div>
                <div><small>Occasion</small><br>${product.occasion.join(', ')}</div>
                <div><small>Collection</small><br>${product.collection}</div>
            </div>
            <div class="product-info__colors">
                ${product.colors.map((c,i) => `<span class="color-swatch" style="background:${c}" title="${product.colorNames[i]}"></span>`).join('')}
            </div>
            <h4>Features</h4>
            <ul>${product.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul>
            <div class="care-instructions"><h4>Care</h4><p>${product.careInstructions}</p></div>
            <div class="product-info__cta">
                <a href="contact.html" class="btn btn--primary">Inquire About This Piece</a>
                <a href="products.html" class="btn btn--outline" style="color:var(--color-charcoal);border-color:var(--color-border);">Back to Collections</a>
            </div>
        </div>
    `;

    // Gallery thumb clicks
    document.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const idx = thumb.dataset.index;
            document.getElementById('mainImage').src = product.images[idx];
            document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('gallery-thumb--active'));
            thumb.classList.add('gallery-thumb--active');
        });
    });

    // Related products
    const related = document.getElementById('relatedProducts');
    if (related) {
        const relatedItems = products.filter(p => product.relatedIds.includes(p.id) && p.id !== product.id).slice(0,3);
        related.innerHTML = relatedItems.map(p => createProductCard(p)).join('');
    }
}

// ---------- NEWSLETTER ----------
function initNewsletter() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                input.value = '';
                alert('Thank you for subscribing!');
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
}

// ---------- CONTACT FORM ----------
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            alert('Please enter a valid email.');
            return;
        }
        if (!message.value.trim()) {
            alert('Please enter your message.');
            return;
        }
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
    });
}

// ---------- FEATURED PRODUCTS (Home) ----------
function initFeatured() {
    const container = document.getElementById('featuredProducts');
    if (container) container.innerHTML = products.slice(0,3).map(p => createProductCard(p)).join('');
}

// ---------- STARTUP ----------
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initStickyHeader();
    initScrollReveal();
    initTestimonials();
    initFaq();
    initProductFilters();
    initProductDetailPage();
    initNewsletter();
    initContactForm();
    initFeatured();
    // Additional reveal trigger after dynamic content
    setTimeout(initScrollReveal, 200);
});