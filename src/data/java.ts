export type JavaDifficulty = "Beginner" | "Easy" | "Medium" | "Hard";

export interface JavaSource {
  label: string;
  url: string;
}

export interface JavaCheatRow {
  term: string;
  meaning: string;
  remember: string;
  trap: string;
}

export interface JavaCheatTopic {
  id: string;
  title: string;
  difficulty: JavaDifficulty;
  summary: string;
  rows: JavaCheatRow[];
}

export interface JavaPracticeItem {
  id: string;
  topicId: string;
  type: "multiple-choice" | "fill-blank";
  difficulty: JavaDifficulty;
  prompt: string;
  code?: string;
  choices: string[];
  answer: number;
  explanation: string;
}

export interface JavaSampleTest {
  input: string;
  expectedOutput: string;
}

export interface JavaCodingProblem {
  id: string;
  title: string;
  difficulty: JavaDifficulty;
  topicIds: string[];
  statement: string;
  inputFormat: string;
  outputFormat: string;
  starterCode: string;
  sampleTests: JavaSampleTest[];
  explanation: string;
}

const row = (term: string, meaning: string, remember: string, trap: string): JavaCheatRow => ({
  term,
  meaning,
  remember,
  trap,
});

const starter = (body: string) => `import java.util.*;

public class Main {
    public static void main(String[] args) {
${body}
    }
}
`;

export const javaSources: JavaSource[] = [
  { label: "Oracle Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/" },
  { label: "Oracle Java SE 21 API", url: "https://docs.oracle.com/en/java/javase/21/docs/api/index.html" },
  { label: "OpenJDK", url: "https://openjdk.org/" },
  { label: "Princeton IntroCS Java Programming Cheatsheet", url: "https://introcs.cs.princeton.edu/java/11cheatsheet/" },
  { label: "w3resource Java Exercises", url: "https://www.w3resource.com/java-exercises/" },
  { label: "MIT OpenCourseWare Introduction to Computer Science and Programming in Java", url: "https://ocw.mit.edu/courses/6-092-introduction-to-programming-in-java-january-iap-2010/" },
];

export const javaCheatTopics: JavaCheatTopic[] = [
  {
    id: "basics",
    title: "Java Basics and Syntax",
    difficulty: "Beginner",
    summary: "Program structure, class names, main method, statements, comments, and compilation.",
    rows: [
      row("public class Main", "Defines a public class named Main.", "Class name = file name", "A public class Main must be in Main.java."),
      row("main method", "public static void main(String[] args) is the JVM entry point for a simple program.", "Program starts here", "Wrong signature may compile but not run as expected."),
      row("Statement", "A complete instruction usually ending with a semicolon.", "End with ;", "Blocks and method declarations do not end with semicolons."),
      row("Comments", "// for one line, /* */ for block comments.", "Notes for humans", "Comments do not execute."),
    ],
  },
  {
    id: "variables",
    title: "Variables, Data Types, and Operators",
    difficulty: "Beginner",
    summary: "Primitive types, declarations, assignment, arithmetic, comparison, and logical operators.",
    rows: [
      row("int", "32-bit signed integer primitive.", "Whole numbers", "Integer division drops the decimal part."),
      row("double", "64-bit floating-point primitive.", "Decimals", "Do not compare decimal results blindly for exact equality."),
      row("boolean", "Primitive type with true or false.", "Logic value", "Java booleans are not 0 or 1."),
      row("=", "Assignment operator.", "Store value", "== compares values; = assigns."),
      row("&& and ||", "Logical AND and OR with short-circuit behavior.", "Stop early", "Use && for boolean logic, not & unless you mean bitwise/non-short-circuit behavior."),
    ],
  },
  {
    id: "io",
    title: "Input/Output and Formatting",
    difficulty: "Beginner",
    summary: "Printing output, reading input with Scanner, and formatting values.",
    rows: [
      row("System.out.print", "Prints without adding a newline.", "Same line", "println moves to the next line."),
      row("System.out.println", "Prints and then adds a newline.", "Line output", "Extra newlines can fail exact-output tests."),
      row("Scanner", "Reads tokens or lines from input streams such as System.in.", "Input helper", "nextInt leaves the newline before nextLine."),
      row("printf", "Formats output using placeholders like %d, %.2f, and %s.", "Formatted print", "The format string must match the value types."),
    ],
  },
  {
    id: "conditionals",
    title: "Conditionals",
    difficulty: "Beginner",
    summary: "if, else if, else, switch, boolean expressions, and branch ordering.",
    rows: [
      row("if", "Executes a block when a condition is true.", "Choose path", "Use == for primitive equality."),
      row("else if", "Checks another condition only if previous conditions failed.", "Next check", "Order matters when ranges overlap."),
      row("else", "Fallback branch when no prior condition is true.", "Default branch", "else has no condition."),
      row("switch", "Selects a branch from discrete values.", "Case choice", "Classic switch cases can fall through without break."),
    ],
  },
  {
    id: "loops",
    title: "Loops",
    difficulty: "Beginner",
    summary: "for, while, do-while, counters, accumulators, break, and continue.",
    rows: [
      row("for loop", "Loop with initialization, condition, and update in one header.", "Known count", "Off-by-one errors are common."),
      row("while loop", "Repeats while condition is true.", "Unknown count", "Update the loop variable or it may run forever."),
      row("do-while", "Runs body once before checking the condition.", "At least once", "Ends with while(condition);"),
      row("break", "Exits the nearest loop or switch.", "Stop loop", "Only exits one level."),
      row("continue", "Skips to the next loop iteration.", "Skip rest", "Still runs the loop update in a for loop."),
    ],
  },
  {
    id: "methods",
    title: "Methods",
    difficulty: "Easy",
    summary: "Method declarations, parameters, return values, overloads, and scope.",
    rows: [
      row("Parameter", "Variable declared in a method header.", "Input name", "Argument is the actual value passed."),
      row("return", "Sends a value back and exits the method.", "Give back", "void methods do not return a value."),
      row("Overloading", "Same method name with different parameter lists.", "Same name, different inputs", "Return type alone cannot overload a method."),
      row("Scope", "Region where a variable can be used.", "Where visible", "Local variables do not exist outside their block."),
    ],
  },
  {
    id: "arrays",
    title: "Arrays",
    difficulty: "Easy",
    summary: "Fixed-size indexed storage, traversal, length, and common array patterns.",
    rows: [
      row("Array", "Fixed-size collection of same-type elements.", "Same type list", "Array length cannot be changed after creation."),
      row("Index", "Position number starting at 0.", "0 to length-1", "Index length is out of bounds."),
      row("length", "Array field storing the number of elements.", "arr.length", "No parentheses for array length."),
      row("Enhanced for", "for (int x : arr) reads each element.", "Read each", "Use index loop when you need positions or mutation by index."),
    ],
  },
  {
    id: "strings",
    title: "Strings",
    difficulty: "Easy",
    summary: "String immutability, comparison, indexing, substrings, and StringBuilder.",
    rows: [
      row("String", "Immutable sequence of characters.", "Text object", "Changing a String creates another String."),
      row("equals", "Compares String contents.", "Content compare", "== compares references for objects."),
      row("charAt", "Returns the character at an index.", "Character by index", "Valid indexes are 0 to length()-1."),
      row("substring", "Returns part of a string from start inclusive to end exclusive.", "End not included", "substring(0, 3) has three chars."),
      row("StringBuilder", "Mutable helper for building strings efficiently.", "Many edits", "Use toString() when you need a String."),
    ],
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    difficulty: "Medium",
    summary: "Classes, objects, fields, methods, state, and behavior.",
    rows: [
      row("Class", "Blueprint defining fields and methods.", "Type blueprint", "A class is not the same as an object."),
      row("Object", "Instance of a class with its own state.", "Real instance", "Use new to create most objects."),
      row("Field", "Variable stored in an object or class.", "Object data", "Local variables live inside methods."),
      row("Method", "Behavior defined by a class.", "Object action", "Static methods belong to the class, not an instance."),
      row("Instance variable", "Field that belongs to each object instance.", "Per-object state", "Each object can hold different values for its instance variables."),
      row("Instance method", "Method called on an object that can access that object's fields.", "Object behavior", "Needs an object unless called from inside the same object."),
    ],
  },
  {
    id: "constructors",
    title: "Constructors and Encapsulation",
    difficulty: "Medium",
    summary: "Object initialization, this, access control, getters, setters, and invariants.",
    rows: [
      row("Constructor", "Special member used to initialize new objects.", "Build object", "No return type, not even void."),
      row("No-argument constructor", "Constructor with no parameters.", "new ClassName()", "Java only supplies a default no-argument constructor if no constructor is declared."),
      row("this", "Reference to the current object.", "Current object", "Useful when parameter and field names match."),
      row("private", "Access modifier limiting use to the same class.", "Hide details", "Use methods to expose controlled access."),
      row("Getter/Setter", "Methods for reading or changing private fields.", "Controlled access", "Setters should validate when needed."),
      row("Encapsulation", "Keeping data and the rules for changing it inside the class.", "Protect state", "Public fields make it easy to bypass validation."),
    ],
  },
  {
    id: "inheritance",
    title: "Inheritance and Polymorphism",
    difficulty: "Medium",
    summary: "extends, overriding, super, dynamic dispatch, and base-class references.",
    rows: [
      row("extends", "Creates an inheritance relationship between classes.", "Is-a", "Java classes extend only one class."),
      row("Override", "Subclass method replaces superclass behavior with same signature.", "Same method, new behavior", "@Override catches signature mistakes."),
      row("super", "Reference to superclass members or constructor.", "Parent access", "super(...) must be first in a constructor."),
      row("Polymorphism", "A superclass reference can refer to subclass objects.", "Many forms", "Overridden method chosen by runtime object."),
    ],
  },
  {
    id: "interfaces",
    title: "Interfaces and Abstract Classes",
    difficulty: "Medium",
    summary: "Contracts, implements, abstract methods, default methods, and abstract base classes.",
    rows: [
      row("interface", "Type that defines a contract classes can implement.", "Capability contract", "Fields are implicitly public static final."),
      row("implements", "Declares that a class fulfills an interface.", "Promise methods", "A class can implement multiple interfaces."),
      row("abstract class", "Class that cannot be instantiated directly.", "Partial blueprint", "Can contain fields, constructors, and concrete methods."),
      row("default method", "Interface method with an implementation.", "Interface behavior", "Conflicts must be resolved when inherited from multiple interfaces."),
    ],
  },
  {
    id: "exceptions",
    title: "Exception Handling",
    difficulty: "Medium",
    summary: "try, catch, finally, throw, checked exceptions, and runtime exceptions.",
    rows: [
      row("try", "Wraps code that may throw an exception.", "Risky code", "try needs catch or finally."),
      row("catch", "Handles a matching exception type.", "Handle error", "Catch specific exceptions before general ones."),
      row("finally", "Runs after try/catch whether or not an exception occurred.", "Always cleanup", "May not run if JVM exits abruptly."),
      row("throw", "Manually throws an exception.", "Signal problem", "throw creates/throws one exception; throws declares possible exceptions."),
    ],
  },
  {
    id: "collections",
    title: "Collections",
    difficulty: "Medium",
    summary: "ArrayList, HashMap, HashSet, generics, iteration, and collection tradeoffs.",
    rows: [
      row("ArrayList", "Resizable list backed by an array.", "Dynamic list", "Middle inserts/removes can shift elements."),
      row("HashMap", "Key-value collection with unique keys.", "Lookup by key", "No guaranteed iteration order."),
      row("HashSet", "Collection of unique values.", "No duplicates", "Uses equals and hashCode."),
      row("Generics", "Type parameters such as ArrayList<String>.", "Type safety", "Primitive types need wrapper classes."),
    ],
  },
  {
    id: "files",
    title: "File Handling",
    difficulty: "Hard",
    summary: "Reading and writing files, paths, checked exceptions, and resource cleanup.",
    rows: [
      row("File", "Represents a file or directory path.", "Path object", "File object does not guarantee the file exists."),
      row("Scanner(file)", "Can read tokens or lines from a file.", "Read file", "File operations often throw checked exceptions."),
      row("PrintWriter", "Writes formatted text to a file or stream.", "Write text", "Close or use try-with-resources to flush."),
      row("try-with-resources", "Automatically closes resources that implement AutoCloseable.", "Auto close", "Declare resource inside try parentheses."),
    ],
  },
  {
    id: "recursion",
    title: "Recursion",
    difficulty: "Hard",
    summary: "Base cases, recursive calls, call stack, and recursive problem decomposition.",
    rows: [
      row("Base case", "Condition that stops recursion.", "Stop rule", "Missing base case can cause stack overflow."),
      row("Recursive case", "Step where method calls itself on a smaller problem.", "Shrink problem", "Must move toward base case."),
      row("Call stack", "Stores active method calls.", "Stack of calls", "Deep recursion can exhaust stack memory."),
      row("Factorial", "Classic recursion: n! = n * (n-1)! with 0! = 1.", "Multiply down", "Use int carefully; values overflow quickly."),
    ],
  },
  {
    id: "algorithms",
    title: "Basic Algorithms",
    difficulty: "Hard",
    summary: "Searching, sorting, counting, frequency maps, and complexity reasoning.",
    rows: [
      row("Linear search", "Checks elements one by one.", "Scan", "Works unsorted; O(n)."),
      row("Binary search", "Halves a sorted search range.", "Sorted halve", "Requires sorted data."),
      row("Bubble sort", "Repeatedly swaps adjacent out-of-order values.", "Adjacent swaps", "O(n^2), mostly for learning."),
      row("Frequency map", "Counts occurrences using keys and counts.", "Value -> count", "HashMap is common for this."),
    ],
  },
];

const topicIds = javaCheatTopics.map((topic) => topic.id);

const mc = (
  id: string,
  topicId: string,
  difficulty: JavaDifficulty,
  prompt: string,
  choices: string[],
  answer: number,
  explanation: string,
): JavaPracticeItem => ({ id, topicId, type: "multiple-choice", difficulty, prompt, choices, answer, explanation });

const fb = (
  id: string,
  topicId: string,
  difficulty: JavaDifficulty,
  prompt: string,
  code: string,
  choices: string[],
  answer: number,
  explanation: string,
): JavaPracticeItem => ({ id, topicId, type: "fill-blank", difficulty, prompt, code, choices, answer, explanation });

export const javaPracticeItems: JavaPracticeItem[] = [
  mc("jm-001", "basics", "Beginner", "Which file name is required for a public class named Main?", ["Program.java", "Main.java", "main.class", "JavaMain.java"], 1, "A public class name must match the source file name."),
  mc("jm-002", "basics", "Beginner", "Which method signature is the standard entry point for a simple Java console program?", ["public void main()", "public static void main(String[] args)", "static main(String args)", "main(String[] args)"], 1, "The JVM looks for public static void main(String[] args)."),
  mc("jm-003", "variables", "Beginner", "What is the result of 7 / 2 when both operands are int?", ["3", "3.5", "4", "2"], 0, "Integer division drops the fractional part."),
  mc("jm-004", "variables", "Beginner", "Which type stores true or false?", ["int", "double", "boolean", "char"], 2, "boolean stores logical true/false values."),
  mc("jm-005", "io", "Beginner", "Which statement prints a line and moves to the next line?", ["System.out.print()", "System.out.println()", "System.in.print()", "Scanner.println()"], 1, "println prints and appends a newline."),
  mc("jm-006", "io", "Beginner", "Which class is commonly used for simple keyboard input?", ["Printer", "Scanner", "ConsoleWriter", "Formatter"], 1, "Scanner can read values from System.in."),
  mc("jm-007", "conditionals", "Beginner", "Which operator checks equality for primitive values?", ["=", "==", "!=", "equals"], 1, "== compares primitive values; = assigns."),
  mc("jm-008", "conditionals", "Beginner", "When does an else block run?", ["Always", "When the first if is true", "When no previous branch in the chain runs", "Before if"], 2, "else is the fallback branch."),
  mc("jm-009", "loops", "Beginner", "Which loop is best when the number of repetitions is known?", ["for", "while", "do-while", "switch"], 0, "for loops are commonly used for counted repetition."),
  mc("jm-010", "loops", "Beginner", "What does break do inside a loop?", ["Skips one iteration", "Exits the nearest loop", "Restarts the loop", "Pauses the JVM"], 1, "break exits the nearest loop or switch."),
  mc("jm-011", "methods", "Easy", "What does a void method return?", ["0", "null", "No value", "A boolean"], 2, "void means the method does not return a value."),
  mc("jm-012", "methods", "Easy", "Which is true about method overloading?", ["Return type alone is enough", "Parameter lists must differ", "Names must differ", "Only constructors can overload"], 1, "Overloaded methods share a name but have different parameter lists."),
  mc("jm-013", "arrays", "Easy", "What is the first valid index of a Java array?", ["0", "1", "-1", "length"], 0, "Java arrays are zero-indexed."),
  mc("jm-014", "arrays", "Easy", "How do you get the number of elements in an array arr?", ["arr.size()", "arr.length", "arr.length()", "length(arr)"], 1, "Arrays use the length field, not a method."),
  mc("jm-015", "strings", "Easy", "How should two String contents usually be compared?", ["==", "=", "equals()", "compare"], 2, "equals compares object contents for strings."),
  mc("jm-016", "strings", "Easy", "What does String immutability mean?", ["Strings cannot be printed", "String contents cannot be changed in place", "Strings can only store digits", "Strings are primitive"], 1, "Operations create new String objects rather than changing the old one."),
  mc("jm-017", "oop", "Medium", "What is an object?", ["A blueprint", "An instance of a class", "A package", "A primitive value only"], 1, "An object is a runtime instance with state and behavior."),
  mc("jm-018", "oop", "Medium", "Which keyword creates most new objects?", ["class", "this", "new", "extends"], 2, "new creates object instances."),
  mc("jm-019", "constructors", "Medium", "Which is true about constructors?", ["They always return int", "They have no return type", "They must be static", "They cannot take parameters"], 1, "Constructors do not declare a return type."),
  mc("jm-020", "constructors", "Medium", "Why use private fields with getters/setters?", ["To prevent all access forever", "To support controlled access and validation", "To make code slower", "To avoid classes"], 1, "Encapsulation hides representation and exposes controlled methods."),
  mc("jm-021", "inheritance", "Medium", "Which keyword creates a class inheritance relationship?", ["implements", "extends", "inherits", "super"], 1, "A class extends another class."),
  mc("jm-022", "inheritance", "Medium", "What does dynamic dispatch choose?", ["The method by source file order", "The overridden method by runtime object type", "The shortest method", "The static variable"], 1, "Overridden instance methods are selected based on the runtime object."),
  mc("jm-023", "interfaces", "Medium", "Which keyword connects a class to an interface?", ["extends", "implements", "interface", "abstract"], 1, "Classes implement interfaces."),
  mc("jm-024", "interfaces", "Medium", "Can a Java class implement multiple interfaces?", ["Yes", "No", "Only if abstract", "Only one public interface"], 0, "Java allows a class to implement multiple interfaces."),
  mc("jm-025", "exceptions", "Medium", "Which block handles an exception?", ["try", "catch", "finally", "throw"], 1, "catch handles matching thrown exceptions."),
  mc("jm-026", "exceptions", "Medium", "What does finally usually help with?", ["Sorting arrays", "Resource cleanup", "Creating classes", "Changing package names"], 1, "finally runs after try/catch and is often used for cleanup."),
  mc("jm-027", "collections", "Medium", "Which collection stores key-value pairs?", ["ArrayList", "HashMap", "HashSet", "StringBuilder"], 1, "HashMap stores mappings from keys to values."),
  mc("jm-028", "collections", "Medium", "Which collection rejects duplicate values?", ["HashSet", "ArrayList", "String", "Scanner"], 0, "Set implementations represent unique elements."),
  mc("jm-029", "files", "Hard", "Why do many file operations require exception handling?", ["Files are always encrypted", "I/O can fail at runtime", "Files are primitive types", "Java forbids text files"], 1, "File paths, permissions, and devices can fail, so checked exceptions are common."),
  mc("jm-030", "files", "Hard", "What does try-with-resources do?", ["Creates a loop", "Automatically closes resources", "Sorts files", "Runs code twice"], 1, "Resources declared in the try header are closed automatically."),
  mc("jm-031", "recursion", "Hard", "What is the purpose of a base case?", ["Start another thread", "Stop recursion", "Create an object", "Import a package"], 1, "A base case stops recursive calls."),
  mc("jm-032", "recursion", "Hard", "What error can happen when recursion is too deep?", ["StackOverflowError", "FileNotFoundException", "ArithmeticException only", "ClassCastException"], 0, "Each recursive call uses stack space."),
  mc("jm-033", "algorithms", "Hard", "What must be true before binary search is used?", ["Data must be sorted", "Data must be strings", "Data must be random", "Data must be a file"], 0, "Binary search depends on sorted order."),
  mc("jm-034", "algorithms", "Hard", "What is the usual worst-case time for linear search?", ["O(1)", "O(log n)", "O(n)", "O(n^2)"], 2, "Linear search may check every element."),
  mc("jm-035", "strings", "Easy", "What does charAt(0) return for \"Java\"?", ["J", "a", "Java", "0"], 0, "Index 0 is the first character."),
  mc("jm-036", "arrays", "Easy", "What exception commonly appears for invalid array index access?", ["ArrayIndexOutOfBoundsException", "FileNotFoundException", "IOException", "InputMismatchException"], 0, "Invalid array indexes throw ArrayIndexOutOfBoundsException."),
  mc("jm-037", "variables", "Beginner", "Which declaration is valid?", ["int age = 18;", "integer age = 18", "num age = 18;", "int = age 18;"], 0, "Java declarations use type, name, assignment, value, semicolon."),
  mc("jm-038", "collections", "Medium", "Why use generics such as ArrayList<String>?", ["To avoid all loops", "To improve type safety", "To make strings mutable", "To create files"], 1, "Generics let the compiler check element types."),
  mc("jm-039", "conditionals", "Beginner", "Which logical operator means AND with short-circuit evaluation?", ["&", "&&", "||", "!"], 1, "&& stops if the left side is false."),
  mc("jm-040", "loops", "Easy", "Which statement skips the rest of the current loop iteration?", ["break", "continue", "return false", "case"], 1, "continue moves to the next iteration."),

  fb("jf-001", "basics", "Beginner", "Fill in the missing keyword for a class declaration.", "public ____ Main { }", ["class", "method", "object", "package"], 0, "class declares a class."),
  fb("jf-002", "basics", "Beginner", "Fill in the missing return type in the main method.", "public static ____ main(String[] args)", ["int", "String", "void", "class"], 2, "main returns no value, so it uses void."),
  fb("jf-003", "variables", "Beginner", "Fill in the type for a true/false variable.", "____ passed = true;", ["int", "double", "boolean", "char"], 2, "boolean stores true or false."),
  fb("jf-004", "variables", "Beginner", "Fill in the operator for equality comparison.", "if (score ____ 100) { }", ["=", "==", "+=", "!="], 1, "== compares primitive values."),
  fb("jf-005", "io", "Beginner", "Fill in the method that prints with a newline.", "System.out.____(\"Hello\");", ["print", "println", "nextLine", "printfOnly"], 1, "println prints and adds a newline."),
  fb("jf-006", "io", "Beginner", "Fill in the class used here.", "____ sc = new ____(System.in);", ["String", "Scanner", "System", "Input"], 1, "Scanner reads input from System.in."),
  fb("jf-007", "conditionals", "Beginner", "Fill in the fallback keyword.", "if (x > 0) { } ____ { }", ["else", "case", "while", "catch"], 0, "else is the fallback branch."),
  fb("jf-008", "conditionals", "Beginner", "Fill in the keyword used for multi-way discrete branching.", "____ (day) { case 1: break; }", ["if", "switch", "loop", "try"], 1, "switch selects among cases."),
  fb("jf-009", "loops", "Beginner", "Fill in the counted-loop keyword.", "____ (int i = 0; i < 5; i++) { }", ["while", "for", "switch", "class"], 1, "for is the common counted loop."),
  fb("jf-010", "loops", "Beginner", "Fill in the keyword that exits a loop.", "if (found) ____;", ["continue", "break", "class", "new"], 1, "break exits the nearest loop."),
  fb("jf-011", "methods", "Easy", "Fill in the keyword that sends back a value.", "____ total;", ["return", "break", "static", "void"], 0, "return exits a method and can send a value."),
  fb("jf-012", "methods", "Easy", "Fill in the modifier that lets a method be called on the class.", "public ____ int add(int a, int b)", ["private", "static", "final", "new"], 1, "static belongs to the class."),
  fb("jf-013", "arrays", "Easy", "Fill in the array length access.", "for (int i = 0; i < arr.____; i++)", ["size()", "length()", "length", "count"], 2, "Arrays use the length field."),
  fb("jf-014", "arrays", "Easy", "Fill in the first index used in Java arrays.", "int first = nums[____];", ["0", "1", "-1", "length"], 0, "The first array index is 0."),
  fb("jf-015", "strings", "Easy", "Fill in the String content comparison method.", "name.____(\"Ana\")", ["==", "equals", "compare", "same"], 1, "equals compares contents."),
  fb("jf-016", "strings", "Easy", "Fill in the method for a string's character count.", "int n = text.____();", ["length", "lengthOf", "length", "size"], 2, "String uses length()."),
  fb("jf-017", "oop", "Medium", "Fill in the keyword for creating an object.", "Student s = ____ Student();", ["class", "new", "this", "extends"], 1, "new creates an object."),
  fb("jf-018", "oop", "Medium", "Fill in the current-object reference.", "____.name = name;", ["this", "super", "class", "object"], 0, "this refers to the current object."),
  fb("jf-019", "constructors", "Medium", "Fill in the access modifier for encapsulated fields.", "____ int age;", ["public", "private", "static", "return"], 1, "private hides the field inside the class."),
  fb("jf-020", "constructors", "Medium", "Fill in the constructor name.", "public ____ (String name) { this.name = name; }", ["void", "class", "Student", "new"], 2, "A constructor has the same name as its class."),
  fb("jf-021", "inheritance", "Medium", "Fill in the inheritance keyword.", "class Dog ____ Animal { }", ["implements", "extends", "super", "inherits"], 1, "A class extends another class."),
  fb("jf-022", "inheritance", "Medium", "Fill in the annotation used for overridden methods.", "____\npublic String speak() { return \"Hi\"; }", ["@Override", "@Static", "@Class", "@Main"], 0, "@Override helps catch signature mistakes."),
  fb("jf-023", "interfaces", "Medium", "Fill in the keyword for using an interface.", "class Circle ____ Drawable { }", ["extends", "implements", "interface", "abstract"], 1, "Classes implement interfaces."),
  fb("jf-024", "interfaces", "Medium", "Fill in the keyword for a method without a body in an abstract class.", "public ____ void draw();", ["final", "static", "abstract", "new"], 2, "abstract methods omit the body."),
  fb("jf-025", "exceptions", "Medium", "Fill in the keyword for risky code.", "____ { int x = 10 / n; } catch (ArithmeticException e) { }", ["try", "throw", "finally", "case"], 0, "try wraps code that may throw."),
  fb("jf-026", "exceptions", "Medium", "Fill in the keyword that manually signals an exception.", "____ new IllegalArgumentException();", ["throws", "throw", "catch", "try"], 1, "throw throws one exception object."),
  fb("jf-027", "collections", "Medium", "Fill in the resizable-list class.", "____<String> names = new ____<>();", ["HashMap", "HashSet", "ArrayList", "Scanner"], 2, "ArrayList is a resizable list."),
  fb("jf-028", "collections", "Medium", "Fill in the key-value collection.", "____<String, Integer> scores = new ____<>();", ["ArrayList", "HashMap", "HashSet", "String"], 1, "HashMap stores key-value pairs."),
  fb("jf-029", "files", "Hard", "Fill in the resource-safe statement.", "try (Scanner sc = new Scanner(file)) { } ____ (Exception e) { }", ["catch", "case", "else", "finallyOnly"], 0, "catch handles exceptions after try."),
  fb("jf-030", "files", "Hard", "Fill in the writer class.", "____ out = new ____(\"out.txt\");", ["Scanner", "PrintWriter", "ArrayList", "StringBuilder"], 1, "PrintWriter writes text."),
  fb("jf-031", "recursion", "Hard", "Fill in the base-case return.", "if (n == 0) ____ 1;", ["break", "return", "continue", "new"], 1, "A base case returns without another recursive call."),
  fb("jf-032", "recursion", "Hard", "Fill in the recursive call.", "return n * factorial(____);", ["n", "n - 1", "0", "n + 1"], 1, "The recursive call must move toward the base case."),
  fb("jf-033", "algorithms", "Hard", "Fill in the initial max assignment.", "int max = arr[____];", ["0", "1", "arr.length", "-1"], 0, "Start with a valid existing element."),
  fb("jf-034", "algorithms", "Hard", "Fill in the midpoint expression for binary search.", "int mid = left + (right - left) / ____;", ["0", "1", "2", "10"], 2, "Divide the remaining range by 2."),
  fb("jf-035", "strings", "Easy", "Fill in the mutable string helper.", "____ sb = new ____();", ["String", "StringBuilder", "Scanner", "BuilderString"], 1, "StringBuilder is mutable."),
  fb("jf-036", "arrays", "Easy", "Fill in the enhanced for syntax.", "for (int x ____ nums) { }", ["in", ":", "of", "from"], 1, "Enhanced for uses a colon."),
  fb("jf-037", "variables", "Beginner", "Fill in the logical NOT operator.", "if (____done) { }", ["!", "~", "not", "!="], 0, "! negates a boolean."),
  fb("jf-038", "conditionals", "Beginner", "Fill in the greater-than-or-equal operator.", "if (grade ____ 75) { }", [">", ">=", "=>", "==>"], 1, ">= means greater than or equal."),
  fb("jf-039", "methods", "Easy", "Fill in the parameter separator.", "sum(int a____ int b)", [",", ";", ":", "."], 0, "Parameters are separated by commas."),
  fb("jf-040", "collections", "Medium", "Fill in the method to add to an ArrayList.", "names.____(\"Mia\");", ["put", "add", "push", "appendOnly"], 1, "ArrayList uses add."),
];

export const javaCodingProblems: JavaCodingProblem[] = [
  {
    id: "jc-001",
    title: "Echo Name",
    difficulty: "Beginner",
    topicIds: ["basics", "io"],
    statement: "Read one name and print Hello, followed by the name.",
    inputFormat: "One word name.",
    outputFormat: "Hello, <name>",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        String name = sc.next();\n        // TODO: print the greeting"),
    sampleTests: [{ input: "Ana\n", expectedOutput: "Hello, Ana" }],
    explanation: "Use Scanner to read a word and println to print the exact greeting.",
  },
  {
    id: "jc-002",
    title: "Sum Two Integers",
    difficulty: "Beginner",
    topicIds: ["variables", "io"],
    statement: "Read two integers and print their sum.",
    inputFormat: "Two integers a and b.",
    outputFormat: "The sum a + b.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        // TODO: print sum"),
    sampleTests: [{ input: "7 5\n", expectedOutput: "12" }],
    explanation: "Read both integers, add them, and print the result.",
  },
  {
    id: "jc-003",
    title: "Pass or Fail",
    difficulty: "Beginner",
    topicIds: ["conditionals"],
    statement: "Read one integer grade. Print PASS if it is at least 75, otherwise print FAIL.",
    inputFormat: "One integer grade.",
    outputFormat: "PASS or FAIL.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int grade = sc.nextInt();\n        // TODO: print PASS or FAIL"),
    sampleTests: [{ input: "80\n", expectedOutput: "PASS" }, { input: "70\n", expectedOutput: "FAIL" }],
    explanation: "Use an if/else branch with grade >= 75.",
  },
  {
    id: "jc-004",
    title: "Count 1 to N",
    difficulty: "Beginner",
    topicIds: ["loops"],
    statement: "Read n and print numbers from 1 to n, one number per line.",
    inputFormat: "One integer n.",
    outputFormat: "Numbers 1 through n, each on its own line.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // TODO: print 1 to n"),
    sampleTests: [{ input: "3\n", expectedOutput: "1\n2\n3" }],
    explanation: "A for loop from 1 through n prints each value.",
  },
  {
    id: "jc-005",
    title: "Rectangle Area",
    difficulty: "Beginner",
    topicIds: ["variables", "io"],
    statement: "Read width and height as integers and print the rectangle area.",
    inputFormat: "Two integers width and height.",
    outputFormat: "width * height.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int width = sc.nextInt();\n        int height = sc.nextInt();\n        // TODO: print area"),
    sampleTests: [{ input: "4 6\n", expectedOutput: "24" }],
    explanation: "Area is width multiplied by height.",
  },
  {
    id: "jc-006",
    title: "Largest of Three",
    difficulty: "Easy",
    topicIds: ["conditionals"],
    statement: "Read three integers and print the largest.",
    inputFormat: "Three integers.",
    outputFormat: "The largest integer.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int c = sc.nextInt();\n        // TODO: print largest"),
    sampleTests: [{ input: "4 9 2\n", expectedOutput: "9" }],
    explanation: "Track the current maximum and compare each value.",
  },
  {
    id: "jc-007",
    title: "Even Sum",
    difficulty: "Easy",
    topicIds: ["loops", "conditionals"],
    statement: "Read n, then read n integers. Print the sum of the even integers.",
    inputFormat: "n followed by n integers.",
    outputFormat: "Sum of even numbers.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        // TODO: read n integers and add the even ones\n        System.out.println(sum);"),
    sampleTests: [{ input: "5\n1 2 3 4 6\n", expectedOutput: "12" }],
    explanation: "Use modulo 2 to identify even numbers.",
  },
  {
    id: "jc-008",
    title: "Average Score",
    difficulty: "Easy",
    topicIds: ["loops", "variables"],
    statement: "Read n and n integer scores. Print the average as a double with two decimal places.",
    inputFormat: "n followed by n integer scores.",
    outputFormat: "Average formatted to two decimals.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        // TODO: read scores and compute average"),
    sampleTests: [{ input: "3\n80 90 100\n", expectedOutput: "90.00" }],
    explanation: "Cast or divide by a double, then use printf(\"%.2f\", avg).",
  },
  {
    id: "jc-009",
    title: "Reverse a Word",
    difficulty: "Easy",
    topicIds: ["strings", "loops"],
    statement: "Read one word and print it reversed.",
    inputFormat: "One word.",
    outputFormat: "The reversed word.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        String word = sc.next();\n        // TODO: print reversed word"),
    sampleTests: [{ input: "java\n", expectedOutput: "avaj" }],
    explanation: "Loop from the last index down to 0 or use StringBuilder.",
  },
  {
    id: "jc-010",
    title: "Array Maximum",
    difficulty: "Easy",
    topicIds: ["arrays", "loops"],
    statement: "Read n and n integers. Print the maximum value.",
    inputFormat: "n followed by n integers.",
    outputFormat: "Maximum integer.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // TODO: read values and print maximum"),
    sampleTests: [{ input: "5\n3 8 2 9 4\n", expectedOutput: "9" }],
    explanation: "Initialize max from the first value, then compare the rest.",
  },
  {
    id: "jc-011",
    title: "Vowel Counter",
    difficulty: "Medium",
    topicIds: ["strings", "conditionals"],
    statement: "Read one word and print how many vowels it contains. Count a, e, i, o, u in either case.",
    inputFormat: "One word.",
    outputFormat: "Number of vowels.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        String word = sc.next();\n        int count = 0;\n        // TODO: count vowels\n        System.out.println(count);"),
    sampleTests: [{ input: "Education\n", expectedOutput: "5" }],
    explanation: "Lowercase the word and check each character.",
  },
  {
    id: "jc-012",
    title: "Palindrome Word",
    difficulty: "Medium",
    topicIds: ["strings", "loops"],
    statement: "Read one word. Print YES if it is a palindrome, otherwise NO.",
    inputFormat: "One word.",
    outputFormat: "YES or NO.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        String word = sc.next();\n        // TODO: check palindrome"),
    sampleTests: [{ input: "level\n", expectedOutput: "YES" }, { input: "java\n", expectedOutput: "NO" }],
    explanation: "Compare characters from both ends moving inward.",
  },
  {
    id: "jc-013",
    title: "Frequency of Target",
    difficulty: "Medium",
    topicIds: ["arrays", "loops"],
    statement: "Read n, then n integers, then a target integer. Print how many times target appears.",
    inputFormat: "n, n integers, target.",
    outputFormat: "Frequency of target.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // TODO: count target frequency"),
    sampleTests: [{ input: "6\n1 2 2 3 2 4\n2\n", expectedOutput: "3" }],
    explanation: "Count values equal to the target.",
  },
  {
    id: "jc-014",
    title: "Simple Calculator",
    difficulty: "Medium",
    topicIds: ["conditionals", "variables"],
    statement: "Read a, operator, and b. Operator is +, -, *, or /. Print the integer result. For division, use integer division.",
    inputFormat: "int a, char operator, int b.",
    outputFormat: "Integer result.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        char op = sc.next().charAt(0);\n        int b = sc.nextInt();\n        // TODO: compute result"),
    sampleTests: [{ input: "8 * 7\n", expectedOutput: "56" }],
    explanation: "Use switch or if/else on the operator character.",
  },
  {
    id: "jc-015",
    title: "Student Class Output",
    difficulty: "Medium",
    topicIds: ["oop", "constructors"],
    statement: "Create a Student class with name and age fields. Read name and age, then print '<name> is <age>'.",
    inputFormat: "Name and integer age.",
    outputFormat: "<name> is <age>",
    starterCode: "import java.util.*;\n\nclass Student {\n    String name;\n    int age;\n\n    // TODO: constructor\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String name = sc.next();\n        int age = sc.nextInt();\n        // TODO: create Student and print\n    }\n}\n",
    sampleTests: [{ input: "Mia 19\n", expectedOutput: "Mia is 19" }],
    explanation: "Use a constructor to initialize the object, then read its fields for output.",
  },
  {
    id: "jc-016",
    title: "Unique Word Count",
    difficulty: "Hard",
    topicIds: ["collections", "strings"],
    statement: "Read n and then n words. Print the number of unique words.",
    inputFormat: "n followed by n words.",
    outputFormat: "Number of distinct words.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // TODO: count unique words"),
    sampleTests: [{ input: "6\ncat dog cat bird dog ant\n", expectedOutput: "4" }],
    explanation: "A HashSet stores unique values.",
  },
  {
    id: "jc-017",
    title: "Balanced Parentheses Lite",
    difficulty: "Hard",
    topicIds: ["collections", "algorithms"],
    statement: "Read a string containing only '(' and ')'. Print BALANCED if every opening parenthesis is closed in order, otherwise NOT BALANCED.",
    inputFormat: "One parentheses string.",
    outputFormat: "BALANCED or NOT BALANCED.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        // TODO: check balance"),
    sampleTests: [{ input: "(()())\n", expectedOutput: "BALANCED" }, { input: "())(\n", expectedOutput: "NOT BALANCED" }],
    explanation: "Track a counter: increment for '(' and decrement for ')'. It must never go negative and must end at zero.",
  },
  {
    id: "jc-018",
    title: "Recursive Factorial",
    difficulty: "Hard",
    topicIds: ["recursion", "methods"],
    statement: "Read n from 0 to 12 and print n! using a recursive method.",
    inputFormat: "One integer n.",
    outputFormat: "n factorial.",
    starterCode: "import java.util.*;\n\npublic class Main {\n    static int factorial(int n) {\n        // TODO: recursive factorial\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(factorial(n));\n    }\n}\n",
    sampleTests: [{ input: "5\n", expectedOutput: "120" }],
    explanation: "Use base case n == 0 and recursive case n * factorial(n - 1).",
  },
  {
    id: "jc-019",
    title: "Second Largest",
    difficulty: "Hard",
    topicIds: ["arrays", "algorithms"],
    statement: "Read n and n distinct integers. Print the second largest value.",
    inputFormat: "n followed by n distinct integers.",
    outputFormat: "Second largest integer.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // TODO: print second largest"),
    sampleTests: [{ input: "5\n10 3 8 20 15\n", expectedOutput: "15" }],
    explanation: "Track largest and second largest while scanning once.",
  },
  {
    id: "jc-020",
    title: "Word Frequencies",
    difficulty: "Hard",
    topicIds: ["collections", "algorithms"],
    statement: "Read n and n words. Then read one query word. Print how many times the query appears.",
    inputFormat: "n, n words, query word.",
    outputFormat: "Frequency of query.",
    starterCode: starter("        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        // TODO: count words with HashMap"),
    sampleTests: [{ input: "7\nred blue red green blue red yellow\nred\n", expectedOutput: "3" }],
    explanation: "Use a HashMap<String, Integer> to count each word.",
  },
];

export const javaDifficultyOrder: JavaDifficulty[] = ["Beginner", "Easy", "Medium", "Hard"];
export const javaTopicIds = topicIds;
