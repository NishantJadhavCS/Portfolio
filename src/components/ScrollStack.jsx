import { Children, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

// Cards pin with CSS sticky (each a little lower than the previous one) and shrink as later cards slide over them.
// Gaps are spacer elements, not margins: sticky counts an element's margin, so margins would unpin cards early.
function StackSlot({ index, total, progress, top, itemDistance, targetScale, children }) {
  const isLast = index === total - 1;
  const scale = useTransform(progress, [index / total, 1], [1, isLast ? 1 : targetScale]);

  return (
    <>
      <div className="scroll-stack-slot" style={{ top }}>
        <motion.div className="scroll-stack-scale" style={{ scale }}>
          {children}
        </motion.div>
      </div>
      {!isLast && <div aria-hidden="true" style={{ height: itemDistance }} />}
    </>
  );
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  baseScale = 0.85,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const items = Children.toArray(children);
  // stackPosition is a share of the viewport height, matching the old prop format ("10%").
  const stackTop = `${parseFloat(stackPosition)}vh`;

  return (
    <div className={`scroll-stack ${className}`.trim()} ref={containerRef}>
      {items.map((child, i) => (
        <StackSlot
          key={child.key ?? i}
          index={i}
          total={items.length}
          progress={scrollYProgress}
          top={`calc(${stackTop} + ${i * itemStackDistance}px)`}
          itemDistance={itemDistance}
          targetScale={baseScale + i * itemScale}
        >
          {child}
        </StackSlot>
      ))}
      {/* Keeps the finished stack pinned a little longer; must be content, since sticky ignores padding */}
      <div className="scroll-stack-tail" aria-hidden="true" />
    </div>
  );
};

export default ScrollStack;
