import React from "react";

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <button
    {...props}
    className="w-full p-4 rounded-lg flex items-center justify-center gap-2 whitespace-nowrap font-sans bg-interactive-primary-300 text-ink-inverse [&:not(:disabled):not(:active)]:hover:bg-interactive-primary-400 [&:not(:disabled)]:active:bg-interactive-primary-500"
  >
    Get quotes
  </button>
);
