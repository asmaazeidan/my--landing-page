@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-cream text-charcoal font-body antialiased;
}

::selection {
  @apply bg-rose/30;
}

/* Visible keyboard focus for accessibility */
a:focus-visible,
button:focus-visible {
  outline: 2px solid theme('colors.gold.DEFAULT');
  outline-offset: 3px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-16px, 20px) scale(1.05); }
}
@keyframes float-slower {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -14px) scale(1.08); }
}
.animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
.animate-float-slower { animation: float-slower 13s ease-in-out infinite; }
