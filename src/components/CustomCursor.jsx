import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'project'
  const cursorRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor follower movement
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      
      // Check if hovering over a project card
      if (target.closest('.project-stack-card-inner') || target.closest('.project-card')) {
        setCursorType('project');
      } 
      // Check if hovering over buttons, links, or icons
      else if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.social-icon-link') || 
        target.closest('.footer-social-link') ||
        target.closest('.contact-social-link') ||
        target.closest('.skill-sphere-item') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`custom-cursor-follower ${cursorType}`}
      style={{
        left: cursorX,
        top: cursorY,
      }}
    >
      {cursorType === 'project' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="cursor-text"
        >
          See Project
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
