
Project Owner:
==============

My name is Anthony Nwankwo and this is the Readme.md file for my GitHub,
which is a markdown document. It contains the latest update to files in
my project portfolio

Overview/description of the project
===================================

This web site is dedicated to hosting my tutorials
on how to integrate multiple programming languages to achieve technical
solutions to computational tasks in various fields of engineering and
science. All the tutorials require site registration. Primary Languages
covered are R, Python, C/C++, JavaScript (as in Node.js, React,
WebPack). 

Technologies Used: 
==================

HTML, CSS, JS files




Ideas for future improvement
============================

-	Implement a server authentication such that only paid users are allowed access 
	to the detailed parts of the tutorials. When a user first gets to the site, 
	the free sections of the tutorial will be available while the button / links 
	to other sections are grayed out until the user is authenticated
-	Create several exercises that offers the user some multiple choice answers 
	to test acquired skills 
-	Implement an automatic logout scheme that monitors for prolonged idle time.
	This will log out any user who stays idle for a maximum period of time. 


User Stories
============

-   As a user, paying to view these tutorials, I want to be able to see
    how I can design solution models that are housed in functional
    components which I can call from anywhere within my app

-   I want to be able to have links to navigate to outside language
    resourses from within the app. I also should be able to navigate
    back to the main app when I am done without being logged out

-   As an online user, I want to be able to see some example input forms
    where I can enter variable values and click a button to compute and
    display the result




Overview of the R Language:
===========================

The Development of the R Language was primarily motivated by the need to
develop a programming language that offers high productivity within the
shortest possible time. The language has since expanded from handling
statiscal analysis to data science which had been dominated by the
Python Language. R is holding its own in data filtering and
visualization. We shall start with looking at a simple example:

### R as a mathematical Calculator

    x <- 4    # define a variable x, and assign a value to it
    y <- 5    # define a variable y, and assign a value to it
    z <- x*y  # perform a multiplication and assign the result to variable z
    cat(z)    # print out the result to the console

    20

    x <- 4    
    y <- 5    
    z <- x^y  # x raised to power of y 
    cat(z)    # print out the result to the console

    1024

    x <- 4              
    y <- 5              
    z <- sqrt(x^2+y^2)  # Pythagoras theorem
    cat(z)              # print out the result to the console

    6.403124

### Handling Arrays in R

    x <- 1:10           # array 1 to 10
    cat(1)              # first element - R indexing starts at 1

    1

    y <- c(1,2,3,4,5,6,7,8,9.1,10) 
    z <- x == y         # all TRUE except the 9th item 
    cat(z)              # print out the result to the console

    TRUE TRUE TRUE TRUE TRUE TRUE TRUE TRUE FALSE TRUE


Other section headers ... work in progress 
===================================

### Overview of the Python Language:

### Python as a mathematical Calculator

### Handling Arrays in Python
