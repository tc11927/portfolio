import React, { useEffect, useRef, useState } from "react";

function FadeInSection({
  children,
  className = "",
  delay = 0,
}) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const current = domRef.current;

    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(current);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  );
}

export default FadeInSection;