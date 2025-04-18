// Array of questions grouped by category (20 questions each)

const questions = [
    {
      category: "programming",
      questions: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a correct way to declare a variable in JavaScript?",
          options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
          correctAnswer: 0,
        },
        {
          question: "How do you write comment in Python?",
          options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
          correctAnswer: 1,
        },
        {
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
          correctAnswer: 0,
        },
        {
          question: "In JavaScript, how do you create a function?",
          options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'typeof' operator do in JavaScript?",
          options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
          correctAnswer: 0,
        },
        {
          question: "In C, how do you define a function?",
          options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is a characteristic of Python?",
          options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
          correctAnswer: 1,
        },
        {
          question: "Which language is used for Android development?",
          options: ["Python", "Java", "JavaScript", "C++"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'forEach()' method in JavaScript?",
          options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'return' keyword do in a function?",
          options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a semantic HTML element?",
          options: ["<header>", "<footer>", "<div>", "<article>"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary purpose of a 'for' loop in programming?",
          options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
          correctAnswer: 0,
        },
        {
          question: "Which data structure is ideal for LIFO (Last In First Out)?",
          options: ["Queue", "Stack", "Linked list", "Array"],
          correctAnswer: 1,
        },
        {
          question: "Which command is used in Git to store changes in the repository?",
          options: ["git commit", "git push", "git pull", "git add"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'map()' function do in JavaScript?",
          options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
          correctAnswer: 2,
        },
        {
          question: "What is an IDE?",
          options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is a feature of object-oriented programming?",
          options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
          correctAnswer: 0,
        },
        {
          question: "What does SQL stand for?",
          options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
          correctAnswer: 3,
        },
        {
          question: "Which of these is an example of a non-relational database?",
          options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
          correctAnswer: 0,
        },
      ],
    },
  
    {
      category: "sports",
      questions: [
        {
          question: "Which country won the FIFA World Cup in 2018?",
          options: ["France", "Germany", "Brazil", "Argentina"],
          correctAnswer: 0,
        },
        {
          question: "How many players are on a basketball court for one team at a time?",
          options: ["4", "5", "6", "7"],
          correctAnswer: 1,
        },
        {
          question: "Which sport uses the term 'home run'?",
          options: ["Cricket", "Baseball", "Football", "Tennis"],
          correctAnswer: 1,
        },
        {
          question: "In tennis, what is a zero score called?",
          options: ["Nil", "Zero", "Love", "Nada"],
          correctAnswer: 2,
        },
        {
          question: "Which country hosted the 2016 Summer Olympics?",
          options: ["Japan", "China", "Brazil", "Russia"],
          correctAnswer: 2,
        },
        {
          question: "Which athlete has won the most Olympic gold medals?",
          options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Larisa Latynina"],
          correctAnswer: 1,
        },
        {
          question: "In which sport would you perform a slam dunk?",
          options: ["Volleyball", "Basketball", "Tennis", "Badminton"],
          correctAnswer: 1,
        },
        {
          question: "Which country is famous for originating the sport of cricket?",
          options: ["Australia", "India", "England", "South Africa"],
          correctAnswer: 2,
        },
        {
          question: "How many holes are in a standard round of golf?",
          options: ["9", "18", "27", "36"],
          correctAnswer: 1,
        },
        {
          question: "Which of these is NOT a Grand Slam tennis tournament?",
          options: ["Wimbledon", "US Open", "Australian Open", "Indian Open"],
          correctAnswer: 3,
        },
        {
          question: "What is the maximum score possible in a single frame of bowling?",
          options: ["10", "20", "30", "40"],
          correctAnswer: 0,
        },
        {
          question: "Which sport is associated with the term 'checkmate'?",
          options: ["Chess", "Boxing", "Fencing", "Wrestling"],
          correctAnswer: 0,
        },
        {
          question: "Which country won the first ever FIFA World Cup in 1930?",
          options: ["Brazil", "Uruguay", "Argentina", "Italy"],
          correctAnswer: 1,
        },
        {
          question: "In American football, how many points is a touchdown worth?",
          options: ["3", "6", "7", "9"],
          correctAnswer: 1,
        },
        {
          question: "Which athlete is known as 'The Greatest' in boxing?",
          options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "George Foreman"],
          correctAnswer: 1,
        },
        {
          question: "Which sport uses terms like 'birdie' and 'eagle'?",
          options: ["Badminton", "Golf", "Tennis", "Archery"],
          correctAnswer: 1,
        },
        {
          question: "How many players are there in a standard soccer team?",
          options: ["9", "10", "11", "12"],
          correctAnswer: 2,
        },
        {
          question: "Which country has won the most FIFA World Cups?",
          options: ["Germany", "Argentina", "Brazil", "Italy"],
          correctAnswer: 2,
        },
        {
          question: "In which year did the first modern Olympic Games take place?",
          options: ["1886", "1896", "1906", "1916"],
          correctAnswer: 1,
        },
        {
          question: "Which sport is associated with the term 'hat-trick'?",
          options: ["Cricket", "Tennis", "Golf", "Swimming"],
          correctAnswer: 0,
        },
      ],
    },
  
    {
      category: "mathematics",
      questions: [
        {
          question: "What is the square root of 144?",
          options: ["10", "11", "12", "13"],
          correctAnswer: 2,
        },
        {
          question: "What is 15 × 13?",
          options: ["180", "185", "195", "200"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 8³?",
          options: ["512", "216", "256", "128"],
          correctAnswer: 0,
        },
        {
          question: "What is 48 ÷ 6?",
          options: ["7", "8", "9", "10"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 3 + 5 × 4?",
          options: ["20", "22", "24", "23"],
          correctAnswer: 3,
        },
        {
          question: "What is the sum of the angles in a triangle?",
          options: ["180°", "360°", "90°", "270°"],
          correctAnswer: 0,
        },
        {
          question: "What is the perimeter of a square with a side length of 4 cm?",
          options: ["12 cm", "16 cm", "20 cm", "24 cm"],
          correctAnswer: 1,
        },
        {
          question: "What is 9 × 12?",
          options: ["105", "110", "108", "120"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 16 ÷ 4?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
        },
        {
          question: "What is 25% of 200?",
          options: ["30", "40", "50", "60"],
          correctAnswer: 2,
        },
        {
          question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
          options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 ÷ 2 + 3?",
          options: ["8", "7", "9", "6"],
          correctAnswer: 1,
        },
        {
          question: "What is the greatest common divisor (GCD) of 24 and 36?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 3,
        },
        {
          question: "What is the least common multiple (LCM) of 6 and 8?",
          options: ["24", "32", "48", "56"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 2³ × 3?",
          options: ["12", "15", "18", "24"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 × (5 + 3)?",
          options: ["80", "70", "60", "50"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 14 × 14?",
          options: ["186", "196", "206", "216"],
          correctAnswer: 1,
        },
        {
          question: "What is the sum of the first 10 positive integers?",
          options: ["50", "55", "60", "65"],
          correctAnswer: 1,
        },
        {
          question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
          options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 50% of 80?",
          options: ["30", "35", "40", "45"],
          correctAnswer: 2,
        },
      ],
    },
  
    {
      category: "entertainment",
      questions: [
        {
          question: "Who won the Academy Award for Best Actor in 2022?",
          options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
          correctAnswer: 1,
        },
        {
          question: "Which movie won the Academy Award for Best Picture in 2021?",
          options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
          correctAnswer: 3,
        },
        {
          question: "Who played the character of Jack Dawson in the movie Titanic?",
          options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
          correctAnswer: 0,
        },
        {
          question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
          options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
          correctAnswer: 1,
        },
        {
          question: "Who is known as the 'King of Pop'?",
          options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
          correctAnswer: 0,
        },
        {
          question: "Which superhero is known for saying, 'I am Iron Man'?",
          options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
          correctAnswer: 3,
        },
        {
          question: "Which movie franchise includes a character named Luke Skywalker?",
          options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
          correctAnswer: 1,
        },
        {
          question: "Who played the character of Hermione Granger in the Harry Potter film series?",
          options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
          correctAnswer: 0,
        },
        {
          question: "Who directed the movie 'Inception'?",
          options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
          correctAnswer: 2,
        },
        {
          question: "Which artist released the album 'Lover' in 2019?",
          options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
          correctAnswer: 1,
        },
        {
          question: "What was the first video game to feature Mario?",
          options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
          correctAnswer: 2,
        },
        {
          question: "Which movie features the famous line, 'Here's looking at you, kid'?",
          options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
          correctAnswer: 0,
        },
        {
          question: "Who created the comic book character Spider-Man?",
          options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
          correctAnswer: 1,
        },
        {
          question: "In which movie did Heath Ledger portray the Joker?",
          options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
          correctAnswer: 0,
        },
        {
          question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
          options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
          correctAnswer: 2,
        },
        {
          question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
          options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
          correctAnswer: 2,
        },
        {
          question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
          options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
          correctAnswer: 2,
        },
        {
          question: "Which Disney animated film features the song 'A Whole New World'?",
          options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
          correctAnswer: 1,
        },
        {
          question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
          options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
          correctAnswer: 3,
        },
        {
          question: "Who sang the hit song 'Shape of You'?",
          options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
          correctAnswer: 3,
        },
      ],
    },
  ];