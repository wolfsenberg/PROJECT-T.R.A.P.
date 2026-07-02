import { Question } from "./types";

export const discreteStructuresQuestions: Question[] = [
  // ========== BASIC COUNTING: Product Rule & Sum Rule (Questions 1-10) ==========
  {
    question: "A restaurant offers 4 appetizers, 6 main courses, and 3 desserts. How many different 3-course meals (one of each) can be ordered?",
    choices: ["13", "72", "24", "36"],
    answer: 1,
    explanation: "By the multiplication principle (product rule): 4 × 6 × 3 = 72 different meals."
  },
  {
    question: "A license plate consists of 3 letters followed by 4 digits. How many different plates are possible if repetition is allowed?",
    choices: ["17,576,000", "175,760,000", "1,757,600", "26 × 10"],
    answer: 1,
    explanation: "By the product rule: 26³ × 10⁴ = 17,576 × 10,000 = 175,760,000."
  },
  {
    question: "A student must choose a project from either Group A (5 projects) or Group B (7 projects). How many choices does the student have?",
    choices: ["35", "12", "2", "57"],
    answer: 1,
    explanation: "By the addition principle (sum rule): since the groups are disjoint, total choices = 5 + 7 = 12."
  },
  {
    question: "How many bit strings of length 8 are there?",
    choices: ["64", "128", "256", "512"],
    answer: 2,
    explanation: "Each bit has 2 choices (0 or 1), and there are 8 positions. By the product rule: 2⁸ = 256."
  },
  {
    question: "A PIN code is 4 digits long (0-9). How many different PINs are possible?",
    choices: ["40", "10,000", "5,040", "1,000"],
    answer: 1,
    explanation: "Each digit has 10 choices, and repetition is allowed. By the product rule: 10⁴ = 10,000."
  },
  {
    question: "A wardrobe has 5 shirts, 4 pants, and 3 pairs of shoes. How many different outfits (one of each) can be formed?",
    choices: ["12", "60", "15", "120"],
    answer: 1,
    explanation: "By the multiplication principle: 5 × 4 × 3 = 60 different outfits."
  },
  {
    question: "A committee can be selected from Department A (8 candidates) or Department B (6 candidates), but not both. How many ways can one person be chosen?",
    choices: ["48", "14", "2", "56"],
    answer: 1,
    explanation: "By the sum rule (tasks are mutually exclusive): 8 + 6 = 14 ways."
  },
  {
    question: "How many 3-digit numbers can be formed using digits 1-9 if repetition is allowed?",
    choices: ["729", "504", "84", "27"],
    answer: 0,
    explanation: "Each of the 3 positions has 9 choices (digits 1-9). By the product rule: 9 × 9 × 9 = 9³ = 729."
  },
  {
    question: "A survey has 10 yes/no questions. How many different ways can a student complete the survey?",
    choices: ["20", "100", "512", "1,024"],
    answer: 3,
    explanation: "Each question has 2 choices. By the product rule: 2¹⁰ = 1,024."
  },
  {
    question: "How many functions are there from a set with 3 elements to a set with 4 elements?",
    choices: ["12", "24", "64", "81"],
    answer: 2,
    explanation: "Each of the 3 elements in the domain can map to any of the 4 elements in the codomain. Total = 4³ = 64."
  },
  // ========== BASIC COUNTING: Permutations (Questions 11-20) ==========
  {
    question: "Evaluate P(6, 2).",
    choices: ["15", "30", "36", "720"],
    answer: 1,
    explanation: "P(6,2) = 6!/(6-2)! = 6!/4! = 6 × 5 = 30."
  },
  {
    question: "How many ways can 5 people be arranged in a line?",
    choices: ["25", "60", "120", "720"],
    answer: 2,
    explanation: "This is P(5,5) = 5! = 5 × 4 × 3 × 2 × 1 = 120."
  },
  {
    question: "In how many ways can a president, vice president, and secretary be chosen from a club of 10 members?",
    choices: ["720", "120", "30", "1,000"],
    answer: 0,
    explanation: "P(10,3) = 10 × 9 × 8 = 720. Order matters since the positions are distinct."
  },
  {
    question: "How many 4-letter arrangements can be formed from the letters A, B, C, D, E, F (no repetition)?",
    choices: ["360", "720", "24", "15"],
    answer: 0,
    explanation: "P(6,4) = 6!/(6-4)! = 6!/2! = 720/2 = 360."
  },
  {
    question: "Evaluate P(8, 3).",
    choices: ["56", "336", "512", "40,320"],
    answer: 1,
    explanation: "P(8,3) = 8!/(8-3)! = 8!/5! = 8 × 7 × 6 = 336."
  },
  {
    question: "How many ways can 3 books be arranged on a shelf if chosen from 7 books?",
    choices: ["35", "210", "343", "5,040"],
    answer: 1,
    explanation: "P(7,3) = 7 × 6 × 5 = 210. Order matters for arrangement on a shelf."
  },
  {
    question: "How many permutations of 4 items taken from 4 items are there?",
    choices: ["4", "16", "24", "256"],
    answer: 2,
    explanation: "P(4,4) = 4! = 4 × 3 × 2 × 1 = 24."
  },
  {
    question: "How many different signals can be made by arranging 3 flags in a row from 5 distinct flags?",
    choices: ["15", "60", "125", "10"],
    answer: 1,
    explanation: "P(5,3) = 5 × 4 × 3 = 60. Each arrangement creates a different signal."
  },
  {
    question: "How many 3-digit numbers can be formed using digits 1-5 without repetition?",
    choices: ["60", "125", "10", "15"],
    answer: 0,
    explanation: "P(5,3) = 5 × 4 × 3 = 60. No repetition allowed and order matters."
  },
  {
    question: "How many ways can 8 runners finish in first, second, and third place?",
    choices: ["56", "336", "512", "24"],
    answer: 1,
    explanation: "P(8,3) = 8 × 7 × 6 = 336. The order of finishing matters."
  },
  // ========== BASIC COUNTING: Combinations (Questions 21-30) ==========
  {
    question: "Evaluate C(8, 3).",
    choices: ["56", "336", "24", "512"],
    answer: 0,
    explanation: "C(8,3) = 8!/(3! × 5!) = (8 × 7 × 6)/(3 × 2 × 1) = 336/6 = 56."
  },
  {
    question: "A committee of 4 is to be selected from 9 people. How many committees are possible?",
    choices: ["36", "3,024", "126", "6,561"],
    answer: 2,
    explanation: "C(9,4) = 9!/(4! × 5!) = (9 × 8 × 7 × 6)/(4 × 3 × 2 × 1) = 3,024/24 = 126."
  },
  {
    question: "How many ways can 5 cards be chosen from a standard deck of 52 cards?",
    choices: ["2,598,960", "311,875,200", "52⁵", "120"],
    answer: 0,
    explanation: "C(52,5) = 52!/(5! × 47!) = 2,598,960. Order doesn't matter in a hand of cards."
  },
  {
    question: "Evaluate C(10, 7).",
    choices: ["120", "720", "210", "5,040"],
    answer: 0,
    explanation: "C(10,7) = C(10,3) = (10 × 9 × 8)/(3 × 2 × 1) = 720/6 = 120."
  },
  {
    question: "A pizza shop offers 8 toppings. How many ways can a customer choose 3 toppings?",
    choices: ["24", "56", "336", "512"],
    answer: 1,
    explanation: "C(8,3) = 8!/(3! × 5!) = 56. Order of toppings doesn't matter."
  },
  {
    question: "How many ways can a team of 3 be chosen from 6 men and 4 women if the team must have exactly 2 men and 1 woman?",
    choices: ["60", "120", "15", "30"],
    answer: 0,
    explanation: "Choose 2 men from 6: C(6,2) = 15. Choose 1 woman from 4: C(4,1) = 4. Total = 15 × 4 = 60."
  },
  {
    question: "What is C(n, 0) for any non-negative integer n?",
    choices: ["0", "1", "n", "n!"],
    answer: 1,
    explanation: "C(n,0) = n!/(0! × n!) = 1. There is exactly one way to choose nothing from n items."
  },
  {
    question: "What is the value of C(n, n)?",
    choices: ["0", "n", "n!", "1"],
    answer: 3,
    explanation: "C(n,n) = n!/(n! × 0!) = 1. There is exactly one way to choose all n items."
  },
  {
    question: "Evaluate C(12, 2).",
    choices: ["132", "66", "24", "144"],
    answer: 1,
    explanation: "C(12,2) = (12 × 11)/(2 × 1) = 132/2 = 66."
  },
  {
    question: "A class has 20 students. How many ways can a group of 3 students be selected?",
    choices: ["1,140", "6,840", "8,000", "60"],
    answer: 0,
    explanation: "C(20,3) = (20 × 19 × 18)/(3 × 2 × 1) = 6,840/6 = 1,140."
  },
  // ========== BASIC COUNTING: Permutations with Repetition & Circular (Questions 31-38) ==========
  {
    question: "How many distinguishable permutations are there of the letters in MISSISSIPPI?",
    choices: ["39,916,800", "34,650", "11!", "4,989,600"],
    answer: 1,
    explanation: "MISSISSIPPI has 11 letters: M(1), I(4), S(4), P(2). Permutations = 11!/(4! × 4! × 2! × 1!) = 39,916,800/(24 × 24 × 2 × 1) = 34,650."
  },
  {
    question: "How many distinguishable permutations are there of the letters in the word BANANA?",
    choices: ["720", "60", "120", "360"],
    answer: 1,
    explanation: "BANANA has 6 letters: B(1), A(3), N(2). Permutations = 6!/(1! × 3! × 2!) = 720/(1 × 6 × 2) = 60."
  },
  {
    question: "In how many ways can 6 people be seated around a circular table?",
    choices: ["720", "120", "360", "60"],
    answer: 1,
    explanation: "Circular permutations of n objects = (n-1)! = (6-1)! = 5! = 120."
  },
  {
    question: "How many circular arrangements can be made with 5 distinct beads if rotations are considered identical but reflections are considered different?",
    choices: ["120", "24", "60", "12"],
    answer: 1,
    explanation: "Circular permutations of n distinct objects, when rotations are considered identical and reflections are considered different, equal (n-1)! = 4! = 24. If reflections were also identical, the answer would be 4!/2 = 12."
  },
  {
    question: "How many distinguishable permutations are there of the letters in COMMITTEE?",
    choices: ["362,880", "45,360", "90,720", "181,440"],
    answer: 1,
    explanation: "COMMITTEE has 9 letters: C(1), O(1), M(2), I(1), T(2), E(2). Permutations = 9!/(2! × 2! × 2!) = 362,880/8 = 45,360."
  },
  {
    question: "How many 5-digit strings can be formed using the digits where the string must have three 1s and two 2s?",
    choices: ["10", "120", "20", "32"],
    answer: 0,
    explanation: "This is the number of permutations with repetition: 5!/(3! × 2!) = 120/(6 × 2) = 10."
  },
  {
    question: "How many ways can 6 people be seated in a row if two specific people must sit next to each other?",
    choices: ["120", "240", "360", "720"],
    answer: 1,
    explanation: "Treat the two people as a single block → 5 units to arrange = 5! = 120. The pair can be internally arranged in 2! = 2 ways. Total = 5! × 2! = 120 × 2 = 240."
  },
  {
    question: "How many 4-digit strings can be formed using two As and two Bs?",
    choices: ["6", "4", "16", "24"],
    answer: 0,
    explanation: "Permutations with repetition: 4!/(2! × 2!) = 24/4 = 6."
  },
  // ========== BASIC COUNTING: Pigeonhole Principle (Questions 39-44) ==========
  {
    question: "A drawer contains 10 black socks and 10 white socks. What is the minimum number of socks you must draw (without looking) to guarantee a matching pair?",
    choices: ["2", "3", "10", "11"],
    answer: 1,
    explanation: "By the Pigeonhole Principle: there are 2 colors (pigeonholes). Drawing 3 socks guarantees at least 2 are the same color (⌈3/2⌉ = 2 ≥ 2)."
  },
  {
    question: "If 13 people are in a room, what is guaranteed about their birth months?",
    choices: ["All have different birth months", "At least 2 share a birth month", "Exactly 2 share a birth month", "At least 3 share a birth month"],
    answer: 1,
    explanation: "By the Pigeonhole Principle: 12 months (pigeonholes), 13 people (pigeons). Since 13 > 12, at least 2 people must share a birth month."
  },
  {
    question: "In a group of 367 people, what can be guaranteed about birthdays?",
    choices: ["All have different birthdays", "At least 2 share a birthday", "Exactly 2 share a birthday", "Nothing can be guaranteed"],
    answer: 1,
    explanation: "By the Pigeonhole Principle: 366 possible birthdays (including leap year), 367 people. Since 367 > 366, at least 2 people must share a birthday."
  },
  {
    question: "Using the Generalized Pigeonhole Principle: if 30 students scored on a test with possible scores 0-10 (integers only), at least how many students got the same score?",
    choices: ["2", "3", "4", "5"],
    answer: 1,
    explanation: "There are 11 possible scores (0 through 10). By the Generalized Pigeonhole Principle: ⌈30/11⌉ = ⌈2.73⌉ = 3. At least 3 students share a score."
  },
  {
    question: "If 5 points are placed inside a unit square (1×1), what is the maximum possible minimum distance between some pair of points?",
    choices: ["At most √2/2 ≈ 0.71", "At most 1", "At most √2", "Cannot be determined"],
    answer: 0,
    explanation: "Divide the square into 4 smaller squares of side 1/2. By Pigeonhole, at least 2 of the 5 points are in the same small square. The maximum distance within a 1/2 × 1/2 square is √2/2 ≈ 0.71."
  },
  {
    question: "A bag contains balls numbered 1 to 50. What is the minimum number of balls you must draw to guarantee that you have two balls whose numbers differ by exactly 1?",
    choices: ["2", "25", "26", "51"],
    answer: 2,
    explanation: "Group numbers into 25 pairs: {1,2}, {3,4}, ..., {49,50}. By the Pigeonhole Principle, drawing 26 balls guarantees at least one complete pair (numbers differing by 1)."
  },
  // ========== BASIC COUNTING: Inclusion-Exclusion & Binomial Theorem (Questions 45-50) ==========
  {
    question: "In a class of 40 students, 25 study Math, 20 study Science, and 10 study both. How many study at least one of the two subjects?",
    choices: ["35", "45", "30", "55"],
    answer: 0,
    explanation: "By Inclusion-Exclusion: |M ∪ S| = |M| + |S| - |M ∩ S| = 25 + 20 - 10 = 35."
  },
  {
    question: "What is the coefficient of x³ in the expansion of (x + y)⁵?",
    choices: ["5", "10", "20", "15"],
    answer: 1,
    explanation: "By the Binomial Theorem: C(5,3) × x³ × y² gives coefficient C(5,3) = 10."
  },
  {
    question: "What is the 4th term in the expansion of (a + b)⁶?",
    choices: ["15a⁴b²", "20a³b³", "15a²b⁴", "6a⁵b"],
    answer: 1,
    explanation: "The (k+1)th term is C(6,k)a^(6-k)b^k. The 4th term: k=3, C(6,3)a³b³ = 20a³b³."
  },
  {
    question: "How many integers from 1 to 100 are divisible by 3 or 5?",
    choices: ["47", "53", "33", "20"],
    answer: 0,
    explanation: "By Inclusion-Exclusion: |div by 3| = 33, |div by 5| = 20, |div by 15| = 6. Total = 33 + 20 - 6 = 47."
  },
  {
    question: "What is the sum of all coefficients in (x + y)⁸?",
    choices: ["128", "256", "64", "512"],
    answer: 1,
    explanation: "Set x=1, y=1: (1+1)⁸ = 2⁸ = 256. This gives the sum of all binomial coefficients."
  },
  {
    question: "What row of Pascal's triangle contains the entries 1, 5, 10, 10, 5, 1?",
    choices: ["Row 4", "Row 5", "Row 6", "Row 10"],
    answer: 1,
    explanation: "Row n contains C(n,0), C(n,1), ..., C(n,n). The entries 1,5,10,10,5,1 are C(5,0) through C(5,5), so this is Row 5."
  },
  // ========== SET OPERATIONS: Basic Set Theory (Questions 51-60) ==========
  {
    question: "If A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, what is A ∩ B?",
    choices: ["{1, 2, 6, 7}", "{3, 4, 5}", "{1, 2, 3, 4, 5, 6, 7}", "{}"],
    answer: 1,
    explanation: "A ∩ B (intersection) contains elements common to both sets: {3, 4, 5}."
  },
  {
    question: "If A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, what is A ∪ B?",
    choices: ["{3, 4, 5}", "{1, 2, 3, 4, 5, 6, 7}", "{1, 2, 6, 7}", "{1, 2}"],
    answer: 1,
    explanation: "A ∪ B (union) contains all elements in either set: {1, 2, 3, 4, 5, 6, 7}."
  },
  {
    question: "If A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}, what is A - B?",
    choices: ["{1, 2}", "{6, 7}", "{3, 4, 5}", "{1, 2, 3, 4, 5}"],
    answer: 0,
    explanation: "A - B (set difference) contains elements in A that are not in B: {1, 2}."
  },
  {
    question: "If U = {1,2,3,4,5,6,7,8,9,10} and A = {2,4,6,8,10}, what is A' (complement)?",
    choices: ["{2, 4, 6, 8, 10}", "{1, 3, 5, 7, 9}", "{}", "U"],
    answer: 1,
    explanation: "A' (complement) = U - A = {1, 3, 5, 7, 9}. These are elements in U but not in A."
  },
  {
    question: "What is the power set of A = {a, b}?",
    choices: ["{a, b}", "{{a}, {b}}", "{∅, {a}, {b}, {a,b}}", "{∅, a, b, {a,b}}"],
    answer: 2,
    explanation: "The power set P(A) is the set of all subsets: {∅, {a}, {b}, {a,b}}. It has 2² = 4 elements."
  },
  {
    question: "If |A| = 5, how many elements does the power set P(A) have?",
    choices: ["5", "10", "25", "32"],
    answer: 3,
    explanation: "The power set of a set with n elements has 2ⁿ elements. 2⁵ = 32."
  },
  {
    question: "If A = {1, 2} and B = {x, y}, what is A × B (Cartesian product)?",
    choices: ["{1x, 1y, 2x, 2y}", "{(1,x), (1,y), (2,x), (2,y)}", "{(x,1), (y,2)}", "{{1,x}, {2,y}}"],
    answer: 1,
    explanation: "A × B = {(a,b) | a ∈ A and b ∈ B} = {(1,x), (1,y), (2,x), (2,y)}."
  },
  {
    question: "If A = {1, 2, 3} and B = {a, b}, what is |A × B|?",
    choices: ["5", "6", "8", "9"],
    answer: 1,
    explanation: "|A × B| = |A| × |B| = 3 × 2 = 6."
  },
  {
    question: "What is the symmetric difference A △ B if A = {1,2,3,4} and B = {3,4,5,6}?",
    choices: ["{3, 4}", "{1, 2, 5, 6}", "{1, 2, 3, 4, 5, 6}", "{}"],
    answer: 1,
    explanation: "A △ B = (A - B) ∪ (B - A) = {1,2} ∪ {5,6} = {1, 2, 5, 6}. Elements in exactly one set."
  },
  {
    question: "Which of the following is always true for any sets A and B?",
    choices: ["A ∩ B = A ∪ B", "A ⊆ A ∪ B", "A ∪ B ⊆ A", "A - B = B - A"],
    answer: 1,
    explanation: "A ⊆ A ∪ B is always true because every element of A is in A ∪ B by definition of union."
  },
  // ========== SET OPERATIONS: De Morgan's Laws & Set Identities (Questions 61-67) ==========
  {
    question: "According to De Morgan's Law for sets, what is (A ∪ B)'?",
    choices: ["A' ∪ B'", "A' ∩ B'", "A ∩ B'", "(A ∩ B)'"],
    answer: 1,
    explanation: "De Morgan's Law: (A ∪ B)' = A' ∩ B'. The complement of a union is the intersection of the complements."
  },
  {
    question: "According to De Morgan's Law for sets, what is (A ∩ B)'?",
    choices: ["A' ∩ B'", "A' ∪ B'", "A ∪ B'", "(A ∪ B)'"],
    answer: 1,
    explanation: "De Morgan's Law: (A ∩ B)' = A' ∪ B'. The complement of an intersection is the union of the complements."
  },
  {
    question: "Which set identity is correct?",
    choices: ["A ∪ ∅ = ∅", "A ∩ U = ∅", "A ∪ A' = U", "A ∩ A' = U"],
    answer: 2,
    explanation: "A ∪ A' = U (Complement Law). Every element is either in A or not in A."
  },
  {
    question: "What is A ∩ ∅?",
    choices: ["A", "U", "∅", "A'"],
    answer: 2,
    explanation: "A ∩ ∅ = ∅ (Domination Law). The intersection with the empty set is always empty."
  },
  {
    question: "Using Inclusion-Exclusion: if |A| = 30, |B| = 20, and |A ∪ B| = 40, what is |A ∩ B|?",
    choices: ["10", "50", "0", "20"],
    answer: 0,
    explanation: "|A ∪ B| = |A| + |B| - |A ∩ B|. So 40 = 30 + 20 - |A ∩ B|. Therefore |A ∩ B| = 10."
  },
  {
    question: "In a survey of 100 people, 60 like tea, 50 like coffee, and 30 like both. How many like neither?",
    choices: ["20", "30", "40", "10"],
    answer: 0,
    explanation: "|T ∪ C| = 60 + 50 - 30 = 80. Those who like neither = 100 - 80 = 20."
  },
  {
    question: "Which is the absorption law for sets?",
    choices: ["A ∪ (A ∩ B) = A", "A ∪ (A ∩ B) = B", "A ∩ (A ∪ B) = B", "A ∩ (A ∪ B) = A ∪ B"],
    answer: 0,
    explanation: "Absorption Law: A ∪ (A ∩ B) = A. Also A ∩ (A ∪ B) = A. The set 'absorbs' the combined expression."
  },
  // ========== SET OPERATIONS: Relations (Questions 68-75) ==========
  {
    question: "A relation R on set A = {1,2,3} is R = {(1,1),(2,2),(3,3),(1,2),(2,1)}. Which property does R have?",
    choices: ["Reflexive only", "Symmetric only", "Reflexive and symmetric", "Transitive only"],
    answer: 2,
    explanation: "Reflexive: all (a,a) present ✓. Symmetric: (1,2)∈R and (2,1)∈R ✓. So R is reflexive and symmetric."
  },
  {
    question: "Which of the following relations on the integers is an equivalence relation?",
    choices: ["R = {(a,b) : a < b}", "R = {(a,b) : a divides b}", "R = {(a,b) : a ≡ b (mod 3)}", "R = {(a,b) : a + b is odd}"],
    answer: 2,
    explanation: "Congruence modulo n is reflexive (a ≡ a), symmetric (a ≡ b → b ≡ a), and transitive (a ≡ b, b ≡ c → a ≡ c). It's an equivalence relation."
  },
  {
    question: "A relation that is reflexive, symmetric, and transitive is called a(n):",
    choices: ["Partial order", "Total order", "Equivalence relation", "Function"],
    answer: 2,
    explanation: "An equivalence relation satisfies all three properties: reflexive, symmetric, and transitive."
  },
  {
    question: "The relation 'less than' (<) on integers is:",
    choices: ["Reflexive", "Symmetric", "Transitive", "An equivalence relation"],
    answer: 2,
    explanation: "< is transitive: if a < b and b < c, then a < c. It's not reflexive (a ≮ a) and not symmetric (a < b doesn't imply b < a)."
  },
  {
    question: "If A has 3 elements, how many relations on A are possible?",
    choices: ["8", "64", "512", "256"],
    answer: 2,
    explanation: "A relation on A is a subset of A × A. |A × A| = 3² = 9. Number of subsets = 2⁹ = 512."
  },
  {
    question: "A relation R on set A = {1,2,3} defined by R = {(1,2),(2,3),(1,3)} is:",
    choices: ["Reflexive", "Symmetric", "Transitive", "An equivalence relation"],
    answer: 2,
    explanation: "Transitive: (1,2)∈R and (2,3)∈R implies (1,3)∈R ✓. Not reflexive (missing (1,1),(2,2),(3,3)). Not symmetric (e.g., (1,2)∈R but (2,1)∉R)."
  },
  {
    question: "A relation that is reflexive, antisymmetric, and transitive is called a:",
    choices: ["Equivalence relation", "Partial order", "Function", "Bijection"],
    answer: 1,
    explanation: "A partial order (or partial ordering) is a relation that is reflexive, antisymmetric, and transitive."
  },
  {
    question: "The relation 'divides' (a|b) on positive integers is which type?",
    choices: ["Equivalence relation", "Partial order", "Neither", "Total order"],
    answer: 1,
    explanation: "Divisibility is reflexive (a|a), antisymmetric (a|b and b|a → a=b for positive integers), and transitive (a|b and b|c → a|c). It's a partial order."
  },
  // ========== SET OPERATIONS: Functions (Questions 76-82) ==========
  {
    question: "A function f: A → B is injective (one-to-one) if:",
    choices: ["Every element of B has a preimage", "f(a₁) = f(a₂) implies a₁ = a₂", "f is both one-to-one and onto", "The range equals the codomain"],
    answer: 1,
    explanation: "A function is injective if distinct inputs produce distinct outputs: f(a₁) = f(a₂) → a₁ = a₂."
  },
  {
    question: "A function f: A → B is surjective (onto) if:",
    choices: ["f(a₁) = f(a₂) implies a₁ = a₂", "Every element of B is mapped to by some element of A", "f has an inverse", "|A| = |B|"],
    answer: 1,
    explanation: "Surjective means every element in the codomain B has at least one preimage in A. The range equals the codomain."
  },
  {
    question: "A function that is both injective and surjective is called:",
    choices: ["Partial", "Surjective", "Bijective", "Reflexive"],
    answer: 2,
    explanation: "A bijection is a function that is both one-to-one (injective) and onto (surjective). It establishes a perfect pairing."
  },
  {
    question: "If |A| = 4 and |B| = 3, can there exist an injective function from A to B?",
    choices: ["Yes, always", "No, never", "Only if A ⊂ B", "Yes, if elements repeat"],
    answer: 1,
    explanation: "An injective function requires |A| ≤ |B|. Since 4 > 3, there cannot be an injection from A to B (by pigeonhole, two elements must map to the same value)."
  },
  {
    question: "How many bijective functions exist from a set of 4 elements to itself?",
    choices: ["4", "16", "24", "256"],
    answer: 2,
    explanation: "A bijection from a set to itself is a permutation. The number of permutations of 4 elements = 4! = 24."
  },
  {
    question: "If f: A → B and |A| = 5, |B| = 5, and f is injective, then f is also:",
    choices: ["Only injective", "Surjective", "Neither injective nor surjective", "Undefined"],
    answer: 1,
    explanation: "When |A| = |B| and f is injective (from finite sets), f must also be surjective. Every element of B gets mapped to exactly once."
  },
  {
    question: "The total number of functions from a set A with m elements to a set B with n elements is:",
    choices: ["m × n", "m^n", "n^m", "m! × n!"],
    answer: 2,
    explanation: "Each of the m elements in A can independently map to any of the n elements in B. Total = n^m."
  },
  // ========== SET OPERATIONS: Propositional Logic (Questions 83-95) ==========
  {
    question: "The implication p → q is FALSE only when:",
    choices: ["p is F and q is F", "p is T and q is T", "p is T and q is F", "p is F and q is T"],
    answer: 2,
    explanation: "An implication p → q is false ONLY when the hypothesis p is true and the conclusion q is false. All other cases yield true."
  },
  {
    question: "What is the contrapositive of p → q?",
    choices: ["q → p", "¬p → ¬q", "¬q → ¬p", "p → ¬q"],
    answer: 2,
    explanation: "The contrapositive of p → q is ¬q → ¬p. It is logically equivalent to the original implication."
  },
  {
    question: "What is the converse of p → q?",
    choices: ["¬q → ¬p", "q → p", "¬p → ¬q", "p ∧ ¬q"],
    answer: 1,
    explanation: "The converse of p → q is q → p. Note: the converse is NOT logically equivalent to the original."
  },
  {
    question: "What is the inverse of p → q?",
    choices: ["¬q → ¬p", "q → p", "¬p → ¬q", "¬p → q"],
    answer: 2,
    explanation: "The inverse of p → q is ¬p → ¬q. The inverse is logically equivalent to the converse (q → p)."
  },
  {
    question: "Which of the following is a tautology?",
    choices: ["p ∧ ¬p", "p ∨ ¬p", "p → q", "p ∧ q"],
    answer: 1,
    explanation: "p ∨ ¬p is always true regardless of the truth value of p (Law of Excluded Middle). It's a tautology."
  },
  {
    question: "Which of the following is a contradiction?",
    choices: ["p ∨ ¬p", "p → p", "p ∧ ¬p", "p ∨ q"],
    answer: 2,
    explanation: "p ∧ ¬p is always false regardless of the truth value of p. A proposition cannot be both true and false simultaneously."
  },
  {
    question: "What is De Morgan's Law for logic applied to ¬(p ∨ q)?",
    choices: ["¬p ∨ ¬q", "¬p ∧ ¬q", "p ∧ q", "¬p ∨ q"],
    answer: 1,
    explanation: "De Morgan's Law: ¬(p ∨ q) ≡ ¬p ∧ ¬q. The negation of a disjunction is the conjunction of the negations."
  },
  {
    question: "What is De Morgan's Law for logic applied to ¬(p ∧ q)?",
    choices: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ q", "¬p → ¬q"],
    answer: 1,
    explanation: "De Morgan's Law: ¬(p ∧ q) ≡ ¬p ∨ ¬q. The negation of a conjunction is the disjunction of the negations."
  },
  {
    question: "The biconditional p ↔ q is true when:",
    choices: ["p and q have the same truth value", "p is true", "q is true", "p and q have different truth values"],
    answer: 0,
    explanation: "p ↔ q (p if and only if q) is true when both p and q are true, or both are false. It requires the same truth values."
  },
  {
    question: "If p is TRUE and q is FALSE, what is the truth value of p → q?",
    choices: ["TRUE", "FALSE", "Undefined", "Cannot be determined"],
    answer: 1,
    explanation: "p → q is FALSE only when p is TRUE and q is FALSE. This is that exact case."
  },
  {
    question: "Which logical equivalence represents the conditional p → q?",
    choices: ["p ∧ q", "¬p ∨ q", "p ∨ ¬q", "¬p ∧ q"],
    answer: 1,
    explanation: "p → q ≡ ¬p ∨ q. An implication is equivalent to 'not p or q'. This is a fundamental equivalence."
  },
  {
    question: "What is the truth value of the statement: 'If 2 + 2 = 5, then the moon is made of cheese'?",
    choices: ["TRUE", "FALSE", "Undefined", "Paradox"],
    answer: 0,
    explanation: "The hypothesis '2+2=5' is false. An implication with a false hypothesis is always true (vacuously true), regardless of the conclusion."
  },
  {
    question: "A proposition that is neither a tautology nor a contradiction is called a:",
    choices: ["Tautology", "Contradiction", "Contingency", "Biconditional"],
    answer: 2,
    explanation: "A contingency is a proposition that is sometimes true and sometimes false depending on the truth values of its variables."
  },
  // ========== SET OPERATIONS: Quantifiers (Questions 96-100) ==========
  {
    question: "What is the negation of ∀x P(x)?",
    choices: ["∀x ¬P(x)", "∃x ¬P(x)", "¬∃x P(x)", "∃x P(x)"],
    answer: 1,
    explanation: "¬(∀x P(x)) ≡ ∃x ¬P(x). The negation of 'for all x, P(x)' is 'there exists an x such that not P(x)'."
  },
  {
    question: "What is the negation of ∃x P(x)?",
    choices: ["∃x ¬P(x)", "∀x ¬P(x)", "∀x P(x)", "¬∀x P(x)"],
    answer: 1,
    explanation: "¬(∃x P(x)) ≡ ∀x ¬P(x). The negation of 'there exists x with P(x)' is 'for all x, not P(x)'."
  },
  {
    question: "The statement 'Every student passed the exam' can be written as:",
    choices: ["∃x (Student(x) → Passed(x))", "∀x (Student(x) → Passed(x))", "∀x (Student(x) ∧ Passed(x))", "∃x (Student(x) ∧ Passed(x))"],
    answer: 1,
    explanation: "Universal statements use ∀ with →: 'For all x, if x is a student then x passed.' Using ∧ would mean everything in the domain is a student who passed."
  },
  {
    question: "The statement 'Some cats are black' is symbolized as:",
    choices: ["∀x (Cat(x) → Black(x))", "∃x (Cat(x) → Black(x))", "∃x (Cat(x) ∧ Black(x))", "∀x (Cat(x) ∧ Black(x))"],
    answer: 2,
    explanation: "Existential statements use ∃ with ∧: 'There exists an x such that x is a cat AND x is black.' Using → would be too weak."
  },
  {
    question: "What is the negation of 'All birds can fly' (∀x (Bird(x) → Fly(x)))?",
    choices: ["No birds can fly", "∃x (Bird(x) ∧ ¬Fly(x))", "∀x (Bird(x) ∧ ¬Fly(x))", "∃x (¬Bird(x) ∨ Fly(x))"],
    answer: 1,
    explanation: "¬∀x(Bird(x) → Fly(x)) ≡ ∃x ¬(Bird(x) → Fly(x)) ≡ ∃x (Bird(x) ∧ ¬Fly(x)). 'There exists a bird that cannot fly.'"
  },
];
