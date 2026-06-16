export const topic1to5 = [
  {
    id: "topic-1",
    slug: "intro-to-c",
    title: "Introduction to Programming & C Language",
    shortTitle: "Intro to C",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    description: "Learn the basics of programming, the structure of a C program, and how to write your first code.",
    theory: {
      sections: [
        {
          id: "s1-1",
          heading: "What is C?",
          type: "definition",
          content: "C is a powerful, general-purpose, structured programming language developed by Dennis Ritchie at Bell Labs between 1969 and 1973. It is the foundation of modern computing — the Linux kernel, Windows NT, Python interpreter, and most embedded systems are all written in C.\n\nC gives programmers **direct control over memory** and hardware. Unlike higher-level languages that abstract these details away, C is often called a 'middle-level' language: it has the readability of a high-level language, but the power and efficiency of a low-level language like assembly.",
        },
        {
          id: "s1-2",
          heading: "Why Learn C?",
          type: "concept",
          content: "C is the bedrock of computer science for several compelling reasons:\n- **Speed**: C programs run extremely fast since they compile directly to machine code.\n- **Portability**: A C program written on one machine can be compiled on another with minimal changes.\n- **Foundation**: Learning C teaches you how computers really work (memory, pointers, stack, heap).\n- **Prerequisite**: C++, Java, Python, JavaScript — all borrowed syntax and concepts from C.",
          table: {
            headers: ["Language", "Based on C?", "Key Borrowed Concept"],
            rows: [
              ["C++", "Yes (superset)", "All of C + OOP"],
              ["Java", "C-like syntax", "{ } blocks, data types"],
              ["Python", "Written in C", "Core data structures"],
              ["JavaScript", "C-like syntax", "Control flow, operators"]
            ]
          }
        },
        {
          id: "s1-3",
          heading: "Basic Structure of a C Program",
          type: "syntax",
          content: "Every C program follows a strict structure. Understanding each part is critical before writing any code.",
          code: `// 1. Header Files: Tell the compiler which libraries to include
#include <stdio.h>   // Standard Input/Output (printf, scanf)
#include <stdlib.h>  // Standard Library (malloc, free, exit)

// 2. Global Declarations (optional): Variables/functions visible everywhere
int globalCount = 0;

// 3. Main Function: Entry point of every C program
int main() {
    // 4. Local Variable Declarations
    int age = 20;

    // 5. Statements (instructions to execute)
    printf("Age: %d\\n", age);

    // 6. Return Statement: 0 = success, any other value = error
    return 0;
}`
        },
        {
          id: "s1-4",
          heading: "The Compilation Pipeline (A to Z)",
          type: "concept",
          content: "When you run a C program, it goes through 4 distinct stages before executing. Each stage transforms the file into something closer to machine code:",
          table: {
            headers: ["Stage", "Tool", "Input", "Output", "What Happens"],
            rows: [
              ["1. Preprocessing", "Preprocessor", "hello.c", "hello.i", "Expands #include, #define macros, removes comments"],
              ["2. Compilation", "Compiler (GCC)", "hello.i", "hello.s", "Converts C code to Assembly language"],
              ["3. Assembly", "Assembler", "hello.s", "hello.o", "Converts Assembly to binary object code"],
              ["4. Linking", "Linker", "hello.o + libs", "hello.exe", "Combines object files and library functions into final executable"]
            ]
          }
        },
        {
          id: "s1-5",
          heading: "Escape Sequences",
          type: "concept",
          content: "Escape sequences are special characters in a string preceded by a backslash `\\`. They represent non-printable or special characters.",
          table: {
            headers: ["Sequence", "Name", "Effect"],
            rows: [
              ["\\n", "Newline", "Moves cursor to next line"],
              ["\\t", "Horizontal Tab", "Adds 8-space tab indent"],
              ["\\\\", "Backslash", "Prints a literal \\"],
              ["\\\"", "Double Quote", "Prints a literal \"inside a string\""],
              ["\\r", "Carriage Return", "Moves cursor to start of same line"],
              ["\\0", "Null", "Terminates strings (end-of-string marker)"]
            ]
          },
          code: `printf("Name:\\tJohn\\n");   // Output: Name:   John
printf("Line 1\\nLine 2"); // Output on two lines
printf("He said \\"Hello\\""); // He said "Hello"`
        },
        {
          id: "s1-6",
          heading: "Comments in C",
          type: "syntax",
          content: "Comments are ignored by the compiler. Use them generously to explain logic. There are two styles:",
          code: `// Single-line comment: Good for explaining one line

/*
   Multi-line comment:
   Good for describing a whole function or
   temporarily disabling a block of code.
*/

// Always write comments BEFORE complex logic, not after.`
        }
      ],
    },
    problems: [
      {
        id: "p1-1",
        title: "Print Your Name",
        difficulty: "Easy",
        statement: "Write a C program to print your name on the screen.",
        inputFormat: "None",
        outputFormat: "Your name as a string",
        constraints: "None",
        logic: [
          "Include the standard I/O library.",
          "Write the main function.",
          "Use printf to output your name.",
          "Return 0."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    printf("John Doe\\n");\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "John Doe",
        timeComplexity: "O(1)"
      },
      {
        id: "p1-2",
        title: "Print Multiple Lines",
        difficulty: "Easy",
        statement: "Write a C program to print 'Hello' on the first line and 'World' on the second line.",
        inputFormat: "None",
        outputFormat: "Two lines of text",
        constraints: "None",
        logic: [
          "Use printf with the newline character \\n between the two words, or use two separate printf statements."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello\\nWorld\\n");\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "Hello\nWorld",
        timeComplexity: "O(1)"
      },
      {
        id: "p1-3",
        title: "Print a Shape",
        difficulty: "Medium",
        statement: "Write a C program to print a triangle using asterisks (*).",
        inputFormat: "None",
        outputFormat: "A triangle shape made of *",
        constraints: "Height should be 3 lines",
        logic: [
          "Use multiple printf statements to manually draw the shape line by line."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    printf("  *  \\n");\n    printf(" *** \\n");\n    printf("*****\\n");\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "  *  \n *** \n*****",
        timeComplexity: "O(1)"
      },
      {
        id: "p1-4",
        title: "Format Output with Tabs",
        difficulty: "Medium",
        statement: "Write a program to print three words separated by a horizontal tab.",
        inputFormat: "None",
        outputFormat: "Three words separated by tabs",
        constraints: "None",
        logic: [
          "Use the \\t escape sequence inside the printf string."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    printf("Apple\\tBanana\\tCherry\\n");\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "Apple   Banana  Cherry",
        timeComplexity: "O(1)"
      },
      {
        id: "p1-5",
        title: "Identify the Error",
        difficulty: "Hard",
        statement: "The following program has a syntax error. Fix it to print 'Success'.\n```c\n#include <stdio.h>\nint main() {\n    printf(\"Success\")\n    return 0;\n}\n```",
        inputFormat: "None",
        outputFormat: "Success",
        constraints: "Must compile successfully",
        logic: [
          "Identify that the semicolon (;) is missing at the end of the printf statement."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    printf("Success\\n");\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "Success",
        timeComplexity: "O(1)"
      }
    ]
  },
  {
    id: "topic-2",
    slug: "data-types-arithmetic",
    title: "Data Types & Arithmetic Operations",
    shortTitle: "Data & Arithmetic",
    icon: "🧮",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    glowColor: "shadow-green-500/20",
    description: "Understand variables, basic data types (int, float, char), and perform mathematical calculations.",
    theory: {
      sections: [
        {
          id: "s2-1",
          heading: "Variables & Memory",
          type: "definition",
          content: "A **variable** is a named storage location in RAM (memory) that holds a value of a specific type. When you declare a variable, the operating system allocates a specific number of bytes to store it.\n\nEvery variable has three properties:\n- **Name**: The identifier used to reference it (e.g., `age`).\n- **Type**: Determines the size and the kind of data stored (e.g., `int`).\n- **Value**: The actual data stored at that memory location.",
          code: `int age = 20;    // 4 bytes in RAM for an integer
float pi = 3.14; // 4 bytes in RAM for a decimal
char ch = 'A';   // 1 byte in RAM for a character`
        },
        {
          id: "s2-2",
          heading: "Primitive Data Types in C",
          type: "concept",
          content: "C has several built-in (primitive) data types. Each has a fixed size and range of values it can represent.",
          table: {
            headers: ["Type", "Size (bytes)", "Range", "Format Specifier", "Example"],
            rows: [
              ["char", "1", "-128 to 127", "%c", "'A', 'z', '9'"],
              ["int", "4", "-2,147,483,648 to 2,147,483,647", "%d", "42, -100, 0"],
              ["short int", "2", "-32,768 to 32,767", "%hd", "1000, -200"],
              ["long int", "8", "-9.2×10^18 to 9.2×10^18", "%ld", "1234567890L"],
              ["float", "4", "~3.4×10^-38 to 3.4×10^38 (6 decimal places)", "%f", "3.14f"],
              ["double", "8", "~1.7×10^-308 to 1.7×10^308 (15 decimal places)", "%lf", "3.14159265"],
              ["unsigned int", "4", "0 to 4,294,967,295", "%u", "500, 0"]
            ]
          }
        },
        {
          id: "s2-3",
          heading: "ASCII & the char Type",
          type: "concept",
          content: "The `char` type stores a single character, but internally it's stored as a number (ASCII code). This means you can perform arithmetic on characters!",
          table: {
            headers: ["Character", "ASCII Value", "Useful Fact"],
            rows: [
              ["'A'", "65", "Uppercase A through Z = 65 to 90"],
              ["'a'", "97", "Lowercase a through z = 97 to 122"],
              ["'0'", "48", "Digit 0 through 9 = 48 to 57"],
              ["'\\n'", "10", "Newline character"],
              ["' '", "32", "Space character"]
            ]
          },
          code: `char upper = 'A';
char lower = upper + 32; // 65 + 32 = 97 = 'a'
printf("%c\\n", lower);  // Prints: a

// Check if character is a digit
char c = '7';
if (c >= '0' && c <= '9') {
    int digit = c - '0'; // Convert '7' to integer 7
}`
        },
        {
          id: "s2-4",
          heading: "Format Specifiers",
          type: "syntax",
          content: "Format specifiers are used with `printf` (output) and `scanf` (input) to indicate the data type being processed. Using the wrong specifier causes undefined behavior.",
          table: {
            headers: ["Specifier", "Type", "printf Example", "scanf Example"],
            rows: [
              ["%d", "int", `printf("%d", age)`, `scanf("%d", &age)`],
              ["%f", "float", `printf("%.2f", pi)`, `scanf("%f", &pi)`],
              ["%lf", "double", `printf("%lf", d)`, `scanf("%lf", &d)`],
              ["%c", "char", `printf("%c", ch)`, `scanf(" %c", &ch)`],
              ["%s", "string (char[])", `printf("%s", name)`, `scanf("%s", name)`],
              ["%ld", "long int", `printf("%ld", n)`, `scanf("%ld", &n)`]
            ]
          }
        },
        {
          id: "s2-5",
          heading: "Arithmetic Operators & Integer Division",
          type: "concept",
          content: "C supports all standard arithmetic operations. The most important thing to understand is **integer division**: when both operands are integers, the result is always an integer (the decimal part is **truncated**, not rounded).",
          code: `int a = 10, b = 3;
printf("%d\\n", a / b);  // 3 (NOT 3.33!) - decimal truncated
printf("%d\\n", a % b);  // 1 (the remainder)

// To get the decimal result, cast to float first:
float result = (float)a / b;
printf("%.2f\\n", result); // 3.33

// Operator Precedence (BODMAS): * and / before + and -
int x = 2 + 3 * 4; // = 2 + 12 = 14 (NOT 20)
int y = (2 + 3) * 4; // = 5 * 4 = 20 (parentheses first)`
        },
        {
          id: "s2-6",
          heading: "Constants (const & #define)",
          type: "syntax",
          content: "A **constant** is a value that cannot be changed once set. Use constants for values like PI or array sizes to make code readable and safe.",
          code: `// Method 1: const keyword (type-safe, preferred in modern C)
const float PI = 3.14159;
const int MAX_SIZE = 100;

// Method 2: #define macro (simple text substitution by preprocessor)
#define GRAVITY 9.81
#define MAX_STUDENTS 50

// PI = 3.0; // ERROR! Cannot reassign a const`
        }
      ]
    },
    problems: [
      {
        id: "p2-1",
        title: "Sum of Two Numbers",
        difficulty: "Easy",
        statement: "Write a program to read two integers and print their sum.",
        inputFormat: "Two integers separated by space",
        outputFormat: "Sum of the two integers",
        constraints: "Variables must be int",
        logic: [
          "Declare two int variables.",
          "Read them using scanf.",
          "Calculate sum and print using %d."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("Sum = %d\\n", a + b);\n    return 0;\n}`,
        sampleInput: "5 7",
        sampleOutput: "Sum = 12",
        timeComplexity: "O(1)"
      },
      {
        id: "p2-2",
        title: "Area of a Circle",
        difficulty: "Easy",
        statement: "Calculate the area of a circle given its radius. Use PI = 3.14159.",
        inputFormat: "A floating-point number representing radius",
        outputFormat: "Area formatted to 2 decimal places",
        constraints: "Radius > 0",
        logic: [
          "Declare float variables for radius and area.",
          "Area = PI * radius * radius.",
          "Print using %.2f."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    float radius, area;\n    const float PI = 3.14159;\n    scanf("%f", &radius);\n    area = PI * radius * radius;\n    printf("%.2f\\n", area);\n    return 0;\n}`,
        sampleInput: "5.0",
        sampleOutput: "78.54",
        timeComplexity: "O(1)"
      },
      {
        id: "p2-3",
        title: "Swap Two Variables",
        difficulty: "Medium",
        statement: "Write a program to swap the values of two variables using a temporary variable.",
        inputFormat: "Two integers",
        outputFormat: "The two integers in swapped order",
        constraints: "None",
        logic: [
          "Store first variable in temp.",
          "Assign second variable to first.",
          "Assign temp to second."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b, temp;\n    scanf("%d %d", &a, &b);\n    temp = a;\n    a = b;\n    b = temp;\n    printf("%d %d\\n", a, b);\n    return 0;\n}`,
        sampleInput: "10 20",
        sampleOutput: "20 10",
        timeComplexity: "O(1)"
      },
      {
        id: "p2-4",
        title: "Find Remainder",
        difficulty: "Medium",
        statement: "Write a program to find the remainder when A is divided by B.",
        inputFormat: "Two integers A and B",
        outputFormat: "The remainder",
        constraints: "B != 0",
        logic: [
          "Use the modulo operator %."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("%d\\n", a % b);\n    return 0;\n}`,
        sampleInput: "14 3",
        sampleOutput: "2",
        timeComplexity: "O(1)"
      },
      {
        id: "p2-5",
        title: "Calculate Average",
        difficulty: "Hard",
        statement: "Read 3 integers and calculate their exact average (including decimals).",
        inputFormat: "Three integers",
        outputFormat: "Average formatted to 2 decimal places",
        constraints: "Must handle decimal results properly",
        logic: [
          "Read 3 integers.",
          "Sum them up.",
          "Divide the sum by 3.0 (or cast sum to float) to ensure floating-point division."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    scanf("%d %d %d", &a, &b, &c);\n    float avg = (a + b + c) / 3.0;\n    printf("%.2f\\n", avg);\n    return 0;\n}`,
        sampleInput: "4 5 7",
        sampleOutput: "5.33",
        timeComplexity: "O(1)"
      }
    ]
  },
  {
    id: "topic-3",
    slug: "control-statements-if",
    title: "Control Statements – if, if-else",
    shortTitle: "if Statements",
    icon: "🛤️",
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
    description: "Make decisions in your code using conditional statements and relational operators.",
    theory: {
      sections: [
        {
          id: "s3-1",
          heading: "The if Statement & Truth Values",
          type: "definition",
          content: "The `if` statement is the most basic control flow statement in C. It decides whether to execute a block of statements based on a conditional test.\n\nIn C, there is no built-in Boolean type in core older versions (until C99 introduced <stdbool.h>). C evaluates conditions based on integer values:\n- **TRUE**: Any non-zero numeric value (e.g., 1, -5, 3.14).\n- **FALSE**: Zero (0).\n\nIf the condition evaluates to non-zero, the statements inside the braces are run.",
          code: `if (condition) {
    // Code block executes ONLY if condition is true (non-zero)
}`
        },
        {
          id: "s3-2",
          heading: "Relational & Equality Operators",
          type: "concept",
          content: "To form conditions, we use relational and equality operators to compare two operands. The result of these operations is always 1 (for true) or 0 (for false).",
          table: {
            headers: ["Operator", "Description", "Example", "Result (for x=10, y=20)"],
            rows: [
              ["==", "Equal to", "x == y", "0 (False)"],
              ["!=", "Not equal to", "x != y", "1 (True)"],
              [">", "Greater than", "x > y", "0 (False)"],
              ["<", "Less than", "x < y", "1 (True)"],
              [">=", "Greater than or equal to", "x >= y", "0 (False)"],
              ["<=", "Less than or equal to", "x <= y", "1 (True)"]
            ]
          }
        },
        {
          id: "s3-3",
          heading: "The if-else Statement",
          type: "syntax",
          content: "When you want to execute one block of code if a condition is true, and a *different* block if it is false, use an `if-else` statement. Only one of the two blocks will ever execute.\n\nBelow is the visual execution flow of an if-else decision path.",
          flowchart: "if-else",
          code: `int age = 18;
if (age >= 18) {
    printf("Access Granted. You are an adult.\\n");
} else {
    printf("Access Denied. You are a minor.\\n");
}`
        },
        {
          id: "s3-4",
          heading: "The else-if Ladder",
          type: "syntax",
          content: "When you have multiple mutually exclusive conditions to check, you can chain if-else statements together into an `else-if` ladder. The program checks conditions from top to bottom, executing the *first* block that evaluates to true, and then skipping the rest. If none of the conditions match, the optional final `else` block runs.",
          code: `int score = 85;

if (score >= 90) {
    printf("Grade: A\\n");
} else if (score >= 80) {
    printf("Grade: B\\n"); // This executes, and remaining blocks are skipped
} else if (score >= 70) {
    printf("Grade: C\\n");
} else {
    printf("Grade: F\\n");
}`
        }
      ]
    },
    problems: [
      {
        id: "p3-1",
        title: "Check Positive or Negative",
        difficulty: "Easy",
        statement: "Write a program to check if a number is positive or negative. Print 'Zero' if it is 0.",
        inputFormat: "One integer",
        outputFormat: "'Positive', 'Negative', or 'Zero'",
        constraints: "None",
        logic: [
          "Use if for > 0, else if for < 0, else for 0."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if (n > 0) printf("Positive\\n");\n    else if (n < 0) printf("Negative\\n");\n    else printf("Zero\\n");\n    return 0;\n}`,
        sampleInput: "-5",
        sampleOutput: "Negative",
        timeComplexity: "O(1)"
      },
      {
        id: "p3-2",
        title: "Even or Odd",
        difficulty: "Easy",
        statement: "Determine whether a given integer is even or odd.",
        inputFormat: "One integer",
        outputFormat: "'Even' or 'Odd'",
        constraints: "None",
        logic: [
          "A number is even if n % 2 == 0, else it's odd."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if (n % 2 == 0) printf("Even\\n");\n    else printf("Odd\\n");\n    return 0;\n}`,
        sampleInput: "7",
        sampleOutput: "Odd",
        timeComplexity: "O(1)"
      },
      {
        id: "p3-3",
        title: "Maximum of Two Numbers",
        difficulty: "Medium",
        statement: "Find the maximum between two numbers.",
        inputFormat: "Two integers",
        outputFormat: "The larger integer",
        constraints: "None",
        logic: [
          "Compare using a > b."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    if (a > b) printf("%d\\n", a);\n    else printf("%d\\n", b);\n    return 0;\n}`,
        sampleInput: "15 25",
        sampleOutput: "25",
        timeComplexity: "O(1)"
      },
      {
        id: "p3-4",
        title: "Pass or Fail",
        difficulty: "Medium",
        statement: "Given a student's marks out of 100, print 'Pass' if marks >= 40, else print 'Fail'.",
        inputFormat: "Integer marks",
        outputFormat: "'Pass' or 'Fail'",
        constraints: "0 <= marks <= 100",
        logic: [
          "Simple if-else condition based on marks >= 40."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int marks;\n    scanf("%d", &marks);\n    if (marks >= 40) printf("Pass\\n");\n    else printf("Fail\\n");\n    return 0;\n}`,
        sampleInput: "35",
        sampleOutput: "Fail",
        timeComplexity: "O(1)"
      },
      {
        id: "p3-5",
        title: "Absolute Value",
        difficulty: "Hard",
        statement: "Find the absolute value of a number without using library functions.",
        inputFormat: "One integer",
        outputFormat: "Absolute value",
        constraints: "None",
        logic: [
          "If the number is negative, multiply it by -1 to make it positive."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if (n < 0) {\n        n = -n;\n    }\n    printf("%d\\n", n);\n    return 0;\n}`,
        sampleInput: "-42",
        sampleOutput: "42",
        timeComplexity: "O(1)"
      }
    ]
  },
  {
    id: "topic-4",
    slug: "nested-if-logical",
    title: "Nested if & Logical Conditions",
    shortTitle: "Logical Conditions",
    icon: "🔀",
    color: "from-rose-500 to-red-500",
    borderColor: "border-rose-500/30",
    glowColor: "shadow-rose-500/20",
    description: "Combine multiple conditions using logical operators and learn how to nest decision structures.",
    theory: {
      sections: [
        {
          id: "s4-1",
          heading: "Logical Operators",
          type: "concept",
          content: "Logical operators are used to **combine or invert boolean (true/false) expressions**. They evaluate conditions and return either 1 (true) or 0 (false). C has three logical operators:",
          table: {
            headers: ["Operator", "Symbol", "Meaning", "Returns True When..."],
            rows: [
              ["Logical AND", "&&", "Both conditions", "ALL conditions are non-zero"],
              ["Logical OR", "||", "Either condition", "AT LEAST ONE condition is non-zero"],
              ["Logical NOT", "!", "Invert condition", "The condition IS zero (false)"]
            ]
          }
        },
        {
          id: "s4-2",
          heading: "Truth Tables (The Complete Reference)",
          type: "concept",
          content: "A truth table shows all possible input combinations and their output for a logical operator. This is the mathematical foundation of decision-making in all computers.",
          table: {
            headers: ["A", "B", "A && B", "A || B", "!A"],
            rows: [
              ["0 (false)", "0 (false)", "0", "0", "1"],
              ["0 (false)", "1 (true)", "0", "1", "1"],
              ["1 (true)", "0 (false)", "0", "1", "0"],
              ["1 (true)", "1 (true)", "1", "1", "0"]
            ]
          }
        },
        {
          id: "s4-3",
          heading: "Logical AND (&&) — All must be true",
          type: "example",
          content: "The `&&` operator is a **gatekeeper**: ALL conditions must be satisfied. Think of it as a door with TWO locks — both locks must be opened to enter.",
          code: `int age = 20;
int hasID = 1; // 1 = true
if (age >= 18 && hasID == 1) {
    printf("Entry Allowed\\n"); // Both conditions are true
}

// Short-Circuit Evaluation: If the FIRST condition is false,
// C does NOT evaluate the second one at all. This is an optimization.
int x = 0;
if (x != 0 && (100 / x) > 5) { // Safe! Division never happens.
    printf("Condition met\\n");
}`
        },
        {
          id: "s4-4",
          heading: "Logical OR (||) — At least one must be true",
          type: "example",
          content: "The `||` operator is an **OR gate**: if ANY condition is true, the whole expression is true. Think of it as a door with a spare key — any one key opens it.",
          code: `int day = 6; // 6=Saturday
if (day == 6 || day == 7) {
    printf("Weekend! Time to rest.\\n");
}

// Short-Circuit Evaluation: If the FIRST condition is true,
// C does NOT evaluate the second one. It already knows the result.
int a = 5;
if (a > 0 || (a / 0) == 1) { // Safe! Division by zero never happens.
    printf("a is positive\\n");
}`
        },
        {
          id: "s4-5",
          heading: "Logical NOT (!)",
          type: "example",
          content: "The `!` operator **inverts** a boolean value. Non-zero becomes 0, and 0 becomes 1. It's useful for making conditions more readable.",
          code: `int loggedIn = 0; // 0 means false

if (!loggedIn) { // Same as: if (loggedIn == 0)
    printf("Please login first.\\n");
}

int isPrime = 1;
// ... some check ...
if (!isPrime) {
    printf("Not a prime number.\\n");
}`
        },
        {
          id: "s4-6",
          heading: "Nested if Statements",
          type: "syntax",
          content: "You can place an `if` statement inside another `if` statement. This is called **nesting**. It's used when a second condition only matters if a first condition is already true.\n\n**Best Practice**: Keep nesting to a maximum of 2-3 levels. Too many nested levels makes code hard to read ('arrow code' anti-pattern).",
          code: `int num = 6;

if (num > 0) {           // Outer if: Is it positive?
    if (num % 2 == 0) {  // Inner if: Is it even? (Only checked if num > 0)
        printf("Positive Even\\n");
    } else {
        printf("Positive Odd\\n");
    }
} else {
    printf("Non-positive number\\n");
}

// The SAME logic using && (often cleaner):
if (num > 0 && num % 2 == 0) {
    printf("Positive Even\\n");
}`
        },
        {
          id: "s4-7",
          heading: "The switch Statement — Multi-way Branch",
          type: "syntax",
          content: "When you need to check a single variable against many exact values, a `switch` statement is more readable than a long `else-if` ladder. Each `case` must end with `break` to prevent 'fall-through' to the next case.",
          code: `int day = 3;
switch (day) {
    case 1:
        printf("Monday\\n");
        break; // EXIT the switch block
    case 2:
        printf("Tuesday\\n");
        break;
    case 3:
        printf("Wednesday\\n");
        break;
    // ... other cases ...
    default:  // Executes if no case matched
        printf("Invalid day\\n");
}`
        }
      ]
    },
    problems: [
      {
        id: "p4-1",
        title: "Vowel or Consonant",
        difficulty: "Easy",
        statement: "Check if a given lowercase alphabet is a vowel or consonant.",
        inputFormat: "One lowercase character",
        outputFormat: "'Vowel' or 'Consonant'",
        constraints: "Input is a lowercase English letter",
        logic: [
          "Use Logical OR to check if char == 'a' || char == 'e' || ..."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    char c;\n    scanf(" %c", &c);\n    if (c=='a' || c=='e' || c=='i' || c=='o' || c=='u') {\n        printf("Vowel\\n");\n    } else {\n        printf("Consonant\\n");\n    }\n    return 0;\n}`,
        sampleInput: "e",
        sampleOutput: "Vowel",
        timeComplexity: "O(1)"
      },
      {
        id: "p4-2",
        title: "Leap Year",
        difficulty: "Easy",
        statement: "Determine if a year is a leap year. A year is a leap year if divisible by 4, but century years must be divisible by 400.",
        inputFormat: "One integer representing year",
        outputFormat: "'Leap Year' or 'Not Leap Year'",
        constraints: "year > 0",
        logic: [
          "Condition: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)"
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int y;\n    scanf("%d", &y);\n    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {\n        printf("Leap Year\\n");\n    } else {\n        printf("Not Leap Year\\n");\n    }\n    return 0;\n}`,
        sampleInput: "2024",
        sampleOutput: "Leap Year",
        timeComplexity: "O(1)"
      },
      {
        id: "p4-3",
        title: "Valid Triangle",
        difficulty: "Medium",
        statement: "Given three angles of a triangle, check if the triangle is valid (sum of angles = 180 and all angles > 0).",
        inputFormat: "Three integers",
        outputFormat: "'Valid' or 'Invalid'",
        constraints: "None",
        logic: [
          "Check if a+b+c == 180 AND a>0 AND b>0 AND c>0"
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    scanf("%d %d %d", &a, &b, &c);\n    if (a+b+c == 180 && a>0 && b>0 && c>0) {\n        printf("Valid\\n");\n    } else {\n        printf("Invalid\\n");\n    }\n    return 0;\n}`,
        sampleInput: "60 60 60",
        sampleOutput: "Valid",
        timeComplexity: "O(1)"
      },
      {
        id: "p4-4",
        title: "Max of Three Numbers",
        difficulty: "Medium",
        statement: "Find the maximum of three numbers using nested if or logical operators.",
        inputFormat: "Three integers",
        outputFormat: "The maximum integer",
        constraints: "None",
        logic: [
          "If a >= b && a >= c, max is a. Else if b >= a && b >= c, max is b. Else max is c."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    scanf("%d %d %d", &a, &b, &c);\n    if (a >= b && a >= c) printf("%d\\n", a);\n    else if (b >= a && b >= c) printf("%d\\n", b);\n    else printf("%d\\n", c);\n    return 0;\n}`,
        sampleInput: "10 25 15",
        sampleOutput: "25",
        timeComplexity: "O(1)"
      },
      {
        id: "p4-5",
        title: "Character Category",
        difficulty: "Hard",
        statement: "Given a character, determine if it is an uppercase letter, lowercase letter, digit, or special character.",
        inputFormat: "One character",
        outputFormat: "'Uppercase', 'Lowercase', 'Digit', or 'Special'",
        constraints: "None",
        logic: [
          "Use ASCII value ranges: 'A' to 'Z', 'a' to 'z', '0' to '9'."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    char c;\n    scanf(" %c", &c);\n    if (c >= 'A' && c <= 'Z') printf("Uppercase\\n");\n    else if (c >= 'a' && c <= 'z') printf("Lowercase\\n");\n    else if (c >= '0' && c <= '9') printf("Digit\\n");\n    else printf("Special\\n");\n    return 0;\n}`,
        sampleInput: "7",
        sampleOutput: "Digit",
        timeComplexity: "O(1)"
      }
    ]
  },
  {
    id: "topic-5",
    slug: "for-loop",
    title: "for Loop & Iteration",
    shortTitle: "for Loop",
    icon: "🔁",
    color: "from-yellow-400 to-orange-500",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/20",
    description: "Learn how to execute a block of code multiple times efficiently using the for loop.",
    theory: {
      sections: [
        {
          id: "s5-1",
          heading: "Introduction to Loops & Iteration",
          type: "definition",
          content: "In programming, iteration is the process of repeating a sequence of instructions. Loops are control flow structures that execute a block of code repeatedly as long as a specified condition remains true.\n\nWithout loops, executing code multiple times would require redundant copy-pasting, making programs bulky and hard to maintain.",
        },
        {
          id: "s5-2",
          heading: "The for Loop Syntax & Execution Flow",
          type: "syntax",
          content: "The `for` loop is ideal when you know in advance how many times the loop should iterate. It encapsulates initialization, conditional check, and variable update into a single line.\n\nHere is the detailed step-by-step execution path of a `for` loop:",
          flowchart: "loop",
          code: `for (initialization; condition; update) {
    // Loop Body (statements to repeat)
}`
        },
        {
          id: "s5-3",
          heading: "Standard Counting Loop",
          type: "example",
          content: "Printing numbers from 1 to 5. The loop variable `i` starts at 1, increments by 1 in each cycle, and terminates once `i` becomes 6.",
          code: `for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// Step 1: i is initialized to 1
// Step 2: Checks if 1 <= 5 (True)
// Step 3: Prints "1 "
// Step 4: i is updated to 2
// ... repeats until i = 6, which fails the condition (6 <= 5 is False)
// Output: 1 2 3 4 5`
        },
        {
          id: "s5-4",
          heading: "Counting Down (Decrementing)",
          type: "example",
          content: "You can count backwards by initializing to a higher value, checking with a greater-than condition, and using decrement operators (`i--` or `i -= 1`).",
          code: `for (int i = 5; i > 0; i--) {
    printf("%d ", i);
}
// Starts at 5, counts down to 1, terminates when i becomes 0
// Output: 5 4 3 2 1`
        }
      ]
    },
    problems: [
      {
        id: "p5-1",
        title: "Print 1 to N",
        difficulty: "Easy",
        statement: "Write a program to print numbers from 1 to N.",
        inputFormat: "One integer N",
        outputFormat: "Numbers from 1 to N separated by space",
        constraints: "N > 0",
        logic: [
          "Loop from i = 1 to N, printing i in each iteration."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}`,
        sampleInput: "5",
        sampleOutput: "1 2 3 4 5",
        timeComplexity: "O(N)"
      },
      {
        id: "p5-2",
        title: "Sum of First N Natural Numbers",
        difficulty: "Easy",
        statement: "Calculate the sum of all integers from 1 to N.",
        inputFormat: "One integer N",
        outputFormat: "The sum",
        constraints: "N >= 1",
        logic: [
          "Initialize sum = 0.",
          "Loop from 1 to N, adding i to sum."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, sum = 0;\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        sum += i;\n    }\n    printf("%d\\n", sum);\n    return 0;\n}`,
        sampleInput: "10",
        sampleOutput: "55",
        timeComplexity: "O(N)"
      },
      {
        id: "p5-3",
        title: "Multiplication Table",
        difficulty: "Medium",
        statement: "Print the multiplication table of a number N up to 10.",
        inputFormat: "One integer N",
        outputFormat: "10 lines formatted as 'N x i = result'",
        constraints: "N > 0",
        logic: [
          "Loop from 1 to 10, print N * i."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for (int i = 1; i <= 10; i++) {\n        printf("%d x %d = %d\\n", n, i, n * i);\n    }\n    return 0;\n}`,
        sampleInput: "5",
        sampleOutput: "5 x 1 = 5\n...\n5 x 10 = 50",
        timeComplexity: "O(1)"
      },
      {
        id: "p5-4",
        title: "Print Even Numbers",
        difficulty: "Medium",
        statement: "Print all even numbers between 1 and N inclusive.",
        inputFormat: "One integer N",
        outputFormat: "Even numbers separated by space",
        constraints: "N > 1",
        logic: [
          "Loop from 2 to N with a step of 2 (i += 2)."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for (int i = 2; i <= n; i += 2) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}`,
        sampleInput: "10",
        sampleOutput: "2 4 6 8 10",
        timeComplexity: "O(N)"
      },
      {
        id: "p5-5",
        title: "Factorial Calculation",
        difficulty: "Hard",
        statement: "Calculate the factorial of N (N!). Factorial of 5 is 5*4*3*2*1.",
        inputFormat: "One integer N",
        outputFormat: "The factorial of N",
        constraints: "0 <= N <= 12",
        logic: [
          "Initialize fact = 1.",
          "Loop from 1 to N, multiply fact by i."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    long long fact = 1;\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        fact *= i;\n    }\n    printf("%lld\\n", fact);\n    return 0;\n}`,
        sampleInput: "5",
        sampleOutput: "120",
        timeComplexity: "O(N)"
      }
    ]
  }
];
