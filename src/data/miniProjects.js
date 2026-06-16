export const miniProjects = [
  {
    id: "parking-system",
    title: "Parking Management System",
    description: "A secure, console-based utility for tracking real-time vehicle entry/exit logs, allocating available slots, calculating dynamic parking fees based on vehicle type and duration, and generating receipts.",
    features: [
      "Secured Admin authentication interface with dynamic login attempts limit.",
      "Visual 2D parking matrix map reflecting active slot occupancy.",
      "Calculates dynamic rates for Bikes (20 BDT/hr), Cars (50 BDT/hr), and Buses/Trucks (100 BDT/hr).",
      "Persistent file handling (admin.dat, vehicles.dat, revenue.dat) for complete system restoration.",
      "Memory efficiency using structured data templates and dynamic allocation."
    ],
    code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define TOTAL_SLOTS 50
#define ADMIN_FILE "admin.dat"
#define VEHICLE_FILE "vehicles.dat"
#define REVENUE_FILE "revenue.dat"

// Structures
typedef struct {
    char username[30];
    char password[30];
} Admin;

typedef struct {
    int vehicleID;
    char vehicleNumber[20];
    char ownerName[50];
    char vehicleType[20]; // Car, Bike, Bus, Truck
    int slotNumber;
    char entryDate[20];
    char entryTime[20];
    long int entryEpoch; // Used for exact fee calculation
    int isParked;        // 1 = Active, 0 = Exited
} Vehicle;

typedef struct {
    int totalVehiclesParked;
    int totalVehiclesExited;
    double totalRevenue;
} Revenue;

// Function Prototypes
void initializeSystem();
int adminLogin();
void changePassword();
void vehicleEntry();
void vehicleExit();
void searchVehicle();
void viewAllVehicles();
void parkingStatus();
void revenueReport();
void generateReceipt(Vehicle v, long int exitTime, double fee);
int getFreeSlot();
double calculateFee(char* type, long int durationSec);
void getCurrentDateTime(char* dateStr, char* timeStr, long int* epoch);

// Main Function
int main() {
    initializeSystem();
    
    printf("\\n=========================================\\n");
    printf("   WELCOME TO PARKING MANAGEMENT SYSTEM   \\n");
    printf("=========================================\\n");
    
    if (!adminLogin()) {
        printf("\\n[Error] Too many failed attempts. Exiting program.\\n");
        return 0;
    }

    int choice;
    while (1) {
        printf("\\n=========================================\\n");
        printf("        PARKING MANAGEMENT SYSTEM        \\n");
        printf("=========================================\\n");
        printf("1. Vehicle Entry\\n");
        printf("2. Vehicle Exit\\n");
        printf("3. Search Vehicle\\n");
        printf("4. View All Active Vehicles\\n");
        printf("5. Parking Status & Map\\n");
        printf("6. Daily Revenue Report\\n");
        printf("7. Change Password\\n");
        printf("8. Logout & Relogin\\n");
        printf("9. Exit\\n");
        printf("=========================================\\n");
        printf("Enter your choice (1-9): ");
        
        if (scanf("%d", &choice) != 1) {
            printf("[Invalid] Please enter a valid number.\\n");
            while (getchar() != '\\n'); // Clear input buffer
            continue;
        }
        getchar(); // Consume newline

        switch (choice) {
            case 1: vehicleEntry(); break;
            case 2: vehicleExit(); break;
            case 3: searchVehicle(); break;
            case 4: viewAllVehicles(); break;
            case 5: parkingStatus(); break;
            case 6: revenueReport(); break;
            case 7: changePassword(); break;
            case 8: 
                printf("[Success] Logged out successfully.\\n");
                if (!adminLogin()) return 0;
                break;
            case 9: 
                printf("\\nThank you for using the Parking Management System!\\n");
                exit(0);
            default: 
                printf("[Invalid] Option dynamic out of bounds. Try again.\\n");
        }
    }
    return 0;
}

// Ensure administrative credentials and data tracking structures exist
void initializeSystem() {
    FILE *f = fopen(ADMIN_FILE, "rb");
    if (!f) {
        f = fopen(ADMIN_FILE, "wb");
        Admin defaultAdmin = {"admin", "admin123"};
        fwrite(&defaultAdmin, sizeof(Admin), 1, f);
    }
    fclose(f);

    f = fopen(REVENUE_FILE, "rb");
    if (!f) {
        f = fopen(REVENUE_FILE, "wb");
        Revenue defaultRev = {0, 0, 0.0};
        fwrite(&defaultRev, sizeof(Revenue), 1, f);
    }
    fclose(f);
}

// Simple Admin Authentication System
int adminLogin() {
    char user[30], pass[30];
    Admin savedAdmin;
    int attempts = 3;

    FILE *f = fopen(ADMIN_FILE, "rb");
    if (!f) return 0;
    fread(&savedAdmin, sizeof(Admin), 1, f);
    fclose(f);

    while (attempts > 0) {
        printf("\\n--- ADMIN LOGIN (Attempts Left: %d) ---\\n", attempts);
        printf("Username: ");
        fgets(user, sizeof(user), stdin);
        user[strcspn(user, "\\n")] = 0; // Remove trailing newline

        printf("Password: ");
        fgets(pass, sizeof(pass), stdin);
        pass[strcspn(pass, "\\n")] = 0;

        if (strcmp(user, savedAdmin.username) == 0 && strcmp(pass, savedAdmin.password) == 0) {
            printf("\\n[Success] Login Successful!\\n");
            return 1;
        } else {
            printf("\\n[Error] Invalid credentials!\\n");
            attempts--;
        }
    }
    return 0;
}

void changePassword() {
    Admin currentAdmin;
    char oldPass[30], newPass[30];
    
    FILE *f = fopen(ADMIN_FILE, "rb+");
    if (!f) return;
    fread(&currentAdmin, sizeof(Admin), 1, f);

    printf("\\nEnter Current Password: ");
    fgets(oldPass, sizeof(oldPass), stdin);
    oldPass[strcspn(oldPass, "\\n")] = 0;

    if (strcmp(oldPass, currentAdmin.password) != 0) {
        printf("[Error] Password mismatch. Authentication failed.\\n");
        fclose(f);
        return;
    }

    printf("Enter New Password: ");
    fgets(newPass, sizeof(newPass), stdin);
    newPass[strcspn(newPass, "\\n")] = 0;

    strcpy(currentAdmin.password, newPass);
    rewind(f);
    fwrite(&currentAdmin, sizeof(Admin), 1, f);
    fclose(f);

    printf("[Success] Password updated successfully!\\n");
}

// Generate sequential IDs based on global tracking files
int generateAutoID() {
    FILE *f = fopen(VEHICLE_FILE, "rb");
    if (!f) return 1001; // Base starting ID

    Vehicle temp;
    int lastID = 1000;
    while (fread(&temp, sizeof(Vehicle), 1, f)) {
        lastID = temp.vehicleID;
    }
    fclose(f);
    return lastID + 1;
}

int getFreeSlot() {
    int occupiedSlots[TOTAL_SLOTS + 1] = {0};
    FILE *f = fopen(VEHICLE_FILE, "rb");
    if (f) {
        Vehicle temp;
        while (fread(&temp, sizeof(Vehicle), 1, f)) {
            if (temp.isParked) {
                occupiedSlots[temp.slotNumber] = 1;
            }
        }
        fclose(f);
    }
    for (int i = 1; i <= TOTAL_SLOTS; i++) {
        if (occupiedSlots[i] == 0) return i;
    }
    return -1; // Full
}

void vehicleEntry() {
    int freeSlot = getFreeSlot();
    if (freeSlot == -1) {
        printf("\\n[Error] No parking spaces available. Capacity maximum reached.\\n");
        return;
    }

    // Dynamic Allocation used for buffering record safely
    Vehicle *v = (Vehicle*)malloc(sizeof(Vehicle));
    if (v == NULL) {
        printf("[Error] System Memory Allocation Failure.\\n");
        return;
    }

    v->vehicleID = generateAutoID();
    v->slotNumber = freeSlot;
    v->isParked = 1;

    printf("\\n--- VEHICLE ENTRY REGISTRATION ---\\n");
    printf("Enter Vehicle Number (e.g., DHAKA-METRO-123): ");
    fgets(v->vehicleNumber, sizeof(v->vehicleNumber), stdin);
    v->vehicleNumber[strcspn(v->vehicleNumber, "\\n")] = 0;

    printf("Enter Owner Name: ");
    fgets(v->ownerName, sizeof(v->ownerName), stdin);
    v->ownerName[strcspn(v->ownerName, "\\n")] = 0;

    int typeChoice;
    printf("Select Vehicle Type:\\n1. Bike\\n2. Car\\n3. Bus\\n4. Truck\\nChoice: ");
    scanf("%d", &typeChoice);
    getchar();

    if (typeChoice == 1) strcpy(v->vehicleType, "Bike");
    else if (typeChoice == 2) strcpy(v->vehicleType, "Car");
    else if (typeChoice == 3) strcpy(v->vehicleType, "Bus");
    else if (typeChoice == 4) strcpy(v->vehicleType, "Truck");
    else {
        printf("[Invalid] Unknown vehicle archetype selected. Setting to 'Car'.\\n");
        strcpy(v->vehicleType, "Car");
    }

    getCurrentDateTime(v->entryDate, v->entryTime, &(v->entryEpoch));

    // Save to File
    FILE *f = fopen(VEHICLE_FILE, "ab");
    if (f) {
        fwrite(v, sizeof(Vehicle), 1, f);
        fclose(f);
        printf("\\n[Success] Vehicle Registered! Allocated Slot: %d, Generated ID: %d\\n", v->slotNumber, v->vehicleID);
    } else {
        printf("[Error] Storage System link down. Critical write failure.\\n");
    }

    // Update global tracking records
    FILE *fr = fopen(REVENUE_FILE, "rb+");
    if (fr) {
        Revenue rev;
        fread(&rev, sizeof(Revenue), 1, fr);
        rev.totalVehiclesParked += 1;
        rewind(fr);
        fwrite(&rev, sizeof(Revenue), 1, fr);
        fclose(fr);
    }

    free(v); // Deallocate dynamically allocated memory
}

void vehicleExit() {
    char searchNum[20];
    printf("\\nEnter Vehicle Number to Process Exit: ");
    fgets(searchNum, sizeof(searchNum), stdin);
    searchNum[strcspn(searchNum, "\\n")] = 0;

    FILE *f = fopen(VEHICLE_FILE, "rb+");
    if (!f) {
        printf("[Error] No active record profiles found.\\n");
        return;
    }

    Vehicle temp;
    int found = 0;
    long int currentEpoch;
    char exitDate[20], exitTime[20];
    getCurrentDateTime(exitDate, exitTime, &currentEpoch);

    while (fread(&temp, sizeof(Vehicle), 1, f)) {
        if (temp.isParked && strcmp(temp.vehicleNumber, searchNum) == 0) {
            found = 1;
            temp.isParked = 0; // Mark open

            // Process calculations
            long int durationSec = currentEpoch - temp.entryEpoch;
            if (durationSec < 0) durationSec = 0; // Protection against time resets
            double fee = calculateFee(temp.vehicleType, durationSec);

            // Update record back to file structural position
            fseek(f, -((long int)sizeof(Vehicle)), SEEK_CUR);
            fwrite(&temp, sizeof(Vehicle), 1, f);
            
            // Process revenue changes
            FILE *fr = fopen(REVENUE_FILE, "rb+");
            if (fr) {
                Revenue rev;
                fread(&rev, sizeof(Revenue), 1, fr);
                rev.totalVehiclesExited += 1;
                rev.totalRevenue += fee;
                rewind(fr);
                fwrite(&rev, sizeof(Revenue), 1, fr);
                fclose(fr);
            }

            generateReceipt(temp, currentEpoch, fee);
            break;
        }
    }
    fclose(f);
    if (!found) printf("\\n[Error] Active parking session not found for vehicle number: %s\\n", searchNum);
}

void searchVehicle() {
    int opt;
    printf("\\n--- SEARCH ENGINE ---\\n1. By Vehicle Number\\n2. By ID\\n3. By Owner Name\\nChoice: ");
    scanf("%d", &opt);
    getchar();

    FILE *f = fopen(VEHICLE_FILE, "rb");
    if (!f) {
        printf("[Error] No records stored yet.\\n");
        return;
    }

    Vehicle v;
    int found = 0;
    char queryStr[50];
    int queryID;

    if (opt == 1 || opt == 3) {
        printf("Enter search term: ");
        fgets(queryStr, sizeof(queryStr), stdin);
        queryStr[strcspn(queryStr, "\\n")] = 0;
    } else if (opt == 2) {
        printf("Enter ID: ");
        scanf("%d", &queryID);
        getchar();
    }

    printf("\\n%-6s %-15s %-10s %-15s %-6s %-12s %-8s\\n", "ID", "Vehicle No", "Type", "Owner", "Slot", "Date", "Status");
    printf("---------------------------------------------------------------------------------\\n");

    while (fread(&v, sizeof(Vehicle), 1, f)) {
        if ((opt == 1 && strcmp(v.vehicleNumber, queryStr) == 0) ||
            (opt == 2 && v.vehicleID == queryID) ||
            (opt == 3 && strstr(v.ownerName, queryStr) != NULL)) {
            
            printf("%-6d %-15s %-10s %-15s %-6d %-12s %-8s\\n", 
                   v.vehicleID, v.vehicleNumber, v.vehicleType, v.ownerName, 
                   v.slotNumber, v.entryDate, v.isParked ? "PARKED" : "EXITED");
            found = 1;
        }
    }
    fclose(f);
    if (!found) printf("\\nNo matches found matching criteria.\\n");
}

void viewAllVehicles() {
    FILE *f = fopen(VEHICLE_FILE, "rb");
    if (!f) {
        printf("\\n[Notice] No active tracking logs online.\\n");
        return;
    }

    Vehicle v;
    int count = 0;
    printf("\\n=========================== CURRENT PARKED VEHICLES ===========================\\n");
    printf("%-6s %-15s %-10s %-15s %-6s %-12s %-8s\\n", "ID", "Vehicle No", "Type", "Owner", "Slot", "Date", "Time");
    printf("---------------------------------------------------------------------------------\\n");

    while (fread(&v, sizeof(Vehicle), 1, f)) {
        if (v.isParked) {
            printf("%-6d %-15s %-10s %-15s %-6d %-12s %-8s\\n", 
                   v.vehicleID, v.vehicleNumber, v.vehicleType, v.ownerName, v.slotNumber, v.entryDate, v.entryTime);
            count++;
        }
    }
    fclose(f);
    if (count == 0) printf("   No vehicles are currently stationed inside the premises.\\n");
    printf("================================================================================-\\n");
}

void parkingStatus() {
    int occupiedSlots[TOTAL_SLOTS + 1] = {0};
    FILE *f = fopen(VEHICLE_FILE, "rb");
    int occupiedCount = 0;

    if (f) {
        Vehicle temp;
        while (fread(&temp, sizeof(Vehicle), 1, f)) {
            if (temp.isParked) {
                occupiedSlots[temp.slotNumber] = 1;
                occupiedCount++;
            }
        }
        fclose(f);
    }

    printf("\\n--- PARKING MAP INFRASTRUCTURE ---\\n");
    printf("Total Infrastructure Space: %d | Occupied: %d | Available: %d\\n\\n", TOTAL_SLOTS, occupiedCount, TOTAL_SLOTS - occupiedCount);

    // Render continuous 2D console array matrix structure mapping out visually occupied items
    for (int i = 1; i <= TOTAL_SLOTS; i++) {
        if (occupiedSlots[i] == 1) printf("[XX] "); // XX indicates occupied slot
        else printf("[%02d] ", i);

        if (i % 10 == 0) printf("\\n");
    }
}

void revenueReport() {
    FILE *fr = fopen(REVENUE_FILE, "rb");
    if (!fr) return;
    Revenue rev;
    fread(&rev, sizeof(Revenue), 1, fr);
    fclose(fr);

    int occupiedCount = 0;
    FILE *f = fopen(VEHICLE_FILE, "rb");
    if (f) {
        Vehicle temp;
        while (fread(&temp, sizeof(Vehicle), 1, f)) {
            if (temp.isParked) occupiedCount++;
        }
        fclose(f);
    }

    printf("\\n============================= AUDIT FINANCIAL REPORT =============================\\n");
    printf("  Accumulated All-Time Running Registrations: %d\\n", rev.totalVehiclesParked);
    printf("  Successful Gate Checked Exits              : %d\\n", rev.totalVehiclesExited);
    printf("  Currently Managed Parking Loads            : %d\\n", occupiedCount);
    printf("  Remaining System Space Open                : %d\\n", TOTAL_SLOTS - occupiedCount);
    printf("---------------------------------------------------------------------------------\\n");
    printf("  TOTAL MONETARY REVENUE COLLECTED           : %.2f BDT\\n", rev.totalRevenue);
    printf("=================================================================================\\n");
}

// Runtime Helper Calculators 
void getCurrentDateTime(char* dateStr, char* timeStr, long int* epoch) {
    time_t t = time(NULL);
    struct tm *tm_info = localtime(&t);
    
    *epoch = (long int)t;
    strftime(dateStr, 20, "%Y-%m-%d", tm_info);
    strftime(timeStr, 20, "%H:%M:%S", tm_info);
}

double calculateFee(char* type, long int durationSec) {
    // Round runtime duration upward to the next immediate absolute hour block
    double hours = (double)durationSec / 3600.0;
    int totalHours = (int)hours;
    if (hours > (double)totalHours) {
        totalHours += 1; 
    }
    if (totalHours == 0) totalHours = 1; // Minimum baseline calculation set to 1 hour

    double firstHourRate = 0, additionalHourRate = 0;

    if (strcmp(type, "Bike") == 0) {
        firstHourRate = 20.0; additionalHourRate = 10.0;
    } else if (strcmp(type, "Car") == 0) {
        firstHourRate = 50.0; additionalHourRate = 20.0;
    } else if (strcmp(type, "Bus") == 0 || strcmp(type, "Truck") == 0) {
        firstHourRate = 100.0; additionalHourRate = 50.0;
    }

    return firstHourRate + ((totalHours - 1) * additionalHourRate);
}

void generateReceipt(Vehicle v, long int exitTime, double fee) {
    time_t entryT = (time_t)v.entryEpoch;
    time_t exitT = (time_t)exitTime;
    
    char entryStr[30], exitStr[30];
    strcpy(entryStr, ctime(&entryT));
    strcpy(exitStr, ctime(&exitT));
    
    // Clean trailing newlines generated by ctime standard function output
    entryStr[strcspn(entryStr, "\\n")] = 0;
    exitStr[strcspn(exitStr, "\\n")] = 0;

    printf("\\n=========================================\\n");
    printf("         PARKING TRANSACTION RECEIPT     \\n");
    printf("=========================================\\n");
    printf(" Vehicle ID     : %d\\n", v.vehicleID);
    printf(" Vehicle Number : %s\\n", v.vehicleNumber);
    printf(" Vehicle Type   : %s\\n", v.vehicleType);
    printf(" Owner Name     : %s\\n", v.ownerName);
    printf(" Slot Assigned  : %d\\n", v.slotNumber);
    printf("-----------------------------------------\\n");
    printf(" Checked Entry  : %s\\n", entryStr);
    printf(" Checked Exit   : %s\\n", exitStr);
    printf("-----------------------------------------\\n");
    printf(" TOTAL DUE FEE  : %.2f BDT\\n", fee);
    printf("=========================================\\n");
    printf("      Status: [PAID] - Thank You!\\n");
    printf("=========================================\\n");
}`
  },
  {
    id: "library-system",
    title: "Library Management System",
    description: "An administrative tool to catalog book inventories (add, view, search, edit, delete), maintain student member registries, issue and return books, and automatically calculate overdue fines.",
    features: [
      "Catalog administration supporting CRUD actions for books and shelf indexing.",
      "Membership management with soft deletion tracking to preserve historical records.",
      "Limits active student checkouts (max 3 books per account) and manages inventory quantities.",
      "Automated checkout/checkin logs with a standard 7-day loan period and 5 BDT/day overdue fine calculator.",
      "System audit reports tracking distinctive titles, available stock, and outstanding loans."
    ],
    code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define ADMIN_FILE "admin.dat"
#define BOOK_FILE "books.dat"
#define STUDENT_FILE "students.dat"
#define ISSUE_FILE "issued_books.dat"

#define MAX_BOOKS_PER_STUDENT 3
#define FINE_PER_DAY 5.0
#define LOAN_PERIOD_DAYS 7

// Structure Definitions
typedef struct {
    char username[30];
    char password[30];
} Admin;

typedef struct {
    int bookID;
    char title[100];
    char author[100];
    char category[50];
    char isbn[30];
    int publicationYear;
    int quantity;
    char shelfNumber[20];
} Book;

typedef struct {
    int studentID;
    char name[100];
    char department[50];
    int semester;
    char email[100];
    char phone[20];
    int isDeleted; // Soft delete flag (0 = Active, 1 = Deleted)
} Student;

typedef struct {
    int studentID;
    int bookID;
    long int issueEpoch;
    long int dueEpoch;
    int isReturned; // 0 = Active Issue, 1 = Returned
} IssueRecord;

// Function Prototypes
void initializeSystem();
int adminLogin();
void changePassword();

void addBook();
void viewAllBooks();
void searchBook();
void editBook();
void deleteBook();

void registerStudent();
void viewAllStudents();
void searchStudent();

void issueBook();
void returnBook();
void viewIssuedBooks();
void inventoryReport();

// Utility Mechanics
void getCurrentDateStr(char *dest, long int epoch);
int getNextBookID();
int getNextStudentID();
long int getDaysBetween(long int start, long int end);

// Global state controller
int isLoggedIn = 0;

int main() {
    initializeSystem();
    int choice;

    printf("\\n==================================================\\n");
    printf("       WELCOME TO THE LIBRARY SYSTEM               \\n");
    printf("==================================================\\n");

    while (1) {
        if (!isLoggedIn) {
            if (!adminLogin()) {
                printf("\\n[Error] Too many failed authentication attempts. Terminating.\\n");
                exit(0);
            }
            isLoggedIn = 1;
        }

        printf("\\n==================================================\\n");
        printf("            LIBRARY MANAGEMENT SYSTEM             \\n");
        printf("==================================================\\n");
        printf("1. Add Book            2. View All Books     3. Search Book\\n");
        printf("4. Edit Book           5. Delete Book        6. Register Student\\n");
        printf("7. View Students       8. Issue Book         9. Return Book\\n");
        printf("10. View Issued Books  11. Inventory Report  12. Change Password\\n");
        printf("13. Logout             14. Exit\\n");
        printf("==================================================\\n");
        printf("Enter command index (1-14): ");
        
        if (scanf("%d", &choice) != 1) {
            printf("[Invalid Entry] Input rejected.\\n");
            while (getchar() != '\\n'); 
            continue;
        }
        getchar(); // Consume remaining newline buffer

        switch (choice) {
            case 1: addBook(); break;
            case 2: viewAllBooks(); break;
            case 3: searchBook(); break;
            case 4: editBook(); break;
            case 5: deleteBook(); break;
            case 6: registerStudent(); break;
            case 7: viewAllStudents(); break;
            case 8: issueBook(); break;
            case 9: returnBook(); break;
            case 10: viewIssuedBooks(); break;
            case 11: inventoryReport(); break;
            case 12: changePassword(); break;
            case 13: 
                isLoggedIn = 0; 
                printf("[Success] Admin user context cleared.\\n"); 
                break;
            case 14: 
                printf("\\nClosing Library System Operations. Goodbye.\\n"); 
                exit(0);
            default: 
                printf("[Invalid Selection] Out of bounds interface token.\\n");
        }
    }
    return 0;
}

// Ensure database state validation files exist on localized drive
void initializeSystem() {
    FILE *f = fopen(ADMIN_FILE, "rb");
    if (!f) {
        f = fopen(ADMIN_FILE, "wb");
        if (f) {
            Admin defaultAdmin = {"admin", "admin123"};
            fwrite(&defaultAdmin, sizeof(Admin), 1, f);
            fclose(f);
        }
    } else {
        fclose(f);
    }
}

int adminLogin() {
    char user[30], pass[30];
    Admin saved;
    int attempts = 3;

    FILE *f = fopen(ADMIN_FILE, "rb");
    if (!f) return 0;
    fread(&saved, sizeof(Admin), 1, f);
    fclose(f);

    while (attempts > 0) {
        printf("\\n--- SECURE GATEWAY ACCESS (Attempts Remaining: %d) ---\\n", attempts);
        printf("Username: ");
        fgets(user, sizeof(user), stdin); user[strcspn(user, "\\n")] = 0;
        printf("Password: ");
        fgets(pass, sizeof(pass), stdin); pass[strcspn(pass, "\\n")] = 0;

        if (strcmp(user, saved.username) == 0 && strcmp(pass, saved.password) == 0) {
            printf("[Access Granted] Admin authorization token accepted.\\n");
            return 1;
        }
        printf("[Access Denied] Invalid administrative parameters.\\n");
        attempts--;
    }
    return 0;
}

void changePassword() {
    Admin current;
    char oldP[30], newP[30];
    FILE *f = fopen(ADMIN_FILE, "rb+");
    if (!f) return;
    
    fread(&current, sizeof(Admin), 1, f);
    printf("\\nEnter Current Authentication Password: ");
    fgets(oldP, sizeof(oldP), stdin); oldP[strcspn(oldP, "\\n")] = 0;

    if (strcmp(oldP, current.password) != 0) {
        printf("[Error] Password verification mismatch.\\n");
        fclose(f);
        return;
    }

    printf("Enter New Master Password: ");
    fgets(newP, sizeof(newP), stdin); newP[strcspn(newP, "\\n")] = 0;
    strcpy(current.password, newP);

    rewind(f);
    fwrite(&current, sizeof(Admin), 1, f);
    fclose(f);
    printf("[Success] New security profile written permanently to storage.\\n");
}

int getNextBookID() {
    FILE *f = fopen(BOOK_FILE, "rb");
    if (!f) return 101;
    Book b;
    int lastID = 100;
    while (fread(&b, sizeof(Book), 1, f)) {
        lastID = b.bookID;
    }
    fclose(f);
    return lastID + 1;
}

void addBook() {
    Book *b = (Book *)malloc(sizeof(Book));
    if (!b) {
        printf("[Fatal System Allocation Failure]\\n");
        return;
    }
    
    b->bookID = getNextBookID();
    printf("\\n--- INVENTORY ACQUISITION: REGISTER BOOK (ID: %d) ---\\n", b->bookID);
    printf("Book Title      : "); fgets(b->title, sizeof(b->title), stdin); b->title[strcspn(b->title, "\\n")] = 0;
    printf("Author Name     : "); fgets(b->author, sizeof(b->author), stdin); b->author[strcspn(b->author, "\\n")] = 0;
    printf("Category/Genre  : "); fgets(b->category, sizeof(b->category), stdin); b->category[strcspn(b->category, "\\n")] = 0;
    printf("ISBN Code       : "); fgets(b->isbn, sizeof(b->isbn), stdin); b->isbn[strcspn(b->isbn, "\\n")] = 0;
    printf("Publication Year: "); scanf("%d", &b->publicationYear); getchar();
    printf("Stock Vol Count : "); scanf("%d", &b->quantity); getchar();
    printf("Shelf Placement : "); fgets(b->shelfNumber, sizeof(b->shelfNumber), stdin); b->shelfNumber[strcspn(b->shelfNumber, "\\n")] = 0;

    FILE *f = fopen(BOOK_FILE, "ab");
    if (f) {
        fwrite(b, sizeof(Book), 1, f);
        fclose(f);
        printf("[Success] Asset cataloged securely into inventory ledger.\\n");
    }
    free(b);
}

void viewAllBooks() {
    FILE *f = fopen(BOOK_FILE, "rb");
    if (!f) {
        printf("\\n[Notice] No data volumes exist in catalog files.\\n");
        return;
    }
    Book b;
    printf("\\n========================================= SYSTEM BOOK CATALOG =========================================\\n");
    printf("%-6s %-30s %-20s %-15s %-6s %-8s\\n", "ID", "Title", "Author", "Category", "Stock", "Shelf Location");
    printf("-------------------------------------------------------------------------------------------------------\\n");
    while (fread(&b, sizeof(Book), 1, f)) {
        printf("%-6d %-30.28s %-20.18s %-15.13s %-6d %-8s\\n", b.bookID, b.title, b.author, b.category, b.quantity, b.shelfNumber);
    }
    printf("=======================================================================================================\\n");
    fclose(f);
}

void searchBook() {
    int mode;
    printf("\\n--- CATALOG ENGINES ---\\n1. Match Book ID\\n2. Query Title Fragment\\n3. Query Author Fragment\\nChoice: ");
    scanf("%d", &mode); getchar();

    FILE *f = fopen(BOOK_FILE, "rb");
    if (!f) {
        printf("[Error] Catalog streams uninitialized.\\n");
        return;
    }

    Book b;
    char query[100];
    int qID = 0, found = 0;

    if (mode == 1) {
        printf("Enter exact structural Book ID: ");
        scanf("%d", &qID); getchar();
    } else {
        printf("Enter string search query term: ");
        fgets(query, sizeof(query), stdin); query[strcspn(query, "\\n")] = 0;
    }

    printf("\\n%-6s %-30s %-20s %-15s %-6s\\n", "ID", "Title", "Author", "Category", "Stock");
    printf("-------------------------------------------------------------------------------------------------------\\n");
    while (fread(&b, sizeof(Book), 1, f)) {
        if ((mode == 1 && b.bookID == qID) ||
            (mode == 2 && strstr(b.title, query) != NULL) ||
            (mode == 3 && strstr(b.author, query) != NULL)) {
            printf("%-6d %-30.28s %-20.18s %-15.13s %-6d\\n", b.bookID, b.title, b.author, b.category, b.quantity);
            found = 1;
        }
    }
    fclose(f);
    if (!found) printf("No record volumes matching the given input values criteria were found.\\n");
}

void editBook() {
    int targetID;
    printf("\\nEnter Book ID requiring metadata configuration modifications: ");
    scanf("%d", &targetID); getchar();

    FILE *f = fopen(BOOK_FILE, "rb+");
    if (!f) return;

    Book b;
    int found = 0;
    while (fread(&b, sizeof(Book), 1, f)) {
        if (b.bookID == targetID) {
            found = 1;
            printf("\\nExisting Record Context: Title: %s | Author: %s\\n", b.title, b.author);
            printf("Enter Updated Title      : "); fgets(b.title, sizeof(b.title), stdin); b.title[strcspn(b.title, "\\n")] = 0; // FIXED: b->title to b.title
            printf("Enter Updated Author     : "); fgets(b.author, sizeof(b.author), stdin); b.author[strcspn(b.author, "\\n")] = 0;
            printf("Enter Updated Stock Count: "); scanf("%d", &b.quantity); getchar();

            fseek(f, -((long int)sizeof(Book)), SEEK_CUR);
            fwrite(&b, sizeof(Book), 1, f);
            printf("[Success] Inventory structural updates committed directly to storage files.\\n");
            break;
        }
    }
    fclose(f);
    if (!found) printf("[Error] Targeting ID not available in structural logs.\\n");
}

void deleteBook() {
    int targetID;
    printf("\\nEnter Book ID targeted for complete database deletion: ");
    scanf("%d", &targetID); getchar();

    FILE *f = fopen(BOOK_FILE, "rb");
    if (!f) return;

    // Hard implementation swap structure using safe operational temporary mirrors
    FILE *temp = fopen("temp_books.dat", "wb");
    Book b;
    int found = 0;

    while (fread(&b, sizeof(Book), 1, f)) {
        if (b.bookID == targetID) {
            found = 1; // Drop write buffer action to strip trace entries
        } else {
            fwrite(&b, sizeof(Book), 1, temp);
        }
    }
    fclose(f);
    fclose(temp);

    remove(BOOK_FILE);
    rename("temp_books.dat", BOOK_FILE);

    if (found) printf("[Success] Book entry cleared from dynamic active file allocation maps.\\n");
    else printf("[Error] ID not localized inside active directory maps.\\n");
}

int getNextStudentID() {
    FILE *f = fopen(STUDENT_FILE, "rb");
    if (!f) return 2001;
    Student s;
    int lastID = 2000;
    while (fread(&s, sizeof(Student), 1, f)) {
        lastID = s.studentID;
    }
    fclose(f);
    return lastID + 1;
}

void registerStudent() {
    Student s;
    s.studentID = getNextStudentID();
    s.isDeleted = 0;

    printf("\\n--- STUDENT MEMBERSHIP REGISTRATION (Generated ID: %d) ---\\n", s.studentID);
    printf("Full Student Name  : "); fgets(s.name, sizeof(s.name), stdin); s.name[strcspn(s.name, "\\n")] = 0;
    printf("Department/Faculty : "); fgets(s.department, sizeof(s.department), stdin); s.department[strcspn(s.department, "\\n")] = 0;
    printf("Current Semester No: "); scanf("%d", &s.semester); getchar();
    printf("Email Address Contact: "); fgets(s.email, sizeof(s.email), stdin); s.email[strcspn(s.email, "\\n")] = 0;
    printf("Phone Extension Num: "); fgets(s.phone, sizeof(s.phone), stdin); s.phone[strcspn(s.phone, "\\n")] = 0;

    FILE *f = fopen(STUDENT_FILE, "ab");
    if (f) {
        fwrite(&s, sizeof(Student), 1, f);
        fclose(f);
        printf("[Success] Membership profile created. User bound to network tracking registers.\\n");
    }
}

void viewAllStudents() {
    FILE *f = fopen(STUDENT_FILE, "rb");
    if (!f) {
        printf("\\n[Notice] Registry profiles unavailable.\\n");
        return;
    }
    Student s;
    printf("\\n====================================== REGISTERED MEMBERS DIRECTORY ======================================\\n");
    printf("%-8s %-25s %-15s %-10s %-25s\\n", "ID", "Name", "Department", "Semester", "Email");
    printf("----------------------------------------------------------------------------------------------------------\\n");
    while (fread(&s, sizeof(Student), 1, f)) {
        if (!s.isDeleted) {
            printf("%-8d %-25.23s %-15.13s %-10d %-25.23s\\n", s.studentID, s.name, s.department, s.semester, s.email);
        }
    }
    printf("==========================================================================================================\\n");
    fclose(f);
}

void searchStudent() {
    char term[100];
    printf("\\nEnter structural query pattern to search across Student Profiles (Name/ID): ");
    fgets(term, sizeof(term), stdin); term[strcspn(term, "\\n")] = 0;

    FILE *f = fopen(STUDENT_FILE, "rb");
    if (!f) return;
    
    Student s;
    int found = 0;
    char idStr[20];

    printf("\\n%-8s %-25s %-15s %-15s\\n", "ID", "Name", "Department", "Phone");
    printf("-----------------------------------------------------------------------------\\n");
    while (fread(&s, sizeof(Student), 1, f)) {
        sprintf(idStr, "%d", s.studentID);
        if (!s.isDeleted && (strstr(s.name, term) != NULL || strcmp(idStr, term) == 0)) {
            printf("%-8d %-25.23s %-15.13s %-15s\\n", s.studentID, s.name, s.department, s.phone);
            found = 1;
        }
    }
    fclose(f);
    if (!found) printf("No member criteria profile exists matching: %s\\n", term);
}

// Relational Business Rule Validator Checking Loan Count Constraints
int countActiveStudentLoans(int studentID) {
    FILE *f = fopen(ISSUE_FILE, "rb");
    if (!f) return 0;
    IssueRecord r;
    int tally = 0;
    while (fread(&r, sizeof(IssueRecord), 1, f)) {
        if (r.studentID == studentID && !r.isReturned) tally++;
    }
    fclose(f);
    return tally;
}

void issueBook() {
    int sID, bID;
    printf("\\n--- LOG TRANSACTION: CHECKOUT LOAN OUTBOUND ENTRY ---\\n");
    printf("Enter Registered Student ID: "); scanf("%d", &sID); getchar();
    
    // 1. Check student account state existence tracking profile parameters
    FILE *fs = fopen(STUDENT_FILE, "rb");
    if (!fs) return;
    Student s; int sFound = 0;
    while (fread(&s, sizeof(Student), 1, fs)) {
        if (s.studentID == sID && !s.isDeleted) { sFound = 1; break; }
    }
    fclose(fs);
    if (!sFound) { printf("[Error] Student profile verification completely failed.\\n"); return; }

    // 2. Validate lending threshold boundaries
    if (countActiveStudentLoans(sID) >= MAX_BOOKS_PER_STUDENT) {
        printf("[Error] Target user account reached threshold lending bounds (%d books allowed).\\n", MAX_BOOKS_PER_STUDENT);
        return;
    }

    printf("Enter Inventory Target Book ID: "); scanf("%d", &bID); getchar();
    
    // 3. Find physical volume records
    FILE *fb = fopen(BOOK_FILE, "rb+");
    if (!fb) return;
    Book b; int bFound = 0;
    while (fread(&b, sizeof(Book), 1, fb)) {
        if (b.bookID == bID) {
            bFound = 1;
            if (b.quantity <= 0) {
                printf("[Error] Material physical depletion. Zero copies present in stock reserves.\\n");
                fclose(fb);
                return;
            }
            // Decrement active counter ledger state elements safely
            b.quantity--;
            fseek(fb, -((long int)sizeof(Book)), SEEK_CUR);
            fwrite(&b, sizeof(Book), 1, fb);
            break;
        }
    }
    fclose(fb);
    if (!bFound) { printf("[Error] Book record parameter completely unmatched.\\n"); return; }

    // 4. Record safe system metrics transaction history entry
    IssueRecord rec;
    rec.studentID = sID;
    rec.bookID = bID;
    rec.issueEpoch = (long int)time(NULL);
    rec.dueEpoch = rec.issueEpoch + (LOAN_PERIOD_DAYS * 24 * 3600); // Compute targeted relative offset timestamp
    rec.isReturned = 0;

    FILE *fi = fopen(ISSUE_FILE, "ab");
    if (fi) {
        fwrite(&rec, sizeof(IssueRecord), 1, fi);
        fclose(fi);
    }

    char dStr[20];
    getCurrentDateStr(dStr, rec.dueEpoch);
    printf("\\n[Success] Material issued successfully. Return allocation threshold locked until: %s\\n", dStr);
}

void returnBook() {
    int sID, bID;
    printf("\\n--- LOG TRANSACTION: REVERSE CHECKIN RETURN INBOUND ENTRY ---\\n");
    printf("Enter Borrowing Student ID: "); scanf("%d", &sID); getchar();
    printf("Enter Returning Book ID   : "); scanf("%d", &bID); getchar();

    FILE *fi = fopen(ISSUE_FILE, "rb+");
    if (!fi) { printf("[Error] Core checkout matrix missing.\\n"); return; }

    IssueRecord r;
    int found = 0;
    long int currentEpoch = (long int)time(NULL);

    while (fread(&r, sizeof(IssueRecord), 1, fi)) {
        if (r.studentID == sID && r.bookID == bID && !r.isReturned) {
            found = 1;
            r.isReturned = 1;

            // Roll entry updates back inline 
            fseek(fi, -((long int)sizeof(IssueRecord)), SEEK_CUR);
            fwrite(&r, sizeof(IssueRecord), 1, fi);

            // Increment back quantities into central catalog stores
            FILE *fb = fopen(BOOK_FILE, "rb+");
            if (fb) {
                Book b;
                while (fread(&b, sizeof(Book), 1, fb)) {
                    if (b.bookID == bID) {
                        b.quantity++;
                        fseek(fb, -((long int)sizeof(Book)), SEEK_CUR);
                        fwrite(&b, sizeof(Book), 1, fb);
                        break;
                    }
                }
                fclose(fb);
            }

            // Calculate overdue durations relative to epoch differences
            double fineValue = 0.0;
            long int overdueDays = getDaysBetween(r.dueEpoch, currentEpoch);
            if (overdueDays > 0) {
                fineValue = overdueDays * FINE_PER_DAY;
            }

            printf("\\n=========================================\\n");
            printf("       BOOK RETURN INVOICE RECEIPT       \\n");
            printf("=========================================\\n");
            printf(" Student ID      : %d\\n", sID);
            printf(" Material Asset  : Book #%d\\n", bID);
            printf(" Overdue Duration: %ld Days\\n", overdueDays > 0 ? overdueDays : 0);
            printf(" Calculated Fine : %.2f BDT\\n", fineValue);
            printf("=========================================\\n");
            printf(" TRANSACTION STATE: [PROCESSED CLEARED]\\n");
            break;
        }
    }
    fclose(fi);
    if (!found) printf("[Error] Active validation profile not located for specified parameter set.\\n");
}

void viewIssuedBooks() {
    FILE *fi = fopen(ISSUE_FILE, "rb");
    if (!fi) { printf("\\n[Notice] No active distribution lines found.\\n"); return; }

    IssueRecord r;
    char issueStr[20], dueStr[20];
    long int now = (long int)time(NULL);

    printf("\\n=========================================== ACTIVE LEDGER MONITOR ===========================================\\n");
    printf("%-12s %-10s %-15s %-15s %-10s\\n", "Student ID", "Book ID", "Issue Date", "Due Date", "Fine Status");
    printf("-------------------------------------------------------------------------------------------------------------\\n");
    
    while (fread(&r, sizeof(IssueRecord), 1, fi)) {
        if (!r.isReturned) {
            getCurrentDateStr(issueStr, r.issueEpoch);
            getCurrentDateStr(dueStr, r.dueEpoch);
            long int delay = getDaysBetween(r.dueEpoch, now);
            double currentFine = (delay > 0) ? (delay * FINE_PER_DAY) : 0.0;

            printf("%-12d %-10d %-15s %-15s %-.2f BDT\\n", 
                   r.studentID, r.bookID, issueStr, dueStr, currentFine);
        }
    }
    printf("=============================================================================================================\\n");
    fclose(fi);
}

void inventoryReport() {
    FILE *f = fopen(BOOK_FILE, "rb");
    int totalVolumes = 0;
    int distinctiveTitles = 0;

    if (f) {
        Book b;
        while (fread(&b, sizeof(Book), 1, f)) {
            distinctiveTitles++;
            totalVolumes += b.quantity;
        }
        fclose(f);
    }

    FILE *fi = fopen(ISSUE_FILE, "rb");
    int outCirculation = 0;
    if (fi) {
        IssueRecord r;
        while (fread(&r, sizeof(IssueRecord), 1, fi)) {
            if (!r.isReturned) outCirculation++;
        }
        fclose(fi);
    }

    printf("\\n================================== CORE AUDIT METRICS REPORT ==================================\\n");
    printf("  Distinct Catalog Entries Logged: %d Titles\\n", distinctiveTitles);
    printf("  In-House Available Stock Units : %d Copies\\n", totalVolumes);
    printf("  Active External Outbound Loans : %d Outstanding Copies Checked Out\\n", outCirculation);
    printf("  Total Aggregated Asset Mass    : %d Items\\n", totalVolumes + outCirculation);
    printf("================================================================================================\\n");
}

// Utility Architecture Components
void getCurrentDateStr(char *dest, long int epoch) {
    time_t t = (time_t)epoch;
    struct tm *info = localtime(&t);
    strftime(dest, 20, "%Y-%m-%d", info);
}

long int getDaysBetween(long int start, long int end) {
    if (end <= start) return 0;
    long int diffSec = end - start;
    return diffSec / (24 * 3600);
}
`
  }
];
