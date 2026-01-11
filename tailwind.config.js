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
                    dark: '#1a3c34',    // Deep forest green (Mossy Earth primary)
                    light: '#f4f1ea',   // Cream/Off-white background
                    accent: '#c2410c',  // Burnt orange/berry accent
                    moss: '#4d7c0f',    // Vibrant moss green
                    stone: '#44403c',   // Warm grey
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
