// Fade-in effect with smooth transition
export const fadeIn = {
  hidden: { opacity: 0, transform: "translateY(50px)" },
  visible: { 
    opacity: 1, 
    transform: "translateY(0px)", 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1] // More natural cubic bezier easing
    } 
  },
};

// Zoom-in effect for images
export const zoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 1.2, 
      ease: "easeOut" 
    } 
  },
};

// Staggered text effect with smoother transition
export const staggerText = {
  hidden: { opacity: 0, transform: "translateY(50px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { 
      duration: 1, 
      staggerChildren: 0.15, 
      ease: "easeOut" 
    },
  },
};

// Slide-in from the left with a smooth ease
export const slideInLeft = {
  hidden: { opacity: 0, transform: "translateX(-100px)" },
  visible: { 
    opacity: 1, 
    transform: "translateX(0px)", 
    transition: { 
      duration: 0.5, 
      ease: "easeOut", 
    } 
  },
};

// Slide-in from the right with a smooth ease
export const slideInRight = {
  hidden: { opacity: 0, transform: "translateX(100px)" },
  visible: { 
    opacity: 1, 
    transform: "translateX(0px)", 
    transition: { 
      duration: 0.5, 
      ease: "easeOut", 
    } 
  },
};

// Bounce effect with smooth spring motion
export const bounce = {
  hidden: { opacity: 0, transform: "translateY(-50px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: {
      type: "spring",
      stiffness: 120, // Reduced from 300
      damping: 15, // Reduced from 25
    },
  },
};

// Fade-in with Scale effect
export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.9, 
      ease: "easeOut" 
    },
  },
};

// Flip effect with smooth rotation
export const flipIn = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    transition: { 
      duration: 1, 
      ease: "easeOut" 
    } 
  },
};

// Fade-in with slight rotation effect
export const fadeInRotate = {
  hidden: { opacity: 0, rotate: 10 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    transition: { 
      duration: 0.9, 
      ease: "easeOut" 
    } 
  },
};

// Simple fade-in effect
export const opacityFadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

// Zoom-out effect
export const zoomOut = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 1, 
      ease: "easeOut" 
    } 
  },
};

// Rotate-in effect
export const rotateIn = {
  hidden: { opacity: 0, rotate: 45 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    transition: { 
      duration: 1, 
      ease: "easeOut" 
    } 
  },
};

// Zoom-in and fade-in effect
export const zoomFadeIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1, 
      ease: "easeOut" 
    },
  },
};
