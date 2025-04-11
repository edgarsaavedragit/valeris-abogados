// Menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('legalForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación simple
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !service || !message) {
                alert('Por favor complete todos los campos requeridos.');
                return;
            }
            
            // Simular envío
            alert('Gracias por su consulta. Nos pondremos en contacto pronto.');
            contactForm.reset();
        });
    }
    
    // Slider de abogados
    let currentAttorney = 0;
    const attorneyCards = document.querySelectorAll('.attorney-card');
    
    function showAttorney(index) {
        attorneyCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }
    
    // Slider de testimonios
    let currentTestimonial = 0;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }
    
    // Inicializar sliders
    if (attorneyCards.length > 0) {
        showAttorney(currentAttorney);
        
        setInterval(() => {
            currentAttorney = (currentAttorney + 1) % attorneyCards.length;
            showAttorney(currentAttorney);
        }, 5000);
    }
    
    if (testimonialCards.length > 0) {
        showTestimonial(currentTestimonial);
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }, 7000);
    }
    
    // Animación al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .attorney-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar elementos para animación
    document.querySelectorAll('.service-card, .attorney-card, .testimonial-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});