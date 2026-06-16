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
          content: "**Recursion** is when a function calls **itself** as part of its own definition. It's a powerful technique for solving problems that can be broken into **smaller, identical sub-problems**.\n\nEvery recursive solution has two parts:\n1. **Base Case**: The condition that **stops** the recursion. Without it, the function calls itself forever → Stack Overflow.\n2. **Recursive Case**: Where the function calls itself with a **simpler version** of the original problem.",
        },
        {
          id: "s16-2",
          heading: "The Call Stack — How Recursion Works in Memory",
          type: "concept",
          content: "Each recursive call creates a new **stack frame**. The stack grows with each call and shrinks as each call returns. Here's a step-by-step trace of `factorial(3) = 6`:",
          table: {
            headers: ["Step", "Call", "Action"],
            rows: [
              ["1 →", "factorial(3)", "3 != 1, so calls factorial(2)... waits"],
              ["2 →", "factorial(2)", "2 != 1, so calls factorial(1)... waits"],
              ["3 →", "factorial(1)", "Base case! Returns 1"],
              ["4 ←", "factorial(2)", "Resumes: returns 2 × 1 = 2"],
              ["5 ←", "factorial(3)", "Resumes: returns 3 × 2 = 6"]
            ]
          },
          code: `long long factorial(int n) {
    // Base case: stops the recursion
    if (n <= 1) return 1;
    // Recursive case: problem gets smaller each time (n-1)
    return n * factorial(n - 1);
}
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120`
        },
        {
          id: "s16-3",
          heading: "Base Case: The Most Critical Part",
          type: "concept",
          content: "The base case is what **prevents infinite recursion**. Always identify it FIRST before writing the recursive case. A missing or wrong base case causes a **Stack Overflow** (the stack runs out of memory from too many nested calls).",
          code: `// BROKEN: No base case - infinite recursion!
void countDown(int n) {
    printf("%d ", n);
    countDown(n - 1); // Never stops! Stack Overflow!
}

// FIXED: Base case added
void countDown(int n) {
    if (n < 0) return; // Base case: stop at -1
    printf("%d ", n);
    countDown(n - 1); // Recursive case
}`
        },
        {
          id: "s16-4",
          heading: "Recursion vs Iteration — Tradeoffs",
          type: "concept",
          content: "Both approaches can solve the same problems. Choosing the right one matters:",
          table: {
            headers: ["Factor", "Recursion", "Iteration (Loops)"],
            rows: [
              ["Readability", "Often cleaner (mirrors math definition)", "More explicit and verbose"],
              ["Memory", "More: each call uses stack space", "Less: only loop variables"],
              ["Speed", "Slightly slower (function call overhead)", "Faster in practice"],
              ["Stack Overflow", "Possible for deep recursion (e.g., n=100000)", "Not a concern"],
              ["Best for", "Trees, graphs, divide & conquer, backtracking", "Simple counting loops, array traversal"]
            ]
          }
        },
        {
          id: "s16-5",
          heading: "Fibonacci — A Classic Recursive Problem",
          type: "example",
          content: "Fibonacci shows both the elegance and the danger of naive recursion. `fib(n)` with plain recursion is O(2^n) because it recalculates the same values repeatedly.",
          code: `// Naive recursive Fibonacci: O(2^n) - SLOW for large n
int fib(int n) {
    if (n == 0) return 0; // Base case 1
    if (n == 1) return 1; // Base case 2
    return fib(n-1) + fib(n-2); // Two recursive calls
}
// fib(5) call tree:
//            fib(5)
//        fib(4)    fib(3)
//     fib(3) fib(2) fib(2) fib(1)
// ... fib(2) is calculated 3 times!

// Optimized: Use a loop (O(n) time, O(1) space)
int fibFast(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b; a = b; b = c;
    }
    return b;
}`
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
          heading: "Why Files? The Persistence Problem",
          type: "definition",
          content: "All variables and arrays are stored in **RAM** (volatile memory). When your program ends, all data is **lost**. Files let you store data **permanently** on a disk (hard drive, SSD), so it survives after the program terminates.\n\n**Real-world use cases**:\n- Saving game progress\n- Writing logs/reports\n- Reading configuration settings\n- Storing a database of records",
        },
        {
          id: "s17-2",
          heading: "File Modes — Complete Reference",
          type: "concept",
          content: "When opening a file with `fopen()`, you must specify a **mode** that determines what operations are allowed:",
          table: {
            headers: ["Mode", "Meaning", "File Exists?", "File Missing?"],
            rows: [
              [`"r"`, "Read only", "Opens it", "Returns NULL (error)"],
              [`"w"`, "Write only", "Truncates (clears) it", "Creates new file"],
              [`"a"`, "Append only", "Appends to end", "Creates new file"],
              [`"r+"`, "Read + Write", "Opens it", "Returns NULL (error)"],
              [`"w+"`, "Read + Write", "Truncates it", "Creates new file"],
              [`"rb"`, "Read binary", "Opens binary file", "Returns NULL"],
              [`"wb"`, "Write binary", "Truncates binary file", "Creates new file"]
            ]
          }
        },
        {
          id: "s17-3",
          heading: "The FILE Workflow (Open → Read/Write → Close)",
          type: "syntax",
          content: "Every file operation follows the same three steps. **Always check if `fopen` returns NULL** before using the file pointer.",
          code: `#include <stdio.h>

int main() {
    // Step 1: Open the file
    FILE *fp = fopen("data.txt", "w"); // Open for writing
    
    // Step 2: ALWAYS check for errors!
    if (fp == NULL) {
        printf("Error: Could not open file!\\n");
        return 1; // Exit with error code
    }
    
    // Step 3: Read/Write operations
    fprintf(fp, "Hello, File!\\n");   // Write formatted text
    fprintf(fp, "Number: %d\\n", 42);
    
    // Step 4: Close the file (MANDATORY - flushes buffer to disk)
    fclose(fp);
    printf("File written successfully.\\n");
    return 0;
}`
        },
        {
          id: "s17-4",
          heading: "Reading Files — All Methods",
          type: "concept",
          content: "Different functions are optimized for different types of reading:",
          table: {
            headers: ["Function", "Reads", "Use When", "Example"],
            rows: [
              ["fscanf(fp, fmt, ...)", "Formatted data", "Reading numbers/words", `fscanf(fp, "%d", &n)`],
              ["fgets(buf, size, fp)", "One line at a time", "Reading text line by line", `fgets(line, 100, fp)`],
              ["fgetc(fp)", "One character at a time", "Character-by-character processing", `char c = fgetc(fp)`],
              ["fread(buf, size, n, fp)", "Binary blocks", "Reading binary data/structs", `fread(&s, sizeof(s), 1, fp)`]
            ]
          },
          code: `// Read all lines from a file:
FILE *fp = fopen("notes.txt", "r");
if (fp == NULL) return 1;

char line[256];
while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line); // fgets keeps the '\n'
}
fclose(fp);

// Read until EOF using fgetc:
char c;
while ((c = fgetc(fp)) != EOF) {
    putchar(c);
}`
        },
        {
          id: "s17-5",
          heading: "Binary File I/O with Structs",
          type: "concept",
          content: "For storing complex records (like structs), binary files are more efficient and compact than text files. Use `fwrite` and `fread`.",
          code: `struct Student { int id; char name[50]; float gpa; };

// Write a struct to binary file
struct Student s1 = {101, "Alice", 3.9};
FILE *fp = fopen("students.dat", "wb");
fwrite(&s1, sizeof(struct Student), 1, fp); // 1 record
fclose(fp);

// Read it back:
struct Student s2;
fp = fopen("students.dat", "rb");
fread(&s2, sizeof(struct Student), 1, fp);
fclose(fp);
printf("%d %s %.2f\\n", s2.id, s2.name, s2.gpa); // 101 Alice 3.90`
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
          heading: "Stack vs Heap — Two Types of Memory",
          type: "definition",
          content: "Every C program uses two regions of memory at runtime:",
          table: {
            headers: ["Feature", "Stack", "Heap"],
            rows: [
              ["What's stored", "Local variables, function parameters", "Dynamically allocated memory"],
              ["Size", "Fixed & small (typically 1-8 MB)", "Large (limited by OS/RAM)"],
              ["Managed by", "Compiler automatically", "Programmer manually"],
              ["Lifetime", "Auto-freed when function returns", "Lives until `free()` is called"],
              ["Speed", "Very fast", "Slightly slower (system call overhead)"],
              ["Error if full", "Stack Overflow", "malloc returns NULL"]
            ]
          }
        },
        {
          id: "s18-2",
          heading: "Why DMA? The Problem with Fixed-Size Arrays",
          type: "concept",
          content: "With static arrays, you must know the size **at compile time**: `int arr[100]`. But what if the user needs 1 element? You waste 99 × 4 = 396 bytes. What if they need 200? The program crashes.\n\n**Dynamic Memory Allocation (DMA)** solves this by letting you allocate exactly the right amount of memory **at runtime**.",
          code: `// Static array: size fixed at compile time
int n = 100; // Must be a compile-time constant in old C
int arr[100]; // Always 400 bytes, even if n is 5

// Dynamic array: size determined at runtime
int n;
scaf("%d", &n);
int *arr = (int*) malloc(n * sizeof(int)); // Exactly n * 4 bytes`
        },
        {
          id: "s18-3",
          heading: "malloc(), calloc(), realloc(), free()",
          type: "syntax",
          content: "The four DMA functions, all from `<stdlib.h>`:",
          table: {
            headers: ["Function", "Signature", "Initializes?", "Use Case"],
            rows: [
              ["malloc", "void* malloc(size_t size)", "No (garbage)", "Allocate a block of N bytes"],
              ["calloc", "void* calloc(size_t n, size_t size)", "Yes (zeros)", "Allocate N elements, all zeroed"],
              ["realloc", "void* realloc(void* ptr, size_t newSize)", "No", "Resize an existing allocation"],
              ["free", "void free(void* ptr)", "N/A", "Release allocated memory back to OS"]
            ]
          },
          code: `#include <stdlib.h>

// malloc: allocates, does NOT initialize (contains garbage!)
int *arr = (int*) malloc(5 * sizeof(int));
if (arr == NULL) { printf("Out of memory!\\n"); exit(1); }

// calloc: allocates AND initializes to zero
int *zeros = (int*) calloc(5, sizeof(int)); // All elements = 0

// realloc: grow or shrink an existing allocation
arr = (int*) realloc(arr, 10 * sizeof(int)); // Now holds 10 ints

// free: MANDATORY cleanup to prevent memory leaks
free(arr);
free(zeros);
arr = NULL; // Good practice: set to NULL after freeing!`
        },
        {
          id: "s18-4",
          heading: "Memory Leaks — The Silent Danger",
          type: "concept",
          content: "A **memory leak** occurs when you allocate memory but never `free()` it. The memory remains occupied until the program ends. In long-running programs (servers, daemons), leaks cause the system to run out of memory.",
          code: `// Memory Leak: malloc without free
void leaky() {
    int *p = (int*) malloc(100 * sizeof(int));
    // ... use p ...
    // FORGOT to free(p)! 400 bytes leaked each call!
}

// Correct:
void notLeaky() {
    int *p = (int*) malloc(100 * sizeof(int));
    if (p == NULL) return;
    // ... use p ...
    free(p); // Always free when done!
    p = NULL; // Prevent dangling pointer
}`
        },
        {
          id: "s18-5",
          heading: "Dynamic 2D Arrays",
          type: "example",
          content: "To create a 2D array dynamically (rows and columns known only at runtime), use an array of pointers:",
          code: `int rows = 3, cols = 4;

// Step 1: Allocate array of row pointers
int **matrix = (int**) malloc(rows * sizeof(int*));

// Step 2: Allocate each row
for (int i = 0; i < rows; i++) {
    matrix[i] = (int*) malloc(cols * sizeof(int));
}

// Use it like a normal 2D array!
matrix[1][2] = 42;

// Free in reverse order (rows first, then pointer array)
for (int i = 0; i < rows; i++) free(matrix[i]);
free(matrix);`
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
          content: "A **`union`** is a user-defined type where **all members share the same memory location**. Only one member holds a valid value at any given time. The union's size equals the size of its **largest member**.\n\n**Real-world use**: Unions are used in embedded systems, network protocol parsing, and type-punning (interpreting the same bytes as different types).",
          code: `union Data {
    int i;    // 4 bytes
    float f;  // 4 bytes
    char c;   // 1 byte
};
// sizeof(union Data) = 4 (the largest member)

union Data d;
d.i = 42;  // Use it as an int
printf("%d\\n", d.i); // 42

d.f = 3.14f; // Now use as float - overwrites d.i!
printf("%.2f\\n", d.f); // 3.14
// printf("%d", d.i); // INVALID: d.i is now corrupted`
        },
        {
          id: "s19-2",
          heading: "Bitwise Operators — Complete Reference",
          type: "concept",
          content: "Bitwise operators work on individual **bits** (0s and 1s) of integer values. They are extremely fast and used in performance-critical code, hardware control, and cryptography.",
          table: {
            headers: ["Operator", "Name", "Rule", "Example (a=5=0101, b=3=0011)"],
            rows: [
              ["&", "AND", "1 only if BOTH bits are 1", "5 & 3 = 0001 = 1"],
              ["|", "OR", "1 if EITHER bit is 1", "5 | 3 = 0111 = 7"],
              ["^", "XOR", "1 if bits are DIFFERENT", "5 ^ 3 = 0110 = 6"],
              ["~", "NOT", "Inverts all bits", "~5 = ...11111010 = -6 (two's complement)"],
              ["<<", "Left Shift", "Shifts bits left, fills with 0 (× 2^n)", "5 << 1 = 1010 = 10"],
              [">>", "Right Shift", "Shifts bits right (÷ 2^n)", "5 >> 1 = 0010 = 2"]
            ]
          }
        },
        {
          id: "s19-3",
          heading: "Bit-Level Trace: AND, OR, XOR",
          type: "syntax",
          content: "To understand bitwise operations, align the bits and apply the rule column by column:",
          code: `//  a = 5  ->  0 1 0 1
//  b = 3  ->  0 0 1 1

// AND (&): 1 only if BOTH are 1
//          0 0 0 1  = 1
printf("%d\\n", 5 & 3); // 1

// OR (|): 1 if EITHER is 1
//         0 1 1 1  = 7
printf("%d\\n", 5 | 3); // 7

// XOR (^): 1 if they are DIFFERENT
//          0 1 1 0  = 6
printf("%d\\n", 5 ^ 3); // 6`
        },
        {
          id: "s19-4",
          heading: "Practical Bit Manipulation Tricks",
          type: "concept",
          content: "Bitwise operators enable elegant, high-performance tricks:",
          table: {
            headers: ["Task", "Code", "Why it works"],
            rows: [
              ["Check if even/odd", "n & 1  (0=even, 1=odd)", "Last bit is 0 for even, 1 for odd"],
              ["Multiply by 2^k", "n << k", "Left shift moves bits left = multiplying"],
              ["Divide by 2^k", "n >> k", "Right shift moves bits right = dividing"],
              ["Swap without temp", "a^=b; b^=a; a^=b;", "XOR trick - each pair cancels out"],
              ["Set bit k", "n | (1 << k)", "OR with a mask that has only bit k set"],
              ["Clear bit k", "n & ~(1 << k)", "AND with mask that has bit k as 0"]
            ]
          },
          code: `int n = 6; // 0110

// Check even/odd without %:
if (n & 1) printf("Odd\\n"); else printf("Even\\n"); // Even

// Power-of-2 multiply/divide:
printf("%d\\n", n << 2); // 6 * 4 = 24
printf("%d\\n", n >> 1); // 6 / 2 = 3

// Swap without temp variable:
int a = 5, b = 9;
a ^= b; b ^= a; a ^= b;
printf("%d %d\\n", a, b); // 9 5`
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
  }
];
