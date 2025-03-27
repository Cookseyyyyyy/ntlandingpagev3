import React, { useEffect, useState } from 'react';
import './background.css';

const Background: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position as a percentage of window size
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const transform = `
    translateY(-50%)
    perspective(1000px)
    rotateX(${mousePosition.y * -3}deg)
    rotateY(${mousePosition.x * 3}deg)
    scale(1.1)
  `;

  return (
    <div className="background">
      <img 
        src="/birefpage.png"
        alt="Background"
        className="background-image"
        style={{
          transform,
        }}
      />
    </div>
  );
};

export default Background;
