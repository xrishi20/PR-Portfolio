module.exports = {
  purge: {
    enabled: false,
    content: ["./index.html"],
  },
  theme: {
    extend: {
      colors: {
        myYellow: "#FBFF12",
        myTeal: "#41EAD4",
        myPink: "#FF206E",
        myBlack: "#0C0F0A",
        myLightGray: "#F4F7F9",
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
