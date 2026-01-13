// ============================================
// GSAP ANIMATIONS - Portfolio William Almeida
// ============================================

gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out", 
        duration: 1
    }
});

heroTimeline
    .set(".hero-foto img", { y: 50, opacity: 0 })
    .set(".hero-texto .eyebrow", { y: 30, opacity: 0 })
    .set(".hero-texto h1", { y: 40, opacity: 0 })
    .set(".hero-texto p", { y: 30, opacity: 0 })
    .set(".hero-botoes .btn-primary, .hero-botoes .btn-outline", { y:10, opacity: 0 })
    
    .to(".hero-foto img", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
    })
    
    .to(".hero-texto .eyebrow", {
        y: 0,
        opacity: 1,
        duration: 0.8
    }, "-=0.6") 
    
    .to(".hero-texto h1", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5")
    
    .to(".hero-texto p", {
        y: 0,
        opacity: 1,
        duration: 0.8
    }, "-=0.6")
    
    .to(".hero-botoes .btn-primary, .hero-botoes .btn-outline", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12
    }, "-=0.5");


// ============================================
// SCROLL REVEALS - SEÇÕES
// ============================================

gsap.from(".sobre-galeria-focus", {
    scrollTrigger: {
        trigger: "#sobre",
        start: "top 75%", 
        toggleActions: "play none none none", 
    },
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".sobre-texto", {
    scrollTrigger: {
        trigger: "#sobre",
        start: "top 75%",
        toggleActions: "play none none none",
    },
    x: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".sobre-texto h2", {
    scrollTrigger: {
        trigger: "#sobre",
        start: "top 70%",
        toggleActions: "play none none none",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

gsap.from(".sobre-texto p", {
    scrollTrigger: {
        trigger: "#sobre",
        start: "top 70%",
        toggleActions: "play none none none",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});


gsap.from("#experiencia h2", {
    scrollTrigger: {
        trigger: "#experiencia",
        start: "top 75%",
        toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
});

gsap.from(".timeline-item", {
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 70%",
        toggleActions: "play none none none",
    },
    x: -40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".timeline::before", {
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 70%",
        toggleActions: "play none none none",
    },
    scaleY: 0,
    transformOrigin: "top center",
    duration: 1.2,
    ease: "power2.inOut"
});


// ============================================
// UTILITÁRIOS E HELPERS
// ============================================

function debugScrollTrigger(trigger) {
    ScrollTrigger.create({
        trigger: trigger,
        start: "top 80%",
        end: "bottom 20%",
        markers: false,
        onEnter: () => console.log(`Entrou: ${trigger}`),
        onLeave: () => console.log(`Saiu: ${trigger}`),
    });
}

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});
