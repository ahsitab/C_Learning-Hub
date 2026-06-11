// ============================================================
//  C PROGRAMMING LEARNING WEBSITE — LAB EXERCISE DATA
//  Contains complete beginner-friendly programs with explanations.
// ============================================================

export const labExercises = [
  {
    id: "ternary",
    title: "Ternary Operator Lab",
    description: "Learn how to use the ternary operator (? :) to write concise decision-making code in C.",
    problems: [
      {
        id: "ternary-1",
        title: "Find the Maximum of Two Numbers",
        statement: "Write a C program that takes two integer numbers as input and finds the maximum using the ternary operator.",
        explanation: "The ternary operator evaluates a condition: (condition) ? value_if_true : value_if_false. If the first number is greater than the second, it returns the first; otherwise, it returns the second.",
        solution: `#include <stdio.h>

int main() {
    int num1, num2, max;

    // Ask user for input
    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2);

    // Use ternary operator to find the maximum
    // Condition: (num1 > num2)
    // If true, max gets num1. If false, max gets num2.
    max = (num1 > num2) ? num1 : num2;

    printf("The maximum of %d and %d is: %d\\n", num1, num2, max);

    return 0;
}`,
        sampleInput: "Enter two integers: 15 28",
        sampleOutput: "The maximum of 15 and 28 is: 28",
        difficulty: "Easy"
      },
      {
        id: "ternary-2",
        title: "Check if a Number is Even or Odd",
        statement: "Write a C program that takes an integer as input and determines whether it is even or odd using the ternary operator.",
        explanation: "An even number is perfectly divisible by 2 (remainder is 0). We use the modulus operator (%) to check the remainder and then evaluate it inside the ternary condition.",
        solution: `#include <stdio.h>

int main() {
    int num;

    // Ask user for input
    printf("Enter an integer: ");
    scanf("%d", &num);

    // Ternary operator checks if remainder of num divided by 2 is 0
    // If (num % 2 == 0) is true, it prints "even", else it prints "odd"
    (num % 2 == 0) ? printf("%d is even.\\n", num) : printf("%d is odd.\\n", num);

    return 0;
}`,
        sampleInput: "Enter an integer: 7",
        sampleOutput: "7 is odd.",
        difficulty: "Easy"
      },
      {
        id: "ternary-3",
        title: "Find Whether a Number is Positive, Negative, or Zero",
        statement: "Write a C program to determine whether a number is positive, negative, or zero using the ternary operator.",
        explanation: "We nest two ternary operators. The outer condition checks if the number is greater than zero. If false, the inner condition checks if it is less than zero.",
        solution: `#include <stdio.h>

int main() {
    float num;

    // Ask user for input
    printf("Enter a number: ");
    scanf("%f", &num);

    // Nested ternary operator:
    // If num > 0, print positive.
    // Else, check if num < 0. If true, print negative, else print zero.
    (num > 0) ? printf("The number is Positive.\\n") 
              : ((num < 0) ? printf("The number is Negative.\\n") 
                           : printf("The number is Zero.\\n"));

    return 0;
}`,
        sampleInput: "Enter a number: -12.5",
        sampleOutput: "The number is Negative.",
        difficulty: "Medium"
      },
      {
        id: "ternary-4",
        title: "Find the Minimum of Three Numbers",
        statement: "Write a C program to find the smallest of three numbers using the ternary operator.",
        explanation: "We compare the first two numbers. If num1 is smaller, we compare num1 with num3. If num2 is smaller, we compare num2 with num3. This requires nesting ternary expressions.",
        solution: `#include <stdio.h>

int main() {
    int num1, num2, num3, min;

    // Ask user for three numbers
    printf("Enter three integers: ");
    scanf("%d %d %d", &num1, &num2, &num3);

    // Nested ternary operator:
    // Check if num1 is less than num2.
    // If true, find the smaller of num1 and num3.
    // If false, find the smaller of num2 and num3.
    min = (num1 < num2) ? ((num1 < num3) ? num1 : num3) 
                        : ((num2 < num3) ? num2 : num3);

    printf("The minimum number among %d, %d, and %d is: %d\\n", num1, num2, num3, min);

    return 0;
}`,
        sampleInput: "Enter three integers: 45 12 78",
        sampleOutput: "The minimum number among 45, 12, and 78 is: 12",
        difficulty: "Medium"
      },
      {
        id: "ternary-5",
        title: "Check if a Year is a Leap Year",
        statement: "Write a C program that determines whether a given year is a leap year using the ternary operator.",
        explanation: "A year is leap if it is divisible by 4 and not divisible by 100, or if it is divisible by 400. We combine these conditions using logical AND (&&) and logical OR (||) inside the ternary operator.",
        solution: `#include <stdio.h>

int main() {
    int year;

    // Ask user for a year
    printf("Enter a year: ");
    scanf("%d", &year);

    // A year is a leap year if:
    // 1. It is divisible by 4 but NOT divisible by 100, OR
    // 2. It is divisible by 400.
    ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) 
        ? printf("%d is a leap year.\\n", year) 
        : printf("%d is not a leap year.\\n", year);

    return 0;
}`,
        sampleInput: "Enter a year: 2024",
        sampleOutput: "2024 is a leap year.",
        difficulty: "Medium"
      },
      {
        id: "ternary-6",
        title: "Find the Absolute Value of a Number",
        statement: "Write a C program that takes an integer as input and prints its absolute value using the ternary operator.",
        explanation: "The absolute value of a number is its distance from zero. If it is negative, we multiply it by -1 to make it positive. Otherwise, it stays the same.",
        solution: `#include <stdio.h>

int main() {
    int num, abs_value;

    // Ask user for an integer
    printf("Enter an integer: ");
    scanf("%d", &num);

    // Ternary operator:
    // If the number is negative (num < 0), negate it (make it positive).
    // If the number is positive or zero, keep it as it is.
    abs_value = (num < 0) ? -num : num;

    printf("The absolute value of %d is: %d\\n", num, abs_value);

    return 0;
}`,
        sampleInput: "Enter an integer: -15",
        sampleOutput: "The absolute value of -15 is: 15",
        difficulty: "Easy"
      },
      {
        id: "ternary-7",
        title: "Convert a Lowercase Letter to Uppercase",
        statement: "Write a C program to convert a lowercase character to uppercase using the ternary operator.",
        explanation: "In ASCII, lowercase letters ('a' to 'z') are between 97 and 122. Subtracting 32 from a lowercase character converts it to uppercase ('A' to 'Z'). If the input character is not lowercase, it remains unchanged.",
        solution: `#include <stdio.h>

int main() {
    char ch, upper_ch;

    // Ask user for a character
    printf("Enter a character: ");
    scanf(" %c", &ch);

    // Ternary operator checks if the character is a lowercase letter.
    // Subtracting 32 from a lowercase character converts it to uppercase.
    upper_ch = (ch >= 'a' && ch <= 'z') ? (ch - 32) : ch;

    printf("Converted character: %c\\n", upper_ch);

    return 0;
}`,
        sampleInput: "Enter a character: g",
        sampleOutput: "Converted character: G",
        difficulty: "Easy"
      },
      {
        id: "ternary-8",
        title: "Determine Whether a Character is a Vowel or Consonant",
        statement: "Write a C program to determine whether a given character is a vowel or consonant using the ternary operator.",
        explanation: "Vowels are A, E, I, O, U (both lowercase and uppercase). We check if the input character matches any of these letters, printing 'vowel' if it matches, and 'consonant' otherwise.",
        solution: `#include <stdio.h>

int main() {
    char ch;

    // Ask user for a character
    printf("Enter a character: ");
    scanf(" %c", &ch);

    // Ternary checks if it matches any uppercase/lowercase vowels.
    (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
     ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') 
        ? printf("'%c' is a vowel.\\n", ch) 
        : printf("'%c' is a consonant.\\n", ch);

    return 0;
}`,
        sampleInput: "Enter a character: E",
        sampleOutput: "'E' is a vowel.",
        difficulty: "Easy"
      },
      {
        id: "ternary-9",
        title: "Find Whether a Number is Divisible by 5 and 11",
        statement: "Write a C program to check if a number is divisible by both 5 and 11 using the ternary operator.",
        explanation: "Divisibility requires that the remainder of division by both 5 and 11 is zero. We combine the two conditions using logical AND (&&).",
        solution: `#include <stdio.h>

int main() {
    int num;

    // Ask user for an integer
    printf("Enter an integer: ");
    scanf("%d", &num);

    // Check if the number is divisible by 5 AND divisible by 11.
    (num % 5 == 0 && num % 11 == 0) 
        ? printf("%d is divisible by both 5 and 11.\\n", num) 
        : printf("%d is NOT divisible by both 5 and 11.\\n", num);

    return 0;
}`,
        sampleInput: "Enter an integer: 55",
        sampleOutput: "55 is divisible by both 5 and 11.",
        difficulty: "Easy"
      },
      {
        id: "ternary-10",
        title: "Check If a Number is a Multiple of 3",
        statement: "Write a C program that takes an integer as input and determines whether it is a multiple of 3 using the ternary operator.",
        explanation: "A multiple of 3 leaves a remainder of zero when divided by 3. We check if `num % 3 == 0` evaluates to true.",
        solution: `#include <stdio.h>

int main() {
    int num;

    // Ask user for an integer
    printf("Enter an integer: ");
    scanf("%d", &num);

    // Check if the remainder when dividing by 3 is 0.
    (num % 3 == 0) 
        ? printf("%d is a multiple of 3.\\n", num) 
        : printf("%d is not a multiple of 3.\\n", num);

    return 0;
}`,
        sampleInput: "Enter an integer: 99",
        sampleOutput: "99 is a multiple of 3.",
        difficulty: "Easy"
      },
      {
        id: "ternary-11",
        title: "Check If a Character is Uppercase, Lowercase, or Neither",
        statement: "Write a C program that takes a character as input and determines whether it is an uppercase letter, a lowercase letter, or neither using the ternary operator.",
        explanation: "We compare the ASCII ranges. Uppercase is 'A' (65) to 'Z' (90), lowercase is 'a' (97) to 'z' (122). Nested ternaries handle the three possible output states.",
        solution: `#include <stdio.h>

int main() {
    char ch;

    // Ask user for a character
    printf("Enter a character: ");
    scanf(" %c", &ch);

    // Nested ternary operator:
    // First check if it is uppercase. If not, check if it is lowercase.
    (ch >= 'A' && ch <= 'Z') ? printf("'%c' is an Uppercase letter.\\n", ch) 
    : ((ch >= 'a' && ch <= 'z') ? printf("'%c' is a Lowercase letter.\\n", ch) 
                                : printf("'%c' is neither an uppercase nor a lowercase letter.\\n", ch));

    return 0;
}`,
        sampleInput: "Enter a character: 7",
        sampleOutput: "'7' is neither an uppercase nor a lowercase letter.",
        difficulty: "Medium"
      },
      {
        id: "ternary-12",
        title: "Check If a Triangle is Valid",
        statement: "Write a C program that checks if three given sides can form a valid triangle using the ternary operator.",
        explanation: "By the Triangle Inequality Theorem, a triangle is valid if the sum of any two side lengths is strictly greater than the length of the third side.",
        solution: `#include <stdio.h>

int main() {
    float side1, side2, side3;

    // Ask user for side lengths
    printf("Enter three sides of the triangle: ");
    scanf("%f %f %f", &side1, &side2, &side3);

    // A triangle is valid if the sum of any two sides is greater than the third side:
    ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) 
        ? printf("The triangle with sides %.2f, %.2f, %.2f is valid.\\n", side1, side2, side3) 
        : printf("The triangle is not valid.\\n");

    return 0;
}`,
        sampleInput: "Enter three sides of the triangle: 3 4 5",
        sampleOutput: "The triangle with sides 3.00, 4.00, 5.00 is valid.",
        difficulty: "Medium"
      }
    ]
  },
  {
    id: "if-else",
    title: "If-Else Statement Lab",
    description: "Learn how to branch execution using if, nested if-else, and else-if ladders in C.",
    problems: [
      {
        id: "ifelse-1",
        title: "Purchase Discount Expense Calculator",
        statement: "While purchasing certain items, a discount of 10% is offered if the quantity purchased is more than 1,000. If quantity and price per item are input through the keyboard, write a program to calculate the total expenses.",
        explanation: "We use a basic if-else statement to determine the discount rate. If quantity exceeds 1000, discount is 10%, otherwise it is 0%. We then compute the final total.",
        solution: `#include <stdio.h>

int main() {
    float qty, rate, total_expenses;
    float discount = 0.0;

    // Read quantity and price per item
    printf("Enter quantity purchased: ");
    scanf("%f", &qty);
    printf("Enter rate per item (TK): ");
    scanf("%f", &rate);

    // If quantity is more than 1000, offer a 10% discount
    if (qty > 1000) {
        discount = 10.0; // 10% discount
    } else {
        discount = 0.0;  // No discount
    }

    // Calculate total expenses
    // Formula: Total = (qty * rate) - (qty * rate * discount / 100)
    total_expenses = (qty * rate) - (qty * rate * discount / 100.0);

    printf("Total expenses: %.2f TK\\n", total_expenses);

    return 0;
}`,
        sampleInput: "Enter quantity purchased: 1200\nEnter rate per item (TK): 10",
        sampleOutput: "Total expenses: 1080.00 TK",
        difficulty: "Easy"
      },
      {
        id: "ifelse-2",
        title: "Determine Even or Odd",
        statement: "Write a program that takes an integer value as input and determines whether the number is even or odd. If the value is even then it outputs 'The value is even'; otherwise, it outputs 'The value is odd'.",
        explanation: "Using an if-else block, we evaluate if number % 2 is equal to 0. If it is, execution branches to the if block (even), otherwise to the else block (odd).",
        solution: `#include <stdio.h>

int main() {
    int num;

    // Read integer
    printf("Enter an integer value: ");
    scanf("%d", &num);

    // Check if divisible by 2
    if (num % 2 == 0) {
        printf("The value is even\\n");
    } else {
        printf("The value is odd\\n");
    }

    return 0;
}`,
        sampleInput: "Enter an integer value: 24",
        sampleOutput: "The value is even",
        difficulty: "Easy"
      },
      {
        id: "ifelse-3",
        title: "Calculate Employee Gross Salary",
        statement: "Compute the gross salary of an employee based on basic salary. If basic salary is less than 30,000, Housing allowance is 20% and Medical allowance is 10%. If basic salary is greater than or equal to 30,000, Housing allowance is 25% and Medical allowance is 15%. Note that multiple statements are required inside the if-else blocks.",
        explanation: "Within the if-else blocks, we set the rates and perform calculations. Gross salary is the sum of basic salary, housing allowance, and medical allowance.",
        solution: `#include <stdio.h>

int main() {
    float basic_salary, gross_salary;
    float housing_allowance_rate, medical_allowance_rate;
    float housing_allowance, medical_allowance;

    // Read basic salary
    printf("Enter basic salary of the employee: ");
    scanf("%f", &basic_salary);

    // Determine allowances based on salary boundaries
    if (basic_salary < 30000.0) {
        housing_allowance_rate = 20.0; // 20%
        medical_allowance_rate = 10.0; // 10%
    } else {
        housing_allowance_rate = 25.0; // 25%
        medical_allowance_rate = 15.0; // 15%
    }

    // Calculate allowance amounts
    housing_allowance = basic_salary * (housing_allowance_rate / 100.0);
    medical_allowance = basic_salary * (medical_allowance_rate / 100.0);

    // Calculate gross salary
    gross_salary = basic_salary + housing_allowance + medical_allowance;

    // Print details
    printf("--- Salary Breakdown ---\\n");
    printf("Basic Salary:      %.2f TK\\n", basic_salary);
    printf("Housing Allowance: %.2f TK (%.0f%%)\\n", housing_allowance, housing_allowance_rate);
    printf("Medical Allowance: %.2f TK (%.0f%%)\\n", medical_allowance, medical_allowance_rate);
    printf("------------------------\\n");
    printf("Gross Salary:      %.2f TK\\n", gross_salary);

    return 0;
}`,
        sampleInput: "Enter basic salary of the employee: 25000",
        sampleOutput: "Gross Salary:      32500.00 TK",
        difficulty: "Medium"
      },
      {
        id: "ifelse-4",
        title: "Find Maximum of Three Numbers",
        statement: "Write a program that takes three integer values as input from keyboard and shows the maximum among the three values using relational operators.",
        explanation: "We use relational operators (>=) and logical AND (&&) in an else-if ladder. The first branch tests if `a` is the largest. The second tests if `b` is. The default `else` determines `c` is the largest.",
        solution: `#include <stdio.h>

int main() {
    int a, b, c, max;

    // Input three integers
    printf("Enter three integers: ");
    scanf("%d %d %d", &a, &b, &c);

    // Find the maximum using logical operator &&
    if (a >= b && a >= c) {
        max = a;
    } else if (b >= a && b >= c) {
        max = b;
    } else {
        max = c;
    }

    printf("The maximum value is: %d\\n", max);

    return 0;
}`,
        sampleInput: "Enter three integers: 5 12 9",
        sampleOutput: "The maximum value is: 12",
        difficulty: "Easy"
      },
      {
        id: "ifelse-5",
        title: "Find Minimum of Three Numbers",
        statement: "Write a program that takes three integer values as input from keyboard and shows the minimum among the three values using relational operators.",
        explanation: "This is similar to finding the maximum, except we check if an element is less than or equal to (<=) the other two variables.",
        solution: `#include <stdio.h>

int main() {
    int a, b, c, min;

    // Input three integers
    printf("Enter three integers: ");
    scanf("%d %d %d", &a, &b, &c);

    // Find minimum
    if (a <= b && a <= c) {
        min = a;
    } else if (b <= a && b <= c) {
        min = b;
    } else {
        min = c;
    }

    printf("The minimum value is: %d\\n", min);

    return 0;
}`,
        sampleInput: "Enter three integers: 18 4 9",
        sampleOutput: "The minimum value is: 4",
        difficulty: "Easy"
      },
      {
        id: "ifelse-6",
        title: "Positive, Negative, or Zero (Nested If)",
        statement: "Write a program that takes a floating-point value as input and detects if it is a positive number, a zero, or a negative number. Note: use nested if-else statements.",
        explanation: "A nested if-else has an if-block inside another if-block. Here, we first check if the number is greater than or equal to zero. Inside that block, we check if it is exactly zero. The outer else handles negative numbers.",
        solution: `#include <stdio.h>

int main() {
    float num;

    // Input number
    printf("Enter a number: ");
    scanf("%f", &num);

    // Using nested if-else statements
    if (num >= 0.0) {
        if (num == 0.0) {
            printf("The number is zero.\\n");
        } else {
            printf("The number is positive.\\n");
        }
    } else {
        printf("The number is negative.\\n");
    }

    return 0;
}`,
        sampleInput: "Enter a number: -3.14",
        sampleOutput: "The number is negative.",
        difficulty: "Medium"
      },
      {
        id: "ifelse-7",
        title: "Positive, Negative, or Zero (Else-If Ladder)",
        statement: "Rewrite the positive, negative, or zero program using an else-if ladder.",
        explanation: "An else-if ladder structures multiple sequential branches clearly, checking conditions one-by-one from top to bottom.",
        solution: `#include <stdio.h>

int main() {
    float num;

    // Input number
    printf("Enter a number: ");
    scanf("%f", &num);

    // Using else-if ladder
    if (num > 0.0) {
        printf("The number is positive.\\n");
    } else if (num < 0.0) {
        printf("The number is negative.\\n");
    } else {
        printf("The number is zero.\\n");
    }

    return 0;
}`,
        sampleInput: "Enter a number: 0",
        sampleOutput: "The number is zero.",
        difficulty: "Easy"
      },
      {
        id: "ifelse-8",
        title: "Calculate Letter Grade based on Marks",
        statement: "Write a program that takes numerical mark of a course and displays the corresponding letter grade. Note: report appropriate error message if the mark is invalid (not within the range [0, 100])",
        explanation: "First, we check bounds: if marks < 0 or marks > 100, print error. Then, using else-if ladder, we match the grade category based on boundaries (e.g. >=90, >=80, etc.).",
        solution: `#include <stdio.h>

int main() {
    float mark;

    // Input mark
    printf("Enter numerical mark (0 to 100): ");
    scanf("%f", &mark);

    // Grade classification with bounds validation
    if (mark < 0.0 || mark > 100.0) {
        printf("Error: Invalid mark. Please enter a value between 0 and 100.\\n");
    } else if (mark >= 90.0) {
        printf("Letter Grade: A\\n");
    } else if (mark >= 80.0) {
        printf("Letter Grade: B\\n");
    } else if (mark >= 70.0) {
        printf("Letter Grade: C\\n");
    } else if (mark >= 60.0) {
        printf("Letter Grade: D\\n");
    } else {
        printf("Letter Grade: F\\n");
    }

    return 0;
}`,
        sampleInput: "Enter numerical mark (0 to 100): 85.5",
        sampleOutput: "Letter Grade: B",
        difficulty: "Easy"
      },
      {
        id: "ifelse-9",
        title: "Basic Arithmetic Calculator",
        statement: "Write a program that does the basic arithmetic operations on two numbers. First, it asks the user to choose the operation (+, -, *, /) and secondly takes the two numbers. Finally, it shows the result, preventing division by zero.",
        explanation: "We check the input operator character using an else-if ladder. For division, we verify that the divisor (second number) is not equal to zero before computing.",
        solution: `#include <stdio.h>

int main() {
    char op;
    double num1, num2, result;

    // Ask user for operations
    printf("Choose operation (+, -, *, /): ");
    scanf(" %c", &op);

    // Ask user for numbers
    printf("Enter two numbers: ");
    scanf("%lf %lf", &num1, &num2);

    // Perform operation using if-else statements
    if (op == '+') {
        result = num1 + num2;
        printf("Result: %.2f + %.2f = %.2f\\n", num1, num2, result);
    } else if (op == '-') {
        result = num1 - num2;
        printf("Result: %.2f - %.2f = %.2f\\n", num1, num2, result);
    } else if (op == '*') {
        result = num1 * num2;
        printf("Result: %.2f * %.2f = %.2f\\n", num1, num2, result);
    } else if (op == '/') {
        if (num2 == 0) {
            printf("Error: Division by zero is undefined!\\n");
        } else {
            result = num1 / num2;
            printf("Result: %.2f / %.2f = %.2f\\n", num1, num2, result);
        }
    } else {
        printf("Error: Invalid operator chosen.\\n");
    }

    return 0;
}`,
        sampleInput: "Choose operation (+, -, *, /): /\nEnter two numbers: 10 0",
        sampleOutput: "Error: Division by zero is undefined!",
        difficulty: "Medium"
      },
      {
        id: "ifelse-10",
        title: "Leap Year Checker (If-Else)",
        statement: "Write a program that takes a year value and checks if it is a leap year or not using logical operators. A year is a leap year if it is divisible by 4 but not by 100; or it is divisible by 400.",
        explanation: "We combine division tests. In C, divisibility checks use the modulus operator (`year % 4 == 0`). Logical AND `&&` and OR `||` combine constraints.",
        solution: `#include <stdio.h>

int main() {
    int year;

    // Read year
    printf("Enter year: ");
    scanf("%d", &year);

    // A year is a leap year if it is divisible by 4 but not by 100;
    // or it is divisible by 400.
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        printf("Leap year\\n");
    } else {
        printf("Not leap year\\n");
    }

    return 0;
}`,
        sampleInput: "Enter year: 1900",
        sampleOutput: "Not leap year",
        difficulty: "Medium"
      },
      {
        id: "ifelse-11",
        title: "Find Absolute Value of a Number",
        statement: "Find the absolute value of a number entered through the keyboard. That is, if the number entered is negative, the corresponding positive number will be displayed; else display it as it is.",
        explanation: "We check if a number is negative (less than 0). If it is, we modify its value by negating it (`num = -num`).",
        solution: `#include <stdio.h>

int main() {
    int num, original_num;

    // Read input
    printf("Enter a number: ");
    scanf("%d", &num);

    original_num = num;

    // If number is negative, multiply by -1 to make it positive
    if (num < 0) {
        num = -num;
    }

    printf("The absolute value of %d is: %d\\n", original_num, num);

    return 0;
}`,
        sampleInput: "Enter a number: -99",
        sampleOutput: "The absolute value of -99 is: 99",
        difficulty: "Easy"
      },
      {
        id: "ifelse-12",
        title: "Check Triangle Validity (Angles)",
        statement: "Write a program to check whether a triangle is valid or not. The three angles of the triangle are entered through the keyboard. A triangle is valid if the sum of all three angles is equal to 180 degrees.",
        explanation: "First, read three angles. Then verify two conditions: sum is exactly 180 and each angle is strictly positive (> 0).",
        solution: `#include <stdio.h>

int main() {
    float angle1, angle2, angle3, sum;

    // Input three angles
    printf("Enter three angles of the triangle (in degrees): ");
    scanf("%f %f %f", &angle1, &angle2, &angle3);

    sum = angle1 + angle2 + angle3;

    // Check validity (sum of angles must equal 180 degrees and all angles > 0)
    if (sum == 180.0 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
        printf("The triangle is valid.\\n");
    } else {
        printf("The triangle is NOT valid.\\n");
    }

    return 0;
}`,
        sampleInput: "Enter three angles of the triangle (in degrees): 60 70 50",
        sampleOutput: "The triangle is valid.",
        difficulty: "Easy"
      },
      {
        id: "ifelse-13",
        title: "Right Triangle Checker (Sides)",
        statement: "Given the lengths of three sides of a triangle, determine if the triangle is a right triangle or not using the Pythagorean equation c² = a² + b².",
        explanation: "Since sides are entered in arbitrary order, any side could be the hypotenuse. We test all 3 combinations: `a*a + b*b == c*c`, `a*a + c*c == b*b`, or `b*b + c*c == a*a` using the logical OR operator.",
        solution: `#include <stdio.h>

int main() {
    float a, b, c;

    // Read side lengths
    printf("Enter lengths of three sides: ");
    scanf("%f %f %f", &a, &b, &c);

    // To check if right-angled, verify Pythagorean equation (hypotenuse^2 = side1^2 + side2^2)
    // Since we don't know which side is longest, we check all three possibilities:
    if ((a*a + b*b == c*c) || (a*a + c*c == b*b) || (b*b + c*c == a*a)) {
        printf("It is a right triangle.\\n");
    } else {
        printf("It is NOT a right triangle.\\n");
    }

    return 0;
}`,
        sampleInput: "Enter lengths of three sides: 3 4 5",
        sampleOutput: "It is a right triangle.",
        difficulty: "Medium"
      }
    ]
  },
  {
    id: "switch",
    title: "Switch Statement Lab",
    description: "Learn how to use C's switch-case statement for clean, multi-way branching based on discrete values.",
    problems: [
      {
        id: "switch-1",
        title: "Basic calculator (operator, number, number)",
        statement: "Write a program that performs basic arithmetic operations (+, -, *, /, %) on two numbers. The program takes the input in format: operator number number (e.g. + 10 20), performs operations, and displays error for invalid characters.",
        explanation: "We read the operator char first, then the two operands. In the switch block, each case represents a valid operator character. Modulus (%) requires casting double inputs to int.",
        solution: `#include <stdio.h>

int main() {
    char op;
    double num1, num2, result;

    // Prompt user for input format
    printf("Enter operation in format: operator number number\\n");
    printf("Example: + 10 20\\n");
    printf("Enter expression: ");
    
    // Read operator, followed by the two operands
    scanf(" %c %lf %lf", &op, &num1, &num2);

    switch (op) {
        case '+':
            result = num1 + num2;
            printf("Result: %.2f\\n", result);
            break;
        case '-':
            result = num1 - num2;
            printf("Result: %.2f\\n", result);
            break;
        case '*':
            result = num1 * num2;
            printf("Result: %.2f\\n", result);
            break;
        case '/':
            if (num2 == 0) {
                printf("Error: Division by zero is undefined.\\n");
            } else {
                result = num1 / num2;
                printf("Result: %.2f\\n", result);
            }
            break;
        case '%':
            // Modulus is for integers, convert operands to integers
            if ((int)num2 == 0) {
                printf("Error: Modulus by zero is undefined.\\n");
            } else {
                int modResult = (int)num1 % (int)num2;
                printf("Result: %d\\n", modResult);
            }
            break;
        default:
            printf("Error: Invalid operator '%c' entered.\\n", op);
            break;
    }

    return 0;
}`,
        sampleInput: "Enter expression: * 30 3",
        sampleOutput: "Result: 90.00",
        difficulty: "Medium"
      },
      {
        id: "switch-2",
        title: "Convert Number to Day of the Week",
        statement: "Write a C program that takes an integer (1-7) as input and displays the corresponding day of the week (1=Sunday, 2=Monday... 7=Saturday). Output 'Invalid Input' for other numbers.",
        explanation: "A switch-case statement checks the value of the integer input. Cases 1 through 7 represent days, and default handles invalid integer inputs.",
        solution: `#include <stdio.h>

int main() {
    int day;

    printf("Enter day number (1-7): ");
    scanf("%d", &day);

    switch (day) {
        case 1: printf("Sunday\\n"); break;
        case 2: printf("Monday\\n"); break;
        case 3: printf("Tuesday\\n"); break;
        case 4: printf("Wednesday\\n"); break;
        case 5: printf("Thursday\\n"); break;
        case 6: printf("Friday\\n"); break;
        case 7: printf("Saturday\\n"); break;
        default: printf("Invalid Input\\n"); break;
    }

    return 0;
}`,
        sampleInput: "Enter day number (1-7): 3",
        sampleOutput: "Tuesday",
        difficulty: "Easy"
      },
      {
        id: "switch-3",
        title: "Check Vowel or Consonant (Switch Case)",
        statement: "Write a C program that takes a single character as input and determines whether it is a vowel or a consonant using switch case.",
        explanation: "We group vowel characters (both lowercase and uppercase) together in multiple sequential case statements without breaks, making them execute the same block of code. The default case handles consonants.",
        solution: `#include <stdio.h>

int main() {
    char ch;

    printf("Enter a character: ");
    scanf(" %c", &ch);

    switch (ch) {
        // Grouping case statements for all lowercase and uppercase vowels
        case 'a': case 'e': case 'i': case 'o': case 'u':
        case 'A': case 'E': case 'I': case 'O': case 'U':
            printf("Your input is a vowel\\n");
            break;
        default:
            // Check if input is a alphabetical letter to verify if it is indeed a consonant
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                printf("Your input is a consonant\\n");
            } else {
                printf("Your input is neither a vowel nor a consonant (not a letter)\\n");
            }
            break;
    }

    return 0;
}`,
        sampleInput: "Enter a character: a",
        sampleOutput: "Your input is a vowel",
        difficulty: "Easy"
      },
      {
        id: "switch-4",
        title: "Find Number of Days in a Month",
        statement: "Write a C program that takes a month number (1-12) as input and prints the number of days in that month. Handle leap year for February (assume the user provides leap year status as input).",
        explanation: "Group months with 31 days (1, 3, 5, 7, 8, 10, 12) and 30 days (4, 6, 9, 11). For case 2 (February), ask if it is a leap year (1 or 0) and print 29 or 28 accordingly.",
        solution: `#include <stdio.h>

int main() {
    int month, isLeap;

    printf("Enter month number (1-12): ");
    scanf("%d", &month);

    switch (month) {
        // Months with 31 days
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            printf("31 days\\n");
            break;
        // Months with 30 days
        case 4: case 6: case 9: case 11:
            printf("30 days\\n");
            break;
        // February needs leap year check
        case 2:
            printf("Is it a leap year? (1 for Yes, 0 for No): ");
            scanf("%d", &isLeap);
            if (isLeap == 1) {
                printf("29 days\\n");
            } else {
                printf("28 days\\n");
            }
            break;
        default:
            printf("Invalid month number. Please enter a value between 1 and 12.\\n");
            break;
    }

    return 0;
}`,
        sampleInput: "Enter month number (1-12): 2\nIs it a leap year? (1 for Yes, 0 for No): 1",
        sampleOutput: "29 days",
        difficulty: "Medium"
      },
      {
        id: "switch-5",
        title: "Temperature Converter (Switch Case)",
        statement: "Write a C program that converts temperature between Celsius, Fahrenheit, and Kelvin based on the user's choice: 1 for C to F, 2 for F to C, 3 for C to K.",
        explanation: "We read the conversion option, then use switch-case to prompt for input temperature, apply the corresponding formula, and print the result.",
        solution: `#include <stdio.h>

int main() {
    int choice;
    float temp, converted;

    printf("Choose conversion type:\\n");
    printf("1. Celsius to Fahrenheit\\n");
    printf("2. Fahrenheit to Celsius\\n");
    printf("3. Celsius to Kelvin\\n");
    printf("Enter choice (1-3): ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printf("Enter temperature in Celsius: ");
            scanf("%f", &temp);
            converted = (temp * 9.0 / 5.0) + 32.0;
            printf("%.2f Celsius = %.2f Fahrenheit\\n", temp, converted);
            break;
        case 2:
            printf("Enter temperature in Fahrenheit: ");
            scanf("%f", &temp);
            converted = (temp - 32.0) * 5.0 / 9.0;
            printf("%.2f Fahrenheit = %.2f Celsius\\n", temp, converted);
            break;
        case 3:
            printf("Enter temperature in Celsius: ");
            scanf("%f", &temp);
            converted = temp + 273.15;
            printf("%.2f Celsius = %.2f Kelvin\\n", temp, converted);
            break;
        default:
            printf("Invalid Input\\n");
            break;
    }

    return 0;
}`,
        sampleInput: "Enter choice (1-3): 1\nEnter temperature in Celsius: 100",
        sampleOutput: "100.00 Celsius = 212.00 Fahrenheit",
        difficulty: "Easy"
      },
      {
        id: "switch-6",
        title: "Check Leap Year (Switch)",
        statement: "Write a C program that checks if a given year is a leap year using switch statement.",
        explanation: "We evaluate the leap year condition `((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))` which gives a boolean result (1 for true, 0 for false). We then switch on this value.",
        solution: `#include <stdio.h>

int main() {
    int year;
    int isLeap;

    printf("Enter a year to check: ");
    scanf("%d", &year);

    // Compute condition: 1 if leap year, 0 if not
    isLeap = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));

    // Switch case based on boolean expression result (0 or 1)
    switch (isLeap) {
        case 1:
            printf("%d is a leap year.\\n", year);
            break;
        case 0:
            printf("%d is NOT a leap year.\\n", year);
            break;
    }

    return 0;
}`,
        sampleInput: "Enter a year to check: 2026",
        sampleOutput: "2026 is NOT a leap year.",
        difficulty: "Medium"
      },
      {
        id: "switch-7",
        title: "Find Grade Based on Marks",
        statement: "Write a C program that takes a single student's marks (0-100) as input and prints the letter grade (90-100 = A, 80-89 = B, 70-79 = C, 60-69 = D, 0-59 = F, else Invalid Input) using switch statement.",
        explanation: "We validate boundaries first. Then we divide marks by 10 to get discrete integer values (90-100 yields 9 and 10; 80-89 yields 8, etc.) which map cleanly to switch cases.",
        solution: `#include <stdio.h>

int main() {
    int marks;

    printf("Enter student's marks (0-100): ");
    scanf("%d", &marks);

    // First validate the range
    if (marks < 0 || marks > 100) {
        printf("Invalid Input\\n");
        return 0;
    }

    // Use integer division by 10 to group marks into decades
    switch (marks / 10) {
        case 10: // 100 marks
        case 9:  // 90-99 marks
            printf("Letter Grade: A\\n");
            break;
        case 8:  // 80-89 marks
            printf("Letter Grade: B\\n");
            break;
        case 7:  // 70-79 marks
            printf("Letter Grade: C\\n");
            break;
        case 6:  // 60-69 marks
            printf("Letter Grade: D\\n");
            break;
        default: // Less than 60
            printf("Letter Grade: F\\n");
            break;
    }

    return 0;
}`,
        sampleInput: "Enter student's marks (0-100): 78",
        sampleOutput: "Letter Grade: C",
        difficulty: "Medium"
      },
      {
        id: "switch-8",
        title: "Electricity Bill Tariff Calculator",
        statement: "Calculate electricity bill based on consumed units: up to 100 units = 5 TK/unit, 101 to 300 units = 7 TK/unit, above 300 units = 10 TK/unit. Take consumed units as input and print total bill. Note that you may need to use nested switch-case or conditions mapped to cases.",
        explanation: "We convert the units consumed to a range indicator (1 for <=100, 2 for <=300, 3 for above). We switch on this indicator and calculate slab-based costs.",
        solution: `#include <stdio.h>

int main() {
    float units, bill;
    int range;

    printf("Enter consumed electricity units: ");
    scanf("%f", &units);

    if (units < 0) {
        printf("Invalid consumed units.\\n");
        return 0;
    }

    // Determine the range category:
    // 1: Up to 100 units
    // 2: 101 to 300 units
    // 3: Above 300 units
    range = (units <= 100) ? 1 : ((units <= 300) ? 2 : 3);

    switch (range) {
        case 1:
            // Rate is 5 TK per unit
            bill = units * 5.0;
            break;
        case 2:
            // Up to 100 units @ 5 TK, remaining units (up to 300) @ 7 TK
            bill = (100 * 5.0) + ((units - 100) * 7.0);
            break;
        case 3:
            // Up to 100 @ 5 TK, 101-300 @ 7 TK (200 units), above 300 @ 10 TK
            bill = (100 * 5.0) + (200 * 7.0) + ((units - 300) * 10.0);
            break;
    }

    printf("Total Electricity Bill = %.2f TK\\n", bill);

    return 0;
}`,
        sampleInput: "Enter consumed electricity units: 250",
        sampleOutput: "Total Electricity Bill = 1550.00 TK",
        difficulty: "Medium"
      }
    ]
  }
];
