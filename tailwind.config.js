module.exports = {
    purge: process.env.NODE_ENV !== "production" ? [] : ["./public/**/*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
