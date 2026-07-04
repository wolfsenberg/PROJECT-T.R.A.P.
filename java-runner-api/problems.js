const problems = {
  "jc-001": {
    title: "Echo Name",
    tests: [
      { input: "Ana\n", expectedOutput: "Hello, Ana" },
      { input: "Miguel\n", expectedOutput: "Hello, Miguel" },
      { input: "Lara\n", expectedOutput: "Hello, Lara" },
    ],
  },
  "jc-002": {
    title: "Sum Two Integers",
    tests: [
      { input: "7 5\n", expectedOutput: "12" },
      { input: "-3 10\n", expectedOutput: "7" },
      { input: "0 0\n", expectedOutput: "0" },
    ],
  },
  "jc-003": {
    title: "Even or Odd",
    tests: [
      { input: "8\n", expectedOutput: "EVEN" },
      { input: "13\n", expectedOutput: "ODD" },
      { input: "0\n", expectedOutput: "EVEN" },
    ],
  },
  "jc-004": {
    title: "Rectangle Area",
    tests: [
      { input: "6 4\n", expectedOutput: "24" },
      { input: "9 11\n", expectedOutput: "99" },
      { input: "1 1\n", expectedOutput: "1" },
    ],
  },
  "jc-005": {
    title: "Celsius to Fahrenheit",
    tests: [
      { input: "0\n", expectedOutput: "32.0" },
      { input: "100\n", expectedOutput: "212.0" },
      { input: "-40\n", expectedOutput: "-40.0" },
    ],
  },
  "jc-006": {
    title: "Maximum of Three",
    tests: [
      { input: "4 9 2\n", expectedOutput: "9" },
      { input: "-1 -5 -3\n", expectedOutput: "-1" },
      { input: "7 7 2\n", expectedOutput: "7" },
    ],
  },
  "jc-007": {
    title: "Sum from 1 to n",
    tests: [
      { input: "5\n", expectedOutput: "15" },
      { input: "1\n", expectedOutput: "1" },
      { input: "100\n", expectedOutput: "5050" },
    ],
  },
  "jc-008": {
    title: "Count Vowels",
    tests: [
      { input: "education\n", expectedOutput: "5" },
      { input: "rhythm\n", expectedOutput: "0" },
      { input: "AEIOUxyz\n", expectedOutput: "5" },
    ],
  },
  "jc-009": {
    title: "Reverse a Word",
    tests: [
      { input: "java\n", expectedOutput: "avaj" },
      { input: "level\n", expectedOutput: "level" },
      { input: "student\n", expectedOutput: "tneduts" },
    ],
  },
  "jc-010": {
    title: "Average of n Scores",
    tests: [
      { input: "4\n80 90 70 100\n", expectedOutput: "85.00" },
      { input: "3\n1 2 2\n", expectedOutput: "1.67" },
      { input: "1\n75\n", expectedOutput: "75.00" },
    ],
  },
  "jc-011": {
    title: "Array Minimum",
    tests: [
      { input: "5\n9 4 7 2 8\n", expectedOutput: "2" },
      { input: "3\n-1 -9 0\n", expectedOutput: "-9" },
      { input: "1\n42\n", expectedOutput: "42" },
    ],
  },
  "jc-012": {
    title: "Palindrome Word",
    tests: [
      { input: "radar\n", expectedOutput: "YES" },
      { input: "java\n", expectedOutput: "NO" },
      { input: "level\n", expectedOutput: "YES" },
    ],
  },
  "jc-013": {
    title: "Multiplication Table Row",
    tests: [
      { input: "3\n", expectedOutput: "3 6 9 12 15 18 21 24 27 30" },
      { input: "1\n", expectedOutput: "1 2 3 4 5 6 7 8 9 10" },
      { input: "7\n", expectedOutput: "7 14 21 28 35 42 49 56 63 70" },
    ],
  },
  "jc-014": {
    title: "Simple Calculator",
    tests: [
      { input: "8 * 7\n", expectedOutput: "56" },
      { input: "10 - 4\n", expectedOutput: "6" },
      { input: "9 / 3\n", expectedOutput: "3" },
    ],
  },
  "jc-015": {
    title: "Student Class Output",
    tests: [
      { input: "Mia 19\n", expectedOutput: "Mia is 19" },
      { input: "Carlo 21\n", expectedOutput: "Carlo is 21" },
      { input: "Joy 18\n", expectedOutput: "Joy is 18" },
    ],
  },
  "jc-016": {
    title: "Unique Word Count",
    tests: [
      { input: "6\ncat dog cat bird dog ant\n", expectedOutput: "4" },
      { input: "5\none one one one one\n", expectedOutput: "1" },
      { input: "4\nred blue green yellow\n", expectedOutput: "4" },
    ],
  },
  "jc-017": {
    title: "Balanced Parentheses Lite",
    tests: [
      { input: "(()())\n", expectedOutput: "BALANCED" },
      { input: "())(\n", expectedOutput: "NOT BALANCED" },
      { input: "((()))\n", expectedOutput: "BALANCED" },
    ],
  },
  "jc-018": {
    title: "Recursive Factorial",
    tests: [
      { input: "5\n", expectedOutput: "120" },
      { input: "0\n", expectedOutput: "1" },
      { input: "7\n", expectedOutput: "5040" },
    ],
  },
  "jc-019": {
    title: "Second Largest",
    tests: [
      { input: "5\n10 3 8 20 15\n", expectedOutput: "15" },
      { input: "4\n-5 -2 -9 -1\n", expectedOutput: "-2" },
      { input: "3\n100 30 60\n", expectedOutput: "60" },
    ],
  },
  "jc-020": {
    title: "Word Frequencies",
    tests: [
      { input: "7\nred blue red green blue red yellow\nred\n", expectedOutput: "3" },
      { input: "4\ncat dog bird fish\nlion\n", expectedOutput: "0" },
      { input: "5\njava java code java code\ncode\n", expectedOutput: "2" },
    ],
  },
};

module.exports = { problems };
