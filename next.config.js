module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  generateBuildId: async () => {
    return "my-build-id";
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};
