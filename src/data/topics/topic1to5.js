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
          content: "C is a powerful general-purpose programming language. It is fast, portable, and provides low-level memory access, making it the foundation for many modern languages and operating systems.",
        },
        {
          id: "s1-2",
          heading: "Basic Structure of a C Program",
          type: "syntax",
          content: "Every C program has a specific structure. It starts with preprocessor directives, followed by the main function where execution begins.",
          code: `#include <stdio.h>  // Preprocessor directive for input/output

int main() {         // The main function where execution starts
    // Your code goes here
    return 0;        // Indicates successful completion
}`,
        },
        {
          id: "s1-3",
          heading: "Writing 'Hello World'",
          type: "example",
          content: "The `printf` function is used to output text to the screen. It is defined in the `<stdio.h>` library.",
          code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");  // \\n prints a new line
    return 0;
}`,
        },
        {
          id: "s1-4",
          heading: "Comments in C",
          type: "concept",
          content: "Comments are ignored by the compiler and are used to explain code. C supports single-line and multi-line comments.",
          code: `// This is a single-line comment

/* 
   This is a 
   multi-line comment 
*/`,
        },
        {
          id: "s1-5",
          heading: "Compilation Process",
          type: "concept",
          content: "C is a compiled language. The source code (.c) is compiled into machine code (.exe or .out) by a compiler (like GCC) before execution.",
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
          heading: "Variables and Data Types",
          type: "definition",
          content: "A variable is a container for storing data. You must specify the data type before using a variable. Common types: `int` (integers), `float` (decimals), `char` (single characters).",
          code: `int age = 20;
float price = 99.99;
char grade = 'A';`
        },
        {
          id: "s2-2",
          heading: "Format Specifiers",
          type: "syntax",
          content: "Format specifiers tell `printf` and `scanf` what type of data to expect.",
          code: `// %d for int
// %f for float
// %c for char
printf("Age: %d, Grade: %c\\n", age, grade);`
        },
        {
          id: "s2-3",
          heading: "Reading Input with scanf",
          type: "syntax",
          content: "Use `scanf` to read user input. Remember to use the address-of operator `&` before variable names for numbers and characters.",
          code: `int num;
printf("Enter a number: ");
scanf("%d", &num);`
        },
        {
          id: "s2-4",
          heading: "Arithmetic Operators",
          type: "concept",
          content: "C supports basic arithmetic operators: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), and `%` (modulo - remainder of division).",
          code: `int a = 10, b = 3;
int sum = a + b;       // 13
int diff = a - b;      // 7
int prod = a * b;      // 30
int div = a / b;       // 3 (integer division truncates decimal)
int mod = a % b;       // 1 (remainder)`
        },
        {
          id: "s2-5",
          heading: "Type Conversion (Casting)",
          type: "concept",
          content: "To perform accurate division with integers, convert them to float using casting.",
          code: `int a = 5, b = 2;
float result = (float)a / b; // 2.5`
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
          heading: "The if Statement",
          type: "syntax",
          content: "The `if` statement executes a block of code if its condition evaluates to true (non-zero).",
          code: `if (condition) {
    // code to execute
}`
        },
        {
          id: "s3-2",
          heading: "Relational Operators",
          type: "concept",
          content: "Use relational operators to compare values: `==` (equal), `!=` (not equal), `>` (greater than), `<` (less than), `>=` (greater or equal), `<=` (less or equal).",
        },
        {
          id: "s3-3",
          heading: "The if-else Statement",
          type: "syntax",
          content: "The `else` block executes when the `if` condition is false.",
          code: `int age = 18;
if (age >= 18) {
    printf("Adult\\n");
} else {
    printf("Minor\\n");
}`
        },
        {
          id: "s3-4",
          heading: "The else if Ladder",
          type: "syntax",
          content: "Use `else if` to check multiple mutually exclusive conditions.",
          code: `if (score >= 90) {
    printf("A\\n");
} else if (score >= 80) {
    printf("B\\n");
} else {
    printf("C\\n");
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
          content: "C provides three logical operators to combine conditions: `&&` (Logical AND), `||` (Logical OR), and `!` (Logical NOT).",
        },
        {
          id: "s4-2",
          heading: "Logical AND (&&)",
          type: "example",
          content: "Returns true only if ALL conditions are true.",
          code: `int age = 20;
int hasID = 1; // 1 means true
if (age >= 18 && hasID == 1) {
    printf("Allowed entry\\n");
}`
        },
        {
          id: "s4-3",
          heading: "Logical OR (||)",
          type: "example",
          content: "Returns true if AT LEAST ONE condition is true.",
          code: `int day = 6; // 6=Saturday, 7=Sunday
if (day == 6 || day == 7) {
    printf("It's weekend!\\n");
}`
        },
        {
          id: "s4-4",
          heading: "Nested if Statements",
          type: "syntax",
          content: "You can place an `if` statement inside another `if` statement.",
          code: `if (num > 0) {
    if (num % 2 == 0) {
        printf("Positive Even\\n");
    } else {
        printf("Positive Odd\\n");
    }
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
          heading: "What is a Loop?",
          type: "definition",
          content: "Loops are used to execute a block of code repeatedly as long as a specified condition is met.",
        },
        {
          id: "s5-2",
          heading: "The for Loop Syntax",
          type: "syntax",
          content: "A `for` loop contains three parts: initialization, condition, and update (increment/decrement).",
          code: `for (initialization; condition; update) {
    // Code to execute
}`
        },
        {
          id: "s5-3",
          heading: "Simple Counting Example",
          type: "example",
          content: "Printing numbers from 1 to 5.",
          code: `for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// Output: 1 2 3 4 5`
        },
        {
          id: "s5-4",
          heading: "Decrementing (Counting Down)",
          type: "example",
          content: "You can use `i--` to count backwards.",
          code: `for (int i = 5; i > 0; i--) {
    printf("%d ", i);
}
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
