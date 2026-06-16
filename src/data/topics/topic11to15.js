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
          content: "In C, a string is a 1-D array of characters terminated by a null character `\\0`.",
        },
        {
          id: "s11-2",
          heading: "Declaration and Initialization",
          type: "syntax",
          content: "You can initialize strings using string literals or character arrays.",
          code: `char str1[] = "Hello"; // Compiler adds '\\0' automatically
char str2[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};`
        },
        {
          id: "s11-3",
          heading: "String Input/Output",
          type: "syntax",
          content: "Use `%s` format specifier. For reading strings with spaces, `fgets` is preferred over `scanf`.",
          code: `char name[50];
// scanf stops reading at the first space
// scanf("%s", name);

// fgets reads the whole line including spaces
fgets(name, sizeof(name), stdin);
printf("Hello %s", name);`
        },
        {
          id: "s11-4",
          heading: "String Functions (<string.h>)",
          type: "concept",
          content: "Common functions: `strlen` (length), `strcpy` (copy), `strcat` (concatenate), `strcmp` (compare).",
          code: `#include <string.h>
char str[20] = "Apple";
int len = strlen(str); // 5
strcpy(str, "Banana"); // Copies Banana into str`
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
          heading: "What is a Function?",
          type: "definition",
          content: "A function is a block of code that performs a specific task. It provides reusability and modularity.",
        },
        {
          id: "s12-2",
          heading: "Function Syntax",
          type: "syntax",
          content: "A function has a return type, name, parameters, and a body. A prototype declares the function before it's used.",
          code: `// Prototype
int add(int a, int b);

// Definition
int add(int a, int b) {
    return a + b;
}`
        },
        {
          id: "s12-3",
          heading: "Pass by Value",
          type: "concept",
          content: "By default, arguments are passed by value in C. The function gets a copy of the variable, so changes inside the function don't affect the original variable.",
          code: `void modify(int x) {
    x = 10; // Changes local copy only
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
          heading: "What is a Pointer?",
          type: "definition",
          content: "A pointer is a variable that stores the memory address of another variable.",
        },
        {
          id: "s13-2",
          heading: "Syntax",
          type: "syntax",
          content: "Use `*` to declare a pointer and `&` to get the address of a variable.",
          code: `int x = 10;
int *ptr = &x; // ptr holds address of x
printf("%d", *ptr); // Dereferencing: prints 10`
        },
        {
          id: "s13-3",
          heading: "Pointers and Arrays",
          type: "concept",
          content: "The name of an array is actually a pointer to its first element.",
          code: `int arr[3] = {10, 20, 30};
int *p = arr; // Same as p = &arr[0]
printf("%d", *(p+1)); // Prints 20 (arr[1])`
        },
        {
          id: "s13-4",
          heading: "Pass by Reference",
          type: "example",
          content: "Use pointers to pass arguments by reference so functions can modify the original variables.",
          code: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}`
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
          heading: "What is a Structure?",
          type: "definition",
          content: "A structure (`struct`) is a user-defined data type that groups related variables of different types.",
        },
        {
          id: "s14-2",
          heading: "Defining and Using a Struct",
          type: "syntax",
          content: "Define the struct, then declare variables of that type. Access members using the dot (`.`) operator.",
          code: `struct Student {
    int id;
    float gpa;
};

int main() {
    struct Student s1;
    s1.id = 101;
    s1.gpa = 3.8;
}`
        },
        {
          id: "s14-3",
          heading: "Array of Structures",
          type: "concept",
          content: "You can create an array where each element is a structure, perfect for storing lists of records.",
          code: `struct Student class[50];
class[0].id = 1;
class[0].gpa = 3.9;`
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
          heading: "Passing Struct by Value",
          type: "syntax",
          content: "You can pass an entire structure to a function. A copy is created.",
          code: `void printStudent(struct Student s) {
    printf("%d", s.id);
}`
        },
        {
          id: "s15-2",
          heading: "Passing Struct by Reference",
          type: "syntax",
          content: "To modify a structure or avoid copying large amounts of data, pass a pointer to the structure. Use the arrow operator `->` to access members.",
          code: `void updateGPA(struct Student *s, float newGpa) {
    s->gpa = newGpa; // Arrow operator used with pointers
}`
        },
        {
          id: "s15-3",
          heading: "Returning Structures",
          type: "concept",
          content: "Functions can also return structures.",
          code: `struct Point createPoint(int x, int y) {
    struct Point p;
    p.x = x; p.y = y;
    return p;
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
