import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './HoverCard.css';

const cardVariants = {
  rest: { y: 0, boxShadow: '0 4px 15px var(--shadow-primary)' },
  hover: { y: -8, boxShadow: '0 22px 45px var(--shadow-primary)' },
};

const spotlightVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

function makeIconVariants(accentSolid) {
  return {
    rest: { scale: 1, rotate: 0, color: 'var(--text-primary)' },
    hover: { scale: 1.16, rotate: -8, color: accentSolid },
  };
}

function HoverCard({
  icon,
  title,
  description,
  accentSolid = '#5be3d6',
  accentSoft = 'rgba(91, 227, 214, 0.35)',
  className = '',
}) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 22, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [7, -7]);
  const rotateY = useTransform(smoothX, [0, 1], [-7, 7]);
  const spotlightX = useTransform(smoothX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(smoothY, (v) => `${v * 100}%`);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className={`hover-card ${className}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardVariants}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        '--card-accent': accentSoft,
        '--card-accent-solid': accentSolid,
      }}
    >
      <motion.div
        className="hover-card-spotlight"
        variants={spotlightVariants}
        transition={{ duration: 0.3 }}
        style={{ '--spot-x': spotlightX, '--spot-y': spotlightY }}
      />
      <div className="hover-card-sheen" />

      <div className="overview-card-content hover-card-content">
        <motion.div
          className="overview-card-icon hover-card-icon"
          variants={makeIconVariants(accentSolid)}
          transition={{ type: 'spring', stiffness: 320, damping: 14 }}
        >
          {icon}
        </motion.div>
        <h3>{title}</h3>
        {description && <p className="hover-card-description">{description}</p>}
      </div>
    </motion.div>
  );
}

export default HoverCard;
