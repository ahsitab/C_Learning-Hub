export const topic6to10 = [
  {
    id: "topic-6",
    slug: "while-do-while",
    title: "while & do-while Loops",
    shortTitle: "while & do-while",
    icon: "🔄",
    color: "from-teal-400 to-emerald-500",
    borderColor: "border-teal-500/30",
    glowColor: "shadow-teal-500/20",
    description: "Learn alternative loop structures that execute based on a condition rather than a strict count.",
    theory: {
      sections: [
        {
          id: "s6-1",
          heading: "Why while and do-while?",
          type: "definition",
          content: "The `for` loop is ideal when you know **exactly** how many times to iterate. But what if you don't? For example:\n- Keep reading input until the user types -1 (you don't know how many inputs).\n- Keep trying to connect to a server until it succeeds.\n\nFor these cases, `while` and `do-while` loops are the correct tools.",
        },
        {
          id: "s6-2",
          heading: "The while Loop — Check Before Execute",
          type: "syntax",
          content: "The `while` loop checks the condition **first**. If the condition is false at the very start, the body **never executes** (0 iterations).",
          flowchart: "loop",
          code: `// Syntax:
while (condition) {
    // Body: executes as long as condition is true
}

// Example: Print 1 to 5
int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++; // CRITICAL: Forget this and you get an infinite loop!
}`
        },
        {
          id: "s6-3",
          heading: "Infinite Loops — A Common Trap",
          type: "concept",
          content: "An **infinite loop** occurs when the loop condition never becomes false. This causes the program to hang. Common causes:\n- Forgetting to update the loop variable (e.g., missing `i++`)\n- Using assignment (`=`) instead of comparison (`==`) in the condition\n- Logic error in the condition itself",
          code: `// DANGER: Missing i++ - Runs forever!
int i = 1;
while (i <= 5) {
    printf("%d ", i);
    // i++ is missing!
}

// INTENTIONAL infinite loop (with a break to exit):
while (1) { // '1' is always true
    char cmd[50];
    scanf("%s", cmd);
    if (strcmp(cmd, "quit") == 0) break;
    // process cmd...
}`
        },
        {
          id: "s6-4",
          heading: "The do-while Loop — Execute Before Check",
          type: "syntax",
          content: "The `do-while` loop executes the body **first**, then checks the condition. This **guarantees at least one execution**.\n\nThe most common use case is a **menu-driven program** where you always want to show the menu at least once.",
          code: `// Syntax:
do {
    // Body: executes FIRST, then condition is checked
} while (condition); // Note the semicolon!

// Classic Use: Input Validation Menu
int choice;
do {
    printf("1. Play  2. Settings  3. Exit\\n");
    printf("Your choice: ");
    scanf("%d", &choice);
} while (choice != 3); // Keep showing menu until user exits`
        },
        {
          id: "s6-5",
          heading: "Comparison: for vs while vs do-while",
          type: "concept",
          content: "All three loops can solve the same problems, but each has its ideal use case:",
          table: {
            headers: ["Loop", "Best Used When", "Minimum Iterations", "Condition Checked"],
            rows: [
              ["for", "Number of iterations is known", "0 (condition checked first)", "Before each iteration"],
              ["while", "Number of iterations is unknown", "0 (condition checked first)", "Before each iteration"],
              ["do-while", "Body must run at least once", "1 (body runs first)", "After each iteration"]
            ]
          }
        }
      ]
    },
    problems: [
      {
        id: "p6-1",
        title: "Print Digits of a Number",
        difficulty: "Easy",
        statement: "Given an integer, print each of its digits starting from the last digit.",
        inputFormat: "One integer",
        outputFormat: "Digits printed separated by spaces",
        constraints: "Number > 0",
        logic: [
          "Use a while loop (n > 0).",
          "Extract last digit using n % 10.",
          "Remove last digit using n = n / 10."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    while (n > 0) {\n        printf("%d ", n % 10);\n        n /= 10;\n    }\n    return 0;\n}`,
        sampleInput: "1234",
        sampleOutput: "4 3 2 1",
        timeComplexity: "O(log10(n))"
      },
      {
        id: "p6-2",
        title: "Sum of Digits",
        difficulty: "Easy",
        statement: "Calculate the sum of all digits of a given number.",
        inputFormat: "One integer",
        outputFormat: "The sum of its digits",
        constraints: "Number > 0",
        logic: [
          "Extract each digit using modulo 10 and add to sum.",
          "Divide by 10 to move to the next digit."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, sum = 0;\n    scanf("%d", &n);\n    while (n > 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    printf("%d\\n", sum);\n    return 0;\n}`,
        sampleInput: "456",
        sampleOutput: "15",
        timeComplexity: "O(log10(n))"
      },
      {
        id: "p6-3",
        title: "Reverse a Number",
        difficulty: "Medium",
        statement: "Reverse the digits of a given integer.",
        inputFormat: "One integer",
        outputFormat: "Reversed integer",
        constraints: "Number > 0",
        logic: [
          "Initialize rev = 0.",
          "In a while loop, rev = rev * 10 + (n % 10).",
          "n /= 10."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, rev = 0;\n    scanf("%d", &n);\n    while (n > 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    printf("%d\\n", rev);\n    return 0;\n}`,
        sampleInput: "987",
        sampleOutput: "789",
        timeComplexity: "O(log10(n))"
      },
      {
        id: "p6-4",
        title: "Palindrome Number Check",
        difficulty: "Medium",
        statement: "Check if a number is a palindrome (reads the same forwards and backwards).",
        inputFormat: "One integer",
        outputFormat: "'Palindrome' or 'Not Palindrome'",
        constraints: "Number > 0",
        logic: [
          "Store original number.",
          "Reverse the number using while loop.",
          "Compare reversed with original."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, original, rev = 0;\n    scanf("%d", &n);\n    original = n;\n    while (n > 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    if (original == rev) printf("Palindrome\\n");\n    else printf("Not Palindrome\\n");\n    return 0;\n}`,
        sampleInput: "121",
        sampleOutput: "Palindrome",
        timeComplexity: "O(log10(n))"
      },
      {
        id: "p6-5",
        title: "Input Validation with do-while",
        difficulty: "Hard",
        statement: "Write a program that repeatedly asks the user for a positive number. If they enter a negative number or zero, ask again.",
        inputFormat: "A sequence of integers",
        outputFormat: "'Valid input accepted' when a positive number is entered.",
        constraints: "Use do-while loop",
        logic: [
          "Use a do-while loop to read input.",
          "Condition: while (n <= 0)."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    do {\n        scanf("%d", &n);\n    } while (n <= 0);\n    printf("Valid input accepted\\n");\n    return 0;\n}`,
        sampleInput: "-5\n0\n10",
        sampleOutput: "Valid input accepted",
        timeComplexity: "O(1)"
      }
    ]
  },
  {
    id: "topic-7",
    slug: "jump-statements",
    title: "Jump Statements",
    shortTitle: "Jump Statements",
    icon: "⏭️",
    color: "from-cyan-400 to-blue-500",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/20",
    description: "Control the flow of loops and programs using break, continue, and goto statements.",
    theory: {
      sections: [
        {
          id: "s7-1",
          heading: "Why Jump Statements?",
          type: "definition",
          content: "Normal loops run from start to finish for every iteration. But sometimes you need to **break out early** (e.g., you found the answer) or **skip to the next iteration** (e.g., skip invalid data). C provides three jump statements for this: `break`, `continue`, and `goto`.",
        },
        {
          id: "s7-2",
          heading: "The break Statement",
          type: "syntax",
          content: "The `break` statement **immediately terminates** the innermost enclosing loop or `switch` statement. Execution continues at the statement immediately following the loop. It is essential for **early exit** when a condition is met.",
          code: `// Find the first number divisible by 7
for (int i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        printf("First divisible by 7: %d\\n", i); // 7
        break; // Stops the loop immediately, don't check i=8,9,...
    }
}

// In nested loops, break only exits the INNERMOST loop:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) break; // Exits inner loop only
        printf("%d,%d ", i, j);
    }
}`
        },
        {
          id: "s7-3",
          heading: "The continue Statement",
          type: "syntax",
          content: "The `continue` statement **skips the rest of the current iteration** and jumps to the next iteration. The loop itself continues. It is used to **filter out** unwanted values.",
          code: `// Print numbers 1-10, but skip multiples of 3
for (int i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        continue; // Skip this iteration, go to i++
    }
    printf("%d ", i);
}
// Output: 1 2 4 5 7 8 10

// In a while loop, continue jumps back to the condition check:
int i = 0;
while (i < 10) {
    i++;
    if (i % 2 == 0) continue; // Skip even numbers
    printf("%d ", i);
}
// Output: 1 3 5 7 9`
        },
        {
          id: "s7-4",
          heading: "break vs continue — The Key Difference",
          type: "concept",
          content: "It's easy to confuse `break` and `continue`. Here's a side-by-side comparison:",
          table: {
            headers: ["Statement", "What it does", "Loop continues?", "Analogy"],
            rows: [
              ["break", "Exits the entire loop immediately", "No", "Emergency stop button"],
              ["continue", "Skips the current iteration only", "Yes", "Skip this chapter, read the next"]
            ]
          }
        },
        {
          id: "s7-5",
          heading: "The goto Statement",
          type: "concept",
          content: "The `goto` statement unconditionally jumps to a labeled statement in the same function. While generally **discouraged** because it creates 'spaghetti code' that's hard to debug, it has one legitimate use: breaking out of multiple levels of deeply nested loops.",
          code: `// Not recommended (bad practice):
int i = 0;
start:
    printf("%d ", i);
    i++;
    if (i < 5) goto start;

// Legitimate use: Breaking out of nested loops
for (int i = 0; i < 10; i++) {
    for (int j = 0; j < 10; j++) {
        if (i * j > 30) goto done; // Exit BOTH loops at once
        printf("%d ", i * j);
    }
}
done:
    printf("Done!\\n");`
        }
      ]
    },
    problems: [
      {
        id: "p7-1",
        title: "Stop on Negative Input",
        difficulty: "Easy",
        statement: "Continuously read numbers from the user. Stop reading and exit the loop when a negative number is entered using break.",
        inputFormat: "Sequence of integers",
        outputFormat: "Print each number until negative",
        constraints: "Use an infinite loop with break",
        logic: [
          "while (1) { read n; if n < 0 break; print n; }"
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    while (1) {\n        scanf("%d", &n);\n        if (n < 0) break;\n        printf("%d ", n);\n    }\n    return 0;\n}`,
        sampleInput: "5 10 15 -1",
        sampleOutput: "5 10 15",
        timeComplexity: "O(1)"
      },
      {
        id: "p7-2",
        title: "Skip Multiples of 3",
        difficulty: "Easy",
        statement: "Print numbers from 1 to N, but skip numbers that are multiples of 3 using continue.",
        inputFormat: "One integer N",
        outputFormat: "Numbers from 1 to N, skipping multiples of 3",
        constraints: "N > 0",
        logic: [
          "Loop i from 1 to N.",
          "if (i % 3 == 0) continue;",
          "printf i."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        if (i % 3 == 0) continue;\n        printf("%d ", i);\n    }\n    return 0;\n}`,
        sampleInput: "7",
        sampleOutput: "1 2 4 5 7",
        timeComplexity: "O(N)"
      },
      {
        id: "p7-3",
        title: "Find First Divisible",
        difficulty: "Medium",
        statement: "Find the first number between 1 and N that is divisible by both 7 and 9. Use break to exit early once found.",
        inputFormat: "One integer N",
        outputFormat: "The number, or 'None' if not found",
        constraints: "N > 0",
        logic: [
          "Loop 1 to N.",
          "Check divisibility by 7 and 9.",
          "If true, print and break."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, found = 0;\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        if (i % 7 == 0 && i % 9 == 0) {\n            printf("%d\\n", i);\n            found = 1;\n            break;\n        }\n    }\n    if (!found) printf("None\\n");\n    return 0;\n}`,
        sampleInput: "100",
        sampleOutput: "63",
        timeComplexity: "O(N)"
      },
      {
        id: "p7-4",
        title: "Prime Check with Break",
        difficulty: "Medium",
        statement: "Check if a number is prime. Optimize by using break as soon as a divisor is found.",
        inputFormat: "One integer",
        outputFormat: "'Prime' or 'Not Prime'",
        constraints: "N > 1",
        logic: [
          "Loop from 2 to N/2.",
          "If n % i == 0, mark as not prime and break."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, isPrime = 1;\n    scanf("%d", &n);\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            isPrime = 0;\n            break;\n        }\n    }\n    if (isPrime && n > 1) printf("Prime\\n");\n    else printf("Not Prime\\n");\n    return 0;\n}`,
        sampleInput: "13",
        sampleOutput: "Prime",
        timeComplexity: "O(sqrt(N))"
      },
      {
        id: "p7-5",
        title: "Goto Simulation",
        difficulty: "Hard",
        statement: "Write a program that uses `goto` to simulate a while loop counting from 1 to 5.",
        inputFormat: "None",
        outputFormat: "1 2 3 4 5",
        constraints: "Must use goto",
        logic: [
          "Declare i=1.",
          "Label start: print i, increment i.",
          "If i <= 5 goto start."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int i = 1;\nstart:\n    printf("%d ", i);\n    i++;\n    if (i <= 5) goto start;\n    return 0;\n}`,
        sampleInput: "None",
        sampleOutput: "1 2 3 4 5",
        timeComplexity: "O(1)"
      }
    ]
  },
  {
    id: "topic-8",
    slug: "1d-arrays",
    title: "One-Dimensional Arrays",
    shortTitle: "1D Arrays",
    icon: "📋",
    color: "from-blue-600 to-indigo-600",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    description: "Store multiple elements of the same data type in contiguous memory locations.",
    theory: {
      sections: [
        {
          id: "s8-1",
          heading: "The Problem Arrays Solve",
          type: "definition",
          content: "Suppose you need to store marks for 100 students. Without arrays, you'd need 100 separate variables: `marks1`, `marks2`, ..., `marks100`. That's unmanageable!\n\nAn **array** stores multiple values of the **same data type** in a **contiguous (adjacent) block of memory**, accessible via a single variable name and an index.",
        },
        {
          id: "s8-2",
          heading: "Array Memory Layout",
          type: "concept",
          content: "When you declare `int arr[5]`, the OS allocates 5 × 4 = **20 consecutive bytes** in RAM. Each element is stored right after the previous one:",
          table: {
            headers: ["Index", "arr[0]", "arr[1]", "arr[2]", "arr[3]", "arr[4]"],
            rows: [
              ["Value", "10", "20", "30", "40", "50"],
              ["Address (example)", "1000", "1004", "1008", "1012", "1016"]
            ]
          }
        },
        {
          id: "s8-3",
          heading: "Declaration & Initialization",
          type: "syntax",
          content: "You can declare an array with or without initial values. When size is omitted with initialization, the compiler counts the elements.",
          code: `// Method 1: Declare first, assign later
int marks[5]; // 5 uninitialized integers (garbage values!)
marks[0] = 90;
marks[1] = 85;

// Method 2: Initialize during declaration
int scores[5] = {90, 85, 78, 92, 88};

// Method 3: Partial initialization (rest are set to 0)
int arr[5] = {1, 2}; // = {1, 2, 0, 0, 0}

// Method 4: Auto-size (compiler determines size = 3)
int vals[] = {100, 200, 300};

// Initialize all to zero:
int zeros[100] = {0};`
        },
        {
          id: "s8-4",
          heading: "Accessing & Modifying Elements",
          type: "syntax",
          content: "Array elements are accessed using a **zero-based index** (0 to size-1). Accessing outside this range causes **undefined behavior** (a very dangerous bug called 'buffer overflow').",
          code: `int arr[5] = {10, 20, 30, 40, 50};

printf("%d\\n", arr[0]); // 10 (first element)
printf("%d\\n", arr[4]); // 50 (last element)

arr[2] = 99; // Modify the third element

// DANGER: arr[5] is out of bounds (valid indices: 0 to 4)
// printf("%d", arr[5]); // Undefined Behavior!`
        },
        {
          id: "s8-5",
          heading: "Traversing Arrays with Loops",
          type: "example",
          content: "The most common array operation is iterating over all elements using a `for` loop. The key rule: **loop from index 0 to N-1** (where N is the array size).",
          code: `int arr[5] = {1, 2, 3, 4, 5};
int n = 5;

// Traverse (read all elements)
for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
}

// Find sum and max in a single pass
int sum = 0, max = arr[0];
for (int i = 0; i < n; i++) {
    sum += arr[i];
    if (arr[i] > max) max = arr[i];
}
printf("Sum: %d, Max: %d\\n", sum, max);`
        }
      ]
    },
    problems: [
      {
        id: "p8-1",
        title: "Print Array Elements",
        difficulty: "Easy",
        statement: "Read N integers into an array and print them.",
        inputFormat: "First line: N. Second line: N integers.",
        outputFormat: "The integers separated by space.",
        constraints: "1 <= N <= 100",
        logic: [
          "Declare array of size N.",
          "Use loop to scanf.",
          "Use loop to printf."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`,
        sampleInput: "3\n10 20 30",
        sampleOutput: "10 20 30",
        timeComplexity: "O(N)"
      },
      {
        id: "p8-2",
        title: "Sum of Array Elements",
        difficulty: "Easy",
        statement: "Calculate the sum of all elements in an array.",
        inputFormat: "N followed by N integers",
        outputFormat: "The sum",
        constraints: "1 <= N <= 100",
        logic: [
          "Loop through array and accumulate sum."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, sum = 0;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i=0; i<n; i++) {\n        scanf("%d", &arr[i]);\n        sum += arr[i];\n    }\n    printf("%d\\n", sum);\n    return 0;\n}`,
        sampleInput: "4\n5 10 15 20",
        sampleOutput: "50",
        timeComplexity: "O(N)"
      },
      {
        id: "p8-3",
        title: "Find Maximum Element",
        difficulty: "Medium",
        statement: "Find the maximum value in an array.",
        inputFormat: "N followed by N integers",
        outputFormat: "The max value",
        constraints: "N > 0",
        logic: [
          "Assume first element is max.",
          "Iterate and update max if current element > max."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    int max = arr[0];\n    for(int i=1; i<n; i++) {\n        if (arr[i] > max) max = arr[i];\n    }\n    printf("%d\\n", max);\n    return 0;\n}`,
        sampleInput: "5\n1 9 4 7 2",
        sampleOutput: "9",
        timeComplexity: "O(N)"
      },
      {
        id: "p8-4",
        title: "Search Element (Linear Search)",
        difficulty: "Medium",
        statement: "Search for an element X in an array. Print 'Found' if it exists, else 'Not Found'.",
        inputFormat: "N, then N integers, then X",
        outputFormat: "'Found' or 'Not Found'",
        constraints: "N > 0",
        logic: [
          "Loop through array.",
          "If arr[i] == x, set found flag and break."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, x, found = 0;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    scanf("%d", &x);\n    for(int i=0; i<n; i++) {\n        if (arr[i] == x) { found = 1; break; }\n    }\n    if (found) printf("Found\\n");\n    else printf("Not Found\\n");\n    return 0;\n}`,
        sampleInput: "4\n10 20 30 40\n30",
        sampleOutput: "Found",
        timeComplexity: "O(N)"
      },
      {
        id: "p8-5",
        title: "Reverse Array",
        difficulty: "Hard",
        statement: "Reverse the elements of an array in-place (without creating a second array) and print it.",
        inputFormat: "N followed by N integers",
        outputFormat: "Reversed array",
        constraints: "Do not create another array",
        logic: [
          "Use two pointers, left = 0 and right = n-1.",
          "Swap arr[left] and arr[right].",
          "Increment left, decrement right until left >= right."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i=0; i<n; i++) scanf("%d", &arr[i]);\n    int left = 0, right = n-1, temp;\n    while (left < right) {\n        temp = arr[left];\n        arr[left] = arr[right];\n        arr[right] = temp;\n        left++; right--;\n    }\n    for(int i=0; i<n; i++) printf("%d ", arr[i]);\n    return 0;\n}`,
        sampleInput: "5\n1 2 3 4 5",
        sampleOutput: "5 4 3 2 1",
        timeComplexity: "O(N/2) = O(N)"
      }
    ]
  },
  {
    id: "topic-9",
    slug: "nested-loops",
    title: "Nested Loops & Patterns",
    shortTitle: "Nested Loops",
    icon: "🕸️",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/30",
    glowColor: "shadow-pink-500/20",
    description: "Use loops inside loops to solve complex multi-dimensional problems and print patterns.",
    theory: {
      sections: [
        {
          id: "s9-1",
          heading: "What is a Nested Loop?",
          type: "definition",
          content: "A **nested loop** is a loop placed inside the body of another loop. The outer loop controls the 'rows' and the inner loop controls the 'columns'.\n\n**Key Rule**: For every ONE iteration of the outer loop, the inner loop runs through **ALL its iterations**. If the outer loop runs N times and the inner M times, the innermost body runs **N × M** times total.",
        },
        {
          id: "s9-2",
          heading: "Execution Flow Traced Step by Step",
          type: "syntax",
          content: "Let's trace exactly what happens for a 3×3 nested loop:",
          code: `for (int i = 1; i <= 3; i++) {       // Outer (Rows)
    for (int j = 1; j <= 3; j++) {   // Inner (Columns)
        printf("(%d,%d) ", i, j);
    }
    printf("\\n"); // New line after each row
}
// Trace:
// i=1: j runs 1,2,3 -> (1,1) (1,2) (1,3)
// i=2: j runs 1,2,3 -> (2,1) (2,2) (2,3)
// i=3: j runs 1,2,3 -> (3,1) (3,2) (3,3)
// Total inner loop body executions: 3 × 3 = 9`
        },
        {
          id: "s9-3",
          heading: "Pattern Printing Strategy",
          type: "concept",
          content: "Nested loops are the classic tool for printing patterns. Follow this systematic approach to solve ANY pattern:",
          table: {
            headers: ["Step", "Question to Ask", "Example (Right Triangle, N=4)"],
            rows: [
              ["1", "How many rows?", "N rows"],
              ["2", "What does each row look like?", "Row i has i stars"],
              ["3", "Outer loop controls:", "i from 1 to N (rows)"],
              ["4", "Inner loop controls:", "j from 1 to i (stars per row)"],
              ["5", "After each row:", "printf('\\n') to go to next line"]
            ]
          },
          code: `// Right Triangle Pattern (N=4):
for (int i = 1; i <= 4; i++) {      // Each row
    for (int j = 1; j <= i; j++) { // Stars on this row
        printf("* ");
    }
    printf("\\n"); // Move to next row
}
// Output:
// *
// * *
// * * *
// * * * *`
        },
        {
          id: "s9-4",
          heading: "Pyramid Pattern — Adding Spaces",
          type: "example",
          content: "For a centered pyramid, each row needs spaces BEFORE the stars. The number of leading spaces decreases as we go down:",
          code: `// Pyramid (N=4):
for (int i = 1; i <= 4; i++) {
    // Leading spaces: N-i spaces
    for (int s = 1; s <= 4 - i; s++) printf("  ");
    // Stars: 2*i - 1 stars
    for (int j = 1; j <= 2 * i - 1; j++) printf("* ");
    printf("\\n");
}
// Row 1: 3 spaces, 1 star
// Row 2: 2 spaces, 3 stars
// Row 3: 1 space, 5 stars
// Row 4: 0 spaces, 7 stars`
        }
      ]
    },
    problems: [
      {
        id: "p9-1",
        title: "Square Pattern",
        difficulty: "Easy",
        statement: "Print a square pattern of size N x N using stars.",
        inputFormat: "One integer N",
        outputFormat: "N lines, each with N stars",
        constraints: "N > 0",
        logic: [
          "Outer loop i from 1 to N.",
          "Inner loop j from 1 to N. Print '* '",
          "Print newline after inner loop."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for(int i=0; i<n; i++) {\n        for(int j=0; j<n; j++) {\n            printf("* ");\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "3",
        sampleOutput: "* * * \n* * * \n* * * ",
        timeComplexity: "O(N^2)"
      },
      {
        id: "p9-2",
        title: "Right Triangle Pattern",
        difficulty: "Easy",
        statement: "Print a right-angled triangle pattern of height N.",
        inputFormat: "One integer N",
        outputFormat: "N lines of stars, increasing from 1 to N",
        constraints: "N > 0",
        logic: [
          "Outer loop i from 1 to N.",
          "Inner loop j from 1 to i."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=i; j++) {\n            printf("* ");\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "4",
        sampleOutput: "* \n* * \n* * * \n* * * * ",
        timeComplexity: "O(N^2)"
      },
      {
        id: "p9-3",
        title: "Inverted Triangle",
        difficulty: "Medium",
        statement: "Print an inverted right-angled triangle of height N.",
        inputFormat: "One integer N",
        outputFormat: "N lines, decreasing from N to 1",
        constraints: "N > 0",
        logic: [
          "Outer loop i from N down to 1.",
          "Inner loop j from 1 to i."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for(int i=n; i>=1; i--) {\n        for(int j=1; j<=i; j++) {\n            printf("* ");\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "3",
        sampleOutput: "* * * \n* * \n* ",
        timeComplexity: "O(N^2)"
      },
      {
        id: "p9-4",
        title: "Number Pattern",
        difficulty: "Medium",
        statement: "Print a right-angled triangle where each row i contains the number i, repeated i times.",
        inputFormat: "One integer N",
        outputFormat: "N lines pattern",
        constraints: "N > 0",
        logic: [
          "Outer loop i from 1 to N.",
          "Inner loop j from 1 to i, print i."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for(int i=1; i<=n; i++) {\n        for(int j=1; j<=i; j++) {\n            printf("%d ", i);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "4",
        sampleOutput: "1 \n2 2 \n3 3 3 \n4 4 4 4 ",
        timeComplexity: "O(N^2)"
      },
      {
        id: "p9-5",
        title: "Pyramid Pattern",
        difficulty: "Hard",
        statement: "Print a centered pyramid of height N using stars.",
        inputFormat: "One integer N",
        outputFormat: "N lines, centered pyramid",
        constraints: "N > 0",
        logic: [
          "Outer loop i from 1 to N.",
          "Inner loop 1 for spaces: N - i times.",
          "Inner loop 2 for stars: 2 * i - 1 times."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    for(int i=1; i<=n; i++) {\n        for(int s=1; s<=n-i; s++) printf("  ");\n        for(int j=1; j<=(2*i-1); j++) printf("* ");\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "3",
        sampleOutput: "    * \n  * * * \n* * * * * ",
        timeComplexity: "O(N^2)"
      }
    ]
  },
  {
    id: "topic-10",
    slug: "2d-arrays",
    title: "Two-Dimensional Arrays & Matrices",
    shortTitle: "2D Arrays",
    icon: "🔲",
    color: "from-indigo-400 to-purple-500",
    borderColor: "border-indigo-500/30",
    glowColor: "shadow-indigo-500/20",
    description: "Store data in a grid/matrix format and perform operations like matrix addition and multiplication.",
    theory: {
      sections: [
        {
          id: "s10-1",
          heading: "What is a 2D Array?",
          type: "definition",
          content: "A **2D array** is an array of arrays — visualized as a **table (matrix) with rows and columns**. It is perfect for representing grids, game boards, spreadsheets, and mathematical matrices.\n\nMemory-wise, even though we visualize it as 2D, the data is stored in a single **linear block** in RAM, with rows placed one after another (row-major order).",
        },
        {
          id: "s10-2",
          heading: "Memory Layout (Row-Major Order)",
          type: "concept",
          content: "For `int mat[2][3]`, C stores the elements as follows in memory:",
          table: {
            headers: ["Element", "mat[0][0]", "mat[0][1]", "mat[0][2]", "mat[1][0]", "mat[1][1]", "mat[1][2]"],
            rows: [
              ["Value", "1", "2", "3", "4", "5", "6"],
              ["Address", "1000", "1004", "1008", "1012", "1016", "1020"]
            ]
          }
        },
        {
          id: "s10-3",
          heading: "Declaration & Initialization",
          type: "syntax",
          content: "The declaration specifies [rows][columns]. The first dimension can sometimes be omitted if initialized.",
          code: `// Declare a 2×3 matrix (2 rows, 3 columns)
int mat[2][3];

// Initialize during declaration (rows in {})
int matrix[2][3] = {
    {1, 2, 3},  // Row 0
    {4, 5, 6}   // Row 1
};

// Access using [row][column]
printf("%d", matrix[0][2]); // 3 (row 0, column 2)
printf("%d", matrix[1][0]); // 4 (row 1, column 0)`
        },
        {
          id: "s10-4",
          heading: "Traversing with Nested Loops",
          type: "example",
          content: "The standard way to process a 2D array is with **two nested for loops**: outer loop for rows (`i`), inner loop for columns (`j`).",
          code: `int mat[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Print in matrix format
for (int i = 0; i < 3; i++) {       // Each row
    for (int j = 0; j < 3; j++) {   // Each column in that row
        printf("%3d ", mat[i][j]);   // %3d pads to 3 chars wide
    }
    printf("\\n"); // Newline after each row
}`
        },
        {
          id: "s10-5",
          heading: "Key Matrix Operations",
          type: "concept",
          content: "Many important algorithms work on 2D arrays:",
          table: {
            headers: ["Operation", "Key Idea", "Time Complexity"],
            rows: [
              ["Print Matrix", "Loop i (rows), j (cols), printf mat[i][j]", "O(N×M)"],
              ["Sum All Elements", "Accumulate mat[i][j] for all i,j", "O(N×M)"],
              ["Matrix Addition", "result[i][j] = A[i][j] + B[i][j]", "O(N×M)"],
              ["Transpose", "result[j][i] = mat[i][j] (swap row/col)", "O(N×M)"],
              ["Matrix Multiplication", "result[i][j] = sum of A[i][k]*B[k][j] for all k", "O(N³)"]
            ]
          }
        }
      ]
    },
    problems: [
      {
        id: "p10-1",
        title: "Read and Print Matrix",
        difficulty: "Easy",
        statement: "Read an N x M matrix and print it.",
        inputFormat: "N and M, followed by N x M elements",
        outputFormat: "The matrix",
        constraints: "N, M > 0",
        logic: [
          "Nested loops to scanf.",
          "Nested loops to printf with newline after each row."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, m;\n    scanf("%d %d", &n, &m);\n    int mat[n][m];\n    for(int i=0; i<n; i++) \n        for(int j=0; j<m; j++) scanf("%d", &mat[i][j]);\n    for(int i=0; i<n; i++) {\n        for(int j=0; j<m; j++) printf("%d ", mat[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "2 2\n1 2\n3 4",
        sampleOutput: "1 2 \n3 4 ",
        timeComplexity: "O(N*M)"
      },
      {
        id: "p10-2",
        title: "Sum of Matrix Elements",
        difficulty: "Easy",
        statement: "Calculate the total sum of all elements in a 2D array.",
        inputFormat: "N, M, and the matrix",
        outputFormat: "The sum",
        constraints: "None",
        logic: [
          "Traverse matrix and add to sum."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, m, sum = 0, x;\n    scanf("%d %d", &n, &m);\n    for(int i=0; i<n*m; i++) {\n        scanf("%d", &x);\n        sum += x;\n    }\n    printf("%d\\n", sum);\n    return 0;\n}`,
        sampleInput: "2 2\n1 1\n1 1",
        sampleOutput: "4",
        timeComplexity: "O(N*M)"
      },
      {
        id: "p10-3",
        title: "Matrix Addition",
        difficulty: "Medium",
        statement: "Add two N x M matrices and print the result.",
        inputFormat: "N, M, followed by two matrices",
        outputFormat: "Resulting matrix",
        constraints: "Dimensions must match",
        logic: [
          "Result[i][j] = A[i][j] + B[i][j]."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, m;\n    scanf("%d %d", &n, &m);\n    int a[n][m], b[n][m];\n    for(int i=0; i<n; i++) for(int j=0; j<m; j++) scanf("%d", &a[i][j]);\n    for(int i=0; i<n; i++) for(int j=0; j<m; j++) scanf("%d", &b[i][j]);\n    for(int i=0; i<n; i++) {\n        for(int j=0; j<m; j++) printf("%d ", a[i][j] + b[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "2 2\n1 2\n3 4\n5 6\n7 8",
        sampleOutput: "6 8 \n10 12 ",
        timeComplexity: "O(N*M)"
      },
      {
        id: "p10-4",
        title: "Matrix Transpose",
        difficulty: "Medium",
        statement: "Print the transpose of an N x M matrix (rows become columns).",
        inputFormat: "N, M, and the matrix",
        outputFormat: "M x N transposed matrix",
        constraints: "None",
        logic: [
          "Print matrix[j][i] with outer loop M, inner loop N."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n, m;\n    scanf("%d %d", &n, &m);\n    int mat[n][m];\n    for(int i=0; i<n; i++) for(int j=0; j<m; j++) scanf("%d", &mat[i][j]);\n    for(int j=0; j<m; j++) {\n        for(int i=0; i<n; i++) printf("%d ", mat[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "2 3\n1 2 3\n4 5 6",
        sampleOutput: "1 4 \n2 5 \n3 6 ",
        timeComplexity: "O(N*M)"
      },
      {
        id: "p10-5",
        title: "Matrix Multiplication",
        difficulty: "Hard",
        statement: "Multiply two square matrices of size N x N.",
        inputFormat: "N, followed by two N x N matrices A and B",
        outputFormat: "Resulting N x N matrix",
        constraints: "Square matrices",
        logic: [
          "Result[i][j] += A[i][k] * B[k][j] for k from 0 to N-1."
        ],
        solution: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int a[n][n], b[n][n], res[n][n];\n    for(int i=0; i<n; i++) for(int j=0; j<n; j++) scanf("%d", &a[i][j]);\n    for(int i=0; i<n; i++) for(int j=0; j<n; j++) scanf("%d", &b[i][j]);\n    for(int i=0; i<n; i++) {\n        for(int j=0; j<n; j++) {\n            res[i][j] = 0;\n            for(int k=0; k<n; k++) res[i][j] += a[i][k] * b[k][j];\n            printf("%d ", res[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
        sampleInput: "2\n1 2\n3 4\n2 0\n1 2",
        sampleOutput: "4 4 \n10 8 ",
        timeComplexity: "O(N^3)"
      }
    ]
  }
];
