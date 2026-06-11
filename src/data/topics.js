// ============================================================
//  C PROGRAMMING LEARNING WEBSITE — CONTENT DATA
//  Replace the placeholder content below with real topic data
//  when lecture slides and problems are provided.
// ============================================================

export const topics = [
  {
    id: "topic-1",
    slug: "variables-and-data-types",
    title: "Variables & Data Types",
    shortTitle: "Variables",
    icon: "📦",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    description:
      "Learn the building blocks of C: how to declare variables, understand data types, and work with constants.",
    theory: {
      sections: [
        {
          id: "s1-1",
          heading: "What is a Variable?",
          type: "definition",
          content:
            "A variable is a named memory location that stores a value which can change during program execution. Every variable has a type that determines what kind of data it can hold.",
        },
        {
          id: "s1-2",
          heading: "Variable Declaration Syntax",
          type: "syntax",
          content:
            "In C, you must declare a variable before using it. The syntax is: `data_type variable_name;` or `data_type variable_name = initial_value;`",
          code: `// Declaration without initialization
int age;
float salary;
char grade;

// Declaration with initialization
int age = 25;
float salary = 55000.75;
char grade = 'A';`,
        },
        {
          id: "s1-3",
          heading: "Fundamental Data Types",
          type: "concept",
          content:
            "C provides several built-in data types. Each type occupies a specific amount of memory and holds a specific range of values.",
          table: {
            headers: ["Type", "Size", "Range", "Example"],
            rows: [
              ["int", "4 bytes", "-2,147,483,648 to 2,147,483,647", "int x = 10;"],
              ["float", "4 bytes", "±3.4×10³⁸ (6-7 digits)", "float pi = 3.14;"],
              ["double", "8 bytes", "±1.7×10³⁰⁸ (15-16 digits)", "double d = 3.14159;"],
              ["char", "1 byte", "-128 to 127", "char c = 'A';"],
              ["short", "2 bytes", "-32,768 to 32,767", "short s = 100;"],
              ["long", "8 bytes", "Very large range", "long l = 100000L;"],
            ],
          },
        },
        {
          id: "s1-4",
          heading: "Type Modifiers",
          type: "concept",
          content:
            "Type modifiers alter the meaning of base data types. They include: `signed`, `unsigned`, `short`, and `long`.",
          code: `unsigned int positiveOnly = 300;   // 0 to 4,294,967,295
signed int withNegatives = -5;     // default for int
long long int bigNumber = 9876543210LL;
unsigned char byteValue = 255;`,
        },
        {
          id: "s1-5",
          heading: "Constants",
          type: "concept",
          content:
            "Constants are values that cannot change during program execution. Use the `const` keyword or `#define` preprocessor directive.",
          code: `// Using const keyword
const float PI = 3.14159;
const int MAX_SIZE = 100;

// Using #define
#define GRAVITY 9.8
#define MAX 1000`,
          tip: "Prefer `const` over `#define` for type safety. The compiler can catch type errors with `const` but not with `#define`.",
        },
        {
          id: "s1-6",
          heading: "printf and scanf for Variables",
          type: "example",
          content:
            "Use `printf` to output variable values and `scanf` to read input into variables. Format specifiers tell C what type to expect.",
          code: `#include <stdio.h>

int main() {
    int age;
    float height;
    char name[50];

    printf("Enter your name: ");
    scanf("%s", name);

    printf("Enter age and height: ");
    scanf("%d %f", &age, &height);

    printf("Name: %s, Age: %d, Height: %.2f\\n", name, age, height);
    return 0;
}`,
          tip: "Always use `&` (address-of operator) with `scanf` for numeric variables. For char arrays (strings), `&` is not needed.",
        },
      ],
    },
    problems: [
      {
        id: "p1-1",
        title: "Area of a Rectangle",
        difficulty: "Easy",
        statement:
          "Write a C program that reads the length and width of a rectangle from the user and calculates its area and perimeter.",
        inputFormat: "Two floating-point numbers: length and width",
        outputFormat: "Area and perimeter of the rectangle",
        constraints: "Length and width are positive real numbers",
        logic: [
          "Declare float variables for length, width, area, and perimeter",
          "Read length and width from user using scanf",
          "Calculate area = length × width",
          "Calculate perimeter = 2 × (length + width)",
          "Print the results with 2 decimal places",
        ],
        solution: `#include <stdio.h>

int main() {
    float length, width, area, perimeter;

    // Read dimensions from user
    printf("Enter length: ");
    scanf("%f", &length);

    printf("Enter width: ");
    scanf("%f", &width);

    // Calculate area and perimeter
    area = length * width;
    perimeter = 2 * (length + width);

    // Display results
    printf("Area      = %.2f\\n", area);
    printf("Perimeter = %.2f\\n", perimeter);

    return 0;
}`,
        sampleInput: "Enter length: 5.0\nEnter width: 3.0",
        sampleOutput: "Area      = 15.00\nPerimeter = 16.00",
        timeComplexity: "O(1)",
      },
      {
        id: "p1-2",
        title: "Temperature Converter",
        difficulty: "Easy",
        statement:
          "Write a C program to convert a temperature from Celsius to Fahrenheit and Kelvin.",
        inputFormat: "A single floating-point number representing temperature in Celsius",
        outputFormat: "Temperature in Fahrenheit and Kelvin",
        constraints: "Temperature can be any real number (including negative for below freezing)",
        logic: [
          "Declare a float variable for Celsius input",
          "Use formula: Fahrenheit = (Celsius × 9/5) + 32",
          "Use formula: Kelvin = Celsius + 273.15",
          "Print both converted values",
        ],
        solution: `#include <stdio.h>

int main() {
    float celsius, fahrenheit, kelvin;

    // Read temperature in Celsius
    printf("Enter temperature in Celsius: ");
    scanf("%f", &celsius);

    // Convert to Fahrenheit and Kelvin
    fahrenheit = (celsius * 9.0 / 5.0) + 32;
    kelvin = celsius + 273.15;

    // Display results
    printf("%.2f°C = %.2f°F\\n", celsius, fahrenheit);
    printf("%.2f°C = %.2f K\\n", celsius, kelvin);

    return 0;
}`,
        sampleInput: "Enter temperature in Celsius: 100",
        sampleOutput: "100.00°C = 212.00°F\n100.00°C = 373.15 K",
        timeComplexity: "O(1)",
      },
    ],
  },

  {
    id: "topic-2",
    slug: "control-flow",
    title: "Control Flow",
    shortTitle: "Control Flow",
    icon: "🔀",
    color: "from-violet-500 to-purple-600",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
    description:
      "Master decision-making and branching in C using if-else, switch statements, and the ternary operator.",
    theory: {
      sections: [
        {
          id: "s2-1",
          heading: "if Statement",
          type: "definition",
          content:
            "The `if` statement executes a block of code only when a specified condition evaluates to true (non-zero).",
          code: `if (condition) {
    // code runs when condition is true
}`,
        },
        {
          id: "s2-2",
          heading: "if-else and else-if",
          type: "syntax",
          content:
            "Use `else` to handle the false case, and `else if` to check multiple conditions in sequence.",
          code: `int marks = 75;

if (marks >= 90) {
    printf("Grade: A\\n");
} else if (marks >= 75) {
    printf("Grade: B\\n");
} else if (marks >= 60) {
    printf("Grade: C\\n");
} else {
    printf("Grade: F\\n");
}`,
        },
        {
          id: "s2-3",
          heading: "switch Statement",
          type: "concept",
          content:
            "The `switch` statement is used when you need to compare a single variable against multiple constant values. It's cleaner than long if-else chains.",
          code: `int day = 3;

switch (day) {
    case 1: printf("Monday\\n");    break;
    case 2: printf("Tuesday\\n");   break;
    case 3: printf("Wednesday\\n"); break;
    case 4: printf("Thursday\\n");  break;
    case 5: printf("Friday\\n");    break;
    default: printf("Weekend\\n");  break;
}`,
          tip: "Always include `break` after each case, or execution will 'fall through' to the next case. Use `default` to handle unexpected values.",
        },
        {
          id: "s2-4",
          heading: "Ternary Operator",
          type: "concept",
          content:
            "The ternary operator `? :` is a compact way to write simple if-else expressions.",
          code: `// Syntax: condition ? value_if_true : value_if_false
int a = 10, b = 20;
int max = (a > b) ? a : b;
printf("Max = %d\\n", max); // Output: Max = 20

// Checking even/odd
int num = 7;
printf("%d is %s\\n", num, (num % 2 == 0) ? "Even" : "Odd");`,
        },
        {
          id: "s2-5",
          heading: "Logical and Relational Operators",
          type: "concept",
          content:
            "Conditions are formed using relational operators (==, !=, <, >, <=, >=) and combined using logical operators (&&, ||, !).",
          code: `int age = 25;
int hasLicense = 1; // 1 = true

// Logical AND: both must be true
if (age >= 18 && hasLicense) {
    printf("Can drive\\n");
}

// Logical OR: at least one must be true
if (age < 13 || age > 65) {
    printf("Special consideration\\n");
}

// Logical NOT
if (!hasLicense) {
    printf("Cannot drive\\n");
}`,
        },
      ],
    },
    problems: [
      {
        id: "p2-1",
        title: "Simple Calculator",
        difficulty: "Easy",
        statement:
          "Write a C program that acts as a simple calculator. Read two numbers and an operator (+, -, *, /) from the user and perform the corresponding operation.",
        inputFormat: "Two numbers and an operator character",
        outputFormat: "Result of the operation",
        constraints: "Handle division by zero gracefully",
        logic: [
          "Read first operand, operator character, and second operand",
          "Use a switch statement on the operator",
          "For division, check if divisor is zero before dividing",
          "Print the result or an error message",
        ],
        solution: `#include <stdio.h>

int main() {
    double a, b, result;
    char op;

    // Read input
    printf("Enter expression (e.g. 5 + 3): ");
    scanf("%lf %c %lf", &a, &op, &b);

    // Perform operation based on operator
    switch (op) {
        case '+':
            result = a + b;
            printf("%.2lf + %.2lf = %.2lf\\n", a, b, result);
            break;
        case '-':
            result = a - b;
            printf("%.2lf - %.2lf = %.2lf\\n", a, b, result);
            break;
        case '*':
            result = a * b;
            printf("%.2lf * %.2lf = %.2lf\\n", a, b, result);
            break;
        case '/':
            // Guard against division by zero
            if (b == 0) {
                printf("Error: Division by zero!\\n");
            } else {
                result = a / b;
                printf("%.2lf / %.2lf = %.2lf\\n", a, b, result);
            }
            break;
        default:
            printf("Error: Unknown operator '%c'\\n", op);
    }

    return 0;
}`,
        sampleInput: "Enter expression (e.g. 5 + 3): 10 / 2",
        sampleOutput: "10.00 / 2.00 = 5.00",
        timeComplexity: "O(1)",
      },
      {
        id: "p2-2",
        title: "Leap Year Checker",
        difficulty: "Easy",
        statement:
          "Write a C program to determine whether a given year is a leap year or not. A year is a leap year if it is divisible by 4, except for century years, which must be divisible by 400.",
        inputFormat: "A single integer representing a year",
        outputFormat: "Whether the year is a leap year or not",
        constraints: "Year > 0",
        logic: [
          "Read the year from the user",
          "A year is a leap year if: (divisible by 4 AND not divisible by 100) OR (divisible by 400)",
          "Use nested if-else to check these conditions",
          "Print the appropriate message",
        ],
        solution: `#include <stdio.h>

int main() {
    int year;

    printf("Enter a year: ");
    scanf("%d", &year);

    // Leap year conditions:
    // 1. Divisible by 400 → Leap year
    // 2. Divisible by 100 but not 400 → Not a leap year
    // 3. Divisible by 4 but not 100 → Leap year
    // 4. Not divisible by 4 → Not a leap year
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        printf("%d is a Leap Year.\\n", year);
    } else {
        printf("%d is NOT a Leap Year.\\n", year);
    }

    return 0;
}`,
        sampleInput: "Enter a year: 2024",
        sampleOutput: "2024 is a Leap Year.",
        timeComplexity: "O(1)",
      },
    ],
  },

  {
    id: "topic-3",
    slug: "loops",
    title: "Loops & Iteration",
    shortTitle: "Loops",
    icon: "🔄",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
    description:
      "Understand how to repeat actions efficiently using for, while, and do-while loops, and control flow with break and continue.",
    theory: {
      sections: [
        {
          id: "s3-1",
          heading: "Why Loops?",
          type: "definition",
          content:
            "Loops allow you to execute a block of code repeatedly without writing it multiple times. They are essential for processing collections of data, counting, and performing repetitive computations.",
        },
        {
          id: "s3-2",
          heading: "for Loop",
          type: "syntax",
          content:
            "The `for` loop is ideal when you know in advance how many times you want to iterate. It combines initialization, condition, and update in a single line.",
          code: `// Syntax: for (init; condition; update)
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// Output: 1 2 3 4 5

// Counting down
for (int i = 10; i >= 1; i--) {
    printf("%d ", i);
}`,
        },
        {
          id: "s3-3",
          heading: "while Loop",
          type: "syntax",
          content:
            "The `while` loop continues executing as long as its condition is true. Use it when you don't know exactly how many iterations are needed.",
          code: `int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;  // Don't forget to update, or you'll get an infinite loop!
}
// Output: 1 2 3 4 5`,
          tip: "Always ensure the loop condition eventually becomes false, otherwise you'll create an infinite loop.",
        },
        {
          id: "s3-4",
          heading: "do-while Loop",
          type: "syntax",
          content:
            "The `do-while` loop executes the body at least once before checking the condition. It's useful for menu-driven programs.",
          code: `int choice;
do {
    printf("\\n1. Option A\\n2. Option B\\n3. Exit\\n");
    printf("Enter choice: ");
    scanf("%d", &choice);

    if (choice == 1) printf("You chose A\\n");
    else if (choice == 2) printf("You chose B\\n");

} while (choice != 3);  // Keep looping until user chooses exit

printf("Goodbye!\\n");`,
        },
        {
          id: "s3-5",
          heading: "break and continue",
          type: "concept",
          content:
            "`break` immediately exits the loop. `continue` skips the rest of the current iteration and moves to the next one.",
          code: `// break: exit loop when condition is met
for (int i = 1; i <= 10; i++) {
    if (i == 6) break;   // Stop at 6
    printf("%d ", i);
}
// Output: 1 2 3 4 5

// continue: skip specific iterations
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;  // Skip even numbers
    printf("%d ", i);
}
// Output: 1 3 5 7 9`,
        },
        {
          id: "s3-6",
          heading: "Nested Loops",
          type: "example",
          content:
            "Loops can be nested inside each other. The inner loop completes all its iterations for each iteration of the outer loop.",
          code: `// Multiplication table
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        printf("%d×%d=%d\\t", i, j, i*j);
    }
    printf("\\n");
}
/* Output:
1×1=1   1×2=2   1×3=3
2×1=2   2×2=4   2×3=6
3×1=3   3×2=6   3×3=9 */`,
        },
      ],
    },
    problems: [
      {
        id: "p3-1",
        title: "Factorial Calculator",
        difficulty: "Easy",
        statement:
          "Write a C program to calculate the factorial of a non-negative integer n. The factorial of n (written as n!) is the product of all positive integers from 1 to n.",
        inputFormat: "A single non-negative integer n",
        outputFormat: "The factorial of n",
        constraints: "0 ≤ n ≤ 12 (to fit in an int)",
        logic: [
          "Read integer n from user",
          "Handle special case: 0! = 1",
          "Initialize a result variable to 1",
          "Use a for loop from 1 to n, multiplying result by each i",
          "Print the final result",
        ],
        solution: `#include <stdio.h>

int main() {
    int n;
    long long factorial = 1;  // Use long long for larger values

    printf("Enter a non-negative integer: ");
    scanf("%d", &n);

    // Validate input
    if (n < 0) {
        printf("Error: Factorial is not defined for negative numbers.\\n");
        return 1;
    }

    // Calculate factorial using a for loop
    for (int i = 1; i <= n; i++) {
        factorial *= i;  // factorial = factorial * i
    }

    printf("%d! = %lld\\n", n, factorial);

    return 0;
}`,
        sampleInput: "Enter a non-negative integer: 6",
        sampleOutput: "6! = 720",
        timeComplexity: "O(n)",
      },
      {
        id: "p3-2",
        title: "Print Star Patterns",
        difficulty: "Medium",
        statement:
          "Write a C program to print a right-angled triangle star pattern of height n. Each row i (1-indexed) contains i stars.",
        inputFormat: "A single integer n (height of the triangle)",
        outputFormat: "A right-angled triangle pattern of stars",
        constraints: "1 ≤ n ≤ 10",
        logic: [
          "Read height n from user",
          "Use outer loop for rows (1 to n)",
          "Use inner loop for columns (1 to current row number)",
          "Print a star in each inner iteration",
          "Print a newline after each row",
        ],
        solution: `#include <stdio.h>

int main() {
    int n;

    printf("Enter height of triangle: ");
    scanf("%d", &n);

    // Outer loop: controls number of rows
    for (int i = 1; i <= n; i++) {
        // Inner loop: prints 'i' stars in row 'i'
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");  // Move to next line after each row
    }

    return 0;
}`,
        sampleInput: "Enter height of triangle: 5",
        sampleOutput: "* \n* * \n* * * \n* * * * \n* * * * * ",
        timeComplexity: "O(n²)",
      },
    ],
  },

  {
    id: "topic-4",
    slug: "functions",
    title: "Functions",
    shortTitle: "Functions",
    icon: "⚙️",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/20",
    description:
      "Learn to write modular, reusable code with functions, understand scope, recursion, and how to pass arguments effectively.",
    theory: {
      sections: [
        {
          id: "s4-1",
          heading: "What is a Function?",
          type: "definition",
          content:
            "A function is a self-contained block of code that performs a specific task. Functions promote code reuse, modularity, and make programs easier to read and debug.",
        },
        {
          id: "s4-2",
          heading: "Function Anatomy",
          type: "syntax",
          content:
            "A C function has four parts: return type, name, parameters, and body.",
          code: `// Function declaration (prototype)
int add(int a, int b);

// Function definition
int add(int a, int b) {
    int sum = a + b;
    return sum;   // Returns the result to caller
}

int main() {
    int result = add(5, 3);   // Function call
    printf("Sum = %d\\n", result);  // Output: Sum = 8
    return 0;
}`,
          tip: "Always declare a function prototype before `main()` if the function is defined after `main()`. This tells the compiler about the function's signature.",
        },
        {
          id: "s4-3",
          heading: "void Functions",
          type: "concept",
          content:
            "Functions that don't return a value have a return type of `void`. They perform actions (like printing) rather than computing values.",
          code: `// void function: no return value
void printLine(int length) {
    for (int i = 0; i < length; i++) {
        printf("-");
    }
    printf("\\n");
}

int main() {
    printLine(20);  // Prints 20 dashes
    printf("Hello, World!\\n");
    printLine(20);
    return 0;
}`,
        },
        {
          id: "s4-4",
          heading: "Pass by Value vs Pass by Reference",
          type: "concept",
          content:
            "In C, arguments are passed by value by default (the function gets a copy). To modify the original variable, pass its address using pointers.",
          code: `// Pass by VALUE: original unchanged
void tryToDouble(int x) {
    x = x * 2;   // Only the local copy changes
}

// Pass by REFERENCE: using pointers
void actuallyDouble(int *x) {
    *x = *x * 2;   // Modify the original via pointer
}

int main() {
    int num = 5;

    tryToDouble(num);
    printf("After tryToDouble: %d\\n", num);   // Still 5

    actuallyDouble(&num);
    printf("After actuallyDouble: %d\\n", num); // Now 10

    return 0;
}`,
        },
        {
          id: "s4-5",
          heading: "Recursion",
          type: "concept",
          content:
            "Recursion is when a function calls itself. Every recursive function needs a base case (stop condition) to prevent infinite recursion.",
          code: `// Recursive factorial
int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;     // Base case
    }
    return n * factorial(n - 1);  // Recursive call
}

// How it works for factorial(4):
// factorial(4) = 4 × factorial(3)
// factorial(3) = 3 × factorial(2)
// factorial(2) = 2 × factorial(1)
// factorial(1) = 1  ← base case
// Unwinds: 2×1=2, 3×2=6, 4×6=24`,
          tip: "Every recursive function must have a base case. Without it, the function will call itself indefinitely, causing a stack overflow.",
        },
      ],
    },
    problems: [
      {
        id: "p4-1",
        title: "Fibonacci Sequence",
        difficulty: "Medium",
        statement:
          "Write a C program using a recursive function to print the first n terms of the Fibonacci sequence. In Fibonacci: F(0)=0, F(1)=1, and F(n)=F(n-1)+F(n-2) for n>1.",
        inputFormat: "A single integer n",
        outputFormat: "The first n Fibonacci numbers",
        constraints: "1 ≤ n ≤ 20",
        logic: [
          "Write a recursive function fib(n) with base cases fib(0)=0 and fib(1)=1",
          "For n>1, return fib(n-1) + fib(n-2)",
          "In main, loop from 0 to n-1 and print fib(i) for each",
        ],
        solution: `#include <stdio.h>

// Recursive function to compute nth Fibonacci number
int fib(int n) {
    if (n == 0) return 0;   // Base case 1
    if (n == 1) return 1;   // Base case 2
    return fib(n - 1) + fib(n - 2);  // Recursive case
}

int main() {
    int n;

    printf("Enter number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci sequence: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", fib(i));
    }
    printf("\\n");

    return 0;
}`,
        sampleInput: "Enter number of terms: 8",
        sampleOutput: "Fibonacci sequence: 0 1 1 2 3 5 8 13",
        timeComplexity: "O(2ⁿ) — exponential for naive recursion",
      },
      {
        id: "p4-2",
        title: "Check Prime Number",
        difficulty: "Medium",
        statement:
          "Write a C program with a function `isPrime(int n)` that returns 1 if n is prime, 0 otherwise. Use this function to print all prime numbers between 1 and 50.",
        inputFormat: "No input — range is hardcoded as 1 to 50",
        outputFormat: "All prime numbers between 1 and 50",
        constraints: "Use a separate function for prime checking",
        logic: [
          "A prime number is divisible only by 1 and itself",
          "In isPrime: handle edge cases (n < 2 → not prime)",
          "Check divisibility from 2 to sqrt(n)",
          "If any divisor found, return 0; otherwise return 1",
          "In main, loop 1 to 50 and call isPrime for each",
        ],
        solution: `#include <stdio.h>
#include <math.h>

// Returns 1 if n is prime, 0 otherwise
int isPrime(int n) {
    if (n < 2) return 0;    // 0 and 1 are not prime
    if (n == 2) return 1;   // 2 is the only even prime

    // Check divisibility only up to sqrt(n) for efficiency
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) {
            return 0;   // Found a divisor, not prime
        }
    }
    return 1;   // No divisors found, it's prime
}

int main() {
    printf("Prime numbers between 1 and 50:\\n");

    for (int i = 1; i <= 50; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
        }
    }
    printf("\\n");

    return 0;
}`,
        sampleInput: "(none — range is 1 to 50)",
        sampleOutput: "Prime numbers between 1 and 50:\n2 3 5 7 11 13 17 19 23 29 31 37 41 43 47",
        timeComplexity: "O(n√n) overall for all numbers 1 to n",
      },
    ],
  },

  {
    id: "topic-5",
    slug: "arrays-and-strings",
    title: "Arrays & Strings",
    shortTitle: "Arrays",
    icon: "📋",
    color: "from-rose-500 to-pink-600",
    borderColor: "border-rose-500/30",
    glowColor: "shadow-rose-500/20",
    description:
      "Work with collections of data using arrays, understand multi-dimensional arrays, and manipulate text using strings and standard library functions.",
    theory: {
      sections: [
        {
          id: "s5-1",
          heading: "What is an Array?",
          type: "definition",
          content:
            "An array is a collection of elements of the same data type stored in contiguous memory locations. Each element is accessed by its index, starting from 0.",
        },
        {
          id: "s5-2",
          heading: "Declaring and Initializing Arrays",
          type: "syntax",
          content:
            "Arrays are declared with a type, name, and size. They can be initialized at declaration time.",
          code: `// Declaration
int numbers[5];         // 5 integers, uninitialized

// Declaration with initialization
int scores[5] = {90, 85, 78, 92, 88};

// Partial initialization (rest filled with 0)
int data[10] = {1, 2, 3};  // data[3] to data[9] are 0

// Array size inferred from initializer
int arr[] = {10, 20, 30, 40};  // Size = 4

// Accessing elements (0-indexed)
printf("%d\\n", scores[0]);  // First element: 90
printf("%d\\n", scores[4]);  // Last element: 88`,
        },
        {
          id: "s5-3",
          heading: "Traversing Arrays with Loops",
          type: "example",
          content:
            "Use a for loop to traverse (visit each element) of an array. The loop variable serves as the index.",
          code: `int scores[] = {90, 85, 78, 92, 88};
int n = 5;
int sum = 0;

// Traverse and sum all elements
for (int i = 0; i < n; i++) {
    sum += scores[i];
}

float average = (float)sum / n;
printf("Sum = %d, Average = %.2f\\n", sum, average);
// Output: Sum = 433, Average = 86.60`,
        },
        {
          id: "s5-4",
          heading: "2D Arrays (Matrices)",
          type: "concept",
          content:
            "A 2D array is an array of arrays — think of it as a grid or matrix with rows and columns.",
          code: `// 2D array: 3 rows, 3 columns
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Access element at row 1, column 2
printf("%d\\n", matrix[1][2]);  // Output: 6

// Print entire matrix
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\\n");
}`,
        },
        {
          id: "s5-5",
          heading: "Strings in C",
          type: "concept",
          content:
            "In C, strings are arrays of characters terminated by a null character `\\0`. The `<string.h>` library provides useful string functions.",
          code: `#include <string.h>

char name[] = "Alice";       // Stored as {'A','l','i','c','e','\\0'}
char greeting[50];

// String functions from <string.h>
strlen(name);                // Length: 5 (doesn't count '\\0')
strcpy(greeting, "Hello");   // Copy string
strcat(greeting, " World");  // Concatenate
strcmp("abc", "abc");        // Compare: returns 0 if equal

printf("Name: %s, Length: %zu\\n", name, strlen(name));
// Output: Name: Alice, Length: 5`,
          tip: "Always ensure your char array is large enough to hold the string AND the null terminator `\\0`. A string of 5 characters needs an array of at least 6.",
        },
      ],
    },
    problems: [
      {
        id: "p5-1",
        title: "Find Maximum and Minimum",
        difficulty: "Easy",
        statement:
          "Write a C program that reads n integers into an array and finds the maximum and minimum values.",
        inputFormat: "First line: n (size of array). Second line: n integers",
        outputFormat: "Maximum and minimum values in the array",
        constraints: "1 ≤ n ≤ 100, elements can be any integer",
        logic: [
          "Read n from user",
          "Read n integers into an array",
          "Initialize max and min to the first element",
          "Loop from index 1 to n-1",
          "Update max if current element is greater",
          "Update min if current element is smaller",
          "Print max and min",
        ],
        solution: `#include <stdio.h>

int main() {
    int n;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    // Read all elements
    printf("Enter %d integers:\\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Initialize max and min with first element
    int max = arr[0];
    int min = arr[0];

    // Find max and min in a single pass
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    printf("Maximum = %d\\n", max);
    printf("Minimum = %d\\n", min);

    return 0;
}`,
        sampleInput: "Enter number of elements: 5\nEnter 5 integers:\n3 7 1 9 4",
        sampleOutput: "Maximum = 9\nMinimum = 1",
        timeComplexity: "O(n)",
      },
      {
        id: "p5-2",
        title: "Reverse a String",
        difficulty: "Easy",
        statement:
          "Write a C program to reverse a string without using the built-in `strrev()` function. Read a string from the user and display its reverse.",
        inputFormat: "A single word (no spaces)",
        outputFormat: "The reversed string",
        constraints: "String length ≤ 100 characters",
        logic: [
          "Read the string into a char array",
          "Find the length using strlen()",
          "Use two pointers: left starting at 0, right starting at length-1",
          "Swap characters at left and right positions",
          "Move left pointer forward and right pointer backward",
          "Stop when left >= right",
          "Print the reversed string",
        ],
        solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[101];  // Max 100 chars + null terminator

    printf("Enter a string: ");
    scanf("%s", str);

    int len = strlen(str);
    int left = 0;
    int right = len - 1;

    // Swap characters from both ends moving inward
    while (left < right) {
        // Swap str[left] and str[right]
        char temp = str[left];
        str[left]  = str[right];
        str[right] = temp;

        left++;   // Move left pointer right
        right--;  // Move right pointer left
    }

    printf("Reversed: %s\\n", str);

    return 0;
}`,
        sampleInput: "Enter a string: Hello",
        sampleOutput: "Reversed: olleH",
        timeComplexity: "O(n)",
      },
    ],
  },
];

// Helper: get topic by slug
export const getTopicBySlug = (slug) =>
  topics.find((t) => t.slug === slug) || null;

// Helper: get topic by index
export const getTopicByIndex = (index) => topics[index] || null;

// Helper: all searchable content (flat list)
export const getAllSearchableContent = () => {
  const items = [];
  topics.forEach((topic) => {
    // Topic title
    items.push({ type: "topic", topicId: topic.id, topicSlug: topic.slug, topicTitle: topic.title, text: topic.title, sub: topic.description });

    // Theory sections
    topic.theory.sections.forEach((section) => {
      items.push({
        type: "theory",
        topicId: topic.id,
        topicSlug: topic.slug,
        topicTitle: topic.title,
        text: section.heading,
        sub: section.content.substring(0, 100) + "...",
      });
    });

    // Problems
    topic.problems.forEach((problem) => {
      items.push({
        type: "problem",
        topicId: topic.id,
        topicSlug: topic.slug,
        topicTitle: topic.title,
        text: problem.title,
        sub: problem.statement.substring(0, 100) + "...",
        difficulty: problem.difficulty,
      });
    });
  });
  return items;
};
