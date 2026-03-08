import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
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

        // Target all section elements
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.add('reveal-on-scroll');
            observer.observe(section);
        });

        // Target project cards with staggered delay
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
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
