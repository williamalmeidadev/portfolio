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


//SEÇÃO EXPERIÊNCIA 
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
        toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
});

gsap.from(".tech-descricao", {
    scrollTrigger: {
        trigger: ".tech-focus",
        start: "top 70%",
        toggleActions: "play none none none",
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

gsap.from(".tech-stack .skill", {
    scrollTrigger: {
        trigger: ".tech-stack",
        start: "top 70%",
        toggleActions: "play none none none",
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
        toggleActions: "play none none none",
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
        toggleActions: "play none none none",
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
        toggleActions: "play none none none",
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
        toggleActions: "play none none none",
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
