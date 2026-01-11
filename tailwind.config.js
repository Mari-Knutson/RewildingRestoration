/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                nature: {
                    dark: '#1a2e1a', // Forest green
                    light: '#f4f1ea', // Cream/Clay
                    accent: '#c94c4c', // Berry
                    moss: '#5c7a4d',
                    stone: '#8c8c8c',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
