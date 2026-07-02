import { Question } from "./types";

export const dataStructuresQuestions: Question[] = [
  // ========== ARRAYS (Questions 1-25) ==========
  {
    question: "What is the time complexity of accessing an element in an array by index?",
    choices: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
    answer: 1,
    explanation: "Array access by index is O(1) constant time because elements are stored in contiguous memory. The address is computed directly: base + index * element_size."
  },
  {
    question: "In a zero-indexed array of size n, what is the valid range of indices?",
    choices: ["1 to n", "0 to n", "0 to n - 1", "1 to n - 1"],
    answer: 2,
    explanation: "In zero-indexed arrays, indices range from 0 to n-1. The first element is at index 0 and the last element is at index n-1."
  },
  {
    question: "What is the worst-case time complexity of inserting an element at the beginning of an array?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "Inserting at position 0 requires shifting all n existing elements one position to the right, giving O(n) time complexity."
  },
  {
    question: "A two-dimensional array with 4 rows and 5 columns contains how many elements?",
    choices: ["9", "20", "45", "25"],
    answer: 1,
    explanation: "A 2D array with m rows and n columns contains m × n elements. 4 × 5 = 20 elements."
  },
  {
    question: "Which of the following is a disadvantage of static arrays?",
    choices: ["Fast access by index", "Fixed size determined at compile time", "Contiguous memory allocation", "Simple implementation"],
    answer: 1,
    explanation: "Static arrays have a fixed size set at declaration. You cannot grow them without allocating a new array and copying all elements."
  },
  {
    question: "In row-major order for a 2D array A[m][n], the address of A[i][j] is calculated as:",
    choices: [
      "Base + (i × n + j) × element_size",
      "Base + (j × m + i) × element_size",
      "Base + (i + j) × element_size",
      "Base + (i × j) × element_size"
    ],
    answer: 0,
    explanation: "In row-major order, elements are stored row by row. Address of A[i][j] = Base + (i × number_of_columns + j) × element_size."
  },
  {
    question: "In column-major order for a 2D array A[m][n], the address of A[i][j] is calculated as:",
    choices: [
      "Base + (i × n + j) × element_size",
      "Base + (j × m + i) × element_size",
      "Base + (i + j) × element_size",
      "Base + (j × n + i) × element_size"
    ],
    answer: 1,
    explanation: "In column-major order, elements are stored column by column. Address of A[i][j] = Base + (j × number_of_rows + i) × element_size."
  },
  {
    question: "Given a 2D array A[5][4] stored in row-major order with base address 1000 and element size 4 bytes, what is the address of A[2][3]?",
    choices: ["1044", "1036", "1048", "1040"],
    answer: 0,
    explanation: "Address = 1000 + (2 × 4 + 3) × 4 = 1000 + (8 + 3) × 4 = 1000 + 44 = 1044."
  },
  {
    question: "What is the time complexity of deleting an element from the middle of an array?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "Deleting from the middle requires shifting all subsequent elements one position to the left to fill the gap, resulting in O(n) time."
  },
  {
    question: "What is the time complexity of searching for an element in an unsorted array?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "In an unsorted array, you must potentially check every element (linear search), giving O(n) worst-case time complexity."
  },
  {
    question: "What is the time complexity of searching for an element in a sorted array using binary search?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: 1,
    explanation: "Binary search on a sorted array halves the search space with each comparison, giving O(log n) time complexity."
  },
  {
    question: "Which of the following best describes a dynamic array?",
    choices: [
      "An array that cannot change size",
      "An array that automatically resizes when capacity is exceeded",
      "An array stored in non-contiguous memory",
      "An array that stores only dynamic types"
    ],
    answer: 1,
    explanation: "A dynamic array (e.g., ArrayList, vector) automatically allocates a larger array and copies elements when the current capacity is exceeded."
  },
  {
    question: "When a dynamic array doubles its capacity upon overflow, what is the amortized time complexity of insertion at the end?",
    choices: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
    answer: 1,
    explanation: "Although individual resizes cost O(n), they happen infrequently. Spreading the cost over all insertions gives O(1) amortized time per insertion."
  },
  {
    question: "What is a sparse matrix?",
    choices: [
      "A matrix where all elements are non-zero",
      "A matrix where the majority of elements are zero",
      "A matrix with equal rows and columns",
      "A matrix stored in row-major order"
    ],
    answer: 1,
    explanation: "A sparse matrix has most of its elements as zero. Special representations (like triplet or linked list) save memory by storing only non-zero elements."
  },
  {
    question: "Which representation is most memory-efficient for storing a sparse matrix?",
    choices: [
      "Standard 2D array",
      "Triplet representation (row, column, value)",
      "Row-major 1D array",
      "Column-major 1D array"
    ],
    answer: 1,
    explanation: "Triplet representation stores only non-zero elements with their positions (row, col, value), greatly reducing memory for sparse matrices."
  },
  {
    question: "What is the main advantage of arrays over linked lists?",
    choices: [
      "Dynamic resizing",
      "O(1) random access by index",
      "Efficient insertion at any position",
      "No wasted memory"
    ],
    answer: 1,
    explanation: "Arrays provide O(1) random access using index arithmetic. Linked lists require O(n) traversal to reach an arbitrary element."
  },
  {
    question: "If an array has 1000 elements, how many elements need to be shifted to insert at index 0?",
    choices: ["0", "1", "999", "1000"],
    answer: 3,
    explanation: "Inserting at index 0 requires shifting all 1000 existing elements one position to the right to make room for the new element."
  },
  {
    question: "What is the time complexity of appending an element at the end of an array (assuming sufficient capacity)?",
    choices: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
    answer: 1,
    explanation: "Appending at the end requires no shifting of elements. Simply place the element at the next available index, which is O(1)."
  },
  {
    question: "A 1D array of 10 integers (4 bytes each) starts at address 2000. What is the address of element at index 7?",
    choices: ["2028", "2032", "2024", "2070"],
    answer: 0,
    explanation: "Address = Base + index × element_size = 2000 + 7 × 4 = 2000 + 28 = 2028."
  },
  {
    question: "Which programming language uses column-major order by default for 2D arrays?",
    choices: ["C", "Java", "Fortran", "Python"],
    answer: 2,
    explanation: "Fortran uses column-major order by default. C, C++, Java, and Python (with NumPy default) use row-major order."
  },
  {
    question: "What happens when you access an array index that is out of bounds in Java?",
    choices: [
      "Returns a default value",
      "Undefined behavior",
      "Throws ArrayIndexOutOfBoundsException",
      "Silently ignores the access"
    ],
    answer: 2,
    explanation: "Java performs bounds checking and throws ArrayIndexOutOfBoundsException at runtime when an invalid index is accessed."
  },
  {
    question: "In a 2D array stored in row-major order, which elements are stored adjacently in memory?",
    choices: [
      "Elements in the same column",
      "Elements in the same row",
      "Diagonal elements",
      "Corner elements"
    ],
    answer: 1,
    explanation: "In row-major order, all elements of a row are stored contiguously before the next row begins. So A[i][j] and A[i][j+1] are adjacent."
  },
  {
    question: "What is the space complexity of a one-dimensional array of n elements?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "A one-dimensional array of n elements requires O(n) space, one unit of memory per element stored."
  },
  {
    question: "Given an array [10, 20, 30, 40, 50], after deleting the element at index 1, what is the resulting array?",
    choices: [
      "[10, 30, 40, 50]",
      "[20, 30, 40, 50]",
      "[10, 20, 40, 50]",
      "[10, 30, 40, 50, 50]"
    ],
    answer: 0,
    explanation: "Deleting element at index 1 (value 20) shifts elements at indices 2, 3, 4 left by one position, resulting in [10, 30, 40, 50]."
  },
  {
    question: "Which of the following is NOT an advantage of arrays?",
    choices: [
      "Constant time access to any element",
      "Good cache locality",
      "Efficient insertion and deletion in the middle",
      "Simple implementation"
    ],
    answer: 2,
    explanation: "Arrays have poor insertion/deletion performance in the middle (O(n) due to shifting). Their advantages are O(1) access, cache locality, and simplicity."
  },
  // ========== STACKS (Questions 26-50) ==========
  {
    question: "Which principle does a Stack data structure follow?",
    choices: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "Random Access", "Priority-based"],
    answer: 1,
    explanation: "A Stack follows LIFO (Last In, First Out). The last element pushed onto the stack is the first element to be popped off."
  },
  {
    question: "What operation adds an element to the top of a stack?",
    choices: ["Enqueue", "Push", "Insert", "Append"],
    answer: 1,
    explanation: "Push adds an element to the top of a stack. Pop removes from the top. Enqueue and Dequeue are queue operations."
  },
  {
    question: "What is the result of evaluating the postfix expression: 5 3 + 2 *",
    choices: ["11", "16", "13", "26"],
    answer: 1,
    explanation: "Push 5, push 3. Pop 3 and 5, compute 5+3=8, push 8. Push 2. Pop 2 and 8, compute 8×2=16. Result = 16."
  },
  {
    question: "What happens when you try to pop from an empty stack?",
    choices: ["Returns null", "Stack overflow", "Stack underflow", "Returns 0"],
    answer: 2,
    explanation: "Stack underflow occurs when attempting to pop from an empty stack. Stack overflow occurs when pushing to a full bounded stack."
  },
  {
    question: "Which application commonly uses a stack data structure?",
    choices: ["Print queue management", "Function call management (call stack)", "Breadth-first search", "CPU scheduling"],
    answer: 1,
    explanation: "The call stack manages function calls: each call pushes a stack frame (return address, local variables), and returning pops it."
  },
  {
    question: "Convert the infix expression A + B * C to postfix notation.",
    choices: ["+ A * B C", "A B C * +", "A B + C *", "* + A B C"],
    answer: 1,
    explanation: "Due to operator precedence (* before +): B*C becomes BC*, then A + BC* becomes ABC*+. The postfix is A B C * +."
  },
  {
    question: "What is the time complexity of push and pop operations in a stack implemented with an array?",
    choices: ["O(n) for both", "O(1) for both", "O(n) for push, O(1) for pop", "O(log n) for both"],
    answer: 1,
    explanation: "Both push and pop are O(1) because they only modify the top pointer and access a single element at that position."
  },
  {
    question: "What does the 'peek' (or 'top') operation do in a stack?",
    choices: ["Removes the top element", "Returns the top element without removing it", "Adds an element to the top", "Checks if stack is empty"],
    answer: 1,
    explanation: "Peek returns the value at the top of the stack without modifying the stack. It allows inspection without mutation."
  },
  {
    question: "A stack can be implemented using:",
    choices: ["Only arrays", "Only linked lists", "Both arrays and linked lists", "Neither arrays nor linked lists"],
    answer: 2,
    explanation: "Stacks can use arrays (with a top index pointer) or linked lists (insert/remove at head). Both provide O(1) push and pop."
  },
  {
    question: "What is the result of evaluating the postfix expression: 3 4 + 5 *",
    choices: ["35", "23", "27", "60"],
    answer: 0,
    explanation: "Push 3, push 4. Pop 4 and 3, compute 3+4=7, push 7. Push 5. Pop 5 and 7, compute 7×5=35. Result = 35."
  },
  {
    question: "Given the operations: push(1), push(2), push(3), pop(), push(4), pop(). What is at the top of the stack?",
    choices: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "After push(1,2,3): stack=[1,2,3]. Pop removes 3: stack=[1,2]. Push(4): stack=[1,2,4]. Pop removes 4: stack=[1,2]. Top is 2."
  },
  {
    question: "Which data structure is used to check for balanced parentheses in an expression?",
    choices: ["Queue", "Stack", "Array", "Linked List"],
    answer: 1,
    explanation: "A stack is used to match opening and closing brackets. Push opening brackets and pop when a matching closing bracket is found."
  },
  {
    question: "What causes a stack overflow?",
    choices: [
      "Popping from an empty stack",
      "Pushing onto a stack that has reached its maximum capacity",
      "Accessing the middle element of a stack",
      "Using peek on an empty stack"
    ],
    answer: 1,
    explanation: "Stack overflow occurs when pushing to a bounded stack that is already full. In recursion, this happens with excessively deep or infinite recursion."
  },
  {
    question: "Convert the infix expression (A + B) * (C - D) to postfix notation.",
    choices: ["A B + C D - *", "A B C D + - *", "* + A B - C D", "A B + * C D -"],
    answer: 0,
    explanation: "Parentheses force A+B first → AB+, then C-D → CD-. Finally multiply both results → AB+CD-*."
  },
  {
    question: "What is the result of evaluating the postfix expression: 6 2 / 3 + 4 *",
    choices: ["24", "16", "10", "6"],
    answer: 0,
    explanation: "Push 6, push 2. 6/2=3, push 3. Push 3. 3+3=6, push 6. Push 4. 6×4=24. Result = 24."
  },
  {
    question: "In a linked list implementation of a stack, which end of the list represents the top?",
    choices: ["The tail (last node)", "The head (first node)", "The middle node", "Any random node"],
    answer: 1,
    explanation: "The head of the linked list represents the stack top. Push inserts at the head and pop removes from the head, both in O(1)."
  },
  {
    question: "Which of the following is NOT a typical application of stacks?",
    choices: [
      "Undo mechanism in text editors",
      "Expression evaluation",
      "BFS traversal of a graph",
      "Backtracking algorithms"
    ],
    answer: 2,
    explanation: "BFS uses a queue, not a stack. DFS (Depth-First Search) uses a stack. Stacks are used for undo, expression evaluation, and backtracking."
  },
  {
    question: "What is the postfix equivalent of the infix expression: A * B + C * D?",
    choices: ["A B * C D * +", "A B C D * + *", "+ * A B * C D", "A B * + C D *"],
    answer: 0,
    explanation: "Due to equal precedence (left-to-right): A*B → AB*, C*D → CD*. Then AB* + CD* → AB*CD*+."
  },
  {
    question: "How does recursion relate to stacks?",
    choices: [
      "Recursion uses a queue internally",
      "Each recursive call pushes a new frame onto the call stack",
      "Recursion does not use any data structure",
      "Recursion uses a heap internally"
    ],
    answer: 1,
    explanation: "Each recursive call creates a new stack frame containing local variables and return address, pushed onto the call stack. Returning pops the frame."
  },
  {
    question: "Given the operations: push(10), push(20), peek(), pop(), push(30), what is the current stack from bottom to top?",
    choices: ["[10, 20, 30]", "[10, 30]", "[10, 20]", "[30, 10]"],
    answer: 1,
    explanation: "Push(10): [10]. Push(20): [10,20]. Peek returns 20 (no change). Pop removes 20: [10]. Push(30): [10,30]."
  },
  {
    question: "What is the space complexity of a stack implemented using an array of maximum size n?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "A stack with a maximum capacity of n elements requires O(n) space for the underlying array storage."
  },
  {
    question: "Which expression type is most easily evaluated using a stack?",
    choices: ["Infix", "Postfix (Reverse Polish Notation)", "Prefix (Polish Notation)", "Algebraic"],
    answer: 1,
    explanation: "Postfix expressions are easily evaluated with a stack: push operands, and when an operator is encountered, pop operands, compute, and push the result."
  },
  {
    question: "To evaluate the postfix expression 2 3 4 * +, what is the result?",
    choices: ["14", "20", "9", "24"],
    answer: 0,
    explanation: "Push 2, push 3, push 4. Pop 4 and 3, compute 3×4=12, push 12. Pop 12 and 2, compute 2+12=14. Result = 14."
  },
  {
    question: "When implementing a stack using an array, the 'top' variable initially is set to:",
    choices: ["0", "1", "-1", "n-1"],
    answer: 2,
    explanation: "Top is initialized to -1 to indicate an empty stack. When the first element is pushed, top becomes 0 (the first valid index)."
  },
  {
    question: "The string \"abcde\" is pushed character by character onto a stack and then all characters are popped. What is the resulting string?",
    choices: ["abcde", "edcba", "aecbd", "ecdba"],
    answer: 1,
    explanation: "LIFO order means the last pushed character 'e' is popped first, then 'd', 'c', 'b', 'a'. The result is 'edcba' — the reverse of the input."
  },
  // ========== SORTING ALGORITHMS (Questions 51-70) ==========
  {
    question: "What is the best-case time complexity of Bubble Sort (with an optimized flag)?",
    choices: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
    answer: 2,
    explanation: "With an early-termination flag (no swaps in a pass means sorted), Bubble Sort achieves O(n) best-case on an already sorted array."
  },
  {
    question: "What is the average and worst-case time complexity of Bubble Sort?",
    choices: ["O(n log n) for both", "O(n²) for both", "O(n) average, O(n²) worst", "O(n²) average, O(n³) worst"],
    answer: 1,
    explanation: "Bubble Sort has O(n²) in both average and worst case due to nested comparisons and swaps of adjacent elements."
  },
  {
    question: "Is Bubble Sort a stable sorting algorithm?",
    choices: ["No, it is not stable", "Yes, it is stable", "Only for integers", "Depends on implementation"],
    answer: 1,
    explanation: "Bubble Sort is stable because it only swaps adjacent elements when the left is strictly greater than the right, preserving relative order of equal elements."
  },
  {
    question: "What is the time complexity of Selection Sort in all cases (best, average, worst)?",
    choices: ["O(n) best, O(n²) average and worst", "O(n²) in all cases", "O(n log n) in all cases", "O(n²) best and average, O(n³) worst"],
    answer: 1,
    explanation: "Selection Sort always scans the remaining unsorted portion to find the minimum, requiring O(n²) comparisons regardless of input order."
  },
  {
    question: "Is Selection Sort a stable sorting algorithm?",
    choices: ["Yes, it is always stable", "No, it is not stable", "Only with linked lists", "Only for numeric data"],
    answer: 1,
    explanation: "Selection Sort is not stable because swapping the minimum with the current position can change the relative order of equal elements."
  },
  {
    question: "What is the best-case time complexity of Insertion Sort?",
    choices: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
    answer: 2,
    explanation: "Insertion Sort achieves O(n) best-case when the array is already sorted, as each element requires only one comparison and no shifts."
  },
  {
    question: "What is the worst-case time complexity of Insertion Sort?",
    choices: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
    answer: 2,
    explanation: "Insertion Sort worst-case is O(n²), occurring when the array is sorted in reverse order and every element must be shifted to the beginning."
  },
  {
    question: "Is Insertion Sort stable?",
    choices: ["No, it is not stable", "Yes, it is stable", "Only for small arrays", "Depends on pivot selection"],
    answer: 1,
    explanation: "Insertion Sort is stable because it shifts elements rather than swapping distant elements, preserving the relative order of equal elements."
  },
  {
    question: "What is the time complexity of Merge Sort in all cases?",
    choices: ["O(n²) in all cases", "O(n log n) in all cases", "O(n log n) best, O(n²) worst", "O(n) best, O(n log n) worst"],
    answer: 1,
    explanation: "Merge Sort always divides the array in half and merges in linear time, guaranteeing O(n log n) in best, average, and worst cases."
  },
  {
    question: "What is the space complexity of Merge Sort?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "Merge Sort requires O(n) additional space for temporary arrays used during the merge step."
  },
  {
    question: "Is Merge Sort a stable sorting algorithm?",
    choices: ["No, it is not stable", "Yes, it is stable", "Only for linked lists", "Depends on merge implementation"],
    answer: 1,
    explanation: "Merge Sort is stable because during merging, when elements are equal, the element from the left subarray is placed first, preserving original order."
  },
  {
    question: "What is the best and average-case time complexity of Quick Sort?",
    choices: ["O(n²) for both", "O(n log n) for both", "O(n) best, O(n log n) average", "O(n log n) best, O(n²) average"],
    answer: 1,
    explanation: "Quick Sort achieves O(n log n) in both best and average cases when the pivot divides the array into roughly equal halves."
  },
  {
    question: "What is the worst-case time complexity of Quick Sort?",
    choices: ["O(n log n)", "O(n)", "O(n²)", "O(n³)"],
    answer: 2,
    explanation: "Quick Sort degrades to O(n²) when the pivot is always the smallest or largest element, creating highly unbalanced partitions."
  },
  {
    question: "What is the average-case auxiliary space complexity of Quick Sort?",
    choices: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: 2,
    explanation: "Quick Sort requires O(log n) auxiliary space for the recursive call stack in the average case. Worst-case stack depth is O(n) when partitions are highly unbalanced."
  },
  {
    question: "Is Quick Sort a stable sorting algorithm?",
    choices: ["Yes, it is always stable", "No, it is not stable", "Only with median-of-three pivot", "Only for primitive types"],
    answer: 1,
    explanation: "Quick Sort is not stable because the partitioning step can swap elements across large distances, changing the relative order of equal elements."
  },
  {
    question: "Which sorting algorithm is generally preferred for small datasets or nearly sorted data?",
    choices: ["Merge Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
    answer: 2,
    explanation: "Insertion Sort has low overhead and O(n) best-case for nearly sorted data. It outperforms complex algorithms on small datasets due to simplicity."
  },
  {
    question: "After one complete pass of Bubble Sort on [5, 3, 8, 1, 9], what is the array?",
    choices: ["[3, 5, 1, 8, 9]", "[1, 3, 5, 8, 9]", "[3, 5, 8, 1, 9]", "[5, 3, 1, 8, 9]"],
    answer: 0,
    explanation: "Compare (5,3)→swap→[3,5,8,1,9], (5,8)→no swap, (8,1)→swap→[3,5,1,8,9], (8,9)→no swap. Result: [3,5,1,8,9]. The largest element 9 is at the end."
  },
  {
    question: "In Selection Sort, after the first pass on [64, 25, 12, 22, 11], what is the array?",
    choices: ["[11, 25, 12, 22, 64]", "[11, 64, 25, 12, 22]", "[12, 25, 64, 22, 11]", "[25, 12, 22, 11, 64]"],
    answer: 0,
    explanation: "Selection Sort finds the minimum (11 at index 4) and swaps it with the element at index 0 (64). Result: [11, 25, 12, 22, 64]."
  },
  {
    question: "Which sorting algorithm uses a divide-and-conquer approach with partitioning around a pivot?",
    choices: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Quick Sort"],
    answer: 3,
    explanation: "Quick Sort selects a pivot, partitions elements into those less than and greater than the pivot, then recursively sorts the partitions."
  },
  {
    question: "Which sorting algorithm divides the array into halves, sorts each half, and merges them?",
    choices: ["Quick Sort", "Bubble Sort", "Merge Sort", "Insertion Sort"],
    answer: 2,
    explanation: "Merge Sort divides the array into two halves, recursively sorts each half, and then merges the two sorted halves into one sorted array."
  },
  // ========== SEARCHING ALGORITHMS (Questions 71-80) ==========
  {
    question: "What is the time complexity of Linear Search in the worst case?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "Linear Search checks each element sequentially. In the worst case, the target is at the last position or not present, requiring n comparisons."
  },
  {
    question: "What is the best-case time complexity of Linear Search?",
    choices: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
    answer: 1,
    explanation: "Best case for Linear Search is O(1), occurring when the target element is found at the first position."
  },
  {
    question: "What is the prerequisite for performing Binary Search?",
    choices: ["Array must be unsorted", "Array must be sorted", "Array must have unique elements", "Array must be of even length"],
    answer: 1,
    explanation: "Binary Search requires a sorted array. It repeatedly compares the target with the middle element and eliminates half the search space."
  },
  {
    question: "What is the time complexity of Binary Search?",
    choices: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: 2,
    explanation: "Binary Search halves the search space each step, requiring at most ⌈log₂(n)⌉ comparisons, giving O(log n) time complexity."
  },
  {
    question: "In Binary Search, if the array has 1024 elements, what is the maximum number of comparisons needed?",
    choices: ["10", "11", "512", "1024"],
    answer: 1,
    explanation: "Maximum comparisons = ⌈log₂(1024)⌉ + 1 = 10 + 1 = 11. Each comparison halves the search space: 1024 → 512 → ... → 1."
  },
  {
    question: "Which search algorithm works on unsorted arrays?",
    choices: ["Binary Search", "Interpolation Search", "Linear Search", "Fibonacci Search"],
    answer: 2,
    explanation: "Linear Search works on any array regardless of order. It simply checks each element sequentially until found or the end is reached."
  },
  {
    question: "In Binary Search on array [2, 5, 8, 12, 16, 23, 38, 45], what is the first middle element checked when searching for 23?",
    choices: ["12", "16", "23", "8"],
    answer: 0,
    explanation: "Middle index = (0+7)/2 = 3. Element at index 3 is 12. Since 23 > 12, search continues in the right half."
  },
  {
    question: "What is the space complexity of iterative Binary Search?",
    choices: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: 2,
    explanation: "Iterative Binary Search uses only a constant number of variables (low, high, mid), giving O(1) space complexity."
  },
  {
    question: "What is the space complexity of recursive Binary Search?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 1,
    explanation: "Recursive Binary Search uses O(log n) space due to the recursion call stack, with at most log n recursive calls."
  },
  {
    question: "If Binary Search is applied to the sorted array [1, 3, 5, 7, 9, 11] looking for value 7, how many comparisons are needed?",
    choices: ["1", "2", "3", "4"],
    answer: 2,
    explanation: "First: mid=(0+5)/2=2, arr[2]=5 < 7 → search right half. Second: mid=(3+5)/2=4, arr[4]=9 > 7 → search left. Third: mid=3, arr[3]=7 = target, found! Total: 3 comparisons."
  },
  // ========== LINKED LISTS (Questions 81-90) ==========
  {
    question: "What is the main advantage of a linked list over an array?",
    choices: ["Faster random access", "Dynamic size with efficient insertion/deletion", "Less memory usage per element", "Better cache performance"],
    answer: 1,
    explanation: "Linked lists grow/shrink dynamically and insert/delete in O(1) at known positions without shifting elements, unlike arrays."
  },
  {
    question: "In a singly linked list, what does the last node's 'next' pointer contain?",
    choices: ["Address of the first node", "Address of the previous node", "NULL (null/None)", "Its own address"],
    answer: 2,
    explanation: "In a singly linked list, the last node's next pointer is NULL, marking the end of the list."
  },
  {
    question: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
    choices: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    answer: 2,
    explanation: "Inserting at the head requires creating a new node, pointing its next to the current head, and updating head. This is O(1)."
  },
  {
    question: "What is the time complexity of searching for a value in a singly linked list?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "A linked list must be traversed sequentially from the head. In the worst case, the element is at the end or not present, requiring O(n) time."
  },
  {
    question: "Which correctly describes a doubly linked list?",
    choices: [
      "Each node has only a next pointer",
      "Each node has both next and previous pointers",
      "Nodes are stored in contiguous memory",
      "It cannot be traversed in reverse"
    ],
    answer: 1,
    explanation: "A doubly linked list node contains data, a 'next' pointer, and a 'prev' pointer, enabling traversal in both forward and backward directions."
  },
  {
    question: "In a circular linked list, what does the last node's next pointer point to?",
    choices: ["NULL", "The head (first) node", "The previous node", "Itself"],
    answer: 1,
    explanation: "In a circular linked list, the last node's next pointer points back to the head node, forming a cycle."
  },
  {
    question: "What is the time complexity of deleting a node from the end of a singly linked list?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "To delete the last node, you must traverse to the second-to-last node to update its next pointer to NULL, requiring O(n) traversal."
  },
  {
    question: "What is the minimum information stored in a node of a singly linked list?",
    choices: [
      "Data only",
      "Data and a pointer to the next node",
      "Data, next pointer, and previous pointer",
      "Data and array index"
    ],
    answer: 1,
    explanation: "A singly linked list node stores at minimum the data element and a pointer/reference to the next node in the sequence."
  },
  {
    question: "What advantage does a doubly linked list have over a singly linked list?",
    choices: [
      "Uses less memory per node",
      "Allows traversal in both directions",
      "Has faster insertion at the head",
      "Requires no pointers"
    ],
    answer: 1,
    explanation: "A doubly linked list can be traversed forward and backward. It also allows O(1) deletion of a node when given a pointer to it (no need to find predecessor)."
  },
  {
    question: "What is the time complexity of inserting a node at the end of a singly linked list (without tail pointer)?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: 2,
    explanation: "Without a tail pointer, you must traverse the entire list to find the last node before inserting, which takes O(n) time."
  },
  // ========== QUEUES (Questions 91-100) ==========
  {
    question: "What is a Queue data structure?",
    choices: ["LIFO structure", "FIFO structure", "Random access structure", "Tree-based structure"],
    answer: 1,
    explanation: "A Queue follows FIFO (First In, First Out). Elements are added at the rear (enqueue) and removed from the front (dequeue)."
  },
  {
    question: "Which data structure is used for Breadth-First Search (BFS) in graphs?",
    choices: ["Stack", "Queue", "Priority Queue", "Hash Table"],
    answer: 1,
    explanation: "BFS uses a Queue to visit nodes level by level. Discovered nodes are enqueued and processed in FIFO order."
  },
  {
    question: "In a circular queue of size 5 (indices 0-4), if rear is at index 4, where is the next element inserted?",
    choices: ["Index 5", "Index 0", "Index 4", "Overflow error always"],
    answer: 1,
    explanation: "In a circular queue, when rear reaches the end, it wraps around: next position = (rear + 1) % size = (4 + 1) % 5 = 0 (if space is available)."
  },
  {
    question: "What is the main advantage of a circular queue over a linear queue?",
    choices: [
      "Faster enqueue operations",
      "Eliminates the problem of unused space after dequeue operations",
      "Requires less memory",
      "Supports priority ordering"
    ],
    answer: 1,
    explanation: "A circular queue reuses space freed by dequeue operations by wrapping around, solving the 'false overflow' problem of linear queues."
  },
  {
    question: "What is a priority queue?",
    choices: [
      "A queue where elements are processed in FIFO order",
      "A queue where elements are dequeued based on priority rather than arrival order",
      "A queue that only stores integers",
      "A queue with a maximum size of one"
    ],
    answer: 1,
    explanation: "A priority queue dequeues elements based on priority (highest or lowest first), not insertion order. It is often implemented using a heap."
  },
  {
    question: "What is a deque (double-ended queue)?",
    choices: [
      "A queue that only allows removal from both ends",
      "A queue that allows insertion and deletion at both ends",
      "A queue with two separate storage areas",
      "A queue that stores elements in pairs"
    ],
    answer: 1,
    explanation: "A deque allows insertion and deletion at both the front and rear ends, combining features of both stacks and queues."
  },
  {
    question: "What is the time complexity of enqueue and dequeue operations in a queue implemented with a linked list?",
    choices: ["O(n) for both", "O(1) for both", "O(1) enqueue, O(n) dequeue", "O(n) enqueue, O(1) dequeue"],
    answer: 1,
    explanation: "With a linked list (using head and tail pointers), enqueue at tail and dequeue from head are both O(1) operations."
  },
  {
    question: "Which of the following is a common application of queues?",
    choices: [
      "Expression evaluation",
      "Undo operations",
      "CPU process scheduling",
      "Recursive function calls"
    ],
    answer: 2,
    explanation: "CPU schedulers use queues (e.g., ready queue, job queue) to manage processes in FIFO or priority order. Expression evaluation and undo use stacks."
  },
  {
    question: "In a queue implemented using an array, what condition indicates the queue is full in a circular implementation?",
    choices: [
      "front == rear",
      "(rear + 1) % size == front",
      "rear == size - 1",
      "front == 0"
    ],
    answer: 1,
    explanation: "In a circular queue, the queue is full when the next position of rear equals front: (rear + 1) % size == front. One slot is kept empty to distinguish full from empty."
  },
  {
    question: "What is an example of buffering that uses a queue?",
    choices: [
      "Browser back button history",
      "Keyboard input buffer / print spooler",
      "Undo-redo in text editors",
      "Recursion call management"
    ],
    answer: 1,
    explanation: "Keyboard buffers and print spoolers use queues to process input/jobs in the order received (FIFO), ensuring fair handling of requests."
  },
];
