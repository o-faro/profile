module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
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
