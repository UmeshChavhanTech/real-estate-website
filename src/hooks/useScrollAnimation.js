import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observerRef.current = observer;

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      if (observerRef.current) {
        scrollElements.forEach((el) => observerRef.current.unobserve(el));
      }
    };
  }, []);
};