// Array of questions grouped by category (20 questions each)

const questions = [
  {
    category: "dsa",
    questions: [
      {
        question: "Which data structure uses FIFO principle?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: 1,
      },
      {
        question: "What is the time complexity of binary search on a sorted array?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a self-balancing binary search tree?",
        options: ["BST", "AVL Tree", "Linked List", "Heap"],
        correctAnswer: 1,
      },
      {
        question: "In a max-heap, the largest element is located at:",
        options: ["Root", "Leaf", "Left child", "Right child"],
        correctAnswer: 0,
      },
      {
        question: "Which sorting algorithm is stable?",
        options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is used for implementing recursion?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correctAnswer: 1,
      },
      {
        question: "What is the worst-case time complexity of linear search?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswer: 1,
      },
      {
        question: "Which graph traversal uses a queue?",
        options: ["DFS", "BFS", "Inorder", "Preorder"],
        correctAnswer: 1,
      },
      {
        question: "Which of these is NOT a hashing technique?",
        options: ["Chaining", "Open Addressing", "Binary Search", "Double Hashing"],
        correctAnswer: 2,
      },
      {
        question: "What is the height of a balanced binary tree with n nodes?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correctAnswer: 1,
      },
      {
        question: "Which algorithm is used to find the shortest path in a weighted graph?",
        options: ["Dijkstra's Algorithm", "DFS", "BFS", "Prim's Algorithm"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is used in a LRU cache implementation?",
        options: ["Stack", "Queue", "HashMap + Doubly Linked List", "Heap"],
        correctAnswer: 2,
      },
      {
        question: "Which is the best-case time complexity of Quick Sort?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a divide-and-conquer algorithm?",
        options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Linear Search"],
        correctAnswer: 0,
      },
      {
        question: "A complete binary tree of height h has maximum number of nodes equal to:",
        options: ["2^h - 1", "2^(h+1) - 1", "h^2", "2^h"],
        correctAnswer: 1,
      },
      {
        question: "Which of these is NOT a linear data structure?",
        options: ["Stack", "Queue", "Tree", "Array"],
        correctAnswer: 2,
      },
      {
        question: "What is the average case time complexity of searching in a hash table?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswer: 0,
      },
      {
        question: "Which algorithm is used for cycle detection in a graph?",
        options: ["Floyd’s Algorithm", "Dijkstra", "Kruskal", "Prim"],
        correctAnswer: 0,
      },
      {
        question: "Which of these sorting algorithms has the worst-case time complexity of O(n^2)?",
        options: ["Merge Sort", "Quick Sort", "Heap Sort", "Bubble Sort"],
        correctAnswer: 3,
      },
      {
        question: "In a min-heap, the minimum element is at:",
        options: ["Root", "Leaf", "Left child", "Right child"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "operating systems",
    questions: [
      {
        question: "Which of these is a function of an OS?",
        options: ["Memory Management", "Data Entry", "HTML Rendering", "Database Queries"],
        correctAnswer: 0,
      },
      {
        question: "What is a process in an OS?",
        options: ["A program in execution", "A set of instructions", "A file", "A thread"],
        correctAnswer: 0,
      },
      {
        question: "Which scheduling algorithm may cause starvation?",
        options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
        correctAnswer: 1,
      },
      {
        question: "Which memory is the fastest?",
        options: ["RAM", "Cache", "Hard Disk", "ROM"],
        correctAnswer: 1,
      },
      {
        question: "What does a semaphore do?",
        options: ["Manage memory", "Synchronize processes", "Execute threads", "Schedule CPU"],
        correctAnswer: 1,
      },
      {
        question: "Which is a non-preemptive scheduling algorithm?",
        options: ["FCFS", "Round Robin", "SJF Preemptive", "Priority Preemptive"],
        correctAnswer: 0,
      },
      {
        question: "What is thrashing in OS?",
        options: ["High CPU usage", "Excessive paging", "Deadlock", "Memory leak"],
        correctAnswer: 1,
      },
      {
        question: "Which condition leads to deadlock?",
        options: ["Mutual Exclusion", "Hold & Wait", "No Preemption", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Virtual memory uses:",
        options: ["Registers", "Cache", "Disk Storage", "ROM"],
        correctAnswer: 2,
      },
      {
        question: "Which algorithm is used for page replacement?",
        options: ["FIFO", "LRU", "Optimal", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "What is the role of the kernel?",
        options: ["Hardware abstraction", "User Interface", "File Editing", "Web Browsing"],
        correctAnswer: 0,
      },
      {
        question: "In Round Robin scheduling, the time quantum is:",
        options: ["CPU Burst Time", "Time Slice", "Memory Allocation", "Process ID"],
        correctAnswer: 1,
      },
      {
        question: "Which is an example of non-volatile memory?",
        options: ["RAM", "Cache", "ROM", "Registers"],
        correctAnswer: 2,
      },
      {
        question: "Which of these is a type of OS?",
        options: ["Batch", "Real-time", "Distributed", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "Thrashing can be reduced by:",
        options: ["Increasing RAM", "Decreasing CPU", "Using SSD", "Increasing Page Faults"],
        correctAnswer: 0,
      },
      {
        question: "Which OS concept allows multiple processes to share a CPU?",
        options: ["Multiprogramming", "Multithreading", "Virtual Memory", "Cache Memory"],
        correctAnswer: 0,
      },
      {
        question: "Which file system is used in Linux?",
        options: ["FAT32", "NTFS", "EXT4", "HFS+"],
        correctAnswer: 2,
      },
      {
        question: "Which state does a process enter when waiting for a resource?",
        options: ["Ready", "Waiting", "Running", "Terminated"],
        correctAnswer: 1,
      },
      {
        question: "What is a context switch?",
        options: ["Switching processes", "Switching threads", "Memory allocation", "Disk I/O"],
        correctAnswer: 0,
      },
      {
        question: "Which is an example of a preemptive scheduling algorithm?",
        options: ["FCFS", "SJF Non-preemptive", "Round Robin", "Priority Non-preemptive"],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "dbms",
    questions: [
      {
        question: "What does DBMS stand for?",
        options: ["Data Block Management System", "Database Management System", "Data Binary Management System", "Dynamic Base Management System"],
        correctAnswer: 1,
      },
      {
        question: "Which is a relational database?",
        options: ["MongoDB", "MySQL", "Cassandra", "Redis"],
        correctAnswer: 1,
      },
      {
        question: "What is a primary key?",
        options: ["Unique identifier for a record", "Foreign key", "Index", "Attribute"],
        correctAnswer: 0,
      },
      {
        question: "Which SQL command is used to remove a table?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        correctAnswer: 1,
      },
      {
        question: "Which normal form eliminates transitive dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correctAnswer: 2,
      },
      {
        question: "Which SQL command is used to retrieve data?",
        options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
        correctAnswer: 0,
      },
      {
        question: "Which type of relationship exists when one student enrolls in many courses?",
        options: ["One-to-One", "One-to-Many", "Many-to-Many", "None of the above"],
        correctAnswer: 2,
      },
      {
        question: "What is a foreign key?",
        options: ["Key from another table", "Primary key", "Index", "Constraint"],
        correctAnswer: 0,
      },
      {
        question: "Which operation is used to combine rows from two tables?",
        options: ["JOIN", "UNION", "MERGE", "LINK"],
        correctAnswer: 0,
      },
      {
        question: "Which index type is faster for exact match queries?",
        options: ["Hash Index", "B-Tree Index", "Bitmap Index", "Full-text Index"],
        correctAnswer: 0,
      },
      {
        question: "Which SQL command updates existing records?",
        options: ["UPDATE", "INSERT", "MODIFY", "ALTER"],
        correctAnswer: 0,
      },
      {
        question: "Which type of DBMS stores data in key-value pairs?",
        options: ["Relational", "Document", "NoSQL", "Hierarchical"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a transaction property in DBMS?",
        options: ["ACID", "CRUD", "DML", "DDL"],
        correctAnswer: 0,
      },
      {
        question: "Which SQL command removes all rows from a table without dropping it?",
        options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
        correctAnswer: 1,
      },
      {
        question: "What is the default isolation level in most databases?",
        options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
        correctAnswer: 1,
      },
      {
        question: "Which constraint prevents duplicate values in a column?",
        options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "CHECK"],
        correctAnswer: 2,
      },
      {
        question: "Which command is used to create a new database?",
        options: ["CREATE DATABASE", "CREATE TABLE", "INSERT DATABASE", "NEW DATABASE"],
        correctAnswer: 0,
      },
      {
        question: "Which type of join returns all records when there is a match in either table?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        correctAnswer: 3,
      },
      {
        question: "Which SQL keyword is used to sort the result set?",
        options: ["ORDER BY", "GROUP BY", "SORT", "FILTER"],
        correctAnswer: 0,
      },
      {
        question: "Which SQL command is used to remove a column from a table?",
        options: ["DROP COLUMN", "DELETE COLUMN", "REMOVE COLUMN", "ALTER COLUMN"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "aptitude",
    questions: [
      {
        question: "If the ratio of ages of A and B is 3:4 and B is 24 years old, then A’s age is:",
        options: ["16", "18", "20", "22"],
        correctAnswer: 1,
      },
      {
        question: "What is the next number in the series: 2, 6, 12, 20, ?",
        options: ["28", "30", "32", "36"],
        correctAnswer: 0,
      },
      {
        question: "A train travels 60 km in 1 hour 20 minutes. Its speed is:",
        options: ["40 km/h", "45 km/h", "50 km/h", "55 km/h"],
        correctAnswer: 2,
      },
      {
        question: "If x + y = 10 and x - y = 4, then x = ?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 1,
      },
      {
        question: "The average of 5, 8, 12, 15, 20 is:",
        options: ["12", "12.5", "13", "13.5"],
        correctAnswer: 1,
      },
      {
        question: "If 5x = 25, then x = ?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
      },
      {
        question: "What is 15% of 200?",
        options: ["25", "30", "35", "40"],
        correctAnswer: 1,
      },
      {
        question: "If a person walks 4 km north and then 3 km east, the distance from start point is:",
        options: ["5 km", "6 km", "7 km", "8 km"],
        correctAnswer: 2,
      },
      {
        question: "A bag contains 5 red, 6 blue and 9 green balls. Probability of picking a red ball is:",
        options: ["5/20", "1/4", "5/19", "1/5"],
        correctAnswer: 2,
      },
      {
        question: "Solve: 3 + 6 ÷ 2 × (1 + 2) = ?",
        options: ["12", "15", "18", "21"],
        correctAnswer: 2,
      },
      {
        question: "If 2 pencils cost Rs. 5, cost of 12 pencils is:",
        options: ["Rs. 25", "Rs. 30", "Rs. 28", "Rs. 32"],
        correctAnswer: 1,
      },
      {
        question: "If a number is increased by 20% and then decreased by 20%, the net change is:",
        options: ["0%", "-4%", "4%", "-2%"],
        correctAnswer: 1,
      },
      {
        question: "The compound interest on Rs. 1000 at 10% p.a. for 2 years is:",
        options: ["Rs. 100", "Rs. 200", "Rs. 210", "Rs. 220"],
        correctAnswer: 2,
      },
      {
        question: "If the simple interest for 2 years at 5% p.a. on a sum is Rs. 100, the principal is:",
        options: ["Rs. 900", "Rs. 1000", "Rs. 1100", "Rs. 1200"],
        correctAnswer: 1,
      },
      {
        question: "Find the missing number: 5, 10, 20, 40, ?",
        options: ["70", "75", "80", "80"],
        correctAnswer: 3,
      },
      {
        question: "If the perimeter of a square is 40 cm, its area is:",
        options: ["100 cm²", "120 cm²", "150 cm²", "200 cm²"],
        correctAnswer: 0,
      },
      {
        question: "If a car covers 240 km in 4 hours, speed is:",
        options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
        correctAnswer: 2,
      },
      {
        question: "A cube has a volume of 64 cm³. Its surface area is:",
        options: ["64 cm²", "96 cm²", "128 cm²", "256 cm²"],
        correctAnswer: 2,
      },
      {
        question: "If 5 workers can complete a task in 20 days, 10 workers will take:",
        options: ["10 days", "12 days", "8 days", "15 days"],
        correctAnswer: 2,
      },
      {
        question: "A number when divided by 5 leaves a remainder 2. If the number is 12, remainder when divided by 3 is:",
        options: ["0", "1", "2", "3"],
        correctAnswer: 1,
      },
    ],
  },
];
