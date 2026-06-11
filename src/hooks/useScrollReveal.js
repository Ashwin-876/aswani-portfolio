import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Target all section elements EXCEPT the hero (which is always in view on load)
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            // Skip hero — it's always visible on load, don't hide it
            if (section.id === 'hero' || section.classList.contains('hero')) {
                section.classList.add('revealed');
                return;
            }
            section.classList.add('reveal-on-scroll');
            observer.observe(section);
        });

        // Target project cards with staggered delay
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.transitionDelay = `${(index % 3) * 0.15}s`;
            card.classList.add('reveal-on-scroll');
            observer.observe(card);
        });

        // Target skill cards with staggered delay
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            card.style.transitionDelay = `${(index % 3) * 0.15}s`;
            card.classList.add('reveal-on-scroll');
            observer.observe(card);
        });

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);
};

export default useScrollReveal;

