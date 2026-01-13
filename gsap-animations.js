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
        duration: 0.3,
        stagger: 0.12
    }, "-=0.7");


// ============================================
// SCROLL REVEALS - SEÇÕES
// ============================================

gsap.from(".sobre-galeria-focus", {
    scrollTrigger: {
        trigger: "#sobre",
        start: "top 75%", 
        toggleActions: "play reverse play reverse", 
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
        toggleActions: "play reverse play reverse",
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
        toggleActions: "play reverse play reverse",
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
        toggleActions: "play reverse play reverse",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});


//SEÇÃO EXPERIÊNCIA 
gsap.from("#experiencia h2", {
    scrollTrigger: {
        trigger: "#experiencia",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
});

gsap.to(".timeline::before", {
    scrollTrigger: {
        trigger: ".timeline",
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,
        markers: false, 
        onUpdate: (self) => {
            const timeline = document.querySelector(".timeline");
            if (timeline) {
                const progress = self.progress;
                timeline.style.setProperty("--line-scale", progress);
            }
        }
    }
});

document.querySelectorAll(".timeline-dot").forEach((dot, index) => {
    gsap.from(dot, {
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.5,
            onUpdate: (self) => {
                const totalDots = document.querySelectorAll(".timeline-dot").length;
                const dotThreshold = index / totalDots;
                const progress = self.progress;
                
                if (progress >= dotThreshold) {
                    gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" });
                }
            }
        },
        scale: 0,
        opacity: 0,
    });
});

document.querySelectorAll(".timeline-item").forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.5,
            onUpdate: (self) => {
                const totalItems = document.querySelectorAll(".timeline-item").length;
                const itemThreshold = index / totalItems;
                const progress = self.progress;
                
                if (progress >= itemThreshold + 0.05) { // leve delay após o dot
                    gsap.to(item, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
                }
            }
        },
        x: -40,
        opacity: 0,
    });
});


// ============================================
// STAGGER ANIMATIONS - CARDS E GRIDS
// ============================================

gsap.from("#tecnologias h2", {
    scrollTrigger: {
        trigger: "#tecnologias",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
});

gsap.from(".tech-descricao", {
    scrollTrigger: {
        trigger: "#tecnologias",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

gsap.from(".tech-stack .skill", {
    scrollTrigger: {
        trigger: "#tecnologias",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    },
    y: 40,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.08,
    ease: "back.out(1.2)", 
    clearProps: "all" 
});

gsap.from("#projetos h2", {
    scrollTrigger: {
        trigger: "#projetos",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
});

gsap.from(".projects-grid .project-card", {
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    },
    y: 50,
    opacity: 0,
    scale: 0.95,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out"
});

gsap.from("#certificados h2", {
    scrollTrigger: {
        trigger: "#certificados",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
});

gsap.from(".certificados-grid .certificado-card", {
    scrollTrigger: {
        trigger: ".certificados-grid",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    },
    y: 50,
    opacity: 0,
    scale: 0.9,
    rotation: -3,
    duration: 0.7,
    stagger: {
        amount: 0.6, 
        from: "start", 
        ease: "power1.inOut"
    },
    ease: "back.out(1.1)"
});


//SEÇÃO CONTATO
gsap.from("#contato h2", {
    scrollTrigger: {
        trigger: "#contato",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out"
});

gsap.from(".contato-texto", {
    scrollTrigger: {
        trigger: "#contato",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    },
    y: 20,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out"
});

gsap.from(".contato-botoes .contato-btn", {
    scrollTrigger: {
        trigger: "#contato",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
    },
    y: 30,
    opacity: 0,
    scale: 0.95,
    duration: 0.5,
    stagger: 0.06,
    ease: "back.out(1.5)",
    clearProps: "all" 
});


// ============================================
// MENU MOBILE - ANIMAÇÕES GSAP
// ============================================

const navToggle = document.getElementById("navToggle");
const navOverlay = document.getElementById("navOverlay");
const navClose = document.getElementById("navClose");
const overlayLinks = document.querySelectorAll(".nav-overlay-links a");

gsap.set(navOverlay, { 
    opacity: 0, 
    scale: 1.1,
    pointerEvents: "none"
});

gsap.set(overlayLinks, { 
    y: 20, 
    opacity: 0,
    rotationX: -10
});

const menuOpenTimeline = gsap.timeline({ paused: true });

menuOpenTimeline
    .to(navOverlay, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
        onStart: () => {
            navOverlay.style.pointerEvents = "all";
            document.body.style.overflow = "hidden";
        }
    })
    .to(navClose, {
        rotation: 90,
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
    }, "-=0.15")
    .to(overlayLinks, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.35,
        stagger: 0.05,
        ease: "power2.out"
    }, "-=0.2");

const menuCloseTimeline = gsap.timeline({ paused: true });

menuCloseTimeline
    .to(overlayLinks, {
        y: -15,
        opacity: 0,
        rotationX: 10,
        duration: 0.2,
        stagger: 0.03,
        ease: "power2.in"
    })
    .to(navClose, {
        rotation: 0,
        scale: 1,
        duration: 0.15,
        ease: "power2.in"
    }, "-=0.15")
    .to(navOverlay, {
        opacity: 0,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
            navOverlay.style.pointerEvents = "none";
            document.body.style.overflow = "";
        }
    }, "-=0.2");

navToggle.addEventListener("click", () => {
    menuCloseTimeline.pause(0);
    menuOpenTimeline.restart();
});

navClose.addEventListener("click", () => {
    menuOpenTimeline.pause(0);
    menuCloseTimeline.restart();
});

overlayLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        
        menuOpenTimeline.pause(0);
        menuCloseTimeline.restart();
        
        setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
        }, 300);
    });
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


// ============================================
// EFEITOS 3D TILT COM GSAP (Performance otimizada)
// ============================================

const heroFoto = document.querySelector(".hero-foto img");

if (heroFoto) {
    const xTo = gsap.quickTo(heroFoto, "rotationY", { duration: 0.5, ease: "power1.out" });
    const yTo = gsap.quickTo(heroFoto, "rotationX", { duration: 0.5, ease: "power1.out" });
    const scaleTo = gsap.quickTo(heroFoto, "scale", { duration: 0.5, ease: "power1.out" });
    
    gsap.set(".hero-foto", { perspective: 1200 });
    
    heroFoto.addEventListener("mousemove", e => {
        const rect = heroFoto.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        yTo(rotateX);
        xTo(rotateY);
        scaleTo(1.08);
    });
    
    heroFoto.addEventListener("mouseleave", () => {
        yTo(0);
        xTo(0);
        scaleTo(1);
    });
}

const certificadoCards = document.querySelectorAll(".certificado-card");

certificadoCards.forEach(card => {
    const xTo = gsap.quickTo(card, "rotationY", { duration: 0.6, ease: "power1.out" });
    const yTo = gsap.quickTo(card, "rotationX", { duration: 0.6, ease: "power1.out" });
    const scaleTo = gsap.quickTo(card, "scale", { duration: 0.6, ease: "power1.out" });
    const zTo = gsap.quickTo(card, "z", { duration: 0.6, ease: "power1.out" });
    
    gsap.set(card.parentElement, { perspective: 1500 });
    
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;
        
        yTo(rotateX);
        xTo(rotateY);
        scaleTo(1.06);
        zTo(30);
    });
    
    card.addEventListener("mouseleave", () => {
        yTo(0);
        xTo(0);
        scaleTo(1);
        zTo(0);
    });
});
