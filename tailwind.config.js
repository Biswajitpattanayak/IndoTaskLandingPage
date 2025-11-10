/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',               // blue
        'primary-foreground': '#ffffff',  // text on primary
        secondary: '#6b7280',             // gray
        'secondary-foreground': '#ffffff',
        destructive: '#ef4444',           // red
        accent: '#fbbf24',                // amber
        'accent-foreground': '#000000',
        background: '#f9fafb',            // light gray background
        ring: '#6366f1',                  // violet for focus ring
        input: '#e5e7eb',                 // input bg
        'icon-bg': '#e5e7eb', // light gray for icon backgrounds
      },
    },
  },
  plugins: [],
};
