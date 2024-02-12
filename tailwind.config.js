/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0 0 0 3px #fff",
      },

      gridTemplateColumns: {
        footergridlg: "20% 20% 60%",
      },

      gridTemplateColumns: {
        footergridmd: "25% 25% 50%",
      },
    },
  },
  plugins: [],
};
