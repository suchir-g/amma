import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const ImageWithEffect = ({ src, alt, caption }) => {
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef(null);

  const props = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: hovered ? "translateY(-10px)" : "translateY(0px)",
    },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Image is now in view
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = imgRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <animated.div
      style={props}
      ref={imgRef}
      className="fade-in image-effect-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inView && (
        <>
          <img
            src={`${process.env.PUBLIC_URL}/images/${src}`}
            alt={alt}
            className="image"
          />
          <div className="caption">{caption}</div>
        </>
      )}
    </animated.div>
  );
};

export default ImageWithEffect;
