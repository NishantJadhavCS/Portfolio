import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import './SkillSphereItem.css';

const SkillSphereItem = ({ name, image }) => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Realistic horizontal spin (rotateY)
    await controls.start({
      rotateY: [0, 360],
      scale: [1, 1.15, 1],
      transition: { 
        duration: 0.8, 
        ease: "anticipate"
      }
    });

    setIsAnimating(false);
  };

  return (
    <motion.div 
      className="skill-sphere-item"
      style={{ perspective: "1000px" }}
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
    >
      <motion.div 
        className="sphere-inner"
        animate={controls}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img src={`/images/${image}`} alt={name} className="skill-icon" />
        <div className="sphere-glow"></div>
        <div className="sphere-shading"></div>
      </motion.div>
      <span className="skill-name">{name}</span>
    </motion.div>
  );
};

export default SkillSphereItem;
