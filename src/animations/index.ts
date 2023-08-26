export const NAVBAR_VARIANT = {
  default: {
    background: "rgba(255, 255, 255, 0)",
    height: "80px",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
    borderBottom: "1px solid #fff00000",
  },
  animate: {
    height: "60px",
    background: "rgba(255, 255, 255, 0.90)",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
    backdropFilter: "blur(4px)",
    borderBottom: "1px solid #E4E4E4",
  },
};

export const NAVBAR_WRAPPER_VARIANT = {
  default: {
    width: "100%",
  },
  animate: {
    width: "75%",
  },
};

export const NAVBAR_BRAND_VARIANT = {
  default: {
    color: "#272727",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  animate: {
    color: "#6F74F1",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export const DROPDOWN_VARIANT = {
  default: {
    opacity: 0,
    y: "10px",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export const SWITCH_VARIANT = {
  default: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

export const PORJECT_VARIANT = {
  default: {
    opacity: 0,
    y: "10%",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const PROJECT_ODD_VARIANT = {
  default: {
    opacity: 0,
    x: "10%",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const PROJECT_EVEN_VARIANT = {
  default: {
    opacity: 0,
    x: "-10%",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const TAP_ANIMATION = {
  scale: 0.75,
  transition: {
    ease: "easeInOut",
    duration: 0,
  },
};

export const OPACITY_VARIANT = (index?: number) => {
  return {
    default: {
      opacity: 0,
      y: !index ? "100%" : "0%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
    animate: {
      opacity: 1,
      y: "0%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: !index ? 0 : 0.3 * index,
      },
    },
  };
};

export const OPACITY_2_VARIANT = {
  default: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export const PROJECT_MODAL_VARIANT = {
  default: {
    opacity: 0,
    scale: 0.5,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};
