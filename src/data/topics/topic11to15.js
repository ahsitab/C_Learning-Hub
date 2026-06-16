export const topic11to15 = [
  {
    id: "topic-11",
    slug: "strings",
    title: "Strings",
    shortTitle: "Strings",
    icon: "🔤",
    color: "from-fuchsia-500 to-pink-600",
    borderColor: "border-fuchsia-500/30",
    glowColor: "shadow-fuchsia-500/20",
    description: "Learn how to store and manipulate text using character arrays and string functions.",
    theory: {
      sections: [
        {
          id: "s11-1",
          heading: "What is a String?",
          type: "definition",
          content: "In C, there is **no built-in string type**. Strings are represented as **1D arrays of `char`** terminated by the **null character `'\\0'`** (ASCII value 0). This sentinel character marks the end of the string and is crucial — without it, string functions don't know where to stop.",
          code: `// 'Hello' is stored as: H e l l o \0
// Index:                   0 1 2 3 4  5
char str[6] = "Hello"; // Needs 6 bytes (5 chars + 1 null)`
        },
        {
          id: "s11-2",
          heading: "String Memory Layout",
          type: "concept",
          content: "Understanding how strings live in memory is essential for avoiding bugs:",
          table: {
            headers: ["Index", "0", "1", "2", "3", "4", "5"],
            rows: [
              ["Character", "'H'", "'e'", "'l'", "'l'", "'o'", "'\\0'"],
              ["ASCII", "72", "101", "108", "108", "111", "0"]
            ]
          }
        },
        {
          id: "s11-3",
          heading: "Declaration & Initialization",
          type: "syntax",
          content: "There are multiple ways to declare strings, each with subtle differences:",
          code: `// Method 1: String literal (compiler auto-adds \\0)
char str1[] = "Hello"; // Size = 6

// Method 2: Explicit character array
char str2[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};

// Method 3: Declare with max size (common for input)
char name[50]; // Can hold up to 49 characters + \\0

// IMPORTANT: Pointer vs Array strings
char *p = "Hello"; // String literal in read-only memory - cannot modify!
char arr[] = "Hello"; // Mutable copy on the stack - can modify`
        },
        {
          id: "s11-4",
          heading: "String Input & Output",
          type: "syntax",
          content: "Choosing the right input function is critical:",
          table: {
            headers: ["Function", "Usage", "Stops at", "Safe?"],
            rows: [
              [`scanf("%s", str)`, "Read word", "Whitespace (space, newline)", "Risk of overflow"],
              [`fgets(str, size, stdin)`, "Read line", "Newline or size-1 chars", "Yes (preferred)"],
              [`printf("%s", str)`, "Print string", "Until '\\0'", "Yes"],
              [`puts(str)`, "Print string + newline", "Until '\\0'", "Yes"]
            ]
          },
          code: `char city[50];

// scanf: fast but STOPS at spaces!
scanf("%s", city); // "New York" would only store "New"

// fgets: reads the ENTIRE line (including spaces)
fgets(city, sizeof(city), stdin); // "New York" stored correctly
// Note: fgets includes the '\n' at the end - strip it if needed:
city[strcspn(city, "\\n")] = '\\0';`
        },
        {
          id: "s11-5",
          heading: "String Library Functions (<string.h>)",
          type: "concept",
          content: "The `<string.h>` library provides powerful string manipulation functions. Always include it when using these.",
          table: {
            headers: ["Function", "Purpose", "Example", "Returns"],
            rows: [
              ["strlen(s)", "Length of string (not counting \\0)", `strlen("Hello")`, "5"],
              ["strcpy(dst, src)", "Copy src into dst", `strcpy(name, "Alice")`, "Pointer to dst"],
              ["strcat(dst, src)", "Append src to end of dst", `strcat(str, " World")`, "Pointer to dst"],
              ["strcmp(s1, s2)", "Compare strings lexicographically", `strcmp("abc", "abd")`, "0=equal, <0=s1 first, >0=s2 first"],
              ["strchr(s, c)", "Find first occurrence of char c", `strchr("Hello", 'l')`, "Pointer to 'l', or NULL"],
              ["strstr(s, sub)", "Find substring in string", `strstr("Hello World", "World")`, "Pointer to match, or NULL"]
            ]
          }
        }
      ]
    },
    problems: [
      {
        id: "p11-1",
        title: "String Length",
        difficulty: "Easy",
        statement: "Find the length of a string without using strlen().",
        inputFormat: "One string (no spaces)",
        outputFormat: "Length of the string",
        constraints: "Max length 100",
        logic: [
          "Iterate through the char array until '\\0' is encountered."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    char str[105];\n    scanf("%s", str);\n    int len = 0;\n    while(str[len] != '\\0') len++;\n    printf("%d\\n", len);\n    return 0;\n}`,
        sampleInput: "Programming",
        sampleOutput: "11",
        timeComplexity: "O(N)"
      },
      {
        id: "p11-2",
        title: "Count Vowels",
        difficulty: "Easy",
        statement: "Count the number of vowels in a string.",
        inputFormat: "One string",
        outputFormat: "Vowel count",
        constraints: "String contains letters only",
        logic: [
          "Loop through string, if char is a,e,i,o,u (case insensitive), increment count."
        ],
        solution: `#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[105];\n    scanf("%s", str);\n    int count = 0;\n    for(int i=0; str[i]!='\\0'; i++) {\n        char c = tolower(str[i]);\n        if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u') count++;\n    }\n    printf("%d\\n", count);\n    return 0;\n}`,
        sampleInput: "Education",
        sampleOutput: "5",
        timeComplexity: "O(N)"
      },
      {
        id: "p11-3",
        title: "String Compare",
        difficulty: "Medium",
        statement: "Compare two strings without using strcmp(). Print 'Equal' or 'Not Equal'.",
        inputFormat: "Two strings",
        outputFormat: "Result of comparison",
        constraints: "None",
        logic: [
          "Loop through both strings while characters match and aren't '\\0'.",
          "If they stop matching, or lengths differ, they aren't equal."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    char s1[100], s2[100];\n    scanf("%s %s", s1, s2);\n    int i = 0;\n    while(s1[i] != '\\0' && s2[i] != '\\0') {\n        if (s1[i] != s2[i]) break;\n        i++;\n    }\n    if (s1[i] == '\\0' && s2[i] == '\\0') printf("Equal\\n");\n    else printf("Not Equal\\n");\n    return 0;\n}`,
        sampleInput: "Hello Hello",
        sampleOutput: "Equal",
        timeComplexity: "O(N)"
      },
      {
        id: "p11-4",
        title: "Palindrome String",
        difficulty: "Medium",
        statement: "Check if a string is a palindrome.",
        inputFormat: "One string",
        outputFormat: "'Palindrome' or 'Not Palindrome'",
        constraints: "Case-sensitive check",
        logic: [
          "Find length.",
          "Use two pointers (start and end), check if characters match."
        ],
        solution: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[100];\n    scanf("%s", str);\n    int left = 0, right = strlen(str) - 1, isPal = 1;\n    while(left < right) {\n        if(str[left] != str[right]) { isPal = 0; break; }\n        left++; right--;\n    }\n    if(isPal) printf("Palindrome\\n");\n    else printf("Not Palindrome\\n");\n    return 0;\n}`,
        sampleInput: "racecar",
        sampleOutput: "Palindrome",
        timeComplexity: "O(N)"
      },
      {
        id: "p11-5",
        title: "Remove Spaces",
        difficulty: "Hard",
        statement: "Remove all spaces from a given string.",
        inputFormat: "One string with spaces (read using fgets)",
        outputFormat: "String without spaces",
        constraints: "None",
        logic: [
          "Iterate over string. If char is not a space, add it to result index."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    char str[100], res[100];\n    fgets(str, sizeof(str), stdin);\n    int j = 0;\n    for(int i=0; str[i]!='\\0'; i++) {\n        if(str[i] != ' ' && str[i] != '\\n') {\n            res[j++] = str[i];\n        }\n    }\n    res[j] = '\\0';\n    printf("%s\\n", res);\n    return 0;\n}`,
        sampleInput: "C is fun",
        sampleOutput: "Cisfun",
        timeComplexity: "O(N)"
      }
    ]
  },
  {
    id: "topic-12",
    slug: "functions",
    title: "Functions",
    shortTitle: "Functions",
    icon: "⚙️",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/20",
    description: "Write modular, reusable code using functions and understand variable scope.",
    theory: {
      sections: [
        {
          id: "s12-1",
          heading: "What is a Function & Why Use Them?",
          type: "definition",
          content: "A **function** is a self-contained, named block of code that performs a specific task. Functions are the fundamental building block of structured programming.\n\n**Why functions are critical:**\n- **DRY Principle**: Don't Repeat Yourself. Write once, call many times.\n- **Readability**: A well-named function (`calculateTax()`) tells you exactly what it does.\n- **Debugging**: Isolate bugs to a single function.\n- **Teamwork**: Different programmers can write different functions.",
        },
        {
          id: "s12-2",
          heading: "Anatomy of a Function",
          type: "syntax",
          content: "Every function has four components:",
          code: `// 1. Prototype (declaration): Tells the compiler the function exists
//    Must appear BEFORE it's called
int add(int a, int b);

// 2. Definition: The actual implementation
int add(int a, int b) {   // Return type + Name + Parameters
    return a + b;          // Return statement
}

// 3. Call: How you use the function
int result = add(5, 3); // result = 8

// Void functions don't return a value:
void printLine() {
    printf("----------\\n");
    // No return statement needed
}`
        },
        {
          id: "s12-3",
          heading: "The Call Stack — How Functions Work in Memory",
          type: "concept",
          content: "When a function is called, the program creates a **stack frame** (a block of memory) for that function's local variables and parameters. When the function returns, the frame is destroyed. This is why local variables don't exist outside their function.",
          table: {
            headers: ["Stack at moment of call: add(5, 3)"],
            rows: [
              ["Frame: main()    | result (waiting)"],
              ["Frame: add()     | a=5, b=3, [computes 8]"],
              ["↓ add() returns 8, its stack frame is destroyed"],
              ["Frame: main()    | result = 8"]
            ]
          }
        },
        {
          id: "s12-4",
          heading: "Pass by Value — The Default Behavior",
          type: "concept",
          content: "In C, function arguments are passed **by value**. This means the function receives a **copy** of the variable, not the original. Any changes made inside the function do NOT affect the original variable.",
          code: `void double_it(int x) {
    x = x * 2; // Modifies local copy ONLY
    printf("Inside: %d\\n", x); // 10
}

int main() {
    int n = 5;
    double_it(n);
    printf("Outside: %d\\n", n); // Still 5! Original unchanged.
    return 0;
}
// To modify the original, you must use POINTERS (Pass by Reference - Topic 13)`
        },
        {
          id: "s12-5",
          heading: "Scope: Local vs Global Variables",
          type: "concept",
          content: "**Scope** defines where a variable is accessible.",
          table: {
            headers: ["Variable Type", "Declared", "Accessible From", "Lifetime"],
            rows: [
              ["Local", "Inside a function", "Only within that function", "Created when function is called, destroyed when it returns"],
              ["Global", "Outside all functions", "All functions in the file", "Entire program lifetime"],
              ["Parameter", "In function signature", "Only within that function", "Same as local"]
            ]
          },
          code: `int globalVar = 100; // Global: accessible everywhere

void myFunc() {
    int localVar = 50; // Local: only exists inside myFunc
    printf("%d %d\\n", globalVar, localVar); // Both accessible here
}

int main() {
    printf("%d\\n", globalVar); // OK
    // printf("%d", localVar); // ERROR: localVar is out of scope!
    return 0;
}`
        }
      ]
    },
    problems: [
      {
        id: "p12-1",
        title: "Add Two Numbers",
        difficulty: "Easy",
        statement: "Write a function `int sum(int a, int b)` to add two numbers.",
        inputFormat: "Two integers",
        outputFormat: "Their sum",
        constraints: "Must use a function",
        logic: [
          "Declare function sum that returns a+b."
        ],
        solution: `#include <stdio.h>\n\nint sum(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int x, y;\n    scanf("%d %d", &x, &y);\n    printf("%d\\n", sum(x, y));\n    return 0;\n}`,
        sampleInput: "10 20",
        sampleOutput: "30",
        timeComplexity: "O(1)"
      },
      {
        id: "p12-2",
        title: "Check Even/Odd",
        difficulty: "Easy",
        statement: "Write a function `int isEven(int n)` that returns 1 if even, 0 if odd.",
        inputFormat: "One integer",
        outputFormat: "'Even' or 'Odd'",
        constraints: "Must use function",
        logic: [
          "return (n % 2 == 0);"
        ],
        solution: `#include <stdio.h>\n\nint isEven(int n) {\n    return n % 2 == 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if (isEven(n)) printf("Even\\n");\n    else printf("Odd\\n");\n    return 0;\n}`,
        sampleInput: "4",
        sampleOutput: "Even",
        timeComplexity: "O(1)"
      },
      {
        id: "p12-3",
        title: "Find Maximum",
        difficulty: "Medium",
        statement: "Write a function to find the maximum of three numbers.",
        inputFormat: "Three integers",
        outputFormat: "Max number",
        constraints: "Must use function",
        logic: [
          "Compare a, b, and c inside function and return max."
        ],
        solution: `#include <stdio.h>\n\nint getMax(int a, int b, int c) {\n    if(a>=b && a>=c) return a;\n    if(b>=a && b>=c) return b;\n    return c;\n}\n\nint main() {\n    int a,b,c;\n    scanf("%d %d %d", &a, &b, &c);\n    printf("%d\\n", getMax(a,b,c));\n    return 0;\n}`,
        sampleInput: "5 9 2",
        sampleOutput: "9",
        timeComplexity: "O(1)"
      },
      {
        id: "p12-4",
        title: "Calculate Power",
        difficulty: "Medium",
        statement: "Write a function `power(base, exp)` that computes base raised to exp.",
        inputFormat: "base and exp (integers)",
        outputFormat: "Result",
        constraints: "exp >= 0",
        logic: [
          "Loop exp times, multiply base."
        ],
        solution: `#include <stdio.h>\n\nlong long power(int base, int exp) {\n    long long res = 1;\n    for(int i=0; i<exp; i++) res *= base;\n    return res;\n}\n\nint main() {\n    int b, e;\n    scanf("%d %d", &b, &e);\n    printf("%lld\\n", power(b, e));\n    return 0;\n}`,
        sampleInput: "2 5",
        sampleOutput: "32",
        timeComplexity: "O(exp)"
      },
      {
        id: "p12-5",
        title: "Prime Check Function",
        difficulty: "Hard",
        statement: "Write a function `isPrime(int n)` that returns 1 if prime, 0 otherwise. Use it to print all primes between A and B.",
        inputFormat: "A and B",
        outputFormat: "Primes separated by space",
        constraints: "2 <= A < B",
        logic: [
          "Function isPrime checks factors up to sqrt(n).",
          "Main loops A to B and calls isPrime."
        ],
        solution: `#include <stdio.h>\n\nint isPrime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    for (int i = a; i <= b; i++) {\n        if (isPrime(i)) printf("%d ", i);\n    }\n    return 0;\n}`,
        sampleInput: "10 20",
        sampleOutput: "11 13 17 19 ",
        timeComplexity: "O((B-A) * sqrt(B))"
      }
    ]
  },
  {
    id: "topic-13",
    slug: "pointers",
    title: "Pointers & Arrays",
    shortTitle: "Pointers",
    icon: "🎯",
    color: "from-violet-500 to-fuchsia-500",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
    description: "Understand memory addresses, pointers, dereferencing, and the relationship between pointers and arrays.",
    theory: {
      sections: [
        {
          id: "s13-1",
          heading: "What is a Pointer? (The Core Concept)",
          type: "definition",
          content: "Every variable in a C program occupies a specific address in RAM. A **pointer** is a special variable that stores that **memory address** as its value.\n\nThink of RAM as a city: every byte is a house with a unique street address. A normal variable stores data IN the house. A pointer stores the ADDRESS of the house.",
          code: `int x = 42;         // A variable: a house with the value 42
                        // Stored at address, say, 2000
int *ptr = &x;      // A pointer: stores the address 2000

printf("%d",   x);   // 42 (value of x)
printf("%p",  &x);   // 0x7d0 (2000 in hex) - address of x
printf("%p", ptr);   // 0x7d0 - same address stored in ptr
printf("%d", *ptr);  // 42 - dereferencing: 'go to the address and read the value'`
        },
        {
          id: "s13-2",
          heading: "Declaration, Address-of (&) & Dereference (*)",
          type: "syntax",
          content: "The two key pointer operators:",
          table: {
            headers: ["Operator", "Name", "Usage", "Meaning"],
            rows: [
              ["&", "Address-of", "&variable", "Gets the memory address of the variable"],
              ["*", "Dereference", "*pointer", "Goes to the address and reads/writes the value there"],
              ["*", "Pointer declaration", "int *ptr", "Declares 'ptr' as a pointer to int"]
            ]
          },
          code: `int score = 95;
int *p = &score; // p points to score

printf("Value via pointer: %d\\n", *p); // 95

*p = 100; // Modify score's value THROUGH the pointer
printf("score is now: %d\\n", score); // 100 - score was changed!`
        },
        {
          id: "s13-3",
          heading: "Pointer Arithmetic",
          type: "concept",
          content: "When you add 1 to a pointer, it advances by the **size of the type** it points to (e.g., `int*` advances by 4 bytes). This makes pointer arithmetic ideal for traversing arrays.",
          code: `int arr[3] = {10, 20, 30};
int *p = arr; // p points to arr[0] at address 1000

printf("%d", *p);       // 10 (arr[0])
printf("%d", *(p + 1)); // 20 (arr[1], at address 1004)
printf("%d", *(p + 2)); // 30 (arr[2], at address 1008)

// These are IDENTICAL to using array indexing:
// arr[1] == *(arr + 1) == *(p + 1)   All mean the same thing!`
        },
        {
          id: "s13-4",
          heading: "Pass by Reference with Pointers",
          type: "example",
          content: "To let a function **modify the caller's variable**, pass the address of the variable (using `&`). The function receives the pointer and uses `*` to access and modify the actual value.",
          code: `void swap(int *a, int *b) {
    int temp = *a;  // Read value at address a
    *a = *b;        // Write value of b into address a
    *b = temp;      // Write temp into address b
}

int main() {
    int x = 5, y = 10;
    swap(&x, &y); // Pass ADDRESSES, not values
    printf("%d %d\\n", x, y); // 10 5 - actually swapped!
    return 0;
}`
        },
        {
          id: "s13-5",
          heading: "Common Pointer Mistakes",
          type: "concept",
          content: "Pointers are powerful but dangerous. Understand these common bugs:",
          table: {
            headers: ["Mistake", "Code Example", "Problem"],
            rows: [
              ["Uninitialized pointer", "int *p; *p = 5;", "p points to random memory - crashes or corrupts data"],
              ["NULL pointer dereference", "int *p = NULL; *p = 5;", "Segmentation fault - program crashes"],
              ["Memory leak", "int *p = malloc(4); (no free)", "Memory is allocated but never released"],
              ["Dangling pointer", "free(p); *p = 5;", "Accessing freed memory - undefined behavior"]
            ]
          }
        }
      ]
    },
    problems: [
      {
        id: "p13-1",
        title: "Print via Pointer",
        difficulty: "Easy",
        statement: "Read an integer, assign its address to a pointer, and print the value using the pointer.",
        inputFormat: "One integer",
        outputFormat: "The integer",
        constraints: "Must use pointer dereferencing",
        logic: [
          "int *p = &n; printf(*p);"
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *p = &n;\n    printf("%d\\n", *p);\n    return 0;\n}`,
        sampleInput: "50",
        sampleOutput: "50",
        timeComplexity: "O(1)"
      },
      {
        id: "p13-2",
        title: "Swap using Pointers",
        difficulty: "Easy",
        statement: "Write a function `swap(int *a, int *b)` that swaps two variables.",
        inputFormat: "Two integers",
        outputFormat: "Swapped integers",
        constraints: "Use pass by reference",
        logic: [
          "temp = *a; *a = *b; *b = temp;"
        ],
        solution: `#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x, y;\n    scanf("%d %d", &x, &y);\n    swap(&x, &y);\n    printf("%d %d\\n", x, y);\n    return 0;\n}`,
        sampleInput: "10 20",
        sampleOutput: "20 10",
        timeComplexity: "O(1)"
      },
      {
        id: "p13-3",
        title: "Array Sum using Pointers",
        difficulty: "Medium",
        statement: "Calculate the sum of array elements using pointer arithmetic.",
        inputFormat: "N followed by N integers",
        outputFormat: "The sum",
        constraints: "Use pointers to traverse",
        logic: [
          "Loop i from 0 to n. sum += *(arr + i)."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, sum = 0;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    for(int i=0; i<n; i++) {\n        sum += *(arr + i);\n    }\n    printf("%d\\n", sum);\n    return 0;\n}`,
        sampleInput: "3\n10 20 30",
        sampleOutput: "60",
        timeComplexity: "O(N)"
      },
      {
        id: "p13-4",
        title: "Reverse Array via Pointers",
        difficulty: "Medium",
        statement: "Reverse an array using two pointers (start and end).",
        inputFormat: "N followed by N integers",
        outputFormat: "Reversed array",
        constraints: "Use pointer arithmetic",
        logic: [
          "int *p1 = arr, *p2 = arr + n - 1;",
          "Swap *p1 and *p2, p1++, p2--."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    int *p1 = arr, *p2 = arr + n - 1, temp;\n    while(p1 < p2) {\n        temp = *p1; *p1 = *p2; *p2 = temp;\n        p1++; p2--;\n    }\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`,
        sampleInput: "4\n1 2 3 4",
        sampleOutput: "4 3 2 1 ",
        timeComplexity: "O(N)"
      },
      {
        id: "p13-5",
        title: "String Length using Pointers",
        difficulty: "Hard",
        statement: "Write a function that calculates string length using pointer arithmetic.",
        inputFormat: "One string",
        outputFormat: "Length",
        constraints: "Do not use arrays brackets [] inside the function",
        logic: [
          "char *ptr = str; while(*ptr != '\\0') ptr++; return ptr - str;"
        ],
        solution: `#include <stdio.h>\n\nint stringLen(char *s) {\n    char *ptr = s;\n    while (*ptr != '\\0') {\n        ptr++;\n    }\n    return ptr - s;\n}\n\nint main() {\n    char str[100];\n    scanf("%s", str);\n    printf("%d\\n", stringLen(str));\n    return 0;\n}`,
        sampleInput: "Hello",
        sampleOutput: "5",
        timeComplexity: "O(N)"
      }
    ]
  },
  {
    id: "topic-14",
    slug: "structures",
    title: "Structures & Array of Structures",
    shortTitle: "Structures",
    icon: "🏗️",
    color: "from-sky-500 to-blue-600",
    borderColor: "border-sky-500/30",
    glowColor: "shadow-sky-500/20",
    description: "Create user-defined data types by grouping different variables together under a single name.",
    theory: {
      sections: [
        {
          id: "s14-1",
          heading: "What is a Structure & Why?",
          type: "definition",
          content: "A **structure (`struct`)** is a user-defined data type that groups related variables of **different types** under a single name.\n\n**The problem it solves**: To store a student's data (name, roll, marks, GPA), you'd need 4 separate variables. For 50 students, that's 200 variables! A struct bundles them together, and you can create arrays of structs.",
          code: `// Define the template (blueprint)
struct Student {
    int roll;       // 4 bytes
    char name[50];  // 50 bytes
    float gpa;      // 4 bytes
}; // Total size = ~58 bytes (with possible padding)

// Declare variables of this type
struct Student s1, s2;
struct Student class[100]; // Array of 100 students!`
        },
        {
          id: "s14-2",
          heading: "Accessing Members with the Dot Operator",
          type: "syntax",
          content: "Use the **dot operator (`.`)** to access members of a struct variable. Use **assignment** for initialization.",
          code: `struct Student {
    int roll;
    char name[50];
    float gpa;
};

struct Student s1;
s1.roll = 101;
strcpy(s1.name, "Alice"); // Use strcpy for strings!
s1.gpa = 3.95;

printf("%d %s %.2f\\n", s1.roll, s1.name, s1.gpa);

// Initialize at declaration:
struct Student s2 = {102, "Bob", 3.7};`
        },
        {
          id: "s14-3",
          heading: "Array of Structures",
          type: "concept",
          content: "The most powerful application of structs is creating arrays of them, allowing you to store and manage lists of records (like a database table).",
          code: `struct Student class[3] = {
    {1, "Alice", 3.9},
    {2, "Bob",   3.5},
    {3, "Carol", 3.8}
};

// Find the top student:
float maxGPA = class[0].gpa;
int topIdx = 0;
for (int i = 1; i < 3; i++) {
    if (class[i].gpa > maxGPA) {
        maxGPA = class[i].gpa;
        topIdx = i;
    }
}
printf("Top: %s with GPA %.2f\\n", class[topIdx].name, maxGPA);`
        },
        {
          id: "s14-4",
          heading: "struct vs union — Key Difference",
          type: "concept",
          content: "Both `struct` and `union` group members, but they differ in memory usage:",
          table: {
            headers: ["Feature", "struct", "union"],
            rows: [
              ["Memory", "Each member gets its OWN memory", "ALL members SHARE the same memory"],
              ["Size", "Sum of all member sizes (+ padding)", "Size of the LARGEST member"],
              ["Usage", "Store MULTIPLE values at once", "Store only ONE value at a time"],
              ["Use case", "Student records, points, shapes", "Type-agnostic data, protocol headers"]
            ]
          }
        },
        {
          id: "s14-5",
          heading: "typedef — Creating Shorter Names",
          type: "syntax",
          content: "Using `typedef` lets you create an alias for a struct, so you don't need to type `struct` every time.",
          code: `// Without typedef: must write 'struct Student' everywhere
struct Student { int id; float gpa; };
struct Student s1;

// With typedef: just write 'Student'
typedef struct {
    int id;
    float gpa;
} Student;

Student s1; // Much cleaner!`
        }
      ]
    },
    problems: [
      {
        id: "p14-1",
        title: "Basic Struct Usage",
        difficulty: "Easy",
        statement: "Define a struct `Point` with `x` and `y`. Read coordinates for a point and print them.",
        inputFormat: "Two integers",
        outputFormat: "Formatted string '(x, y)'",
        constraints: "Use struct Point",
        logic: [
          "Declare struct, read into p.x and p.y, print."
        ],
        solution: `#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint main() {\n    struct Point p;\n    scanf("%d %d", &p.x, &p.y);\n    printf("(%d, %d)\\n", p.x, p.y);\n    return 0;\n}`,
        sampleInput: "5 10",
        sampleOutput: "(5, 10)",
        timeComplexity: "O(1)"
      },
      {
        id: "p14-2",
        title: "Student Struct",
        difficulty: "Easy",
        statement: "Define a `Student` struct (roll, marks). Read data for 1 student and print.",
        inputFormat: "Integer roll, float marks",
        outputFormat: "Roll: X, Marks: Y",
        constraints: "None",
        logic: [
          "Read using &s.roll, print formatted."
        ],
        solution: `#include <stdio.h>\n\nstruct Student {\n    int roll;\n    float marks;\n};\n\nint main() {\n    struct Student s;\n    scanf("%d %f", &s.roll, &s.marks);\n    printf("Roll: %d, Marks: %.2f\\n", s.roll, s.marks);\n    return 0;\n}`,
        sampleInput: "12 85.5",
        sampleOutput: "Roll: 12, Marks: 85.50",
        timeComplexity: "O(1)"
      },
      {
        id: "p14-3",
        title: "Array of Structures",
        difficulty: "Medium",
        statement: "Read data (roll, marks) for N students into an array of structures, and print them.",
        inputFormat: "N, followed by N lines of (roll marks)",
        outputFormat: "N lines of formatted student data",
        constraints: "Use array of structs",
        logic: [
          "Declare struct Student arr[N]. Loop to read. Loop to print."
        ],
        solution: `#include <stdio.h>\n\nstruct Student {\n    int roll;\n    int marks;\n};\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    struct Student arr[n];\n    for(int i=0; i<n; i++) {\n        scanf("%d %d", &arr[i].roll, &arr[i].marks);\n    }\n    for(int i=0; i<n; i++) {\n        printf("Student %d: %d marks\\n", arr[i].roll, arr[i].marks);\n    }\n    return 0;\n}`,
        sampleInput: "2\n1 90\n2 80",
        sampleOutput: "Student 1: 90 marks\nStudent 2: 80 marks",
        timeComplexity: "O(N)"
      },
      {
        id: "p14-4",
        title: "Find Top Student",
        difficulty: "Medium",
        statement: "From an array of N students (roll, marks), find and print the roll number of the student with the highest marks.",
        inputFormat: "N, then N students",
        outputFormat: "Roll number of top student",
        constraints: "Assume unique max marks",
        logic: [
          "Loop through struct array, track max_marks and top_roll."
        ],
        solution: `#include <stdio.h>\n\nstruct Student {\n    int roll;\n    int marks;\n};\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    struct Student arr[n];\n    int max = -1, top_roll = 0;\n    for(int i=0; i<n; i++) {\n        scanf("%d %d", &arr[i].roll, &arr[i].marks);\n        if (arr[i].marks > max) {\n            max = arr[i].marks;\n            top_roll = arr[i].roll;\n        }\n    }\n    printf("%d\\n", top_roll);\n    return 0;\n}`,
        sampleInput: "3\n101 75\n102 95\n103 80",
        sampleOutput: "102",
        timeComplexity: "O(N)"
      },
      {
        id: "p14-5",
        title: "Distance between Points",
        difficulty: "Hard",
        statement: "Define a struct Point (x, y). Write a program to calculate the Euclidean distance between two points.",
        inputFormat: "x1 y1, then x2 y2",
        outputFormat: "Distance formatted to 2 decimal places",
        constraints: "Use <math.h> for sqrt",
        logic: [
          "dist = sqrt((x2-x1)^2 + (y2-y1)^2)"
        ],
        solution: `#include <stdio.h>\n#include <math.h>\n\nstruct Point {\n    float x;\n    float y;\n};\n\nint main() {\n    struct Point p1, p2;\n    scanf("%f %f", &p1.x, &p1.y);\n    scanf("%f %f", &p2.x, &p2.y);\n    float dx = p2.x - p1.x;\n    float dy = p2.y - p1.y;\n    float dist = sqrt(dx*dx + dy*dy);\n    printf("%.2f\\n", dist);\n    return 0;\n}`,
        sampleInput: "0 0\n3 4",
        sampleOutput: "5.00",
        timeComplexity: "O(1)"
      }
    ]
  },
  {
    id: "topic-15",
    slug: "functions-with-structures",
    title: "Functions with Structures",
    shortTitle: "Funcs & Structs",
    icon: "🧩",
    color: "from-emerald-600 to-teal-700",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
    description: "Learn how to pass structures to functions, either by value or by reference using struct pointers.",
    theory: {
      sections: [
        {
          id: "s15-1",
          heading: "Why Pass Structs to Functions?",
          type: "definition",
          content: "Functions can work with structures just like any other data type. This allows you to build cleaner APIs where each function handles one aspect of a struct (e.g., `printEmployee()`, `giveRaise()`, `createPoint()`).",
        },
        {
          id: "s15-2",
          heading: "Passing by Value (Copy)",
          type: "syntax",
          content: "When a struct is passed **by value**, the function gets a **complete copy**. Changes inside the function do not affect the original. This is simple but potentially **slow for large structs** (copying every field).",
          code: `struct Student {
    int roll;
    float gpa;
};

void print(struct Student s) {
    s.gpa = 0; // Modifies LOCAL copy only!
    printf("Roll: %d, GPA: %.2f\\n", s.roll, s.gpa);
}

int main() {
    struct Student me = {101, 3.9};
    print(me);
    printf("GPA still: %.2f\\n", me.gpa); // Still 3.9 - unchanged!
}`
        },
        {
          id: "s15-3",
          heading: "Passing by Reference (Pointer) — The Arrow Operator",
          type: "syntax",
          content: "When passing a **pointer to a struct**, you use the **arrow operator (`->`)** to access members. This is efficient (no copying) and allows the function to **modify the original struct**.",
          code: `void giveRaise(struct Employee *e, int amount) {
    e->salary += amount; // Arrow operator: same as (*e).salary
    // (*e).salary is verbose - arrow (->) is the shorthand
}

int main() {
    struct Employee emp = {1, 50000};
    giveRaise(&emp, 5000); // Pass address
    printf("New salary: %d\\n", emp.salary); // 55000 - modified!
}`
        },
        {
          id: "s15-4",
          heading: "Dot vs Arrow — When to Use Which",
          type: "concept",
          content: "This is a common point of confusion. The rule is simple:",
          table: {
            headers: ["You have", "To access member", "Use", "Example"],
            rows: [
              ["A struct variable", "Directly", "Dot (`.`)", "s.name, s.id"],
              ["A pointer to a struct", "Via the pointer", "Arrow (`->`)", "p->name, p->id"],
              ["A pointer to a struct", "Explicit dereference", "(*p).member", "(*p).name (equivalent to arrow)"]
            ]
          }
        },
        {
          id: "s15-5",
          heading: "Returning Structures from Functions",
          type: "concept",
          content: "Functions can also **return struct values**. This is very clean for 'factory' functions that create and initialize structs.",
          code: `struct Point {
    float x;
    float y;
};

// Factory function: creates and returns a Point
struct Point createPoint(float x, float y) {
    struct Point p;
    p.x = x;
    p.y = y;
    return p; // Returns the entire struct by value
}

// Calculate distance between two points
float distance(struct Point *a, struct Point *b) {
    float dx = b->x - a->x;
    float dy = b->y - a->y;
    return sqrt(dx*dx + dy*dy);
}

int main() {
    struct Point p1 = createPoint(0, 0);
    struct Point p2 = createPoint(3, 4);
    printf("Distance: %.2f\\n", distance(&p1, &p2)); // 5.00
}`
        }
      ]
    },
    problems: [
      {
        id: "p15-1",
        title: "Print Struct via Function",
        difficulty: "Easy",
        statement: "Define a struct Employee (id, salary). Write a function `printEmp(struct Employee e)` that prints it.",
        inputFormat: "id and salary",
        outputFormat: "Formatted string",
        constraints: "Pass by value",
        logic: [
          "Pass struct to function and printf."
        ],
        solution: `#include <stdio.h>\n\nstruct Employee {\n    int id;\n    int salary;\n};\n\nvoid printEmp(struct Employee e) {\n    printf("ID: %d, Salary: %d\\n", e.id, e.salary);\n}\n\nint main() {\n    struct Employee e;\n    scanf("%d %d", &e.id, &e.salary);\n    printEmp(e);\n    return 0;\n}`,
        sampleInput: "10 5000",
        sampleOutput: "ID: 10, Salary: 5000",
        timeComplexity: "O(1)"
      },
      {
        id: "p15-2",
        title: "Return Struct from Function",
        difficulty: "Easy",
        statement: "Write a function `createPoint(int x, int y)` that returns a struct Point initialized with x and y.",
        inputFormat: "Two integers",
        outputFormat: "Coordinates",
        constraints: "Function returns struct Point",
        logic: [
          "Inside function, create struct, assign values, return it."
        ],
        solution: `#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nstruct Point createPoint(int x, int y) {\n    struct Point p;\n    p.x = x;\n    p.y = y;\n    return p;\n}\n\nint main() {\n    int x, y;\n    scanf("%d %d", &x, &y);\n    struct Point p = createPoint(x, y);\n    printf("%d %d\\n", p.x, p.y);\n    return 0;\n}`,
        sampleInput: "7 9",
        sampleOutput: "7 9",
        timeComplexity: "O(1)"
      },
      {
        id: "p15-3",
        title: "Modify Struct using Pointer",
        difficulty: "Medium",
        statement: "Write a function `giveRaise(struct Employee *e)` that increases an employee's salary by 1000.",
        inputFormat: "id and salary",
        outputFormat: "id and new salary",
        constraints: "Pass by reference, use ->",
        logic: [
          "Function takes pointer. e->salary += 1000."
        ],
        solution: `#include <stdio.h>\n\nstruct Employee {\n    int id;\n    int salary;\n};\n\nvoid giveRaise(struct Employee *e) {\n    e->salary += 1000;\n}\n\nint main() {\n    struct Employee emp;\n    scanf("%d %d", &emp.id, &emp.salary);\n    giveRaise(&emp);\n    printf("%d %d\\n", emp.id, emp.salary);\n    return 0;\n}`,
        sampleInput: "1 5000",
        sampleOutput: "1 6000",
        timeComplexity: "O(1)"
      },
      {
        id: "p15-4",
        title: "Compare Two Structures",
        difficulty: "Medium",
        statement: "Write a function that takes two `Point` structs by reference and returns 1 if they have the same coordinates, 0 otherwise.",
        inputFormat: "x1 y1 x2 y2",
        outputFormat: "1 or 0",
        constraints: "Pass pointers to struct",
        logic: [
          "if (p1->x == p2->x && p1->y == p2->y) return 1;"
        ],
        solution: `#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nint isEqual(struct Point *p1, struct Point *p2) {\n    return (p1->x == p2->x && p1->y == p2->y);\n}\n\nint main() {\n    struct Point p1, p2;\n    scanf("%d %d %d %d", &p1.x, &p1.y, &p2.x, &p2.y);\n    printf("%d\\n", isEqual(&p1, &p2));\n    return 0;\n}`,
        sampleInput: "2 3 2 3",
        sampleOutput: "1",
        timeComplexity: "O(1)"
      },
      {
        id: "p15-5",
        title: "Complex Number Addition",
        difficulty: "Hard",
        statement: "Define a struct `Complex` with real and imaginary parts. Write a function that adds two Complex numbers and returns a new Complex number.",
        inputFormat: "real1 imag1 real2 imag2",
        outputFormat: "real_sum + imag_sum i",
        constraints: "None",
        logic: [
          "res.real = c1.real + c2.real; res.imag = c1.imag + c2.imag;"
        ],
        solution: `#include <stdio.h>\n\nstruct Complex {\n    int real;\n    int imag;\n};\n\nstruct Complex add(struct Complex c1, struct Complex c2) {\n    struct Complex res;\n    res.real = c1.real + c2.real;\n    res.imag = c1.imag + c2.imag;\n    return res;\n}\n\nint main() {\n    struct Complex c1, c2, sum;\n    scanf("%d %d %d %d", &c1.real, &c1.imag, &c2.real, &c2.imag);\n    sum = add(c1, c2);\n    printf("%d + %di\\n", sum.real, sum.imag);\n    return 0;\n}`,
        sampleInput: "2 3 4 5",
        sampleOutput: "6 + 8i",
        timeComplexity: "O(1)"
      }
    ]
  }
];
