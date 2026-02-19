module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 150],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "perf",
        "test",
        "chore",
        "docs",
        "build",
        "ci",
      ],
    ],
    "subject-empty": [2, "never"],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case"],
    ],
  },
};
