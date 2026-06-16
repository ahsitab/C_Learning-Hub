export const topic16to20 = [
  {
    id: "topic-16",
    slug: "recursion",
    title: "Recursion",
    shortTitle: "Recursion",
    icon: "🔁",
    color: "from-amber-400 to-orange-500",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/20",
    description: "Learn how functions can call themselves to solve problems elegantly.",
    theory: {
      sections: [
        {
          id: "s16-1",
          heading: "What is Recursion?",
          type: "definition",
          content: "Recursion occurs when a function calls itself. It's often used to break down a problem into smaller, similar sub-problems.",
        },
        {
          id: "s16-2",
          heading: "Base Case",
          type: "concept",
          content: "Every recursive function MUST have a base case (a condition to stop calling itself). Without it, the function will run infinitely and cause a Stack Overflow.",
          code: `void recurse(int count) {
    if (count <= 0) return; // Base case
    printf("Hello\\n");
    recurse(count - 1); // Recursive call
}`
        },
        {
          id: "s16-3",
          heading: "Recursive vs Iterative",
          type: "concept",
          content: "Anything written with a loop (iterative) can be written with recursion. Recursion is cleaner for problems like trees or graphs but uses more memory.",
        }
      ]
    },
    problems: [
      {
        id: "p16-1",
        title: "Print N to 1",
        difficulty: "Easy",
        statement: "Write a recursive function to print numbers from N down to 1.",
        inputFormat: "One integer N",
        outputFormat: "Numbers from N to 1",
        constraints: "N > 0",
        logic: [
          "Base case: if n == 0 return.",
          "Print n, call printN(n-1)."
        ],
        solution: `#include <stdio.h>\n\nvoid printDesc(int n) {\n    if (n == 0) return;\n    printf("%d ", n);\n    printDesc(n - 1);\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printDesc(n);\n    return 0;\n}`,
        sampleInput: "5",
        sampleOutput: "5 4 3 2 1 ",
        timeComplexity: "O(N)"
      },
      {
        id: "p16-2",
        title: "Factorial",
        difficulty: "Easy",
        statement: "Calculate factorial of N using recursion.",
        inputFormat: "One integer N",
        outputFormat: "N!",
        constraints: "0 <= N <= 12",
        logic: [
          "Base case: if n==0 or n==1 return 1.",
          "Return n * fact(n-1)."
        ],
        solution: `#include <stdio.h>\n\nlong long fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%lld\\n", fact(n));\n    return 0;\n}`,
        sampleInput: "5",
        sampleOutput: "120",
        timeComplexity: "O(N)"
      },
      {
        id: "p16-3",
        title: "Sum of Natural Numbers",
        difficulty: "Medium",
        statement: "Find the sum of first N natural numbers recursively.",
        inputFormat: "One integer N",
        outputFormat: "Sum",
        constraints: "N > 0",
        logic: [
          "Base case: if n == 1 return 1.",
          "Return n + sum(n-1)."
        ],
        solution: `#include <stdio.h>\n\nint sum(int n) {\n    if (n == 1) return 1;\n    return n + sum(n - 1);\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", sum(n));\n    return 0;\n}`,
        sampleInput: "10",
        sampleOutput: "55",
        timeComplexity: "O(N)"
      },
      {
        id: "p16-4",
        title: "Fibonacci Sequence",
        difficulty: "Medium",
        statement: "Find the Nth Fibonacci number recursively. F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2).",
        inputFormat: "One integer N",
        outputFormat: "Nth Fibonacci number",
        constraints: "N >= 0",
        logic: [
          "Base case: if n==0 return 0, if n==1 return 1.",
          "Return fib(n-1) + fib(n-2)."
        ],
        solution: `#include <stdio.h>\n\nint fib(int n) {\n    if (n == 0) return 0;\n    if (n == 1) return 1;\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", fib(n));\n    return 0;\n}`,
        sampleInput: "6",
        sampleOutput: "8",
        timeComplexity: "O(2^N)"
      },
      {
        id: "p16-5",
        title: "Sum of Digits Recursively",
        difficulty: "Hard",
        statement: "Calculate the sum of digits of a number using recursion.",
        inputFormat: "One integer",
        outputFormat: "Sum of its digits",
        constraints: "None",
        logic: [
          "Base case: if n == 0 return 0.",
          "Return (n % 10) + sumDigits(n / 10)."
        ],
        solution: `#include <stdio.h>\n\nint sumDigits(int n) {\n    if (n == 0) return 0;\n    return (n % 10) + sumDigits(n / 10);\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", sumDigits(n));\n    return 0;\n}`,
        sampleInput: "1234",
        sampleOutput: "10",
        timeComplexity: "O(log10(N))"
      }
    ]
  },
  {
    id: "topic-17",
    slug: "file-handling",
    title: "File Handling",
    shortTitle: "File Handling",
    icon: "📄",
    color: "from-gray-500 to-slate-600",
    borderColor: "border-gray-500/30",
    glowColor: "shadow-gray-500/20",
    description: "Read from and write to text and binary files to save data permanently.",
    theory: {
      sections: [
        {
          id: "s17-1",
          heading: "Why Files?",
          type: "definition",
          content: "Variables store data temporarily in RAM. Files store data permanently on disk.",
        },
        {
          id: "s17-2",
          heading: "File Operations",
          type: "syntax",
          content: "To work with a file: open it, read/write, then close it using a `FILE` pointer.",
          code: `FILE *fp = fopen("data.txt", "w"); // "w" is write mode
if (fp != NULL) {
    fprintf(fp, "Hello File!\\n");
    fclose(fp);
}`
        },
        {
          id: "s17-3",
          heading: "File Modes",
          type: "concept",
          content: "`r` = read, `w` = write (overwrites), `a` = append. Add `b` for binary (e.g., `rb`, `wb`).",
        }
      ]
    },
    problems: [
      {
        id: "p17-1",
        title: "Write to File",
        difficulty: "Easy",
        statement: "Write a program to create 'output.txt' and write 'Hello C!' into it.",
        inputFormat: "None",
        outputFormat: "Creates file",
        constraints: "None",
        logic: [
          "fopen with 'w'. fprintf string. fclose."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("output.txt", "w");\n    if (fp != NULL) {\n        fprintf(fp, "Hello C!\\n");\n        fclose(fp);\n    }\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "None (Check file)",
        timeComplexity: "O(1)"
      },
      {
        id: "p17-2",
        title: "Read from File",
        difficulty: "Easy",
        statement: "Read a single integer from 'input.txt' and print it to console. Assume file exists and contains one integer.",
        inputFormat: "File 'input.txt'",
        outputFormat: "The integer",
        constraints: "None",
        logic: [
          "fopen with 'r'. fscanf into variable. printf. fclose."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("input.txt", "r");\n    if (fp != NULL) {\n        int n;\n        fscanf(fp, "%d", &n);\n        printf("%d\\n", n);\n        fclose(fp);\n    }\n    return 0;\n}`,
        sampleInput: "input.txt contains: 42",
        sampleOutput: "42",
        timeComplexity: "O(1)"
      },
      {
        id: "p17-3",
        title: "Append to File",
        difficulty: "Medium",
        statement: "Append the string 'End of file.' to an existing file 'log.txt'.",
        inputFormat: "None",
        outputFormat: "Appends to file",
        constraints: "None",
        logic: [
          "fopen with 'a'. fprintf. fclose."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("log.txt", "a");\n    if (fp != NULL) {\n        fprintf(fp, "End of file.\\n");\n        fclose(fp);\n    }\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "None (Check file)",
        timeComplexity: "O(1)"
      },
      {
        id: "p17-4",
        title: "Copy File",
        difficulty: "Medium",
        statement: "Write a program to copy contents of 'source.txt' to 'dest.txt' character by character.",
        inputFormat: "File 'source.txt'",
        outputFormat: "Creates/Overwrites 'dest.txt'",
        constraints: "None",
        logic: [
          "Open source 'r', dest 'w'. Read chars with fgetc until EOF, write with fputc."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    FILE *fs = fopen("source.txt", "r");\n    FILE *fd = fopen("dest.txt", "w");\n    if (fs && fd) {\n        char c;\n        while ((c = fgetc(fs)) != EOF) {\n            fputc(c, fd);\n        }\n        fclose(fs);\n        fclose(fd);\n    }\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "None",
        timeComplexity: "O(N) where N is chars in file"
      },
      {
        id: "p17-5",
        title: "Count Lines in File",
        difficulty: "Hard",
        statement: "Write a program to count the number of lines in a text file 'doc.txt'.",
        inputFormat: "File 'doc.txt'",
        outputFormat: "Number of lines",
        constraints: "None",
        logic: [
          "Read char by char. If char == '\\n', increment lineCount."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("doc.txt", "r");\n    int lines = 0;\n    if (fp) {\n        char c;\n        while ((c = fgetc(fp)) != EOF) {\n            if (c == '\\n') lines++;\n        }\n        // If file doesn't end with newline but has content\n        // (Optional check depending on strictness)\n        fclose(fp);\n    }\n    printf("%d\\n", lines);\n    return 0;\n}`,
        sampleInput: "doc.txt with 3 lines",
        sampleOutput: "3",
        timeComplexity: "O(N) chars in file"
      }
    ]
  },
  {
    id: "topic-18",
    slug: "dynamic-memory",
    title: "Dynamic Memory Allocation",
    shortTitle: "Dynamic Memory",
    icon: "🧠",
    color: "from-lime-500 to-green-600",
    borderColor: "border-lime-500/30",
    glowColor: "shadow-lime-500/20",
    description: "Allocate and free memory at runtime using malloc, calloc, realloc, and free.",
    theory: {
      sections: [
        {
          id: "s18-1",
          heading: "What is DMA?",
          type: "definition",
          content: "Dynamic Memory Allocation allows you to allocate memory during program execution (at runtime), rather than at compile time.",
        },
        {
          id: "s18-2",
          heading: "malloc() and free()",
          type: "syntax",
          content: "`malloc` allocates a block of memory. `free` releases it. They require `<stdlib.h>`.",
          code: `#include <stdlib.h>
int *ptr = (int*) malloc(5 * sizeof(int)); // Array of 5 ints
if (ptr == NULL) { /* Handle error */ }
free(ptr); // Must free when done!`
        },
        {
          id: "s18-3",
          heading: "calloc() and realloc()",
          type: "concept",
          content: "`calloc` is like `malloc` but initializes memory to zero. `realloc` resizes an already allocated block of memory.",
        }
      ]
    },
    problems: [
      {
        id: "p18-1",
        title: "Allocate Int Array",
        difficulty: "Easy",
        statement: "Read N, allocate an integer array of size N using malloc, read N integers, and print them.",
        inputFormat: "N followed by N integers",
        outputFormat: "The N integers",
        constraints: "Must use malloc",
        logic: [
          "int *arr = (int*)malloc(n * sizeof(int));"
        ],
        solution: `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}`,
        sampleInput: "3\n1 2 3",
        sampleOutput: "1 2 3 ",
        timeComplexity: "O(N)"
      },
      {
        id: "p18-2",
        title: "Sum using calloc",
        difficulty: "Easy",
        statement: "Use calloc to allocate memory for N integers, read them, and print their sum.",
        inputFormat: "N followed by N integers",
        outputFormat: "Sum",
        constraints: "Must use calloc",
        logic: [
          "int *arr = (int*)calloc(n, sizeof(int));"
        ],
        solution: `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n, sum = 0;\n    scanf("%d", &n);\n    int *arr = (int*)calloc(n, sizeof(int));\n    for(int i=0; i<n; i++) {\n        scanf("%d", &arr[i]);\n        sum += arr[i];\n    }\n    printf("%d\\n", sum);\n    free(arr);\n    return 0;\n}`,
        sampleInput: "2\n10 20",
        sampleOutput: "30",
        timeComplexity: "O(N)"
      },
      {
        id: "p18-3",
        title: "Find Max in Dynamic Array",
        difficulty: "Medium",
        statement: "Allocate memory dynamically, read N numbers, and find the maximum.",
        inputFormat: "N then N numbers",
        outputFormat: "Max value",
        constraints: "Dynamic memory",
        logic: [
          "Loop and compare arr[i] with max."
        ],
        solution: `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    int max = arr[0];\n    for(int i=1; i<n; i++) if(arr[i] > max) max = arr[i];\n    printf("%d\\n", max);\n    free(arr);\n    return 0;\n}`,
        sampleInput: "4\n4 9 2 5",
        sampleOutput: "9",
        timeComplexity: "O(N)"
      },
      {
        id: "p18-4",
        title: "Resize Array",
        difficulty: "Medium",
        statement: "Allocate array of size N. Read N numbers. Then resize array to size N+2 using realloc, read 2 more numbers, and print the entire array.",
        inputFormat: "N, then N numbers, then 2 numbers",
        outputFormat: "All N+2 numbers",
        constraints: "Use realloc",
        logic: [
          "arr = realloc(arr, (n+2)*sizeof(int));"
        ],
        solution: `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *arr = (int*)malloc(n * sizeof(int));\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    arr = (int*)realloc(arr, (n + 2) * sizeof(int));\n    scanf("%d %d", &arr[n], &arr[n+1]);\n    for(int i=0; i<n+2; i++) printf("%d ", arr[i]);\n    free(arr);\n    return 0;\n}`,
        sampleInput: "2\n1 2\n3 4",
        sampleOutput: "1 2 3 4 ",
        timeComplexity: "O(N)"
      },
      {
        id: "p18-5",
        title: "Dynamic String",
        difficulty: "Hard",
        statement: "Allocate a string dynamically based on the length N provided, read the string, and print it reversed.",
        inputFormat: "Length N, followed by string of length N",
        outputFormat: "Reversed string",
        constraints: "Allocate N+1 chars",
        logic: [
          "char *s = malloc((n+1)*sizeof(char));",
          "Read string. Loop backwards to print."
        ],
        solution: `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    char *s = (char*)malloc((n + 1) * sizeof(char));\n    scanf("%s", s);\n    for(int i=n-1; i>=0; i--) printf("%c", s[i]);\n    printf("\\n");\n    free(s);\n    return 0;\n}`,
        sampleInput: "5\nHello",
        sampleOutput: "olleH",
        timeComplexity: "O(N)"
      }
    ]
  },
  {
    id: "topic-19",
    slug: "unions-bitwise",
    title: "Unions & Bitwise Operators",
    shortTitle: "Unions & Bitwise",
    icon: "🔌",
    color: "from-zinc-500 to-slate-700",
    borderColor: "border-zinc-500/30",
    glowColor: "shadow-zinc-500/20",
    description: "Learn about memory sharing with unions and manipulate data at the bit level.",
    theory: {
      sections: [
        {
          id: "s19-1",
          heading: "What is a Union?",
          type: "definition",
          content: "A `union` is like a struct, but all its members share the SAME memory location. Its size is the size of its largest member.",
        },
        {
          id: "s19-2",
          heading: "Union Example",
          type: "syntax",
          content: "You can only use one member at a time.",
          code: `union Data {
    int i;
    float f;
};
union Data d;
d.i = 10;
// If we set d.f = 2.5, d.i is corrupted/overwritten.`
        },
        {
          id: "s19-3",
          heading: "Bitwise Operators",
          type: "concept",
          content: "Bitwise operators perform operations at the bit level: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (Left Shift), `>>` (Right Shift).",
          code: `int a = 5;  // Binary 0101
int b = 3;  // Binary 0011
int c = a & b; // 0001 (Decimal 1)`
        }
      ]
    },
    problems: [
      {
        id: "p19-1",
        title: "Bitwise AND",
        difficulty: "Easy",
        statement: "Read two integers and print their Bitwise AND result.",
        inputFormat: "Two integers",
        outputFormat: "Result",
        constraints: "None",
        logic: [
          "result = a & b;"
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("%d\\n", a & b);\n    return 0;\n}`,
        sampleInput: "5 3",
        sampleOutput: "1",
        timeComplexity: "O(1)"
      },
      {
        id: "p19-2",
        title: "Bitwise OR and XOR",
        difficulty: "Easy",
        statement: "Read two integers, print their Bitwise OR and Bitwise XOR separated by space.",
        inputFormat: "Two integers",
        outputFormat: "OR XOR",
        constraints: "None",
        logic: [
          "a | b and a ^ b"
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("%d %d\\n", a | b, a ^ b);\n    return 0;\n}`,
        sampleInput: "5 3",
        sampleOutput: "7 6",
        timeComplexity: "O(1)"
      },
      {
        id: "p19-3",
        title: "Left Shift Multiplication",
        difficulty: "Medium",
        statement: "Multiply a number by 2^k using the left shift operator.",
        inputFormat: "Two integers N and k",
        outputFormat: "Result of N << k",
        constraints: "None",
        logic: [
          "N << k shifts the bits of N to the left by k positions, effectively multiplying by 2^k."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, k;\n    scanf("%d %d", &n, &k);\n    printf("%d\\n", n << k);\n    return 0;\n}`,
        sampleInput: "5 2",
        sampleOutput: "20",
        timeComplexity: "O(1)"
      },
      {
        id: "p19-4",
        title: "Check Even/Odd with Bitwise",
        difficulty: "Medium",
        statement: "Check if a number is even or odd using the Bitwise AND operator (do not use %).",
        inputFormat: "One integer",
        outputFormat: "'Even' or 'Odd'",
        constraints: "Use &",
        logic: [
          "If the least significant bit is 1, it's odd. Check (n & 1)."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if (n & 1) printf("Odd\\n");\n    else printf("Even\\n");\n    return 0;\n}`,
        sampleInput: "7",
        sampleOutput: "Odd",
        timeComplexity: "O(1)"
      },
      {
        id: "p19-5",
        title: "Union Size Check",
        difficulty: "Hard",
        statement: "Define a Union with a char, an int, and a double. Print the sizeof this union.",
        inputFormat: "None",
        outputFormat: "Size of the union in bytes",
        constraints: "None",
        logic: [
          "Define union, use sizeof(union_name)."
        ],
        solution: `#include <stdio.h>\n\nunion Data {\n    char c;\n    int i;\n    double d;\n};\n\nint main() {\n    printf("%lu\\n", sizeof(union Data));\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "8",
        timeComplexity: "O(1)"
      }
    ]
  },
  {
    id: "topic-20",
    slug: "mini-project",
    title: "Mini Project",
    shortTitle: "Project",
    icon: "🚀",
    color: "from-indigo-500 to-purple-600",
    borderColor: "border-indigo-500/30",
    glowColor: "shadow-indigo-500/20",
    description: "Apply your C programming skills to build a complete, real-world application.",
    theory: {
      sections: []
    },
    problems: [
      {
        id: "p20-1",
        title: "Parking Management System",
        difficulty: "Hard",
        statement: "Build a complete Parking Management System in C. Features include: secure admin login, vehicle entry registration with dynamic ID generation, fee calculation based on duration and vehicle type, vehicle search, visual parking map, and revenue tracking.",
        inputFormat: "Interactive menu-driven command line input",
        outputFormat: "Formatted console outputs, tables, and receipts",
        constraints: "Maximum 50 parking slots, data must persist between runs",
        logic: [
          "Define structs for Admin, Vehicle, and Revenue",
          "Implement File I/O for saving and loading data",
          "Create a secure admin login system",
          "Implement an interactive menu loop"
        ],
        solution: `// Complete code is provided in the previous data files.\n#include <stdio.h>\nint main() {\n  printf("Refer to full project code.\\n");\n  return 0;\n}`,
        sampleInput: "Admin Login -> Menu -> Vehicle Entry",
        sampleOutput: "WELCOME TO PARKING MANAGEMENT SYSTEM -> [Success] Login Successful!",
        timeComplexity: "O(n) for searching files"
      },
      {
        id: "p20-2",
        title: "Library Management System",
        difficulty: "Hard",
        statement: "Build a complete Library Management System in C. Features include: admin authentication, book inventory management, student registration, issue/return tracking, fine calculation for overdue books, and inventory reporting.",
        inputFormat: "Interactive menu-driven command line input",
        outputFormat: "Formatted console outputs, receipts, and reports",
        constraints: "Data must persist between runs, handle soft deletes",
        logic: [
          "Define structs for Admin, Book, Student, and IssueRecord",
          "Implement File I/O for saving and loading data",
          "Create a secure admin login system",
          "Implement an interactive menu loop with 14 options"
        ],
        solution: `// Complete code is provided in the previous data files.\n#include <stdio.h>\nint main() {\n  printf("Refer to full project code.\\n");\n  return 0;\n}`,
        sampleInput: "Admin Login -> Menu -> Add Book -> Issue Book",
        sampleOutput: "WELCOME TO THE LIBRARY SYSTEM -> [Access Granted] -> Material issued successfully",
        timeComplexity: "O(n) for searching files"
      }
    ]
  }
];
