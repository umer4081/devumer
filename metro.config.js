const path = require("path");

module.exports = {
  resolver: {
    extraNodeModules: {
      // Add any custom module paths here
      "module-name": path.resolve(__dirname, "path-to-module"),
    },
  },
};
