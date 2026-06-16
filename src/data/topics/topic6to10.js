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
          heading: "The while Loop",
          type: "syntax",
          content: "The `while` loop evaluates a condition before executing the code block. It is best used when you don't know exactly how many times the loop should run.",
          code: `int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++; // Remember to update the variable!
}`
        },
        {
          id: "s6-2",
          heading: "Infinite Loops",
          type: "concept",
          content: "If the condition in a while loop never becomes false, the loop will run forever. This is often caused by forgetting to update the loop variable.",
          code: `int i = 1;
while (i <= 5) {
    printf("%d ", i);
    // Missing i++; -> Infinite loop!
}`
        },
        {
          id: "s6-3",
          heading: "The do-while Loop",
          type: "syntax",
          content: "The `do-while` loop executes the code block FIRST, and then checks the condition. This guarantees the loop runs at least once.",
          code: `int choice;
do {
    printf("1. Play\\n2. Exit\\nEnter choice: ");
    scanf("%d", &choice);
} while (choice != 2);`
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
          heading: "The break Statement",
          type: "syntax",
          content: "The `break` statement immediately terminates the loop (or switch statement) it is inside.",
          code: `for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break; // Loop stops when i is 5
    }
    printf("%d ", i);
}
// Output: 1 2 3 4`
        },
        {
          id: "s7-2",
          heading: "The continue Statement",
          type: "syntax",
          content: "The `continue` statement skips the rest of the code in the current iteration and jumps to the next iteration of the loop.",
          code: `for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue; // Skips 3
    }
    printf("%d ", i);
}
// Output: 1 2 4 5`
        },
        {
          id: "s7-3",
          heading: "The goto Statement",
          type: "concept",
          content: "The `goto` statement jumps to a specific label in the code. Its use is generally discouraged as it makes code hard to read (spaghetti code), but it can be useful for breaking out of deeply nested loops.",
          code: `int i = 0;
start: // Label
    printf("%d ", i);
    i++;
    if (i < 5) goto start;`
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
          heading: "What is an Array?",
          type: "definition",
          content: "An array is a collection of variables of the same type stored sequentially in memory.",
        },
        {
          id: "s8-2",
          heading: "Declaration and Initialization",
          type: "syntax",
          content: "Specify the type, name, and size in brackets.",
          code: `int marks[5]; // Declares an array of 5 integers
int scores[] = {90, 85, 78}; // Size is automatically 3`
        },
        {
          id: "s8-3",
          heading: "Accessing Elements",
          type: "concept",
          content: "Array indices start at 0. The first element is at index 0, the last is at index size-1.",
          code: `int scores[3] = {90, 85, 78};
printf("%d", scores[0]); // Prints 90
scores[1] = 88; // Modifies the second element`
        },
        {
          id: "s8-4",
          heading: "Traversing Arrays",
          type: "example",
          content: "Use a for loop to iterate through an array.",
          code: `int arr[5] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
}`
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
          heading: "Nested Loops Basics",
          type: "definition",
          content: "A nested loop is a loop inside the body of another loop. The inner loop completes all its iterations for each single iteration of the outer loop.",
        },
        {
          id: "s9-2",
          heading: "Execution Flow",
          type: "syntax",
          content: "If the outer loop runs N times and inner loop runs M times, the inner loop's body executes N x M times.",
          code: `for (int i = 1; i <= 3; i++) {       // Outer loop (Rows)
    for (int j = 1; j <= 3; j++) {   // Inner loop (Cols)
        printf("* ");
    }
    printf("\\n");
}`
        },
        {
          id: "s9-3",
          heading: "Printing Patterns",
          type: "concept",
          content: "When printing patterns, the outer loop typically controls the rows, while the inner loop controls the columns (what gets printed on each row).",
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
          content: "A 2D array is an array of arrays, visualised as a table with rows and columns.",
        },
        {
          id: "s10-2",
          heading: "Declaration and Initialization",
          type: "syntax",
          content: "Specify the number of rows and columns.",
          code: `int matrix[2][3] = {
    {1, 2, 3}, // Row 0
    {4, 5, 6}  // Row 1
};`
        },
        {
          id: "s10-3",
          heading: "Traversing a 2D Array",
          type: "example",
          content: "Use nested loops to iterate over rows and columns.",
          code: `for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\\n");
}`
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
