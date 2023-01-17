/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./assets/*.{html,js,css}", "./views/*.ejs"],
    theme: {
        extend: {},
    },
    plugins: [
        {
            tailwindcss: {},
            autoprefixer: {},
        },
    ],
};
